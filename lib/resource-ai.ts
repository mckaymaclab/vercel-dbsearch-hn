"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import Fuse from "fuse.js";

import { resourceDatabase } from "./resource-database";
import { libraryResourceDatabase } from "./library-resources-database";

// =========================
// Runtime validation (Zod)
// =========================
const ResourceNameSchema = z.object({
  name: z.string(),
  relevanceScore: z.number().min(0).max(100),
  matchReason: z.string().optional(),
});
const ResourcesResponseSchema = z.array(ResourceNameSchema).max(5);
type AiItem = z.infer<typeof ResourceNameSchema>;
type AiArray = z.infer<typeof ResourcesResponseSchema>;

// ======================================
// Gemini structured output (strict JSON)
// ======================================
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

// ===================
// Tunables & Helpers
// ===================
const RELEVANCE_THRESHOLD = 80; // include ALL >= 80 (no cap)

function getGeminiClient(apiKey?: string) {
  const key = apiKey || process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY is not available");
  return new GoogleGenerativeAI(key);
}

// Richer Fuse index for prefiltering with multiple fields
function makeFuse(list: any[]) {
  return new Fuse(list, {
    includeScore: true,
    threshold: 0.4,        // slightly looser than 0.3
    ignoreLocation: true,
    minMatchCharLength: 2,
    keys: [
      { name: "name", weight: 0.5 },
      { name: "subjects", weight: 0.2 },
      { name: "contentTypes", weight: 0.15 },
      { name: "description", weight: 0.15 },
    ],
  });
}

/**
 * Extracts a best-guess JSON array string from a messy LLM response:
 * - prefers a fenced ```json block if present
 * - normalizes smart quotes
 * - removes trailing commas
 * - slices the outermost [...] if extra chatter surrounds it
 */
function extractJsonArray(text: string): string | null {
  if (!text) return null;

  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced?.[1]) text = fenced[1];

  text = text
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"') // smart double quotes → "
    .replace(/[\u2018\u2019\u201B]/g, "'")       // smart single quotes → '
    .replace(/,\s*([}\]])/g, "$1")               // trailing commas
    .trim();

  if (/^\s*\[.*\]\s*$/s.test(text)) return text;

  const first = text.indexOf("[");
  const last = text.lastIndexOf("]");
  if (first !== -1 && last !== -1 && last > first) {
    return text.slice(first, last + 1);
  }
  return null;
}

/**
 * Strict JSON parsing with Zod validation, plus a salvage path that
 * tries to parse individual objects when the array-level parse fails.
 */
function safeParseResults(raw: string): AiArray | [] {
  try {
    return ResourcesResponseSchema.parse(JSON.parse(raw));
  } catch (e1) {
    const objectMatches = raw.match(/\{[\s\S]*?\}/g) || [];
    const validObjects: AiItem[] = [];

    for (let objStr of objectMatches) {
      objStr = objStr
        .replace(/"\s*\n\s*"/g, '",\n"')        // add missing commas between string fields
        .replace(/,\s*}/g, "}")                 // trailing comma before }
        .replace(/: "([^"]*)\n/g, ': "$1"\n');  // newline inside quoted string

      // add quotes to unquoted simple scalar values (best-effort)
      objStr = objStr.replace(
        /("[^"]*":\s*)([^",\}\n]+)(?=,|})/g,
        (m, key, val) => (!/^".*"$/.test(val.trim()) ? `${key}"${val.trim()}"` : m)
      );

      try {
        const candidate = JSON.parse(objStr);
        const validated = ResourceNameSchema.parse(candidate);
        validObjects.push(validated);
      } catch {
        // skip bad fragment
      }
    }

    if (validObjects.length > 0) return validObjects.slice(0, 5);

    // eslint-disable-next-line no-console
    console.error("[AI parse error unrecoverable]", e1, raw);
    return [];
  }
}

// Fuse score (0 = perfect) → similarity in [0..1]
function fuseSimilarity(s: number | undefined) {
  if (s == null) return 0.0;
  const x = Math.max(0, Math.min(1, 1 - s));
  return x;
}

