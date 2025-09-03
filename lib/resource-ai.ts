"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import Fuse from "fuse.js";

// Alias registry generated from your A–Z list
import { ALIAS_REGISTRY } from "@/lib/aliases/alias-registry";

// Optional local fallbacks if the live A–Z page can’t be fetched
import { resourceDatabase } from "./resource-database";
import { libraryResourceDatabase } from "./library-resources-database";

/* =========================
   Zod runtime validation
========================= */
const AiItemSchema = z.object({
  name: z.string(), // platform/provider/database name (NOT book titles)
  relevanceScore: z.number().min(0).max(100),
  matchReason: z.string().optional(),
});
const AiArraySchema = z.array(AiItemSchema).max(12);
type AiItem = z.infer<typeof AiItemSchema>;
type AiArray = z.infer<typeof AiArraySchema>;

/* ======================================
   Gemini: force strict JSON structure
====================================== */
const geminiArraySchema = {
  type: "ARRAY",
  items: {
    type: "OBJECT",
    properties: {
      name: { type: "STRING" },
      relevanceScore: { type: "NUMBER" },
      matchReason: { type: "STRING" },
    },
    required: ["name", "relevanceScore"],
  },
} as const;

/* ===================
   Tunables & Helpers
=================== */
const RELEVANCE_THRESHOLD = 80;  // include ALL ≥ 80 (after coupling/rerank)
const MIN_ACCEPT_SIM = 0.45;     // drop very weak matches unless token overlap saves them
const TOKEN_OVERLAP_FLOOR = 0.25;
const INJECT_MAX_PER_INTENT = 2; // at most 2 injects per requested format
const INJECT_BASE_SCORE = 84;    // score used for injected coverage

const AZ_URL = "https://libguides.byui.edu/az/databases";

type FormatIntent = "books" | "articles" | "news" | "audio" | "video" | "images";

function getGeminiClient(apiKey?: string) {
  const key = apiKey || process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY is not available");
  return new GoogleGenerativeAI(key);
}

/** Normalize for matching (lowercase, strip diacritics, unify punctuation). */
function norm(s: string) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // diacritics
    .replace(/[\u2019\u2018’‘]/g, "'") // apostrophes
    .replace(/[\u2013\u2014–—]/g, "-") // dashes
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9' -]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripTags(s: string) {
  return s.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
}
function decodeHtml(s: string) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

/** Vendor/format toggles that help equivalence (don’t steer the LLM). */
function vendorToggles(name: string) {
  const out = new Set<string>();
  const n = name;

  // Drop common vendor prefixes/suffixes
  out.add(n.replace(/\s*-\s*EBSCOhost\s*$/i, "").trim());
  out.add(n.replace(/\s*\(EBSCO\)\s*$/i, "").trim());
  out.add(n.replace(/^\s*ProQuest\s+/i, "").trim());
  out.add(n.replace(/^\s*Gale OneFile:\s*/i, "").trim());
  out.add(n.replace(/^\s*Alexander Street\s+/i, "").trim());

  // Ampersand/“and” swap
  out.add(n.replace(/ & /g, " and ").trim());
  out.add(n.replace(/\band\b/gi, " & ").trim());

  // Punctuation squashing
  out.add(n.replace(/\s*:\s*/g, " ").replace(/\s*-\s*/g, " ").trim());

  return Array.from(out).filter(v => v && v !== name);
}

/** Alias forms (normalized), including curated registry. */
function aliasForms(displayName: string): string[] {
  const out = new Set<string>();
  const baseNorm = norm(displayName);
  out.add(baseNorm);

  // Remove [brackets] and (parentheses)
  const noBrackets = norm(displayName.replace(/\s*\[[^\]]*\]\s*/g, " ").replace(/\s*\([^)]*\)\s*/g, " "));
  if (noBrackets && noBrackets !== baseNorm) out.add(noBrackets);

  // Vendor toggles & punctuation variants (then normalize)
  for (const v of vendorToggles(displayName)) {
    const nv = norm(v);
    if (nv) out.add(nv);
  }

  // Curated registry expansions
  const reg = (ALIAS_REGISTRY as Record<string, string[]>)[baseNorm];
  if (reg && Array.isArray(reg)) {
    for (const a of reg) {
      const na = norm(a);
      if (na) out.add(na);
    }
  }

  return Array.from(out).slice(0, 24);
}

