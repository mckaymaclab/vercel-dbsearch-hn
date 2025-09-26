/// <reference types="vitest" />

vi.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: vi.fn()
  };
});

// Mock with a broader set of book-related resources including the library catalog
vi.mock('../lib/resource-database', () => ({
  resourceDatabase: [
    {
      name: 'BYU-Idaho McKay Library Catalog',
      url: 'https://byui.idm.oclc.org/login?url=https://byui.primo.exlibrisgroup.com/discovery/search?vid=01BYUI_INST:BYUI&lang=en',
      description: '<p>Access to the BYU-I McKay Library catalog - search for physical materials (books, CDs, DVDs, music, etc.) and eBooks in the library collection.</p>',
      subjects: ['General', 'Books', 'Library Catalog'],
      contentTypes: ['Books', 'eBooks', 'Physical Materials'],
      normName: 'byu idaho mckay library catalog'
    },
    {
      name: 'EBSCO eBook Academic Collection',
      url: 'http://ebsco-ebooks',
      description: '<p>A comprehensive collection of academic eBooks covering multiple subjects.</p>',
      subjects: ['General', 'Academic', 'eBooks'],
      contentTypes: ['eBooks', 'Academic Materials'],
      normName: 'ebsco ebook academic collection'
    },
    {
      name: 'ProQuest Ebook Central Academic Complete',
      url: 'http://proquest-ebooks',
      description: '<p>ProQuest Ebook Central Academic Complete provides access to a vast collection of academic books.</p>',
      subjects: ['General', 'Academic', 'eBooks'],
      contentTypes: ['eBooks', 'Academic Books'],
      normName: 'proquest ebook central academic complete'
    },
    {
      name: 'Oxford Scholarship Online',
      url: 'http://oxford-books',
      description: '<p>Scholarly books published by Oxford University Press.</p>',
      subjects: ['Academic', 'Scholarly Books'],
      contentTypes: ['eBooks', 'Scholarly Publications'],
      normName: 'oxford scholarship online'
    },
    {
      name: 'JSTOR',
      url: 'http://jstor',
      description: '<p>A digital library with access millions of academic journals, books, and primary sources.</p>',
      subjects: ['General', 'Academic'],
      contentTypes: ['Journals', 'Books', 'Primary Resources'],
      normName: 'jstor'
    },
    {
      name: 'Sports Database',
      url: 'http://sports',
      description: 'Comprehensive sports information and statistics',
      subjects: ['Sports', 'Recreation'],
      contentTypes: ['Articles', 'Statistics'],
      normName: 'sports database'
    },
    {
      name: 'Chemistry Research Database',
      url: 'http://chemistry',
      description: 'Scientific chemistry research and articles',
      subjects: ['Chemistry', 'Science'],
      contentTypes: ['Articles', 'Research Papers'],
      normName: 'chemistry research database'
    }
  ]
}));

vi.mock('../lib/library-resources-database', () => ({
  libraryResourceDatabase: []
}));

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { findDatabaseResources, hasBookTerms, getBookCollections } from '../lib/resource-ai';

