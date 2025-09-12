const fs = require('fs');

// Read the resource database file
const resourceDatabasePath = 'lib/resource-database.ts';
let content = fs.readFileSync(resourceDatabasePath, 'utf8');

let totalFixes = 0;

// Function to fix punctuation spacing issues
function fixPunctuationSpacing(text) {
    if (!text) return text;
    
    let fixed = text;
    
    // Fix missing spaces after punctuation followed by letters (capital or lowercase)
    fixed = fixed.replace(/([.!?;:,])([A-Za-z])/g, '$1 $2');
    
    // Fix multiple punctuation issues
    fixed = fixed.replace(/\.,/g, ',');
    fixed = fixed.replace(/,\./g, '.');
    
    // Trim whitespace
    fixed = fixed.trim();
    
    return fixed;
}

// Function to escape quotes and backslashes for JavaScript string literals
function escapeForJS(str) {
    return str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/'/g, "\\'")
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t');
}

// Process all moreInfo fields
const resourcePattern = /{\s*name:\s*"([^"]+)"[\s\S]*?}/g;
let match;

console.log('Fixing punctuation spacing issues in moreInfo fields...\n');

// Reset regex lastIndex
resourcePattern.lastIndex = 0;

while ((match = resourcePattern.exec(content)) !== null) {
    const fullResourceText = match[0];
    const resourceName = match[1];
    
    // Find moreInfo within this resource
    const moreInfoMatch = fullResourceText.match(/moreInfo:\s*"((?:[^"\\]|\\.)*)"/);
    
    if (moreInfoMatch && moreInfoMatch[1]) {
        // Decode the escaped string
        const originalText = moreInfoMatch[1]
            .replace(/\\"/g, '"')
            .replace(/\\'/g, "'")
            .replace(/\\n/g, '\n')
            .replace(/\\r/g, '\r')
            .replace(/\\t/g, '\t')
            .replace(/\\\\/g, '\\');
        
        const fixedText = fixPunctuationSpacing(originalText);
        
        if (originalText !== fixedText) {
            // Escape the fixed text for JavaScript string literal
            const escapedFixed = escapeForJS(fixedText);
            
            // Replace in the content
            const originalPattern = `moreInfo: "${moreInfoMatch[1]}"`;
            const newPattern = `moreInfo: "${escapedFixed}"`;
            
            if (content.includes(originalPattern)) {
                content = content.replace(originalPattern, newPattern);
                totalFixes++;
                
                console.log(`Fixed: ${resourceName}`);
                
                // Show specific changes
                const changes = [];
                const originalWords = originalText.split(/\s+/);
                const fixedWords = fixedText.split(/\s+/);
                
                for (let i = 0; i < Math.max(originalWords.length, fixedWords.length); i++) {
                    if (originalWords[i] !== fixedWords[i]) {
                        changes.push(`"${originalWords[i] || ''}" → "${fixedWords[i] || ''}"`);
                        if (changes.length >= 3) break; // Limit to first 3 changes
                    }
                }
                
                if (changes.length > 0) {
                    console.log(`  Changes: ${changes.join(', ')}`);
                }
                console.log('');
            }
        }
    }
}

if (totalFixes > 0) {
    // Write the fixed content back to the file
    fs.writeFileSync(resourceDatabasePath, content);
    console.log(`\nCompleted! Fixed punctuation spacing in ${totalFixes} moreInfo fields.`);
} else {
    console.log('\nNo punctuation spacing issues found to fix.');
}
