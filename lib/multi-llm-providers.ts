// Multi-provider LLM configuration for better free tier usage
import { GoogleGenerativeAI } from '@google/generative-ai';

export const LLM_PROVIDERS = {
  // Groq - Fastest and most generous free tier
  GROQ: {
    name: 'Groq',
    endpoint: 'https://api.groq.com/openai/v1/chat/completions',
    models: {
      primary: 'llama-3.3-70b-versatile',
      fallback: 'mixtral-8x7b-32768'
    },
    apiKeyEnv: 'GROQ_API_KEY',
    rateLimits: {
      requestsPerDay: 14400, // Very generous
      tokensPerMinute: 30000
    }
  },

  // Hugging Face - Multiple providers, great fallback
  HUGGINGFACE: {
    name: 'Hugging Face',
    endpoint: 'https://router.huggingface.co/v1/chat/completions',
    models: {
      primary: 'openai/gpt-oss-120b:fastest',
      fallback: 'microsoft/DialoGPT-large'
    },
    apiKeyEnv: 'HF_TOKEN',
    rateLimits: {
      requestsPerDay: 1000, // Good free tier
      tokensPerMinute: 10000
    }
  },

  // Together AI - Production ready
  TOGETHER: {
    name: 'Together AI',
    endpoint: 'https://api.together.xyz/v1/chat/completions',
    models: {
      primary: 'meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo',
      fallback: 'mistralai/Mixtral-8x7B-Instruct-v0.1'
    },
    apiKeyEnv: 'TOGETHER_API_KEY',
    rateLimits: {
      requestsPerDay: 600, // $25 free credits
      tokensPerMinute: 20000
    }
  },

  // Gemini - Keep as final fallback
  GEMINI: {
    name: 'Google Gemini',
    endpoint: 'native',
    models: {
      primary: 'models/gemini-flash-latest',
      fallback: 'models/gemini-2.5-flash'
    },
    apiKeyEnv: 'GEMINI_API_KEY',
    rateLimits: {
      requestsPerDay: 1500, // Limited but still usable
      tokensPerMinute: 32000
    }
  }
};

// OpenAI-compatible API caller for non-Gemini providers
export async function callOpenAICompatibleAPI(provider, prompt, apiKey) {
  const response = await fetch(provider.endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: provider.models.primary,
      messages: [
        {
          role: 'system',
          content: 'You are an expert academic librarian. Respond with a JSON array containing database recommendations.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.4,
      max_tokens: 2048,
      response_format: { type: 'json_object' }
    })
  });

  if (!response.ok) {
    throw new Error(`${provider.name} API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// Enhanced multi-provider AI function
export async function getAIRecommendationsWithFallback(query) {
  const providers = Object.values(LLM_PROVIDERS);
  
  for (const provider of providers) {
    const apiKey = process.env[provider.apiKeyEnv];
    
    if (!apiKey) {
      console.log(`[AI] Skipping ${provider.name} - no API key`);
      continue;
    }

    try {
      console.log(`[AI] Trying ${provider.name}...`);
      
      let response;
      if (provider.name === 'Google Gemini') {
        // Use existing Gemini implementation
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: provider.models.primary,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 2048,
            responseMimeType: "application/json",
          },
        });
        
        const prompt = `You are an expert academic librarian. Based on this search query: "${query}", recommend relevant library databases. Return a JSON array with objects containing: name, relevanceScore (1-100), and matchReason fields.`;
        const result = await model.generateContent(prompt);
        response = result.response.text();
      } else {
        // Use OpenAI-compatible API - request databases format since that's what Groq returns
        const prompt = `You are an expert academic librarian. Based on this search query: "${query}", recommend relevant library databases. Return a JSON object with a "databases" array containing objects with: name, relevanceScore (1-100), and matchReason fields.`;
        response = await callOpenAICompatibleAPI(provider, prompt, apiKey);
      }

      console.log(`[AI] ${provider.name} successful`);
      
      // Parse and normalize response to standard format
      const parsedResponse = JSON.parse(response);
      console.log(`[DEBUG] Response format:`, Object.keys(parsedResponse));
      
      // Handle different response formats and normalize to array
      let recommendations = [];
      if (Array.isArray(parsedResponse)) {
        recommendations = parsedResponse;
        console.log(`[DEBUG] Direct array with ${recommendations.length} items`);
      } else if (parsedResponse.databases && Array.isArray(parsedResponse.databases)) {
        recommendations = parsedResponse.databases;
        console.log(`[DEBUG] Databases array with ${recommendations.length} items`);
      } else if (parsedResponse.recommendations && Array.isArray(parsedResponse.recommendations)) {
        recommendations = parsedResponse.recommendations;
        console.log(`[DEBUG] Recommendations array with ${recommendations.length} items`);
      } else {
        console.warn(`[AI] ${provider.name} unexpected format:`, parsedResponse);
        return [];
      }
      
      // Ensure each item has the required fields
      const normalizedRecommendations = recommendations.map((item: any) => ({
        name: item.name || item.database || item.title || 'Unknown Database',
        relevanceScore: Math.min(100, Math.max(0, item.relevanceScore || item.score || item.relevance || 75)),
        matchReason: item.matchReason || item.reason || item.description || 'Relevant to query'
      })).filter((item: any) => item.name && item.name !== 'Unknown Database');
      
      console.log(`[DEBUG] Returning ${normalizedRecommendations.length} normalized recommendations`);
      return normalizedRecommendations;
      
    } catch (error) {
      console.warn(`[AI] ${provider.name} failed:`, error.message);
      
      // Try fallback model for the same provider
      if (provider.models.fallback && provider.models.fallback !== provider.models.primary) {
        try {
          console.log(`[AI] Trying ${provider.name} fallback model...`);
          
          if (provider.name === 'Google Gemini') {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({
              model: provider.models.fallback,
              generationConfig: {
                temperature: 0.4,
                maxOutputTokens: 2048,
              },
            });
            
            const prompt = `You are an expert academic librarian. Based on this search query: "${query}", recommend relevant library databases. Return a JSON array with objects containing: name, relevanceScore (1-100), and matchReason fields.`;
            const result = await model.generateContent(prompt);
            response = result.response.text();
            console.log(`[AI] ${provider.name} fallback successful`);
            return JSON.parse(response);
          }
        } catch (fallbackError) {
          console.warn(`[AI] ${provider.name} fallback also failed:`, fallbackError.message);
        }
      }
    }
  }
  
  console.error('[AI] All providers failed');
  return [];
}