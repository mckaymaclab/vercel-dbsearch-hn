// lib/resource-ai.ts
// NOTE: If you see results in the terminal but not in the UI, check the API route or handler that calls this function.
// The issue is likely in the API response or frontend handling.

"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import Fuse from "fuse.js";

// Curated alias registry you generated from the A–Z list
import { ALIAS_REGISTRY } from "@/lib/aliases/alias-registry";

// Single-source catalogs (we will select one at runtime)
import { resourceDatabase } from "./resource-database";
import { libraryResourceDatabase } from "./library-resources-database";

/* =========================
   Zod runtime validation
========================= */
const AiItemSchema = z.object({
  name: z.string(), // provider/platform/database name (NOT book titles)
  relevanceScore: z.number().min(0).max(100),
  matchReason: z.string().optional(),
});
const AiArraySchema = z.array(AiItemSchema).max(12);
type AiItem = z.infer<typeof AiItemSchema>;
type AiArray = z.infer<typeof AiArraySchema>;

export type ResultRow = {
  name: string;
  url?: string;
  description?: string;
  relevanceScore: number;
  matchReason?: string;
};

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
const RELEVANCE_THRESHOLD = 80;   // include ALL ≥ 80 (after coupling/rerank)
const MIN_ACCEPT_SIM = 0.45;      // drop weak LLM→catalog matches unless token overlap saves them
const TOKEN_OVERLAP_FLOOR = 0.25;

const INJECT_MAX_PER_INTENT = 2;  // coverage injection cap per requested format
const INJECT_BASE_SCORE = 84;     // base score used for format coverage

// General semantic recall (BM25) tunables
const RECALL_MAX = 3;             // how many extra catalog items we may add
const RECALL_BM25_MIN = 1.0;      // minimum BM25 score to be considered meaningful
const RECALL_SCORE_BASE = 86;     // base score for recalls (keeps ≥80 rule consistent)

// Intents (includes language + test prep)
type FormatIntent =
  | "books"
  | "articles"
  | "news"
  | "audio"
  | "video"
  | "images"
  | "language"   // foreign language learning
  | "testprep";  // test preparation / certification

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
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2019\u2018’‘]/g, "'")
    .replace(/[\u2013\u2014–—]/g, "-")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9' -]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function stripTags(s: string) {
  return s.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
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

