// Test BM25 matching with music aliases (no AI needed)
const { CATALOG } = require('./lib/resource-database.ts');

// Simple text processing functions (duplicated from resource-ai.ts for testing)
function norm(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2019\u2018'']/g, "'")
    .replace(/[\u2013\u2014–—]/g, "-")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9' -]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function textTerms(text) {
  const STOP = new Set([
    "the","a","an","and","or","for","of","on","in","to","with","by","about","from","into","at","as","is","are","be","being","been","that","this","these","those","it","its","their"
  ]);
  return norm(text)
    .split(" ")
    .filter(t => t && !STOP.has(t));
}

// Find Music Periodicals Database
const musicDB = CATALOG.find(item => item.name === 'Music Periodicals Database');

if (!musicDB) {
  console.log('❌ Music Periodicals Database not found in catalog');
  process.exit(1);
}

console.log('✅ Found Music Periodicals Database');
console.log('Name:', musicDB.name);
console.log('Description:', musicDB.description?.slice(0, 100) + '...');

// Test various music-related queries
const testQueries = [
  'compositional techniques of igor stravinsky',
  'classical music',
  'music theory',
  'stravinsky',
  'jazz',
  'musicology',
  'opera',
  'composers',
  'beethoven',
  'musical analysis'
];

console.log('\n=== Testing BM25 Term Matching ===');

for (const query of testQueries) {
  const queryTerms = textTerms(query);
  const dbText = `${musicDB.name} ${musicDB.description || ''}`;
  const dbTerms = textTerms(dbText);
  
  // Check for overlapping terms
  const overlap = queryTerms.filter(qt => dbTerms.includes(qt));
  
  console.log(`\nQuery: "${query}"`);
  console.log(`Query terms: [${queryTerms.join(', ')}]`);
  console.log(`Overlap: [${overlap.join(', ')}]`);
  console.log(`Match: ${overlap.length > 0 ? '✅' : '❌'}`);
}

console.log('\n=== Note ===');
console.log('The aliases are handled by the alias registry system, not directly in BM25.');
console.log('When no direct term overlap exists, aliases should bridge the gap.');
console.log('Check the alias registry for "music periodicals database" to see the full list.');