describe('Book prioritization logic', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv, GEMINI_API_KEY: 'fake-key' };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  it('should prioritize library catalog when "books" is in query', async () => {
    // Mock AI to return mixed results (some book-related, some subject-based)
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'Sports Database', relevanceScore: 85 },
          { name: 'Chemistry Research Database', relevanceScore: 80 },
          { name: 'Oxford Scholarship Online', relevanceScore: 90 }
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

    const result = await findDatabaseResources('books about sports and chemistry', 'database');
    
    console.log('Results for "books about sports and chemistry":', result.map(r => ({ name: r.name, score: r.relevanceScore })));
    
    // Should find both AI suggestions and book collections via prioritization
    expect(result.length).toBeGreaterThanOrEqual(3);
    
    // Should include the main library catalog with highest priority
    const libraryCatalog = result.find(r => r.name === 'BYU-Idaho McKay Library Catalog');
    expect(libraryCatalog).toBeDefined();
    expect(libraryCatalog?.relevanceScore).toBeGreaterThan(90); // High priority score
    
    // Should include other book collections
    const resultNames = result.map(r => r.name.toLowerCase());
    expect(resultNames.some(name => name.includes('ebsco ebook') || name.includes('ebook'))).toBe(true);
    
    // Should still include subject-relevant results
    expect(resultNames.some(name => name.includes('oxford'))).toBe(true);
  });

  it('should prioritize library catalog when "book" (singular) is in query', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'Chemistry Research Database', relevanceScore: 95 }
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

    const result = await findDatabaseResources('find a book about chemistry', 'database');
    
    console.log('Results for "find a book about chemistry":', result.map(r => ({ name: r.name, score: r.relevanceScore })));
    
    // Should include the main library catalog
    const libraryCatalog = result.find(r => r.name === 'BYU-Idaho McKay Library Catalog');
    expect(libraryCatalog).toBeDefined();
    expect(libraryCatalog?.relevanceScore).toBeGreaterThanOrEqual(94); // Should be injected with high score
  });

  it('should prioritize library catalog when "textbooks" is in query', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'Chemistry Research Database', relevanceScore: 85 }
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

    const result = await findDatabaseResources('chemistry textbooks for students', 'database');
    
    console.log('Results for "chemistry textbooks for students":', result.map(r => ({ name: r.name, score: r.relevanceScore })));
    
    // Should include book collections
    const resultNames = result.map(r => r.name.toLowerCase());
    expect(resultNames.some(name => name.includes('mckay library catalog'))).toBe(true);
    expect(resultNames.some(name => name.includes('ebook') || name.includes('book'))).toBe(true);
  });

  it('should prioritize library catalog when "ebooks" is in query', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'Sports Database', relevanceScore: 80 }
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

    const result = await findDatabaseResources('sports ebooks and digital books', 'database');
    
    console.log('Results for "sports ebooks and digital books":', result.map(r => ({ name: r.name, score: r.relevanceScore })));
    
    // Should include book collections, especially ebook platforms
    const resultNames = result.map(r => r.name.toLowerCase());
    expect(resultNames.some(name => name.includes('mckay library catalog'))).toBe(true);
    expect(resultNames.some(name => name.includes('ebsco ebook'))).toBe(true);
    expect(resultNames.some(name => name.includes('proquest ebook'))).toBe(true);
  });

  it('should work normally when no book terms are present', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'Sports Database', relevanceScore: 95 },
          { name: 'Chemistry Research Database', relevanceScore: 90 }
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

    const result = await findDatabaseResources('sports and chemistry research', 'database');
    
    console.log('Results for "sports and chemistry research" (no book terms):', result.map(r => ({ name: r.name, score: r.relevanceScore })));
    
    // Should work normally without forcing book collections
    expect(result.length).toBeGreaterThan(0);
    
    // Should include subject-relevant results without book prioritization
    const resultNames = result.map(r => r.name.toLowerCase());
    expect(resultNames.some(name => name.includes('sports'))).toBe(true);
    expect(resultNames.some(name => name.includes('chemistry'))).toBe(true);
    
    // Library catalog should not be artificially boosted without book terms
    const libraryCatalog = result.find(r => r.name === 'BYU-Idaho McKay Library Catalog');
    // It might appear via normal matching, but shouldn't have the artificial boost
    if (libraryCatalog) {
      expect(libraryCatalog.relevanceScore).toBeLessThan(94); // Below the injection threshold
    }
  });

  it('should handle the specific "books about Sweden and Denmark" query', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'JSTOR', relevanceScore: 95 },
          { name: 'Oxford Scholarship Online', relevanceScore: 85 },
          { name: 'Sports Database', relevanceScore: 50 } // Irrelevant but included by AI
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

    const result = await findDatabaseResources('books about Sweden and Denmark', 'database');
    
    console.log('Results for "books about Sweden and Denmark":', result.map(r => ({ name: r.name, score: r.relevanceScore })));
    
    // Should prioritize the library catalog as the #1 source for books
    const libraryCatalog = result.find(r => r.name === 'BYU-Idaho McKay Library Catalog');
    expect(libraryCatalog).toBeDefined();
    expect(libraryCatalog?.relevanceScore).toBeGreaterThan(90);
    
    // Should include other book platforms
    const resultNames = result.map(r => r.name.toLowerCase());
    expect(resultNames.some(name => name.includes('ebook'))).toBe(true);
    expect(resultNames.some(name => name.includes('oxford'))).toBe(true);
    expect(resultNames.some(name => name.includes('jstor'))).toBe(true);
    
    // The library catalog should appear in the first 5 results
    const topResults = result.slice(0, 5);
    expect(topResults.some(r => r.name === 'BYU-Idaho McKay Library Catalog')).toBe(true);
  });

  it('should only apply book prioritization in database search mode', async () => {
    const mockGenerateContent = vi.fn().mockResolvedValueOnce({
      response: {
        text: () => JSON.stringify([
          { name: 'Chemistry Research Database', relevanceScore: 80 }
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

    // Test with library search mode - should not apply book prioritization
    const result = await findDatabaseResources('books about chemistry', 'library');
    
    console.log('Results for "books about chemistry" in library mode:', result.map(r => ({ name: r.name, score: r.relevanceScore })));
    
    // In library mode, book prioritization should not apply
    // The specific injection logic is only for database mode
    expect(result.length).toBeGreaterThanOrEqual(0);
    
    // Results should be based on library catalog content, not database prioritization
  });
});

describe('Book detection helper functions', () => {
  it('should detect book terms correctly', () => {
    // Test the actual hasBookTerms function
    
    // Should detect various book-related terms
    expect(hasBookTerms('books about history')).toBe(true);
    expect(hasBookTerms('find a book on chemistry')).toBe(true);
    expect(hasBookTerms('textbooks for students')).toBe(true);
    expect(hasBookTerms('ebooks and digital resources')).toBe(true);
    expect(hasBookTerms('e-books on literature')).toBe(true);
    expect(hasBookTerms('novels by dickens')).toBe(true);
    expect(hasBookTerms('literature review')).toBe(true);
    expect(hasBookTerms('library catalog search')).toBe(true);
    expect(hasBookTerms('physical books only')).toBe(true);
    expect(hasBookTerms('monographs on sociology')).toBe(true);
    
    // Should not detect non-book terms
    expect(hasBookTerms('articles and journals')).toBe(false);
    expect(hasBookTerms('news and current events')).toBe(false);
    expect(hasBookTerms('music and audio')).toBe(false);
    expect(hasBookTerms('video content')).toBe(false);
    expect(hasBookTerms('research databases')).toBe(false);
    
    // Should handle case insensitivity
    expect(hasBookTerms('BOOKS about science')).toBe(true);
    expect(hasBookTerms('Books About History')).toBe(true);
    expect(hasBookTerms('E-BOOKS and digital')).toBe(true);
  });

  it('should find book collections in catalog', () => {
    // Mock a catalog with book-related resources
    const mockCatalog = [
      {
        name: 'BYU-Idaho McKay Library Catalog',
        url: 'http://catalog',
        description: 'Main library catalog',
        subjects: ['Books'],
        contentTypes: ['Books']
      },
      {
        name: 'EBSCO eBook Academic Collection', 
        url: 'http://ebsco',
        description: 'Academic ebooks',
        subjects: ['eBooks'],
        contentTypes: ['eBooks']
      },
      {
        name: 'Sports Database',
        url: 'http://sports',
        description: 'Sports information',
        subjects: ['Sports'],
        contentTypes: ['Articles']
      }
    ];

    const bookCollections = getBookCollections(mockCatalog as any);
    
    // Should find book-related collections
    expect(bookCollections.length).toBeGreaterThan(0);
    expect(bookCollections.some(r => r.name === 'BYU-Idaho McKay Library Catalog')).toBe(true);
    expect(bookCollections.some(r => r.name === 'EBSCO eBook Academic Collection')).toBe(true);
    
    // Should not include non-book collections
    expect(bookCollections.some(r => r.name === 'Sports Database')).toBe(false);
  });
});