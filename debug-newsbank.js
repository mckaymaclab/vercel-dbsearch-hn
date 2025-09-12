// Debug script to test NewsBank matching
const fs = require('fs');
const path = require('path');

// Read the database
const resourcesPath = path.join(__dirname, 'lib', 'resource-database.ts');
const content = fs.readFileSync(resourcesPath, 'utf8');

// Extract NewsBank entries
const newsbankMatches = content.match(/name:\s*"[^"]*NewsBank[^"]*"/g);
console.log('NewsBank entries found:');
newsbankMatches?.forEach(match => console.log(match));

// Test normalization function
function norm(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}

console.log('\nNormalization tests:');
console.log('norm("NewsBank"):', norm("NewsBank"));
console.log('norm("news bank"):', norm("news bank"));
console.log('norm("news-bank"):', norm("news-bank"));

// Test matching logic
const targetName = "NewsBank";
const testNames = ["NewsBank", "Acceda Noticias (NewsBank)", "Other Database"];

console.log('\nMatching tests for target "NewsBank":');
testNames.forEach(itemName => {
  const match1 = norm(itemName) === norm(targetName);
  const match2 = norm(itemName).includes(norm(targetName));
  const match3 = norm(targetName).includes(norm(itemName));
  const anyMatch = match1 || match2 || match3;
  
  console.log(`"${itemName}": exact=${match1}, includes=${match2}, reverse=${match3}, ANY=${anyMatch}`);
});
