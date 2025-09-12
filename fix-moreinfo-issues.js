const fs = require('fs');

// Read the resource database file
const content = fs.readFileSync('lib/resource-database.ts', 'utf8');

// Function to fix common issues in moreInfo text
function fixMoreInfoIssues(text) {
    if (!text) return text;
    
    let fixed = text;
    
    // Fix missing spaces after punctuation
    fixed = fixed.replace(/([.!?;,:])([A-Z])/g, '$1 $2');
    
    // Fix concatenated words (common patterns)
    // Fix patterns like "eBooks" -> "eBooks" (keep as is)
    // Fix patterns like "oQ" -> "of Q" (but be careful)
    // Fix patterns where single letters are concatenated
    fixed = fixed.replace(/([a-z])([A-Z])([a-z])/g, function(match, p1, p2, p3) {
        // Don't break valid camelCase words like eBooks, iPhone, etc.
        const validCamelCase = /^(eBooks?|eBook|iPhone|iPad|iTunes|eBrary|eLibrary|eJournal|eMagazine|eNewspaper|eVideo|eAudio|eResource|eCollection|eDatabase|eReference|eTextbook)$/i;
        if (validCamelCase.test(match)) {
            return match;
        }
        // Don't break acronyms followed by words like "USNews", "UKData"
        if (p1.match(/[A-Z]/) && p2.match(/[A-Z]/)) {
            return match;
        }
        // Add space between likely separate words
        return `${p1} ${p2}${p3}`;
    });
    
    // Fix excessive spacing (multiple spaces to single space)
    fixed = fixed.replace(/\s{2,}/g, ' ');
    
    // Fix multiple punctuation patterns like ".,"
    fixed = fixed.replace(/\.,/g, ',');
    fixed = fixed.replace(/,\./g, '.');
    
    // Trim leading/trailing whitespace
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

// Extract and fix moreInfo fields
const moreInfoMatches = content.match(/moreInfo:\s*["'`]([^"'`]*?)["'`]/gs);

if (moreInfoMatches) {
    let fixedContent = content;
    let fixCount = 0;
    
    for (const match of moreInfoMatches) {
        // Extract the moreInfo content
        const moreInfoContent = match.match(/moreInfo:\s*["'`](.*?)["'`]/s);
        if (moreInfoContent && moreInfoContent[1]) {
            const originalText = moreInfoContent[1];
            const fixedText = fixMoreInfoIssues(originalText);
            
            if (originalText !== fixedText) {
                // Replace in the content
                const escapedOriginal = escapeForJS(originalText);
                const escapedFixed = escapeForJS(fixedText);
                
                // Use a more specific pattern to replace
                const replacePattern = new RegExp(`(moreInfo:\\s*["'\`])${escapedOriginal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(["'\`])`, 'g');
                fixedContent = fixedContent.replace(replacePattern, `$1${escapedFixed}$2`);
                fixCount++;
                
                console.log(`Fixed moreInfo field ${fixCount}:`);
                console.log(`  Original: ${originalText.substring(0, 100)}...`);
                console.log(`  Fixed: ${fixedText.substring(0, 100)}...`);
                console.log('');
            }
        }
    }
    
    if (fixCount > 0) {
        // Write the fixed content back to the file
        fs.writeFileSync('lib/resource-database.ts', fixedContent);
        console.log(`Fixed ${fixCount} moreInfo fields with data quality issues.`);
    } else {
        console.log('No issues found to fix.');
    }
} else {
    console.log('No moreInfo fields found.');
}
