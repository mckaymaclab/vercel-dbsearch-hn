/// <reference types="vitest" />

vi.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: vi.fn()
  };
});

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { findDatabaseResources } from '../lib/resource-ai';

describe('News prioritization with real catalog', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv, GEMINI_API_KEY: 'fake-key' };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  it('should prioritize key news collections for "news about sports and society"', async () => {
    // Mock AI to return subject-focused results (like the real scenario)
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'JSTOR', relevanceScore: 95 },
          { name: 'SPORTDiscus with Full Text', relevanceScore: 92 },
          { name: 'Sociological Abstracts', relevanceScore: 88 },
          { name: 'New York Times', relevanceScore: 80 }
        ]),
        functionCall: () => undefined,
        functionCalls: () => undefined
      }
    });

    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    vi.mocked(GoogleGenerativeAI).mockImplementation(() => ({
      getGenerativeModel: () => ({
        generateContent: mockGenerateContent
      })
    } as any));

    const result = await findDatabaseResources('news about sports and society', 'database');
    
    console.log('Real catalog results for "news about sports and society":');
    result.forEach((r, i) => {
      console.log(`${i + 1}. ${r.name} (score: ${r.relevanceScore}) ${(r as any)._newsInject ? '[NEWS-INJECT]' : ''}`);
    });
    
    const resultNames = result.map(r => r.name.toLowerCase());
    
    // Should include key news collections mentioned in requirements
    expect(resultNames.some(name => name.includes('newsbank'))).toBe(true);
    expect(resultNames.some(name => name.includes('new york times'))).toBe(true);
    
    // Should also find some additional news sources if available
    const hasGaleNews = resultNames.some(name => name.includes('gale') && name.includes('news'));
    const hasNewsstream = resultNames.some(name => name.includes('newsstream'));
    const hasOneFile = resultNames.some(name => name.includes('onefile'));
    
    console.log('News sources found:');
    console.log('- NewsBank:', resultNames.some(name => name.includes('newsbank')));
    console.log('- Gale News:', hasGaleNews);
    console.log('- Newsstream:', hasNewsstream);
    console.log('- OneFile:', hasOneFile);
    console.log('- NYT:', resultNames.some(name => name.includes('new york times')));
    
    // Should have more results due to news prioritization
    expect(result.length).toBeGreaterThanOrEqual(4);
  });

  it('should handle historical news queries', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'Historical Research Database', relevanceScore: 90 }
        ]),
        functionCall: () => undefined,
        functionCalls: () => undefined
      }
    });

    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    vi.mocked(GoogleGenerativeAI).mockImplementation(() => ({
      getGenerativeModel: () => ({
        generateContent: mockGenerateContent
      })
    } as any));

    const result = await findDatabaseResources('historical news about civil war', 'database');
    
    console.log('Historical news results:');
    result.forEach((r, i) => {
      console.log(`${i + 1}. ${r.name} (score: ${r.relevanceScore}) ${(r as any)._newsInject ? '[NEWS-INJECT]' : ''}`);
    });
    
    const resultNames = result.map(r => r.name.toLowerCase());
    
    // Should still include NewsBank for historical queries
    expect(resultNames.some(name => name.includes('newsbank'))).toBe(true);
    
    // Should include historical collections when available
    const hasHistoricalNews = resultNames.some(name => name.includes('historical') && name.includes('news'));
    console.log('- Historical news collections found:', hasHistoricalNews);
  });

  it('should not interfere with non-news queries', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'SPORTDiscus with Full Text', relevanceScore: 98 },
          { name: 'Sociological Abstracts', relevanceScore: 92 }
        ]),
        functionCall: () => undefined,
        functionCalls: () => undefined
      }
    });

    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    vi.mocked(GoogleGenerativeAI).mockImplementation(() => ({
      getGenerativeModel: () => ({
        generateContent: mockGenerateContent
      })
    } as any));

    const result = await findDatabaseResources('sports and society research', 'database');
    
    console.log('Non-news query results:');
    result.forEach((r, i) => {
      console.log(`${i + 1}. ${r.name} (score: ${r.relevanceScore}) ${(r as any)._newsInject ? '[NEWS-INJECT]' : ''}`);
    });
    
    // Should not have news injection for non-news queries
    const hasNewsInject = result.some(r => (r as any)._newsInject);
    expect(hasNewsInject).toBe(false);
    
    // Should work normally
    expect(result.length).toBeGreaterThan(0);
  });
});
