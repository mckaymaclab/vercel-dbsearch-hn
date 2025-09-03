// NOTE: If you see results in the terminal but not in the UI, check the API route or handler that calls this function. The issue is likely in the API response or frontend handling.

"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import { resourceDatabase, type LibraryResource } from "./resource-database";
import { libraryResourceDatabase } from "./library-resources-database";
import Fuse from "fuse.js";

// Define the schema for AI results: only name (and optionally id)
const ResourceNameSchema = z.object({
    name: z.string(),
    relevanceScore: z.number().min(0).max(100),
    matchReason: z.string().optional(),
});
const ResourcesResponseSchema = z.array(ResourceNameSchema).max(5);

function getGeminiClient(apiKey?: string) {
    const key = apiKey || process.env.GEMINI_API_KEY;
    if (!key) {
        throw new Error("GEMINI_API_KEY is not available");
    }
    return new GoogleGenerativeAI(key);
}

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
                temperature: 0.3,
                topK: 40,
                topP: 0.8,
                maxOutputTokens: 2048,
            },
        });

    // Get the list of resource names for the prompt
    const allResources = searchType === "database" ? resourceDatabase : libraryResourceDatabase;
    const resourceNames = allResources.map(r => r.name).sort();
    // Prompt: instruct AI to only use names from the provided list
    const prompt = `You are a librarian helping students find the best academic resources.

User Query: "${query}"

IMPORTANT: Only suggest resources (by name) that are listed in the following list of database names. Do NOT include open web resources, Google Scholar, Wikipedia, or anything not found in this list. If you are unsure, do not include it.

Database Names:
${resourceNames.join("\n")}

For each resource, provide:
- name (string, must match or be extremely close to a name in the list above)
- relevanceScore (number 1-100)
- matchReason (string explaining why this resource fits the query)

Return up to 5 resources as a JSON array. If fewer than 5 are relevant, return only those.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
    let text = response.text();
    console.log("[AI raw response]", text);


        // Clean up the response: remove code block markers and extract JSON array
        text = text.trim();
        // Remove code block markers (```json ... ``` or ``` ... ```)
        text = text.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "");
        // Remove leading 'json' or similar non-JSON text
        text = text.replace(/^json\s*/i, "");
        // Try to extract the first JSON array in the text
        const jsonArrayMatch = text.match(/\[[\s\S]*?\]/);
        if (jsonArrayMatch) {
            text = jsonArrayMatch[0];
        }

        let parsedResults;
        try {
            parsedResults = ResourcesResponseSchema.parse(JSON.parse(text));
        } catch (e) {
            console.error("[AI parse error]", e, text);
            return [];
        }
        console.log("[AI parsed results]", parsedResults);

    // Use fuse.js for robust fuzzy matching
    const fuse = new Fuse(allResources, {
        keys: ["name"],
        threshold: 0.3, // adjust as needed for strictness
        includeScore: true,
    });


    let allMatchedResults = parsedResults
        .map(aiResult => {
            // Use fuse.js to find the best match for the AI result name
            const fuseResults = fuse.search(aiResult.name);
            if (fuseResults.length > 0 && fuseResults[0].score !== undefined && fuseResults[0].score <= 0.3) {
                const match = fuseResults[0].item;
                return {
                    name: match.name,
                    url: match.url,
                    description: match.description,
                    relevanceScore: aiResult.relevanceScore,
                    matchReason: aiResult.matchReason || ""
                };
            }
            // If not found in our database, skip it
            return null;
        })
        .filter(Boolean);

    // Filter for high-relevance results (score >= 80), ensure no nulls, and sort by relevanceScore descending
    const highRelevance = allMatchedResults
        .filter(r => r && r.relevanceScore >= 80)
        .sort((a, b) => (b!.relevanceScore - a!.relevanceScore));
    // If there are at least 1 high-relevance, return all of them (even if >5)
    if (highRelevance.length > 0) {
        console.log("[Final matched results]", highRelevance);
        return highRelevance;
    }
    // Otherwise, return up to 5 results as before, sorted by relevanceScore descending
    const sortedResults = allMatchedResults
        .filter(r => r)
        .sort((a, b) => (b!.relevanceScore - a!.relevanceScore))
        .slice(0, 5);
    console.log("[Final matched results]", sortedResults);
    return sortedResults;

    } catch (error) {
        // If the AI fails, return an empty array (no fallback)
        return [];
    }
}