/** Token helpers for overlap checks. */
function tokens(s: string): Set<string> {
  return new Set(norm(s).split(" ").filter(Boolean));
}
function jaccard(a: Set<string>, b: Set<string>): number {
  const inter = new Set([...a].filter(x => b.has(x)));
  const uni = new Set([...a, ...b]);
  return uni.size ? inter.size / uni.size : 0;
}

/** Extract JSON array robustly from potential code-fenced output. */
function extractJsonArray(text: string): string | null {
  if (!text) return null;
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced?.[1]) text = fenced[1];
  text = text
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    .replace(/[\u2018\u2019\u201B]/g, "'")
    .replace(/,\s*([}\]])/g, "$1")
    .trim();
  if (/^\s*\[.*\]\s*$/s.test(text)) return text;
  const first = text.indexOf("[");
  const last = text.lastIndexOf("]");
  if (first !== -1 && last !== -1 && last > first) return text.slice(first, last + 1);
  return null;
}

/** Strict parse with salvage. */
function safeParseResults(raw: string): AiArray | [] {
  try {
    return AiArraySchema.parse(JSON.parse(raw));
  } catch (e1) {
    const objectMatches = raw.match(/\{[\s\S]*?\}/g) || [];
    const valid: AiItem[] = [];
    for (let objStr of objectMatches) {
      objStr = objStr
        .replace(/"\s*\n\s*"/g, '",\n"')
        .replace(/,\s*}/g, "}")
        .replace(/: "([^"]*)\n/g, ': "$1"\n')
        .replace(
          /("[^"]*":\s*)([^",\}\n]+)(?=,|})/g,
          (m, key, val) => (!/^".*"$/.test(val.trim()) ? `${key}"${val.trim()}"` : m)
        );
      try {
        const candidate = JSON.parse(objStr);
        const validated = AiItemSchema.parse(candidate);
        valid.push(validated);
      } catch { /* skip */ }
    }
    if (valid.length > 0) return valid.slice(0, 12);
    console.error("[AI parse error unrecoverable]", e1, raw);
    return [];
  }
}

