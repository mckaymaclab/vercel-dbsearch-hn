"use server";
// Helper function for error handling in findDatabaseResources
function handleResourceError(error: unknown, query: string) {
    if (
        error instanceof Error &&
        (error.message.includes("429") || error.message.includes("quota"))
    ) {
        // API quota exceeded, using fallback search
        return getFallbackResources(query);
    }
    if (
        error instanceof Error &&
        (error.message.includes("403") || error.message.includes("API"))
    ) {
        // API error, using fallback search
        return getFallbackResources(query);
    }
    // Using fallback search due to error
    return getFallbackResources(query);
}


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
    const key = apiKey || process.env.GEMINI_API_KEY;

    if (!key) {
        throw new Error("GEMINI_API_KEY is not available");
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
            queryLower.includes("accounting") &&
            resource.subjects.some((s) => s.toLowerCase().includes("accounting"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("animal and food science") &&
            resource.subjects.some((s) => s.toLowerCase().includes("Animal and Food Science"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("applied plant science") &&
            resource.subjects.some((s) => s.toLowerCase().includes("applied plant science"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("art") &&
            resource.subjects.some((s) => s.toLowerCase().includes("art"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("automotive engineering") &&
            resource.subjects.some((s) => s.toLowerCase().includes("automotive engineering"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("biographies") &&
            resource.subjects.some((s) => s.toLowerCase().includes("biographies"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("biographies") &&
            resource.subjects.some((s) => s.toLowerCase().includes("biographies"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("biology") &&
            resource.subjects.some((s) => s.toLowerCase().includes("biology"))
        ) {
            score += 20;
        }
        if (
            queryLower.includes("business management") &&
            resource.subjects.some((s) => s.toLowerCase().includes("business management"))
        ) {
            score += 20;
        }
        if (
            queryLower.includes("chemistry") &&
            resource.subjects.some((s) => s.toLowerCase().includes("chemistry"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("communications") &&
            resource.subjects.some((s) => s.toLowerCase().includes("communications"))
        ) {
            score += 20;
        }
        if (
            queryLower.includes("computer science") &&
            resource.subjects.some((s) => s.toLowerCase().includes("computer science"))
        ) {
            score += 20;
        }
        
        if (
            queryLower.includes("electrical engineering") &&
            resource.subjects.some((s) => s.toLowerCase().includes("electrical engineering"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("dance") &&
            resource.subjects.some((s) => s.toLowerCase().includes("dance"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("design and construction management") &&
            resource.subjects.some((s) => s.toLowerCase().includes("design and construction management"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("economics") &&
            resource.subjects.some((s) => s.toLowerCase().includes("economics"))
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
            queryLower.includes("family history") &&
            resource.subjects.some((s) => s.toLowerCase().includes("family history"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("finance") &&
            resource.subjects.some((s) => s.toLowerCase().includes("finance"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("general education") &&
            resource.subjects.some((s) => s.toLowerCase().includes("general education"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("geography") &&
            resource.subjects.some((s) => s.toLowerCase().includes("geography"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("geology") &&
            resource.subjects.some((s) => s.toLowerCase().includes("geology"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("health services") &&
            resource.subjects.some((s) => s.toLowerCase().includes("health services"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("history") &&
            resource.subjects.some((s) => s.toLowerCase().includes("history"))
        ) {
            score += 20;
        }	
		if (
            queryLower.includes("home and family") &&
            resource.subjects.some((s) => s.toLowerCase().includes("home and family"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("human athletic performance") &&
            resource.subjects.some((s) => s.toLowerCase().includes("human athletic performance"))
        ) {
            score += 20;
        }
		if (
            queryLower.includes("recreation") &&
            resource.subjects.some((s) => s.toLowerCase().includes("human athletic performance"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("humanities") &&
            resource.subjects.some((s) => s.toLowerCase().includes("humanities"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("philosophy") &&
            resource.subjects.some((s) => s.toLowerCase().includes("philosophy"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("interdisciplinary studies") &&
            resource.subjects.some((s) => s.toLowerCase().includes("interdisciplinary studies"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("interior design") &&
            resource.subjects.some((s) => s.toLowerCase().includes("interior design"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("job and career resources") &&
            resource.subjects.some((s) => s.toLowerCase().includes("job and career resources"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("languages and international studies") &&
            resource.subjects.some((s) => s.toLowerCase().includes("languages and international studies"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("marketing") &&
            resource.subjects.some((s) => s.toLowerCase().includes("marketing"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("mathematics") &&
            resource.subjects.some((s) => s.toLowerCase().includes("mathematics"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("mechanical engineering") &&
            resource.subjects.some((s) => s.toLowerCase().includes("mechanical engineering"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("civil engineering") &&
            resource.subjects.some((s) => s.toLowerCase().includes("civil engineering"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("music") &&
            resource.subjects.some((s) => s.toLowerCase().includes("music"))
        ) {
            score += 20;
		} 
		if (
            queryLower.includes("nursing") &&
            resource.subjects.some((s) => s.toLowerCase().includes("nursing"))
        ) {
            score += 20;
		} 
		if (
            queryLower.includes("physics") &&
            resource.subjects.some((s) => s.toLowerCase().includes("physics"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("political science") &&
            resource.subjects.some((s) => s.toLowerCase().includes("political science"))
        ) {
            score += 20;
		}	
		if (
            queryLower.includes("pyschology") &&
            resource.subjects.some((s) => s.toLowerCase().includes("pyschology"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("religious education") &&
            resource.subjects.some((s) => s.toLowerCase().includes("religious education"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("sociology and social work") &&
            resource.subjects.some((s) => s.toLowerCase().includes("sociology and social work"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("special education") &&
            resource.subjects.some((s) => s.toLowerCase().includes("special education"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("teacher education") &&
            resource.subjects.some((s) => s.toLowerCase().includes("teacher education"))
        ) {
            score += 20;
		}
		if (
            queryLower.includes("theatre") &&
            resource.subjects.some((s) => s.toLowerCase().includes("theatre"))
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

From these relevant library resources, select up to 5 that best match the user's research needs:

${JSON.stringify(relevantResources, null, 2)}

IMPORTANT INSTRUCTIONS:
1. Analyze the user's query carefully
2. Match resources based on subject relevance, content type, and description
3. Look at the search terms and try and evaluate which subject headings they belong in.
For example, if the user is searching for "cellular respiration", evaluate where it fits. In this case it would be "Biology".
Pull resources that have that subject associated with them.
4. Give each resource a relevance score from 1-100
5. Explain WHY each resource matches the query

Return ONLY a JSON array with exactly these fields for each resource:
- id (string)
- name (string) 
- description (string)
- url (string)
- subjects (array of strings)
- moreinfo (string)
- contentTypes (array of strings)
- relevanceScore (number 1-100)
- matchReason (string explaining why this resource fits the query)

Return up to 5 resources as a JSON array. If fewer than 5 are relevant, return only those.`;

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

        let finalResults = [];

        if (parsedResults.length > 0) {
            // If AI returned any results, use them
            finalResults = parsedResults;
        } else if (parsedResults.length > 0 && parsedResults.length <= 5) {
            // If AI returned between 1 and 5 results, use them directly
 finalResults = parsedResults;
        } else {
            // Fallback if AI didn't return good results
 finalResults = getFallbackResources(query);
        }

    // Return up to 5 results (no deduplication needed, AI prompt ensures uniqueness)
    return finalResults.slice(0, 5);

    } catch (error) {
        // Error handling moved to helper for maintainability
        return handleResourceError(error, query);
    }
}
