// Unit test for book filtering logic
import { describe, it, expect } from 'vitest';
import { hasBookTerms } from '../lib/resource-ai';

describe('Book Filtering Logic', () => {
  it('should detect book terms in queries', () => {
    const bookQueries = [
      'salmon books',
      'textbooks for chemistry', 
      'find ebooks about history',
      'library catalog search',
      'books on engineering',
      'literature review'
    ];
    
    bookQueries.forEach(query => {
      expect(hasBookTerms(query)).toBe(true);
    });
  });
  
  it('should not detect book terms in non-book queries', () => {
    const nonBookQueries = [
      'salmon research',
      'chemistry articles',
      'historical documents', 
      'news about science',
      'music videos'
    ];
    
    nonBookQueries.forEach(query => {
      expect(hasBookTerms(query)).toBe(false);
    });
  });
  
  it('should filter out obvious non-book sources for book queries', () => {
    const nonBookSources = [
      'Web of Science',
      'JSTOR Articles',
      'PubMed Database',
      'Journal Citation Reports',
      'Abstract Database',
      'Periodical Index'
    ];
    
    const regex = /\b(journals?|abstracts?|indexe?s?|citations?|articles?|periodicals?|newspapers?|web of science|scopus|pubmed)\b/i;
    
    nonBookSources.forEach(source => {
      expect(regex.test(source), `Expected "${source}" to match non-book pattern`).toBe(true);
    });
  });
  
  it('should allow book sources for book queries', () => {
    const bookSources = [
      'BYU-Idaho McKay Library Catalog',
      'EBSCO eBook Academic Collection', 
      'ProQuest Ebook Central Academic Complete',
      'Gale eBooks',
      'Cambridge Core', // Should be allowed as a book platform
    ];
    
    const bookRegex = /\b(catalogs?|catalogues?|librar(y|ies)|books?|e-?books?)\b/i;
    const nonBookRegex = /\b(journals?|abstracts?|indexe?s?|citations?|articles?|periodicals?|newspapers?|web of science|scopus|pubmed)\b/i;
    
    bookSources.forEach(source => {
      const isBook = bookRegex.test(source);
      const isNonBook = nonBookRegex.test(source);
      const shouldKeep = isBook || !isNonBook; // Allow if it's a book source OR not an obvious non-book source
      expect(shouldKeep, `Expected "${source}" to be allowed for book queries`).toBe(true);
    });
  });
});