/// <reference types="vitest" />

vi.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: vi.fn()
  };
});

// Mock with a broader set of news-related resources
vi.mock('../lib/resource-database', () => ({
  resourceDatabase: [
    {
      name: 'NewsBank',
      url: 'http://newsbank',
      description: '<p>The world\'s largest collection of newspapers. Find current &amp; archived state, national, &amp; international articles on issues, events, &amp; people.&nbsp;</p>',
      subjects: ['Family History, General, History, Political Science'],
      contentTypes: ['Newspapers', 'Full-Text Articles'],
      normName: 'newsbank'
    },
    {
      name: 'Newspaper / Periodical databases from Gale',
      url: 'http://gale-newspapers',
      description: '<p>Search the collection of Gale\'s historical newspapers and periodicals to which the BYU-I McKay Library subscribes.&nbsp;</p>',
      subjects: ['General, History'],
      contentTypes: ['Newspapers', 'Periodicals'],
      normName: 'newspaper periodical databases from gale'
    },
    {
      name: 'New York Times',
      url: 'http://nytimes',
      description: 'Access to the New York Times newspaper',
      subjects: ['Current Events, Politics, News'],
      contentTypes: ['Newspapers'],
      normName: 'new york times'
    },
    {
      name: 'Sports Database',
      url: 'http://sports',
      description: 'Comprehensive sports information and statistics',
      subjects: ['Sports, Recreation'],
      contentTypes: ['Articles', 'Statistics'],
      normName: 'sports database'
    },
    {
      name: 'Society & Culture Studies',
      url: 'http://society',
      description: 'Academic research on society and cultural studies',
      subjects: ['Sociology, Anthropology'],
      contentTypes: ['Academic Articles'],
      normName: 'society culture studies'
    }
  ]
}));

vi.mock('../lib/library-resources-database', () => ({
  libraryResourceDatabase: []
}));

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { findDatabaseResources } from '../lib/resource-ai';

describe('News prioritization logic', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv, GEMINI_API_KEY: 'fake-key' };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  it('should prioritize news collections when "news" is in query', async () => {
    // Mock AI to return mixed results (some news, some subject-based)
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'Sports Database', relevanceScore: 95 },
          { name: 'Society & Culture Studies', relevanceScore: 90 },
          { name: 'New York Times', relevanceScore: 85 }
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
    
    console.log('Results for "news about sports and society":', result.map(r => ({ name: r.name, score: r.relevanceScore })));
    
    // Should find both AI suggestions and news collections via prioritization
    expect(result.length).toBeGreaterThanOrEqual(3);
    
    // Should include major news collections injected via news prioritization
    const resultNames = result.map(r => r.name.toLowerCase());
    expect(resultNames.some(name => name.includes('newsbank'))).toBe(true);
    expect(resultNames.some(name => name.includes('gale'))).toBe(true);
    
    // Should still include subject-relevant results - but only news sources for news queries
    expect(resultNames.some(name => name.includes('new york times'))).toBe(true);
    
    // New York Times should be present (either from AI or news injection)
    expect(resultNames.some(name => name.includes('new york times'))).toBe(true);
  });

  it('should prioritize news collections when "newspapers" is in query', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'Sports Database', relevanceScore: 95 }
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

    const result = await findDatabaseResources('newspapers about sports', 'database');
    
    console.log('Results for "newspapers about sports":', result.map(r => ({ name: r.name, score: r.relevanceScore })));
    
    // Should include major news collections
    const resultNames = result.map(r => r.name.toLowerCase());
    expect(resultNames.some(name => name.includes('newsbank'))).toBe(true);
    expect(resultNames.some(name => name.includes('gale'))).toBe(true);
  });

  it('should work normally when no news terms are present', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'Sports Database', relevanceScore: 95 },
          { name: 'Society & Culture Studies', relevanceScore: 90 }
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
    
    console.log('Results for "sports and society research" (no news terms):', result.map(r => ({ name: r.name, score: r.relevanceScore })));
    
    // Should work normally without forcing news collections
    expect(result.length).toBeGreaterThan(0);
    
    // Should include subject-relevant results
    const resultNames = result.map(r => r.name.toLowerCase());
    expect(resultNames.some(name => name.includes('sports'))).toBe(true);
    expect(resultNames.some(name => name.includes('society'))).toBe(true);
  });
});
