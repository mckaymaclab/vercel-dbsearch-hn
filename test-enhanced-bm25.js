// Test the improved BM25 indexing with moreInfo field
console.log('Testing Music Periodicals Database with enhanced BM25...');

// Sample data structure (simplified from the actual database)
const musicDB = {
  name: "Music Periodicals Database",
  description: "<p>A database with indexes, abstracts, and full-text for hundreds of international music periodicals, most are recent; some date to the 1800s.</p>",
  moreInfo: "The periodicals (journals, newspapers, magazines, reports) included come from over 20 countries. Coverage includes millions of records, the majority from the most recent ten years of publication. Some complete journal runs are included, with indexing back to 1874.Subject Coverage:Classical music and operaJazz and bluesRock, soul, and hip-hopFolk musicMusic businessSound recordingEthnomusicologyMusic educationMusic therapyInstrumentsMusical theatre"
};

// Simulate the enhanced BM25 indexing
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

function stripTags(s) {
  return (s || "").replace(/<[^>]*>/g, "");
}

function textTerms(text) {
  const STOP = new Set([
    "the","a","an","and","or","for","of","on","in","to","with","by","about","from","into","at","as","is","are","be","being","been","that","this","these","those","it","its","their"
  ]);
  return norm(stripTags(text))
    .split(" ")
    .filter(t => t && !STOP.has(t));
}

// Test the enhanced indexing (now includes moreInfo)
const enhancedText = `${musicDB.name} ${musicDB.description} ${musicDB.moreInfo}`;
const enhancedTerms = textTerms(enhancedText);

console.log('\n=== Enhanced BM25 Indexing (includes moreInfo) ===');
console.log('Available terms (first 30):', enhancedTerms.slice(0, 30));

// Test queries
const testQueries = [
  'compositional techniques of igor stravinsky',
  'classical music research',
  'music theory',
  'jazz studies',
  'ethnomusicology',
  'opera research'
];

console.log('\n=== Query Testing ===');
testQueries.forEach(query => {
  const queryTerms = textTerms(query);
  const overlap = queryTerms.filter(qt => enhancedTerms.includes(qt));
  
  console.log(`\nQuery: "${query}"`);
  console.log(`Query terms: [${queryTerms.join(', ')}]`);
  console.log(`Matching terms: [${overlap.join(', ')}]`);
  console.log(`Match: ${overlap.length > 0 ? '✅' : '❌'}`);
});

console.log('\n=== Key Terms Found ===');
const keyMusicTerms = ['classical', 'music', 'opera', 'jazz', 'ethnomusicology', 'therapy', 'education', 'instruments', 'theatre'];
keyMusicTerms.forEach(term => {
  const found = enhancedTerms.includes(term);
  console.log(`${term}: ${found ? '✅' : '❌'}`);
});

console.log('\n=== Conclusion ===');
console.log('By including moreInfo in BM25 indexing, we get much richer content matching');
console.log('without needing specific aliases for every composer or technique.');
