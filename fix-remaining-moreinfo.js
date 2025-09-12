const fs = require('fs');

// Read the resource database file
const content = fs.readFileSync('lib/resource-database.ts', 'utf8');

// Function to fix remaining issues in moreInfo text
function fixRemainingIssues(text) {
    if (!text) return text;
    
    let fixed = text;
    
    // Fix missing spaces after punctuation (more comprehensive)
    fixed = fixed.replace(/([.!?;,:])([A-Z])/g, '$1 $2');
    
    // Fix specific concatenated word patterns that remain
    // Handle common technical terms that should stay concatenated
    const preserveTerms = [
        'eBooks?', 'eBook', 'iPhone', 'iPad', 'iTunes', 'eBrary', 'eLibrary', 
        'eJournal', 'eMagazine', 'eNewspaper', 'eVideo', 'eAudio', 'eResource',
        'eCollection', 'eDatabase', 'eReference', 'eTextbook', 'GreenFILE',
        'OneFile', 'ProQuest', 'NewsBank', 'SciFinder', 'EconLit', 'RefWorks',
        'GuideStar', 'MyPast', 'FindMyPast', 'getAbstract', 'LinkedIn',
        'WorldCat', 'GospeLink', 'MagillOnLiterature', 'OnLiterature'
    ];
    
    // Store preserved terms temporarily
    const tempReplacements = {};
    let tempCounter = 0;
    
    for (const term of preserveTerms) {
        const regex = new RegExp(term, 'gi');
        fixed = fixed.replace(regex, (match) => {
            const tempKey = `__TEMP_${tempCounter++}__`;
            tempReplacements[tempKey] = match;
            return tempKey;
        });
    }
    
    // Fix some specific concatenation patterns
    fixed = fixed.replace(/([a-z])([A-Z])([a-z])/g, function(match, p1, p2, p3, offset) {
        // Skip if this is a temp replacement
        if (match.includes('__TEMP_')) return match;
        
        // Keep common patterns
        if (/^(eBooks?|iOS|iPad|iPhone|HTML|HTTP|HTTPS|PDF|XML|API|URL|USB|CPU|GPU|RAM|DVD|BluRay|WiFi|AI|VR|AR|3D|4K|HD|MP3|MP4|JSON|SQL|CSV|RSS|FAQ|CEO|CFO|CTO|HR|IT|PR|SEO|SEM|CRM|ERP|B2B|B2C|C2C)$/i.test(match)) {
            return match;
        }
        
        // Add space between likely separate words
        return `${p1} ${p2}${p3}`;
    });
    
    // Fix excessive spacing (multiple spaces to single space)
    fixed = fixed.replace(/\s{2,}/g, ' ');
    
    // Fix multiple punctuation patterns
    fixed = fixed.replace(/\.,/g, ',');
    fixed = fixed.replace(/,\./g, '.');
    
    // Restore preserved terms
    for (const [tempKey, originalTerm] of Object.entries(tempReplacements)) {
        fixed = fixed.replace(new RegExp(tempKey, 'g'), originalTerm);
    }
    
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

// Extract and fix moreInfo fields using a more robust approach
const resourceMatches = content.match(/{\s*name:\s*"[^"]*"[\s\S]*?moreInfo:\s*"[^"]*"[\s\S]*?}/g);

if (resourceMatches) {
    let fixedContent = content;
    let fixCount = 0;
    
    for (const resourceMatch of resourceMatches) {
        // Extract the moreInfo content more carefully
        const moreInfoMatch = resourceMatch.match(/moreInfo:\s*"((?:[^"\\]|\\.)*)"/);
        if (moreInfoMatch && moreInfoMatch[1]) {
            const originalText = moreInfoMatch[1].replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t').replace(/\\\\/g, '\\');
            const fixedText = fixRemainingIssues(originalText);
            
            if (originalText !== fixedText) {
                // Replace in the content using exact string replacement
                const originalPattern = `moreInfo: "${moreInfoMatch[1]}"`;
                const fixedPattern = `moreInfo: "${escapeForJS(fixedText)}"`;
                
                if (fixedContent.includes(originalPattern)) {
                    fixedContent = fixedContent.replace(originalPattern, fixedPattern);
                    fixCount++;
                    
                    console.log(`Fixed moreInfo field ${fixCount}:`);
                    console.log(`  Original: ${originalText.substring(0, 100)}...`);
                    console.log(`  Fixed: ${fixedText.substring(0, 100)}...`);
                    console.log('');
                }
            }
        }
    }
    
    if (fixCount > 0) {
        // Write the fixed content back to the file
        fs.writeFileSync('lib/resource-database.ts', fixedContent);
        console.log(`Fixed ${fixCount} additional moreInfo fields with data quality issues.`);
    } else {
        console.log('No additional issues found to fix.');
    }
} else {
    console.log('No resource objects found.');
}
