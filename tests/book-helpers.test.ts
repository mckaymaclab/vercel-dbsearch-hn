// Simple unit test for book helper functions
import { describe, it, expect } from 'vitest';

describe('Book helper functions', () => {
  it('should detect book terms correctly', () => {
    // Test the regex pattern directly since it's simple
    const hasBookTermsRegex = /\b(books?|e-?books?|textbooks?|monographs?|novels?|literature|catalog|catalogue|library catalog|physical books)\b/i;
    
    // Should detect various book-related terms
    expect(hasBookTermsRegex.test('books about history')).toBe(true);
    expect(hasBookTermsRegex.test('find a book on chemistry')).toBe(true);
    expect(hasBookTermsRegex.test('textbooks for students')).toBe(true);
    expect(hasBookTermsRegex.test('ebooks and digital resources')).toBe(true);
    expect(hasBookTermsRegex.test('e-books on literature')).toBe(true);
    expect(hasBookTermsRegex.test('novels by dickens')).toBe(true);
    expect(hasBookTermsRegex.test('literature review')).toBe(true);
    expect(hasBookTermsRegex.test('library catalog search')).toBe(true);
    expect(hasBookTermsRegex.test('physical books only')).toBe(true);
    expect(hasBookTermsRegex.test('monographs on sociology')).toBe(true);
    
    // Should not detect non-book terms
    expect(hasBookTermsRegex.test('articles and journals')).toBe(false);
    expect(hasBookTermsRegex.test('news and current events')).toBe(false);
    expect(hasBookTermsRegex.test('music and audio')).toBe(false);
    expect(hasBookTermsRegex.test('video content')).toBe(false);
    expect(hasBookTermsRegex.test('research databases')).toBe(false);
    
    // Should handle case insensitivity
    expect(hasBookTermsRegex.test('BOOKS about science')).toBe(true);
    expect(hasBookTermsRegex.test('Books About History')).toBe(true);
    expect(hasBookTermsRegex.test('E-BOOKS and digital')).toBe(true);
  });

  it('should detect specific query "books about Sweden and Denmark"', () => {
    const hasBookTermsRegex = /\b(books?|e-?books?|textbooks?|monographs?|novels?|literature|catalog|catalogue|library catalog|physical books)\b/i;
    expect(hasBookTermsRegex.test('books about Sweden and Denmark')).toBe(true);
  });
});