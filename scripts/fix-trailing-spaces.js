#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'lib', 'resource-database.ts');

console.log('Reading resource-database.ts...');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Fixing trailing spaces in name fields...');

// Replace name fields that have trailing spaces
// Pattern: name: "some text ",
const namePattern = /(name:\s*")([^"]+?)(\s+)(")/g;
let matchCount = 0;

content = content.replace(namePattern, (match, prefix, nameText, spaces, suffix) => {
  matchCount++;
  console.log(`Fixing: "${nameText}${spaces}" -> "${nameText}"`);
  return prefix + nameText + suffix;
});

console.log(`Fixed ${matchCount} trailing spaces in name fields.`);

// Write the cleaned content back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated resource-database.ts');
