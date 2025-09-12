// Test script to check BM25 scoring for Music Periodicals Database
const fs = require('fs');
const path = require('path');

// Simple BM25 implementation for testing (corrected)
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

// Test the Music Periodicals Database entry
const testResource = {
  name: "Music Periodicals Database",
  description: "<p>A database with indexes, abstracts, and full-text for hundreds of international music periodicals, most are recent; some date to the 1800s.</p>",
  subjects: ["Music"],
  contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"]
};

const testQuery = "compositional techniques of igor stravinsky";

console.log('Testing Music Periodicals Database for query:', testQuery);
console.log('\nResource details:');
console.log('Name:', testResource.name);
console.log('Description:', testResource.description);
console.log('Subjects:', testResource.subjects);
console.log('Content Types:', testResource.contentTypes);

// Extract terms
const resourceText = `${testResource.name} ${testResource.description} ${testResource.subjects.join(' ')} ${testResource.contentTypes.join(' ')}`;
const resourceTerms = textTerms(resourceText);
const queryTerms = textTerms(testQuery);

console.log('\nResource terms:', resourceTerms.slice(0, 20));
console.log('Query terms:', queryTerms);

// Check overlapping terms
const overlap = queryTerms.filter(qt => resourceTerms.includes(qt));
console.log('Overlapping terms:', overlap);

// Check if it contains music-related terms
const musicTerms = resourceTerms.filter(t => 
  ['music', 'periodicals', 'journal', 'abstract', 'articles'].includes(t)
);
console.log('Music-related terms in resource:', musicTerms);

// Check BM25 relevance
console.log('\nBM25 Analysis:');
console.log('- Contains "music":', resourceTerms.includes('music'));
console.log('- Contains "periodicals":', resourceTerms.includes('periodicals'));
console.log('- Contains "articles":', resourceTerms.includes('articles'));
console.log('- Contains "abstracts":', resourceTerms.includes('abstracts'));
console.log('- Contains composer names:', resourceTerms.some(t => ['stravinsky', 'igor'].includes(t)));