/** Token helpers / stopwords for BM25. */
const STOP = new Set([
  "the","a","an","and","or","for","of","on","in","to","with","by","about","from","into","at","as","is","are","be","being","been","that","this","these","those","it","its","their"
]);
function textTerms(s: string): string[] {
  return norm(stripTags(s))
    .split(" ")
    .filter(t => t && !STOP.has(t));
}
function tokens(s: string): Set<string> {
  return new Set(textTerms(s));
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

/** Dedupe by normalized name, keep the highest score. */
function dedupeByNameKeepBest<T extends { name: string; relevanceScore?: number }>(arr: T[]): T[] {
  const map = new Map<string, T>();
  for (const item of arr) {
    const key = norm(item.name);
    const prev = map.get(key);
    if (!prev || (item.relevanceScore ?? 0) > (prev.relevanceScore ?? 0)) {
      map.set(key, item);
    }
  }
  return Array.from(map.values());
}

/* =========================
   Build a per-call catalog (NO cross-pollination)
========================= */
type CatalogItem = { name: string; url?: string; description?: string; normName: string };

function buildCatalogFrom(list: Array<{ name: string; url?: string; description?: string }>): CatalogItem[] {
  const byKey = new Map<string, CatalogItem>();
  for (const r of list) {
    const key = norm(r.name);
    const existing = byKey.get(key);
    if (!existing) {
      byKey.set(key, { name: r.name, url: r.url, description: r.description, normName: key });
    } else {
      // Prefer richer record
      const url = existing.url || r.url;
      const desc = (r.description && r.description.length > (existing.description?.length ?? 0)) ? r.description : existing.description;
      byKey.set(key, { name: existing.name, url, description: desc, normName: key });
    }
  }
  return Array.from(byKey.values());
}

function buildAliasIndex(catalog: CatalogItem[]): Map<string, CatalogItem> {
  const m = new Map<string, CatalogItem>();
  for (const z of catalog) {
    for (const a of aliasForms(z.name)) {
      if (!m.has(a)) m.set(a, z);
    }
  }
  return m;
}

function buildFuse(catalog: CatalogItem[]): Fuse<CatalogItem> {
  return new Fuse(catalog, {
    includeScore: true,
    threshold: 0.6,
    ignoreLocation: true,
    keys: ["name", "normName"],
  });
}

/* =========================
   Lightweight BM25 over a selected catalog (general recall)
========================= */
type BM25Doc = { item: CatalogItem; tf: Map<string, number>; len: number };
type BM25Index = { docs: BM25Doc[]; idf: Map<string, number>; avgdl: number; byNorm: Map<string, BM25Doc> };

function buildBm25Index(items: CatalogItem[]): BM25Index {
  const docs: BM25Doc[] = [];
  const df = new Map<string, number>();
  const byNorm = new Map<string, BM25Doc>();
  let totalLen = 0;

  for (const it of items) {
    const terms = textTerms(`${it.name} ${it.description ?? ""}`);
    const tf = new Map<string, number>();
    for (const t of terms) tf.set(t, (tf.get(t) ?? 0) + 1);
    const len = terms.length || 1;
    totalLen += len;
    const doc: BM25Doc = { item: it, tf, len };
    docs.push(doc);
    byNorm.set(it.normName, doc);

    // update document frequency once per term
    for (const t of new Set(terms)) df.set(t, (df.get(t) ?? 0) + 1);
  }

  const N = docs.length || 1;
  const idf = new Map<string, number>();
  for (const [t, dfv] of df.entries()) {
    // standard idf variant with +1 smoothing
    idf.set(t, Math.log((N - dfv + 0.5) / (dfv + 0.5) + 1));
  }

  return { docs, idf, avgdl: totalLen / N, byNorm };
}

function bm25Score(query: string, doc: BM25Doc, index: BM25Index): number {
  const k1 = 1.2, b = 0.75;
  const qTerms = Array.from(new Set(textTerms(query)));
  let sum = 0;
  for (const q of qTerms) {
    const idf = index.idf.get(q) ?? 0;
    const tf = doc.tf.get(q) ?? 0;
    if (tf === 0 || idf <= 0) continue;
    const denom = tf + k1 * (1 - b + b * (doc.len / index.avgdl));
    sum += idf * ((tf * (k1 + 1)) / denom);
  }
  return sum;
}

/* ============
   Intent & Type classifiers (explicit-only)
=========== */
function detectIntents(q: string): Set<FormatIntent> {
  const intents = new Set<FormatIntent>();
  const s = q.toLowerCase();

  // Books are explicit
  if (/\b(e-?book|textbooks?|books?)\b/.test(s)) intents.add("books");

  // Articles only when explicit
  if (/\b(articles?|peer[- ]?review(ed)?|journal|journals|literature review|systematic review)\b/.test(s)) {
    intents.add("articles");
  }

  // News
  if (/\b(news|newspapers?|press|headline|current events?)\b/.test(s)) intents.add("news");

  // Audio
  if (/\b(audio|music|recordings?|sound|podcasts?)\b/.test(s)) intents.add("audio");

  // Video
  if (/\b(video|videos|film|documentar(y|ies)|watch|stream)\b/.test(s) || /\bopera\b/.test(s)) intents.add("video");

  // Images
  if (/\b(images?|photos?|photographs?|pictures?|artwork|art images?)\b/.test(s)) intents.add("images");

  // Foreign language learning
  const languageList = "(spanish|french|german|chinese|mandarin|cantonese|japanese|korean|italian|portuguese|russian|arabic|hindi|urdu|bengali|vietnamese|thai|turkish|greek|hebrew|swedish|norwegian|danish|finnish|polish|czech|romanian|hungarian|indonesian|malay|tagalog|filipino|lao|khmer|persian|farsi|pashto|swahili|zulu|amharic|yiddish|latin|esperanto)";
  const languageLearning =
    /\b(language (learning|course|courses|lesson|lessons|practice|classes?)|learn(ing)? (a )?new language|esl|ell|rosetta stone|mango languages|transparent language|pronunciator)\b/.test(s) ||
    new RegExp(`\\b(learn|learning|practice) ${languageList}\\b`).test(s) ||
    new RegExp(`\\b${languageList} (lessons?|course|courses)\\b`).test(s);
  if (languageLearning) intents.add("language");

  // Test prep / certification
  const testPrep =
    /\b(test|exam)\s*(prep|practice|study|review|guide|coaching|course|bootcamp|materials?)\b/.test(s) ||
    (/\b(practice )?(tests?|exams?)\b/.test(s) && /\b(prep|practice|study|review|guide|materials?)\b/.test(s)) ||
    /\b(cert(ification|ified)?|credential|license|licensure)\b/.test(s) ||
    /\b(gre|gmat|lsat|mcat|nclex|teas|praxis|act|sat|toefl|ielts|pte|cfa|cpa|cma|cia|cisa|pmp|capm|comptia|security\+|network\+|a\+|peterson'?s|learningexpress|prepstep)\b/.test(s);
  if (testPrep) intents.add("testprep");

  return intents;
}

function classifyResource(name: string, description?: string) {
  const n = norm(name);
  const d = norm(description || "");
  const nd = `${n} ${d}`;

  const isEbook =
    /\b(e-?books?|book collection|books online|ebook central|gale ebooks|ebsco ebooks|o'reilly|safari books|oxford scholarship|springer ebooks|wiley ebooks|cambridge books|muse books|project muse books)\b/.test(nd);

  const isDissertations = /\b(dissertations?|theses|pqdt)\b/.test(nd);

  const isVideo =
    /\b(video|videos|film|streaming video)\b/.test(nd) ||
    /\b(opera in video|academic video online|kanopy|medici\.?tv)\b/.test(nd);

  const isAudio =
    /\b(audio|music|streaming audio|sound recordings?)\b/.test(nd) ||
    /\b(naxos music library)\b/.test(nd);

  const isImages =
    /\b(images?|photos?|photographs?|artstor|jstor images|image collection|picture library)\b/.test(nd);

  const isNews =
    /\b(news|newspapers?|press|headline|nexis|factiva|newsbank|newsstream)\b/.test(nd);

  // “Article database” signal (broad; not exclusive)
  const isArticleIndex =
    (/\b(abstracts|index|database|journals?)\b/.test(nd)) &&
    !isEbook && !isDissertations && !isVideo && !isAudio && !isImages && !isNews;

  const isSummaryDigest = /\b(getabstract|book summaries?)\b/.test(nd);

  const isLanguageLearning =
    /\b(language learning|learn(ing)? (spanish|french|german|chinese|mandarin|cantonese|japanese|korean|italian|portuguese|russian|arabic|hindi|urdu|bengali|vietnamese|thai|greek|turkish|hebrew|swedish|norwegian|danish|finnish|polish|czech|romanian|hungarian|indonesian|malay|tagalog|filipino|lao|khmer|persian|farsi|pashto|swahili|zulu|amharic|yiddish|latin|esperanto)|esl|ell|rosetta stone|mango languages|transparent language|pronunciator)\b/.test(nd);

  const isTestPrep =
    /\b(test|exam)\s*(prep|practice|study|review|guide|course|bootcamp|materials?)\b/.test(nd) ||
    /\b(cert(ification|ified)?|credential|license|licensure)\b/.test(nd) ||
    /\b(gre|gmat|lsat|mcat|nclex|teas|praxis|act|sat|toefl|ielts|pte|cfa|cpa|cma|cia|cisa|pmp|capm|comptia|security\+|network\+|a\+|peterson'?s|learningexpress|prepstep)\b/.test(nd);

  return {
    isEbook,
    isDissertations,
    isVideo,
    isAudio,
    isImages,
    isNews,
    isArticleIndex,
    isSummaryDigest,
    isLanguageLearning,
    isTestPrep,
  };
}

/** Tiny name-boost if the user's query literally mentions a resource by name. */
function nameQueryBoost(query: string, resName: string) {
  const qTok = tokens(query);
  const rTok = tokens(resName);
  const overlap = jaccard(qTok, rTok);
  return overlap >= 0.6 ? 1.12 : overlap >= 0.4 ? 1.06 : 1.0;
}

/** Intent-alignment factor for BM25 recall. */
function intentAlignmentFactor(intents: Set<FormatIntent>, item: { name: string; description?: string }) {
  if (intents.size === 0) return 1.0;
  const c = classifyResource(item.name, item.description);
  let f = 1.0;
  if (intents.has("books"))    f *= c.isEbook ? 1.12 : 0.92;
  if (intents.has("articles")) f *= c.isArticleIndex ? 1.10 : 0.93;
  if (intents.has("news"))     f *= c.isNews ? 1.15 : 0.92;
  if (intents.has("audio"))    f *= c.isAudio ? 1.15 : 0.92;
  if (intents.has("video"))    f *= c.isVideo ? 1.15 : 0.92;
  if (intents.has("images"))   f *= c.isImages ? 1.15 : 0.92;
  if (intents.has("language")) f *= c.isLanguageLearning ? 1.18 : 0.90;
  if (intents.has("testprep")) f *= c.isTestPrep ? 1.18 : 0.90;
  return Math.min(1.30, Math.max(0.70, f));
}

/* ===========================
   Main exported entry point
=========================== */
export async function findDatabaseResources(
  query: string,
  searchType: "library" | "database" // NOW USED to select the ONLY catalog we search
): Promise<ResultRow[]> {
  const apiKey = process.env.GEMINI_API_KEY;

  // 0) Build the per-call catalog & indices from the selected source ONLY
  const SELECTED_LIST =
    searchType === "database" ? resourceDatabase
    : searchType === "library" ? libraryResourceDatabase
    : resourceDatabase; // defensive default

  const CATALOG: CatalogItem[] = buildCatalogFrom(SELECTED_LIST);
  const CATALOG_ALIAS_INDEX = buildAliasIndex(CATALOG);
  const FUSE = buildFuse(CATALOG);
  const BM25 = buildBm25Index(CATALOG);

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

    // 3) Map each AI pick to the best catalog entry — alias first, then fuzzy
    const userIntents = detectIntents(query);

    const matched = (aiPicks as AiArray).map((pick) => {
      const aiName = pick.name;
      const aiTokens = tokens(aiName);

      // (a) Alias/exact-ish match wins (catalog-backed only)
      for (const form of aliasForms(aiName)) {
        const hit = CATALOG_ALIAS_INDEX.get(form);
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

      // (b) Fuzzy best among normalized variants (catalog-backed only)
      const candidatesToSearch = Array.from(new Set([aiName, norm(aiName), ...aliasForms(aiName)]));
      let best: { item: CatalogItem; score: number } | null = null;
      for (const cand of candidatesToSearch) {
        const res = FUSE.search(cand)[0];
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
      console.warn("[No catalog matches found for AI picks after gating]");
      return [];
    }

    // 4) Couple LLM score to similarity
    let scored = matched.map((m) => {
      const base = Math.round(m.relevanceScore * (m._sim ?? 1));
      return { ...m, relevanceScore: Math.max(0, Math.min(100, base)) };
    });

    // 5) Purpose-fit reranker (multi-format) + tiny “name mentioned in query” boost
    scored = scored.map((m) => {
      const c = classifyResource(m.name, m.description);
      let factor = nameQueryBoost(query, m.name); // small boost if user typed the name

      for (const intent of userIntents) {
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
          case "language":
            if (c.isLanguageLearning) factor *= 1.22;
            if (c.isDissertations || c.isSummaryDigest) factor *= 0.90;
            break;
          case "testprep":
            if (c.isTestPrep) factor *= 1.22;
            if (c.isDissertations || c.isSummaryDigest) factor *= 0.88;
            break;
        }
      }

      factor = Math.min(1.30, Math.max(0.70, factor));
      const adjusted = Math.max(0, Math.min(100, Math.round(m.relevanceScore * factor)));
      return { ...m, relevanceScore: adjusted };
    });

    // 6) Coverage injection from the SELECTED catalog (BM25-gated for topical fit)
    const have = (intent: FormatIntent) =>
      scored.some(s => {
        const c = classifyResource(s.name, s.description);
        switch (intent) {
          case "books":    return c.isEbook;
          case "articles": return c.isArticleIndex;
          case "news":     return c.isNews;
          case "audio":    return c.isAudio;
          case "video":    return c.isVideo;
          case "images":   return c.isImages;
          case "language": return c.isLanguageLearning;
          case "testprep": return c.isTestPrep;
        }
      });

    {
      const existingKeys = new Set(scored.map(s => norm(s.name)));
      for (const intent of Array.from(userIntents)) {
        if (have(intent)) continue;

        // candidate pool by format, FROM SELECTED CATALOG ONLY
        const formatPool = CATALOG.filter(z => {
          const c = classifyResource(z.name, z.description);
          switch (intent) {
            case "books":    return c.isEbook;
            case "articles": return c.isArticleIndex;
            case "news":     return c.isNews;
            case "audio":    return c.isAudio;
            case "video":    return c.isVideo;
            case "images":   return c.isImages;
            case "language": return c.isLanguageLearning;
            case "testprep": return c.isTestPrep;
          }
        });

        // rank by BM25 topicality (and require minimal topical signal)
        const ranked = formatPool
          .map(z => {
            const doc = BM25.byNorm.get(z.normName)!;
            const topical = bm25Score(query, doc, BM25);
            return { z, topical };
          })
          .filter(({ z, topical }) => !existingKeys.has(norm(z.name)) && topical >= (RECALL_BM25_MIN * 0.6))
          .sort((a, b) => b.topical - a.topical);

        let injected = 0;
        for (const { z, topical } of ranked) {
          scored.push({
            name: z.name,
            url: z.url,
            description: z.description ?? "",
            relevanceScore: Math.min(100, Math.round(INJECT_BASE_SCORE + Math.min(10, topical * 6))),
            _sim: 0.9,
          } as any);
          existingKeys.add(norm(z.name));
          injected++;
          if (injected >= INJECT_MAX_PER_INTENT) break;
        }
        if (injected > 0) {
          console.warn(`[inject-${intent}] Added ${injected} resource(s) with BM25 gating (catalog=${searchType}).`);
        }
      }
    }

    // 6b) GENERAL CATALOG RECALL (BM25): add the best missing catalog items if strongly topical
    {
      const existingKeys = new Set(scored.map(s => norm(s.name)));
      const intents = userIntents;

      const pool = BM25.docs
        .filter(d => !existingKeys.has(d.item.normName))
        .map(d => {
          const base = bm25Score(query, d, BM25);
          const align = intentAlignmentFactor(intents, d.item);
          return { d, score: base * align };
        })
        .filter(({ score }) => score >= RECALL_BM25_MIN)
        .sort((a, b) => b.score - a.score)
        .slice(0, 24);

      let injected = 0;
      for (const { d, score } of pool) {
        scored.push({
          name: d.item.name,
          url: d.item.url,
          description: d.item.description ?? "",
          relevanceScore: Math.min(100, Math.round(RECALL_SCORE_BASE + Math.min(12, score * 8))),
          _sim: 0.9,
        } as any);
        existingKeys.add(d.item.normName);
        injected++;
        if (injected >= RECALL_MAX) break;
      }
      if (injected > 0) {
        console.warn(`[recall-bm25] Added ${injected} resource(s) via general semantic recall (catalog=${searchType}).`);
      }
    }

    // 6.5) Dedupe by normalized name, keep highest score
    scored = dedupeByNameKeepBest(scored);

    // 7) Return ALL ≥ threshold, else top-5 (tie-break by similarity if present)
    const high = scored
      .filter((r) => r.relevanceScore >= RELEVANCE_THRESHOLD)
      .sort((a, b) => (b.relevanceScore - a.relevanceScore) || ((b as any)._sim - (a as any)._sim))
      .map(({ _sim, ...rest }) => rest);

    if (high.length > 0) {
      console.log("[Final matched results >= threshold]", high);
      return high;
    }

    const top5 = scored
      .sort((a, b) => (b.relevanceScore - a.relevanceScore) || ((b as any)._sim - (a as any)._sim))
      .slice(0, 5)
      .map(({ _sim, ...rest }) => rest);

    console.log("[Final matched results (top-5)]", top5);
    return top5;
  } catch (err) {
    console.error("[findDatabaseResources error]", err);
    return [];
  }
}
