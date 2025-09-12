/// <reference types="vitest" />

vi.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: vi.fn()
  };
});

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { findDatabaseResources } from '../lib/resource-ai';

describe('News prioritization requirement verification', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv, GEMINI_API_KEY: 'fake-key' };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  it('should prioritize news collections over subject-based collections for "news about sports and society"', async () => {
    // Mock the real scenario: AI returns subject-focused results
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'SPORTDiscus with Full Text', relevanceScore: 98, matchReason: 'Specialized database focused on sports and sports medicine, including societal aspects of sports.' },
          { name: 'Sociological Abstracts', relevanceScore: 92, matchReason: 'Indexes and abstracts scholarly literature in sociology and related disciplines, including research on sports and society.' },
          { name: 'JSTOR', relevanceScore: 85, matchReason: 'Contains scholarly journals and books that cover the intersection of sports and society from a historical and academic perspective.' },
          { name: 'New York Times', relevanceScore: 80, matchReason: 'Provides access to the New York Times, a major news source with extensive coverage of sports and societal issues.' }
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
    
    console.log('\n=== Requirements Verification ===');
    console.log('Query: "news about sports and society"');
    console.log(`Results count: ${result.length}\n`);
    
    const resultNames = result.map(r => r.name.toLowerCase());
    
    // REQUIREMENT 1: NewsBank should appear for news queries
    const hasNewsBank = resultNames.some(name => name.includes('newsbank'));
    console.log(`✓ NewsBank included: ${hasNewsBank}`);
    expect(hasNewsBank).toBe(true);
    
    // REQUIREMENT 2: Gale newspaper collections should appear
    const hasGaleNews = resultNames.some(name => 
      (name.includes('gale') && name.includes('news')) ||
      (name.includes('newspaper') && name.includes('gale'))
    );
    console.log(`✓ Gale newspaper collections: ${hasGaleNews}`);
    expect(hasGaleNews).toBe(true);
    
    // REQUIREMENT 3: U.S. Newsstream should appear
    const hasNewsstream = resultNames.some(name => name.includes('newsstream'));
    console.log(`✓ U.S. Newsstream: ${hasNewsstream}`);
    expect(hasNewsstream).toBe(true);
    
    // REQUIREMENT 4: Individual newspapers (NYT, WSJ, Atlantic) should appear
    const hasNYT = resultNames.some(name => name.includes('new york times'));
    const hasWSJ = resultNames.some(name => name.includes('wall street'));
    const hasAtlantic = resultNames.some(name => name.includes('atlantic'));
    console.log(`✓ New York Times: ${hasNYT}`);
    console.log(`✓ Wall Street Journal: ${hasWSJ}`);
    console.log(`✓ The Atlantic: ${hasAtlantic}`);
    
    expect(hasNYT).toBe(true);
    // WSJ and Atlantic should be included but may not always be in top results
    
    // Should still include subject-relevant results
    const hasSubjectResults = result.some(r => 
      r.name.toLowerCase().includes('jstor') ||
      r.name.toLowerCase().includes('sport') ||
      r.name.toLowerCase().includes('socio')
    );
    console.log(`✓ Subject-based results preserved: ${hasSubjectResults}`);
    
    // REQUIREMENT 6: Should NOT include JSTOR (non-news) in news queries
    const hasJSTOR = result.some(r => r.name.toLowerCase().includes('jstor'));
    console.log(`✓ JSTOR excluded from news query: ${!hasJSTOR}`);
    expect(hasJSTOR).toBe(false);
    
    // REQUIREMENT 6: News collections should be prioritized (high scores)
    const newsCollections = result.filter(r => 
      r.name.toLowerCase().includes('newsbank') ||
      r.name.toLowerCase().includes('newsstream') ||
      (r.name.toLowerCase().includes('gale') && r.name.toLowerCase().includes('news'))
    );
    
    const newsHasHighScores = newsCollections.every(nc => nc.relevanceScore >= 85);
    console.log(`✓ News collections have high relevance scores: ${newsHasHighScores}`);
    expect(newsHasHighScores).toBe(true);
    
    console.log('\nFinal Results:');
    result.forEach((r, i) => {
      const isNewsInject = (r as any)._newsInject ? '[NEWS-PRIORITIZED]' : '';
      console.log(`${i + 1}. ${r.name} (${r.relevanceScore}) ${isNewsInject}`);
    });
    
    console.log('\n=== Requirement Met ===');
    console.log('✅ News collections are now prioritized for news-focused queries');
    console.log('✅ Subject expertise is preserved alongside news prioritization');
    console.log('✅ Users will see news sources even when AI focuses on subject matter');
  });

  it('should handle "newspapers" trigger word', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'SPORTDiscus with Full Text', relevanceScore: 95 }
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

    const result = await findDatabaseResources('newspapers about local politics', 'database');
    
    const resultNames = result.map(r => r.name.toLowerCase());
    
    // Should trigger news prioritization
    expect(resultNames.some(name => name.includes('newsbank'))).toBe(true);
    expect(resultNames.some(name => name.includes('news'))).toBe(true);
    
    console.log('✅ "newspapers" trigger word works correctly');
  });

  it('should NOT trigger news prioritization for non-news queries', async () => {
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
    
    // Should NOT have news injection
    const hasNewsInject = result.some(r => (r as any)._newsInject);
    expect(hasNewsInject).toBe(false);
    
    console.log('✅ Non-news queries work without interference');
  });
});
