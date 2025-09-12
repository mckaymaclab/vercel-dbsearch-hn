// Check all moreInfo fields for data quality issues
const fs = require('fs');
const path = require('path');

// Read the database file content
const dbPath = 'lib/resource-database.ts';
const content = fs.readFileSync(dbPath, 'utf8');

// Extract all moreInfo fields with their context
const moreInfoRegex = /name:\s*"([^"]+)"[\s\S]*?moreInfo:\s*"([^"]*(?:\\.[^"]*)*)"/g;
const issues = [];
let match;

console.log('=== Checking moreInfo fields for data quality issues ===\n');

while ((match = moreInfoRegex.exec(content)) !== null) {
    const [, name, moreInfo] = match;
    
    if (!moreInfo || moreInfo.trim() === '') {
        continue; // Skip empty moreInfo fields
    }
    
    // Clean up escaped quotes and other escapes for analysis
    const cleanInfo = moreInfo
        .replace(/\\"/g, '"')
        .replace(/\\r\\n/g, ' ')
        .replace(/\\n/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&');
    
    const problems = [];
    
    // Check for concatenated words (lowercase letter followed by uppercase letter)
    const concatenatedWords = cleanInfo.match(/[a-z][A-Z]/g);
    if (concatenatedWords && concatenatedWords.length > 0) {
        problems.push(`Concatenated words: ${concatenatedWords.join(', ')}`);
    }
    
    // Check for missing spaces after periods/colons followed by capital letters
    const missingSpaces = cleanInfo.match(/[.:]([A-Z])/g);
    if (missingSpaces && missingSpaces.length > 0) {
        problems.push(`Missing spaces after punctuation: ${missingSpaces.join(', ')}`);
    }
    
    // Check for multiple consecutive punctuation
    const multiPunct = cleanInfo.match(/[.,:;]{2,}/g);
    if (multiPunct && multiPunct.length > 0) {
        problems.push(`Multiple punctuation: ${multiPunct.join(', ')}`);
    }
    
    // Check for weird spacing patterns
    const weirdSpacing = cleanInfo.match(/\s{3,}/g);
    if (weirdSpacing && weirdSpacing.length > 0) {
        problems.push(`Excessive spacing found`);
    }
    
    if (problems.length > 0) {
        issues.push({
            name,
            moreInfo: cleanInfo,
            problems
        });
    }
}

console.log(`Found ${issues.length} resources with moreInfo data quality issues:\n`);

issues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.name}`);
    console.log(`   Problems: ${issue.problems.join('; ')}`);
    console.log(`   Content: "${issue.moreInfo.substring(0, 100)}${issue.moreInfo.length > 100 ? '...' : ''}"`);
    console.log('');
});

if (issues.length === 0) {
    console.log('✅ No moreInfo data quality issues found!');
} else {
    console.log(`\n=== Summary ===`);
    console.log(`Total issues found: ${issues.length}`);
    console.log(`Most common problems:`);
    
    const problemCounts = {};
    issues.forEach(issue => {
        issue.problems.forEach(problem => {
            const type = problem.split(':')[0];
            problemCounts[type] = (problemCounts[type] || 0) + 1;
        });
    });
    
    Object.entries(problemCounts)
        .sort(([,a], [,b]) => b - a)
        .forEach(([problem, count]) => {
            console.log(`- ${problem}: ${count} occurrences`);
        });
}
