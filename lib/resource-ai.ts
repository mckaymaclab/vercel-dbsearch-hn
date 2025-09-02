// NOTE: If you see results in the terminal but not in the UI, check the API route or handler that calls this function. The issue is likely in the API response or frontend handling.

"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import { resourceDatabase, type LibraryResource } from "./resource-database";
import { libraryResourceDatabase } from "./library-resources-database";

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

        // New prompt: only send the user query, not the resource list
        const prompt = `You are a librarian helping students find the best academic resources.

User Query: "${query}"

1. Based on these search terms, list up to 7 resources (by name) that a library might subscribe to in order to find information on this topic.


- name (string)
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
        const allResources = searchType === "database" ? resourceDatabase : libraryResourceDatabase;
    let finalResults = parsedResults
            .map(aiResult => {
                const aiName = aiResult.name.toLowerCase();
                // Try exact match first
                let match = allResources.find(r => r.name.toLowerCase() === aiName);
                // If not found, try partial (substring) match
                if (!match) {
                    match = allResources.find(r =>
                        r.name.toLowerCase().includes(aiName) ||
                        aiName.includes(r.name.toLowerCase())
                    );
                }
                if (match) {
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

    console.log("[Final matched results]", finalResults);
    // Always return up to 5 results
    return finalResults.slice(0, 5);

    } catch (error) {
        // If the AI fails, return an empty array (no fallback)
        return [];
    }
}
