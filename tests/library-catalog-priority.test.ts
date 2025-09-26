// Test to verify BYU Library Catalog prioritization
import { describe, it, expect } from 'vitest';
import { findDatabaseResources } from '../lib/resource-ai';

describe('BYU Library Catalog Prioritization', () => {
  it('should make BYU-Idaho McKay Library Catalog #1 for book queries', async () => {
    // Test with just one query to avoid timeout
    const query = 'books about chemistry';
    
    console.log(`\n--- Testing: "${query}" ---`);
    
    const results = await findDatabaseResources(query, "database");
    expect(results.length, `No results found for "${query}"`).toBeGreaterThan(0);
    
    // Find the library catalog
    const libraryCatalog = results.find(r => 
      /\bbyu-?idaho\s+mckay\s+library\s+catalog\b/i.test(r.name)
    );
    
    expect(libraryCatalog, `Library catalog not found for "${query}"`).toBeDefined();
    
    console.log(`Top 5 results:`, results.slice(0, 5).map((r, i) => `${i+1}. ${r.name} (${r.relevanceScore})`));
    
    // Library catalog should be #1
    expect(results[0].name, `Library catalog should be #1 for "${query}". Got: ${results[0].name}`).toBe(libraryCatalog!.name);
  }, 10000); // 10 second timeout
  
  it('should handle salmon books query correctly', async () => {
    const query = 'salmon books';
    
    console.log(`\n--- Testing: "${query}" ---`);
    
    const results = await findDatabaseResources(query, "database");
    expect(results.length, `No results found for "${query}"`).toBeGreaterThan(0);
    
    // Find the library catalog
    const libraryCatalog = results.find(r => 
      /\bbyu-?idaho\s+mckay\s+library\s+catalog\b/i.test(r.name)
    );
    
    expect(libraryCatalog, `Library catalog not found for "${query}"`).toBeDefined();
    
    console.log(`Top 5 results:`, results.slice(0, 5).map((r, i) => `${i+1}. ${r.name} (${r.relevanceScore})`));
    
    // Library catalog should be #1
    expect(results[0].name, `Library catalog should be #1 for "${query}". Got: ${results[0].name}`).toBe(libraryCatalog!.name);
  }, 10000);
});