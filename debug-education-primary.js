const fs = require('fs');

// Read the resource database file
const content = fs.readFileSync('lib/resource-database.ts', 'utf8');

// Find the Education - Primary resource specifically
const match = content.match(/{[^}]*name:\s*"Education - Primary"[^}]*}/s);

if (match) {
    const resourceText = match[0];
    console.log('Full Education - Primary resource:');
    console.log(resourceText);
    
    // Find moreInfo within this resource
    const moreInfoMatch = resourceText.match(/moreInfo:\s*"((?:[^"\\]|\\.)*)"/);
    
    if (moreInfoMatch && moreInfoMatch[1]) {
        const moreInfoText = moreInfoMatch[1]
            .replace(/\\"/g, '"')
            .replace(/\\'/g, "'")
            .replace(/\\n/g, '\n')
            .replace(/\\r/g, '\r')
            .replace(/\\t/g, '\t')
            .replace(/\\\\/g, '\\');
        
        console.log('\nMoreInfo text:');
        console.log(moreInfoText);
        
        // Check for multiple punctuation
        const multiplePunct = moreInfoText.match(/[.!?;:,]{2,}/g);
        if (multiplePunct) {
            console.log('\nMultiple punctuation found:', multiplePunct);
        } else {
            console.log('\nNo multiple punctuation found in moreInfo');
        }
    } else {
        console.log('\nNo moreInfo found in this resource');
    }
} else {
    console.log('Education - Primary resource not found');
}