// ===========================
// Main exported entry point
// ===========================
export async function findDatabaseResources(
  query: string,
  searchType: "library" | "database"
) {
  const apiKey = process.env.GEMINI_API_KEY;

  try {
    const genAI = getGeminiClient(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
      generationConfig: {
        temperature: 0.4, // slight bump for better separation
        topK: 40,
        topP: 0.8,
        maxOutputTokens: 2048,
        responseMimeType: "application/json",
        responseSchema: geminiArraySchema as unknown as any,
      },
    });

    // Source list
    const allResources =
      searchType === "database" ? resourceDatabase : libraryResourceDatabase;

    // Ensure optional fields exist for indexing
    const normalized = allResources.map((r: any) => ({
      ...r,
      subjects: Array.isArray(r.subjects) ? r.subjects : [],
      contentTypes: Array.isArray(r.contentTypes) ? r.contentTypes : [],
      description: r.description ?? "",
    }));

    // Prefilter candidates via Fuse to keep context tight and relevant
    const preFuse = makeFuse(normalized);
    const preHits = preFuse.search(query).slice(0, 80).map((h) => h.item);

    // Build compact context lines for the model
    const candidateLines = preHits
      .map((r) => {
        const subjects = r.subjects.join("; ");
        const content = r.contentTypes.join("; ");
        const desc = String(r.description).replace(/\s+/g, " ").slice(0, 220);
        return `${r.name} | subjects: ${subjects} | types: ${content} | desc: ${desc}`;
      })
      .join("\n");

    // Reference list for exactness
    const candidateNames = preHits.map((r) => r.name).sort();

    // Prompt: JSON-only with rich but compact hints
    const prompt = `You are a librarian.

Choose up to 5 resources that best match the user's query from the CANDIDATES list.
Return ONLY valid JSON (no code fences), as an array of objects with:
- name (must match one of the candidate names below; prefer exact or extremely close)
- relevanceScore (1-100)
- matchReason (brief justification)

User Query: ${JSON.stringify(query)}

CANDIDATE NAMES (reference list for correctness):
${candidateNames.join("\n")}

CANDIDATES (with hints; use these to judge relevance):
${candidateLines}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text(); // should already be pure JSON

    // eslint-disable-next-line no-console
    console.log("[AI raw response]", text);

    // Primary parse (expected to succeed with schema + MIME type)
    let parsedResults: AiArray | [];
    try {
      parsedResults = ResourcesResponseSchema.parse(JSON.parse(text));
    } catch {
      // Fallback sanitizer + salvage
      const rawJson = extractJsonArray(text);
      if (!rawJson) {
        // eslint-disable-next-line no-console
        console.error("[AI parse error: no JSON array found]", text);
        return [];
      }
      parsedResults = safeParseResults(rawJson);
      if (parsedResults.length === 0) return [];
    }

    // eslint-disable-next-line no-console
    console.log("[AI parsed results]", parsedResults);

    // Fuzzy match AI-selected names back to canonical resources
    const nameFuse = new Fuse(normalized, {
      keys: ["name"],
      threshold: 0.4,
      includeScore: true,
    });

    const matched = (parsedResults as AiArray)
      .map((ai) => {
        const hit = nameFuse.search(ai.name)[0];
        if (hit && hit.score !== undefined && hit.score <= 0.4) {
          const m = hit.item as any;
          return {
            name: m.name,
            url: m.url,
            description: m.description,
            relevanceScore: ai.relevanceScore,
            matchReason: ai.matchReason || "",
            _fuseScore: hit.score, // keep for hybrid rerank
          };
        }
        return null;
      })
      .filter(Boolean) as Array<{
        name: string;
        url?: string;
        description?: string;
        relevanceScore: number;
        matchReason: string;
        _fuseScore: number;
      }>;

    // Return ALL above-threshold results, no cap
    const highRelevance = matched
      .filter((r) => r.relevanceScore >= RELEVANCE_THRESHOLD)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .map(({ _fuseScore, ...rest }) => rest);

    if (highRelevance.length > 0) {
      // eslint-disable-next-line no-console
      console.log("[Final matched results >= threshold]", highRelevance);
      return highRelevance;
    }

    // Hybrid rerank when no >= 80: blend AI score and name similarity
    const W_AI = 0.7;
    const W_FUZZY = 0.3;

    const reranked = matched
      .map((r) => {
        const sim = fuseSimilarity(r._fuseScore);
        const blended = W_AI * (r.relevanceScore / 100) + W_FUZZY * sim;
        return { ...r, _blended: blended };
      })
      .sort((a, b) => b._blended - a._blended)
      .slice(0, 5)
      .map(({ _fuseScore, _blended, ...rest }) => rest);

    // eslint-disable-next-line no-console
    console.log("[Final matched results (hybrid top-5)]", reranked);
    return reranked;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[findDatabaseResources error]", err);
    return [];
  }
}
