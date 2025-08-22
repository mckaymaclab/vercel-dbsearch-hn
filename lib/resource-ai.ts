"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import { resourceDatabase, type LibraryResource } from "./resource-database";
import { libraryResourceDatabase } from "./library-resources-database";

// Define the schema for resource results
const ResourceSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    subjects: z.array(z.string()),
    contentTypes: z.array(z.string()),
    accessNote: z.string().optional(),
    relevanceScore: z.number().min(0).max(100),
    matchReason: z.string().optional(),
});

const ResourcesResponseSchema = z.array(ResourceSchema).max(5);

function getGeminiClient(apiKey?: string) {
    const key = apiKey || process.env.GOOGLE_API_KEY;

    if (!key) {
        throw new Error("GOOGLE_API_KEY is not available");
    }

    return new GoogleGenerativeAI(key);
}

// Enhanced fallback search that actually searches through the database
function getFallbackResources(query: string): any[] {
    const queryLower = query.toLowerCase();
    const queryWords = queryLower
        .split(/\s+/)
        .filter((word) => word.length > 2);

    // Score each resource based on keyword matches
    const scoredResources = resourceDatabase.map((resource) => {
        let score = 0;
        const matchReasons = [];

        const searchableText = [
            resource.name,
            resource.description,
            ...resource.subjects,
            ...resource.contentTypes,
        ]
            .join(" ")
            .toLowerCase();

        // Check for exact phrase matches (higher score)
        if (searchableText.includes(queryLower)) {
            score += 50;
            matchReasons.push("exact phrase match");
        }

        // Check for individual word matches
        queryWords.forEach((word) => {
            if (searchableText.includes(word)) {
                score += 10;
                matchReasons.push(`matches "${word}"`);
            }
        });

        // Boost score for featured resources
        if (resource.featured) {
            score += 5;
        }

        // Boost score for full text resources
        if (resource.fullText) {
            score += 3;
        }

        // Subject-specific boosts
        if (
            queryLower.includes("history") &&
            resource.subjects.some((s) => s.toLowerCase().includes("history"))
        ) {
            score += 20;
        }
        if (
            queryLower.includes("science") &&
            resource.subjects.some((s) => s.toLowerCase().includes("science"))
        ) {
            score += 20;
        }
        if (
            queryLower.includes("business") &&
            resource.subjects.some((s) => s.toLowerCase().includes("business"))
        ) {
            score += 20;
        }
        if (
            queryLower.includes("english") &&
            resource.subjects.some((s) => s.toLowerCase().includes("english"))
        ) {
            score += 20;
        }
        if (
            queryLower.includes("math") &&
            resource.subjects.some((s) => s.toLowerCase().includes("math"))
        ) {
            score += 20;
        }

        return {
            ...resource,
            relevanceScore: Math.min(score, 100),
            matchReason:
                matchReasons.length > 0
                    ? `Smart search found this resource because it ${matchReasons
                          .slice(0, 2)
                          .join(" and ")}.`
                    : "General academic resource suitable for research.",
        };
    });

    // Sort by score and return top 5
    return scoredResources
        .filter((resource) => resource.relevanceScore > 0)
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .slice(0, 5);
}

// Pre-filter resources based on query to send relevant subset to AI
function getRelevantResources(
    query: string,
    limit = 20,
    dbType: "library" | "database"
): LibraryResource[] {
    const queryLower = query.toLowerCase();
    const queryWords = queryLower
        .split(/\s+/)
        .filter((word) => word.length > 2);

    const scoredResources = (
        dbType === "database" ? resourceDatabase : libraryResourceDatabase
    ).map((resource) => {
        let score = 0;

        const searchableText = [
            resource.name,
            resource.description,
            ...resource.subjects,
            ...resource.contentTypes,
        ]
            .join(" ")
            .toLowerCase();

        // Check for matches
        if (searchableText.includes(queryLower)) {
            score += 50;
        }

        queryWords.forEach((word) => {
            if (searchableText.includes(word)) {
                score += 10;
            }
        });

        if (resource.featured) score += 5;
        if (resource.fullText) score += 3;

        return { resource, score };
    });

 return scoredResources
    // Sort by relevance score in descending order
 .sort((a, b) => b.score - a.score)
    // Filter for relevant resources (score > 0)

        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((item) => item.resource);
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

        // Get relevant resources to send to AI (instead of just first 8)
        const relevantResources = getRelevantResources(query, 15, searchType);

        if (relevantResources.length === 0) {
            // If no relevant resources found, use fallback
            return getFallbackResources(query);
        }

        const prompt = `You are a librarian helping students find the best academic resources. 

User Query: "${query}"

From these relevant library resources, select the TOP 3 that best match the user's research needs:

${JSON.stringify(relevantResources, null, 2)}

IMPORTANT INSTRUCTIONS:
1. Analyze the user's query carefully
2. Match resources based on subject relevance, content type, and description
3. Provide different resources (don't just pick the first ones)
4. Give each resource a relevance score from 1-100
5. Explain WHY each resource matches the query

Return ONLY a JSON array with exactly these fields for each resource:
- id (string)
- name (string) 
- description (string)
- url (string)
- subjects (array of strings)
- contentTypes (array of strings)
- relevanceScore (number 1-100)
- matchReason (string explaining why this resource fits the query)

Return exactly 5 resources as a JSON array.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean up the response
        text = text.trim();
        if (text.startsWith("```json")) {
            text = text.replace(/```json\s*/, "").replace(/```\s*$/, "");
        }
        if (text.startsWith("```")) {
            text = text.replace(/```\s*/, "").replace(/```\s*$/, "");
        }

        const parsedResults = ResourcesResponseSchema.parse(JSON.parse(text));

        // If we got results, return them
        if (parsedResults.length > 0) {
            return parsedResults;
        } else {
            // Fallback if AI didn't return good results
            return getFallbackResources(query);
        }
    } catch (error) {
        console.error("Error finding resources:", error);

        // Check for quota exceeded error
        if (
            error instanceof Error &&
            (error.message.includes("429") || error.message.includes("quota"))
        ) {
            console.log("API quota exceeded, using fallback search");
            return getFallbackResources(query);
        }

        // For other API errors, also use fallback
        if (
            error instanceof Error &&
            (error.message.includes("403") || error.message.includes("API"))
        ) {
            console.log("API error, using fallback search");
            return getFallbackResources(query);
        }

        // For parsing errors or other issues, use fallback
        console.log("Using fallback search due to error");
        return getFallbackResources(query);
    }
}
