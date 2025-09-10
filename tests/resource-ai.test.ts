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
});
