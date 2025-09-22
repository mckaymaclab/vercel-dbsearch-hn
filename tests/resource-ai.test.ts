/// <reference types="vitest" />

vi.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: vi.fn()
  };
});

vi.mock('../lib/resource-database', () => {
  return {
    resourceDatabase: [{
      name: 'TestDB',
      url: 'http://test',
      description: 'desc',
      normName: 'testdb'
    }]
  };
});

vi.mock('../lib/library-resources-database', () => {
  return {
    libraryResourceDatabase: [{
      name: 'TestDB',
      url: 'http://test',
      description: 'desc',
      normName: 'testdb'
    }]
  };
});

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { findDatabaseResources } from '../lib/resource-ai';

describe('findDatabaseResources', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv, GEMINI_API_KEY: 'fake-key' };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  it('should export findDatabaseResources', () => {
    expect(typeof findDatabaseResources).toBe('function');
  });

  it('returns empty array if no GEMINI_API_KEY', async () => {
    process.env.GEMINI_API_KEY = '';
    const result = await findDatabaseResources('test', 'database');
    expect(result).toEqual([]);
  });

  it('handles empty query gracefully', async () => {
    const result = await findDatabaseResources('', 'database');
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([]);
  });

  it('returns expected results for a simple exact query', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([{ name: 'TestDB', relevanceScore: 90 }]),
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

    const result = await findDatabaseResources('testdb', 'database');
    expect(result[0]?.name).toBe('TestDB');
    expect(mockGenerateContent).toHaveBeenCalled();
  });

  it('returns empty array for spurious LLM results', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([{ name: 'Completely Offtopic', relevanceScore: 99 }]),
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

    const result = await findDatabaseResources('testdb', 'database');
    expect(result).toEqual([]);
    expect(mockGenerateContent).toHaveBeenCalled();
  });

  it('returns up to 50 results with relevanceScore >= 50', async () => {
    const mockResults = Array.from({ length: 50 }, (_, i) => ({
      name: `DB${i + 1}`,
      relevanceScore: 100 - i // All results >= 50
    }));
    // Use the same normalization as the backend
  function norm(s: string) {
      return (s || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[\u2019\u2018’‘]/g, "'")
        .replace(/[\u2013\u2014–—]/g, "-")
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9' -]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
    const mockCatalog = Array.from({ length: 60 }, (_, i) => {
      const name = `DB${i + 1}`;
      const normName = norm(name);
      return {
        name,
        url: `http://db${i + 1}`,
        description: `desc${i + 1}`,
        normName
      };
    });
    vi.resetModules();
    vi.doMock('../lib/resource-database', () => ({ resourceDatabase: mockCatalog }));
    vi.doMock('../lib/library-resources-database', () => ({ libraryResourceDatabase: mockCatalog }));
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify(mockResults),
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
  const { findDatabaseResources } = await import('../lib/resource-ai');
  // Debug: print the catalog and LLM results
  // eslint-disable-next-line no-console
  console.log('MOCK CATALOG:', mockCatalog.map(x => x.name));
  // eslint-disable-next-line no-console
  console.log('MOCK LLM RESULTS:', mockResults.map(x => x.name));
  const result = await findDatabaseResources('test', 'database');
  // eslint-disable-next-line no-console
  console.log('RESULTS:', result.map(x => x.name));
  expect(result.length).toBe(50);
  expect(result.every(r => r.relevanceScore >= 50)).toBe(true);
  expect(result[0].name).toBe('DB1');
  expect(result[49].name).toBe('DB50');
  });
});
