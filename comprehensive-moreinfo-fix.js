const fs = require('fs');

// Read the resource database file
const resourceDatabasePath = 'lib/resource-database.ts';
let content = fs.readFileSync(resourceDatabasePath, 'utf8');

let totalFixes = 0;

// Helper function to find and replace moreInfo fields
function fixAllMoreInfoFields() {
    // Match the entire resource objects to work with them individually
    const resourcePattern = /{\s*name:\s*"([^"]+)"[\s\S]*?}/g;
    let match;
    
    while ((match = resourcePattern.exec(content)) !== null) {
        const fullResourceText = match[0];
        const resourceName = match[1];
        
        // Find moreInfo within this resource
        const moreInfoMatch = fullResourceText.match(/moreInfo:\s*"((?:[^"\\]|\\.)*)"/);
        
        if (moreInfoMatch && moreInfoMatch[1]) {
            // Decode the escaped string
            let originalText = moreInfoMatch[1]
                .replace(/\\"/g, '"')
                .replace(/\\'/g, "'")
                .replace(/\\n/g, '\n')
                .replace(/\\r/g, '\r')
                .replace(/\\t/g, '\t')
                .replace(/\\\\/g, '\\');
            
            let fixedText = originalText;
            
            // 1. Fix missing spaces after punctuation followed by capital letters
            fixedText = fixedText.replace(/([.!?;:])([A-Z])/g, '$1 $2');
            
            // 2. Fix excessive spacing (multiple spaces to single space)
            fixedText = fixedText.replace(/\s{2,}/g, ' ');
            
            // 3. Fix multiple punctuation issues
            fixedText = fixedText.replace(/\.,/g, ',');
            fixedText = fixedText.replace(/,\./g, '.');
            
            // 4. Handle some specific concatenated words while preserving valid terms
            const validTerms = [
                'eBooks?', 'eBook', 'eBrary', 'eLibrary', 'eJournal', 'eMagazine', 'eNewspaper', 
                'eVideo', 'eAudio', 'eResource', 'eCollection', 'eDatabase', 'eReference', 'eTextbook',
                'iPhone', 'iPad', 'iTunes', 'iOS', 'Android', 'HTML', 'HTTP', 'HTTPS', 'PDF', 'XML',
                'API', 'URL', 'USB', 'CPU', 'GPU', 'RAM', 'DVD', 'BluRay', 'WiFi', 'AI', 'VR', 'AR',
                '3D', '4K', 'HD', 'MP3', 'MP4', 'JSON', 'SQL', 'CSV', 'RSS', 'FAQ', 'CEO', 'CFO',
                'CTO', 'HR', 'IT', 'PR', 'SEO', 'SEM', 'CRM', 'ERP', 'B2B', 'B2C', 'C2C',
                'OneFile', 'ProQuest', 'NewsBank', 'SciFinder', 'EconLit', 'RefWorks', 'GuideStar',
                'MyPast', 'FindMyPast', 'getAbstract', 'LinkedIn', 'WorldCat', 'GospeLink',
                'MagillOnLiterature', 'OnLiterature', 'GreenFILE', 'iPOLL', 'YouTube'
            ];
            
            // Temporarily replace valid terms to protect them
            const tempReplacements = {};
            let tempCounter = 0;
            
            for (const term of validTerms) {
                const regex = new RegExp(`\\b${term}\\b`, 'gi');
                fixedText = fixedText.replace(regex, (match) => {
                    const tempKey = `__TEMP_PRESERVE_${tempCounter++}__`;
                    tempReplacements[tempKey] = match;
                    return tempKey;
                });
            }
            
            // Now handle problematic concatenations more carefully
            // Look for patterns like single letter + capital letter + lowercase
            fixedText = fixedText.replace(/\b([a-z])([A-Z])([a-z]+)\b/g, function(match, p1, p2, p3) {
                // Skip temp replacements
                if (match.includes('__TEMP_PRESERVE_')) return match;
                
                // Skip common abbreviations and technical terms
                if (/^[A-Z]{2,}$/i.test(match)) return match;
                
                // Add space between likely separate words
                return `${p1} ${p2}${p3}`;
            });
            
            // Restore protected terms
            for (const [tempKey, originalTerm] of Object.entries(tempReplacements)) {
                fixedText = fixedText.replace(new RegExp(tempKey, 'g'), originalTerm);
            }
            
            // 5. Trim whitespace
            fixedText = fixedText.trim();
            
            // If there are changes, apply them
            if (originalText !== fixedText) {
                // Escape the fixed text for JavaScript string literal
                const escapedFixed = fixedText
                    .replace(/\\/g, '\\\\')
                    .replace(/"/g, '\\"')
                    .replace(/'/g, "\\'")
                    .replace(/\n/g, '\\n')
                    .replace(/\r/g, '\\r')
                    .replace(/\t/g, '\\t');
                
                // Replace in the content
                const originalPattern = `moreInfo: "${moreInfoMatch[1]}"`;
                const newPattern = `moreInfo: "${escapedFixed}"`;
                
                if (content.includes(originalPattern)) {
                    content = content.replace(originalPattern, newPattern);
                    totalFixes++;
                    
                    console.log(`Fixed: ${resourceName}`);
                    if (originalText.length <= 100 && fixedText.length <= 100) {
                        console.log(`  Before: "${originalText}"`);
                        console.log(`  After:  "${fixedText}"`);
                    } else {
                        console.log(`  Before: "${originalText.substring(0, 80)}..."`);
                        console.log(`  After:  "${fixedText.substring(0, 80)}..."`);
                    }
                    console.log('');
                }
            }
        }
    }
}

console.log('Starting comprehensive moreInfo cleanup...\n');

// Run the fix
fixAllMoreInfoFields();

if (totalFixes > 0) {
    // Write the fixed content back to the file
    fs.writeFileSync(resourceDatabasePath, content);
    console.log(`\nCompleted! Fixed ${totalFixes} moreInfo fields.`);
} else {
    console.log('\nNo additional issues found to fix.');
}
