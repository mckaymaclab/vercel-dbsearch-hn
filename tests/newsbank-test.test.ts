/// <reference types="vitest" />

vi.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: vi.fn()
  };
});

vi.mock('../lib/resource-database', () => ({
  resourceDatabase: [{
    name: 'NewsBank',
    url: 'http://newsbank',
    description: '<p>The world\'s largest collection of newspapers. Find current &amp; archived state, national, &amp; international articles on issues, events, &amp; people.&nbsp;</p>',
    subjects: ['Family History, General, History, Political Science'],
    contentTypes: ['Newspapers', 'Full-Text Articles'],
    normName: 'newsbank'
  }]
}));

vi.mock('../lib/library-resources-database', () => ({
  libraryResourceDatabase: []
}));

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { findDatabaseResources } from '../lib/resource-ai';

describe('NewsBank search issue', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv, GEMINI_API_KEY: 'fake-key' };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  it('should find NewsBank when searching for "news"', async () => {
    // Mock AI to return NewsBank as a suggestion
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([{ name: 'NewsBank', relevanceScore: 95 }]),
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

    const result = await findDatabaseResources('news', 'database');
    
    console.log('Search results for "news":', result);
    
    // NewsBank should be found since it contains newspapers and news articles
    expect(result.length).toBeGreaterThan(0);
    expect(result.some(r => r.name.toLowerCase().includes('newsbank'))).toBe(true);
  });

  it('should show BM25 score for "news" query against NewsBank', async () => {
    // This test will help us see what BM25 score NewsBank gets for "news"
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => '[]', // Empty AI response to focus on BM25 injection
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

    console.log('=== Starting BM25-only test ===');
    const result = await findDatabaseResources('news', 'database');
    
    console.log('BM25 injection results for "news":', result);
    console.log('=== End BM25-only test ===');
    // This should show us if NewsBank gets picked up by BM25 injection
  });
});
