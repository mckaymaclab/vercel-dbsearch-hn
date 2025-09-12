// Debug the moreInfo field formatting
const moreInfo = "The periodicals (journals, newspapers, magazines, reports) included come from over 20 countries. Coverage includes millions of records, the majority from the most recent ten years of publication. Some complete journal runs are included, with indexing back to 1874.Subject Coverage:Classical music and operaJazz and bluesRock, soul, and hip-hopFolk musicMusic businessSound recordingEthnomusicologyMusic educationMusic therapyInstrumentsMusical theatre";

console.log('=== Raw moreInfo field ===');
console.log(moreInfo);

console.log('\n=== Looking for missing spaces ===');
// The issue might be missing spaces after periods or colons
console.log('After "1874.Subject": missing space?');
console.log('After "operaJazz": missing space?');
console.log('After "musicMusic": missing space?');

// Test normalization
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

console.log('\n=== Normalized text ===');
const normalized = norm(moreInfo);
console.log(normalized);

console.log('\n=== Extracted terms ===');
const terms = textTerms(moreInfo);
console.log(terms);

console.log('\n=== Searching for key terms ===');
const keyTerms = ['jazz', 'opera', 'classical', 'ethnomusicology', 'therapy', 'education'];
keyTerms.forEach(term => {
  const found = terms.includes(term);
  const inNormalized = normalized.includes(term);
  console.log(`${term}: in terms=${found}, in normalized=${inNormalized}`);
});