/** Fetch BYU–Idaho A–Z list (soft fail; we’ll fallback to local arrays). */
async function fetchAtoZList(): Promise<Array<{ name: string; url?: string; description?: string }>> {
  try {
    const res = await fetch(AZ_URL, { method: "GET", headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`A–Z fetch failed: ${res.status}`);
    const html = await res.text();

    const items: Array<{ name: string; url?: string; description?: string }> = [];

    // Known LibGuides patterns
    const patterns: RegExp[] = [
      /<a[^>]+class="[^"]*az-result-title[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,
      /<a[^>]+class="[^"]*s-lg-az-result-title[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,
      /<a[^>]+class="[^"]*s-lg-az-result-title-link[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,
    ];

    let any = false;
    for (const re of patterns) {
      let m: RegExpExecArray | null;
      while ((m = re.exec(html)) !== null) {
        any = true;
        const url = decodeHtml(m[1]).trim();
        const name = stripTags(decodeHtml(m[2])).trim();
        if (!name) continue;
        const window = html.slice(Math.max(0, m.index - 500), Math.min(html.length, re.lastIndex + 500));
        const d =
          window.match(/<div[^>]*class="[^"]*(az-result-description|s-lg-az-result-description)[^"]*"[^>]*>([\s\S]*?)<\/div>/i)?.[2] ??
          window.match(/<div[^>]*class="[^"]*(s-lg-az-description|az-description)[^"]*"[^>]*>([\s\S]*?)<\/div>/i)?.[2];
        const description = d ? stripTags(decodeHtml(d)).trim() : undefined;
        items.push({ name, url, description });
      }
    }

    // Last resort: generic anchors in the A–Z block
    if (!any) {
      const containerMatch = html.match(/<div[^>]*id="s-lg-az-content"[^>]*>([\s\S]*?)<\/div>/i);
      const block = containerMatch ? containerMatch[1] : html;
      const re = /<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
      let m: RegExpExecArray | null;
      while ((m = re.exec(block)) !== null) {
        const url = decodeHtml(m[1]).trim();
        const name = stripTags(decodeHtml(m[2])).trim();
        if (!name) continue;
        if (/^(Next|Prev|Filter|Subject|Type|A–Z|A-Z)$/i.test(name)) continue;
        items.push({ name, url });
      }
    }

    // Dedup
    const seen = new Set<string>();
    const deduped = items.filter((it) => {
      const key = it.name.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return deduped; // may be []
  } catch (err) {
    console.warn("[A–Z fetch exception, will fall back]", err);
    return [];
  }
}

/* ============
   Intent & Type classifiers (used only for reranking; never steer the LLM)
=========== */

/** Detect one or more format intents from the query. */
function detectIntents(q: string): Set<FormatIntent> {
  const intents = new Set<FormatIntent>();
  const s = q.toLowerCase();

  if (/\b(e-?book|textbooks?|books?)\b/.test(s)) intents.add("books");
  if (/\b(article|peer[- ]?review|journal|journals|literature review|systematic review|research)\b/.test(s)) intents.add("articles");
  if (/\b(news|newspapers?|press|headline|current events?)\b/.test(s)) intents.add("news");
  if (/\b(audio|music|recordings?|sound|podcasts?)\b/.test(s)) intents.add("audio");
  if (/\b(video|videos|film|documentar(y|ies)|watch|stream)\b/.test(s) || /\bopera\b/.test(s)) intents.add("video");
  if (/\b(images?|photos?|photographs?|pictures?|artwork|art images?)\b/.test(s)) intents.add("images");

  return intents;
}

/** Classify a resource from its A–Z name/description. */
function classifyResource(name: string, description?: string) {
  const n = norm(name);
  const d = norm(description || "");

  const isEbook =
    /\b(e-?books?|book collection|books online|ebook central|gale ebooks|ebsco ebooks|o'reilly|safari books|oxford scholarship|springer ebooks|wiley ebooks|cambridge books|muse books|project muse books)\b/.test(n) ||
    /\b(e-?books?|book collection)\b/.test(d);

  const isDissertations = /\b(dissertations?|theses|pqdt)\b/.test(n) || /\b(dissertations?|theses|pqdt)\b/.test(d);

  const isVideo =
    /\b(video|videos|film|streaming video)\b/.test(n) ||
    /\b(opera in video|academic video online|kanopy|medici\.?tv)\b/.test(n);

  const isAudio =
    /\b(audio|music|streaming audio|sound recordings?)\b/.test(n) ||
    /\b(naxos music library)\b/.test(n);

  const isImages =
    /\b(images?|photos?|photographs?|artstor|jstor images|image collection|picture library)\b/.test(n) ||
    /\b(images?|photos?|photographs?)\b/.test(d);

  const isNews =
    /\b(news|newspapers?|press|headline)\b/.test(n) ||
    /\b(nexis|factiva|newsbank|newsstream)\b/.test(n) ||
    /\b(news|newspapers?|press|headline)\b/.test(d);

  // Reasonable “article database” signal (broad; not exclusive)
  const isArticleIndex =
    (/\b(abstracts|index|database|journals?)\b/.test(n) || /\b(abstracts|index|journals?)\b/.test(d)) &&
    !isEbook && !isDissertations && !isVideo && !isAudio && !isImages && !isNews;

  // Summaries/digests like getAbstract
  const isSummaryDigest = /\b(getabstract|book summaries?)\b/.test(n) || /\b(book summaries?)\b/.test(d);

  return { isEbook, isDissertations, isVideo, isAudio, isImages, isNews, isArticleIndex, isSummaryDigest };
}

/** Format-aware reranking that ONLY reorders/adjusts scores; never filters. */
function rerankByIntent(
  items: Array<{ name: string; description?: string; relevanceScore: number; _sim?: number }>,
  intents: Set<FormatIntent>,
  azList: Array<{ name: string; url?: string; description?: string }>
) {
  if (intents.size === 0) return items;

  let scored = items.map(m => {
    const c = classifyResource(m.name, m.description);
    let factor = 1.0;

    // apply all intents multiplicatively but gently; cap to avoid extremes
    for (const intent of intents) {
      switch (intent) {
        case "books":
          if (c.isEbook) factor *= 1.12;
          if (c.isDissertations) factor *= 0.70;
          if (c.isVideo) factor *= 0.88;
          if (c.isAudio) factor *= 0.90;
          if (c.isSummaryDigest) factor *= 0.80;
          break;
        case "articles":
          if (c.isArticleIndex) factor *= 1.10;
          if (c.isDissertations) factor *= 0.85;
          if (c.isEbook) factor *= 0.93;
          if (c.isVideo) factor *= 0.90;
          if (c.isAudio) factor *= 0.90;
          if (c.isSummaryDigest) factor *= 0.90;
          break;
        case "news":
          if (c.isNews) factor *= 1.15;
          if (c.isDissertations) factor *= 0.75;
          if (c.isEbook) factor *= 0.90;
          break;
        case "audio":
          if (c.isAudio) factor *= 1.15;
          if (c.isVideo) factor *= 0.95;
          if (!c.isAudio) factor *= 0.92;
          break;
        case "video":
          if (c.isVideo) factor *= 1.15;
          if (c.isAudio) factor *= 0.95;
          if (!c.isVideo) factor *= 0.92;
          break;
        case "images":
          if (c.isImages) factor *= 1.15;
          if (!c.isImages) factor *= 0.92;
          break;
      }
    }

    // cap factor
    factor = Math.min(1.30, Math.max(0.70, factor));
    const adjusted = Math.max(0, Math.min(100, Math.round(m.relevanceScore * factor)));
    return { ...m, relevanceScore: adjusted };
  });

  // Coverage injection: ensure each requested intent has at least one candidate
  const have = (intent: FormatIntent) =>
    scored.some(s => {
      const c = classifyResource(s.name, s.description);
      switch (intent) {
        case "books": return c.isEbook;
        case "articles": return c.isArticleIndex;
        case "news": return c.isNews;
        case "audio": return c.isAudio;
        case "video": return c.isVideo;
        case "images": return c.isImages;
      }
    });

  const existingKeys = new Set(scored.map(s => norm(s.name)));

  for (const intent of intents) {
    if (have(intent)) continue;

    const candidates = azList.filter(z => {
      const c = classifyResource(z.name, z.description);
      switch (intent) {
        case "books": return c.isEbook;
        case "articles": return c.isArticleIndex;
        case "news": return c.isNews;
        case "audio": return c.isAudio;
        case "video": return c.isVideo;
        case "images": return c.isImages;
      }
    });

    let injected = 0;
    for (const z of candidates) {
      const key = norm(z.name);
      if (existingKeys.has(key)) continue;
      scored.push({
        name: z.name,
        description: z.description ?? "",
        relevanceScore: INJECT_BASE_SCORE,
        _sim: 0.95, // neutral-good for tie-breaks
      } as any);
      existingKeys.add(key);
      injected++;
      if (injected >= INJECT_MAX_PER_INTENT) break;
    }

    if (injected > 0) {
      console.warn(`[inject-${intent}] Added ${injected} resource(s) to cover requested format intent.`);
    }
  }

  return scored;
}

/* ===========================
   Main exported entry point
=========================== */
export async function findDatabaseResources(
  query: string,
  _searchType: "library" | "database" // not used in this LLM-first flow
) {
  const apiKey = process.env.GEMINI_API_KEY;

  try {
    // 1) LLM proposes platforms/databases from its own knowledge.
    const genAI = getGeminiClient(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
      generationConfig: {
        temperature: 0.4,
        topK: 40,
        topP: 0.8,
        maxOutputTokens: 2048,
        responseMimeType: "application/json",
        responseSchema: geminiArraySchema as unknown as any,
      },
    });

    const prompt = `You are an academic librarian.

TASK: Recommend up to 12 LIBRARY DATABASES/PLATFORMS a university library would subscribe to that best match the user's query.
- Output ONLY valid JSON (no code fences): an array of objects with:
  - name (string; provider/platform/database)
  - relevanceScore (1-100)
  - matchReason (short reason why this platform fits the query)
- Do NOT return individual book titles. Focus on subscription databases, platforms, and provider collections. Avoid generic web sources.

User Query: ${JSON.stringify(query)}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text(); // strict JSON expected

    console.log("[AI raw response]", text);

    // 2) Parse robustly
    let aiPicks: AiArray | [];
    try {
      aiPicks = AiArraySchema.parse(JSON.parse(text));
    } catch {
      const rawJson = extractJsonArray(text);
      if (!rawJson) {
        console.error("[AI parse error: no JSON array found]", text);
        return [];
      }
      aiPicks = safeParseResults(rawJson);
      if (aiPicks.length === 0) return [];
    }
    console.log("[AI parsed results]", aiPicks);

    // 3) Fetch live A–Z (soft fail), otherwise fall back to your local arrays
    let azList = await fetchAtoZList();
    if (azList.length === 0) {
      console.warn("[A–Z parse yielded 0 items] Falling back to local arrays");
      azList = [...resourceDatabase, ...libraryResourceDatabase].map((r: any) => ({
        name: r.name,
        url: r.url,
        description: r.description ?? "",
      }));
    }

    // Prepare alias index and generous fuzzy index
    const aliasIndex = new Map<string, { name: string; url?: string; description?: string }>();
    for (const z of azList) {
      for (const a of aliasForms(z.name)) {
        if (!aliasIndex.has(a)) aliasIndex.set(a, z);
      }
    }
    const azAugmented = azList.map((z) => ({ ...z, normName: norm(z.name) }));

    const fuse = new Fuse(azAugmented, {
      includeScore: true,
      threshold: 0.6, // inclusive
      ignoreLocation: true,
      keys: ["name", "normName"],
    });

    // 4) Map each AI pick to the best A–Z entry — with acceptance gates
    const userIntents = detectIntents(query);

    const matched = (aiPicks as AiArray).map((pick) => {
      const aiName = pick.name;
      const aiTokens = tokens(aiName);

      // (a) Alias/exact-ish match wins
      for (const form of aliasForms(aiName)) {
        const hit = aliasIndex.get(form);
        if (hit) {
          return {
            name: hit.name,
            url: hit.url,
            description: hit.description ?? "",
            _sim: 1,
            relevanceScore: pick.relevanceScore,
            matchReason: pick.matchReason || "",
          };
        }
      }

      // (b) Fuzzy best among normalized variants
      const candidatesToSearch = Array.from(new Set([aiName, norm(aiName), ...aliasForms(aiName)]));
      let best: { item: any; score: number } | null = null;
      for (const cand of candidatesToSearch) {
        const res = fuse.search(cand)[0];
        if (res) {
          const score = res.score ?? 1;
          if (!best || score < best.score) best = { item: res.item, score };
        }
      }
      if (!best) return null;

      const sim = 1 - (best.score ?? 0);
      const nameTokOverlap = jaccard(aiTokens, tokens(best.item.name));

      if (sim < MIN_ACCEPT_SIM && nameTokOverlap < TOKEN_OVERLAP_FLOOR) {
        console.warn(`[drop-weak-match] LLM "${aiName}" → "${best.item.name}" (sim=${sim.toFixed(2)}, overlap=${nameTokOverlap.toFixed(2)})`);
        return null;
      }

      return {
        name: best.item.name,
        url: best.item.url,
        description: best.item.description ?? "",
        _sim: sim,
        relevanceScore: pick.relevanceScore,
        matchReason: pick.matchReason || "",
      };
    }).filter(Boolean) as Array<{
      name: string;
      url?: string;
      description?: string;
      _sim: number;                 // 0..1
      relevanceScore: number;       // LLM-proposed
      matchReason: string;
    }>;

    if (matched.length === 0) {
      console.warn("[No A–Z matches found for AI picks after gating]");
      return [];
    }

    // 5) Couple LLM score to similarity (prevents bad mappings from scoring high)
    let scored = matched.map((m) => {
      const base = Math.round(m.relevanceScore * (m._sim ?? 1));
      return { ...m, relevanceScore: Math.max(0, Math.min(100, base)) };
    });

    // 6) General, multi-format reranker + coverage injection
    scored = rerankByIntent(scored, userIntents, azList);

    // 7) Return ALL ≥ threshold, else top-5 (tie-break by similarity)
    const high = scored
      .filter((r) => r.relevanceScore >= RELEVANCE_THRESHOLD)
      .sort((a, b) => (b.relevanceScore - a.relevanceScore) || ((b._sim ?? 0) - (a._sim ?? 0)))
      .map(({ _sim, ...rest }) => rest);

    if (high.length > 0) {
      console.log("[Final matched results >= threshold]", high);
      return high;
    }

    const top5 = scored
      .sort((a, b) => (b.relevanceScore - a.relevanceScore) || ((b._sim ?? 0) - (a._sim ?? 0)))
      .slice(0, 5)
      .map(({ _sim, ...rest }) => rest);

    console.log("[Final matched results (top-5)]", top5);
    return top5;
  } catch (err) {
    console.error("[findDatabaseResources error]", err);
    return [];
  }
}
