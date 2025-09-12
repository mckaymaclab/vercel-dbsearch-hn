const fs = require('fs');

// Read the resource database file
const content = fs.readFileSync('lib/resource-database.ts', 'utf8');

// Enhanced function to check for data quality issues
function checkDataQuality(text) {
    if (!text) return [];
    
    const issues = [];
    
    // Valid technical terms that should NOT be flagged as concatenated
    const validTerms = [
        'eBooks?', 'eBook', 'eBrary', 'eLibrary', 'eJournal', 'eMagazine', 'eNewspaper', 
        'eVideo', 'eAudio', 'eResource', 'eCollection', 'eDatabase', 'eReference', 'eTextbook',
        'iPhone', 'iPad', 'iTunes', 'iOS', 'Android', 'HTML', 'HTTP', 'HTTPS', 'PDF', 'XML',
        'API', 'URL', 'USB', 'CPU', 'GPU', 'RAM', 'DVD', 'BluRay', 'WiFi', 'AI', 'VR', 'AR',
        '3D', '4K', 'HD', 'MP3', 'MP4', 'JSON', 'SQL', 'CSV', 'RSS', 'FAQ', 'CEO', 'CFO',
        'CTO', 'HR', 'IT', 'PR', 'SEO', 'SEM', 'CRM', 'ERP', 'B2B', 'B2C', 'C2C',
        'OneFile', 'ProQuest', 'NewsBank', 'SciFinder', 'EconLit', 'RefWorks', 'GuideStar',
        'MyPast', 'FindMyPast', 'getAbstract', 'LinkedIn', 'WorldCat', 'GospeLink',
        'MagillOnLiterature', 'OnLiterature', 'GreenFILE', 'iPOLL', 'YouTube', 'NYTimes',
        'U.S.', 'U.K.', 'McKay', 'BYU-Idaho', 'BYU-I'
    ];
    
    // Create a copy to work with
    let textToCheck = text;
    
    // Temporarily replace valid terms to avoid false positives
    const tempReplacements = {};
    let tempCounter = 0;
    
    for (const term of validTerms) {
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        textToCheck = textToCheck.replace(regex, (match) => {
            const tempKey = `__TEMP_${tempCounter++}__`;
            tempReplacements[tempKey] = match;
            return tempKey;
        });
    }
    
    // Check for missing spaces after punctuation
    const missingSpaces = textToCheck.match(/[.!?;:][A-Z]/g);
    if (missingSpaces) {
        issues.push(`Missing spaces after punctuation: ${missingSpaces.join(', ')}`);
    }
    
    // Check for problematic concatenated words (after removing valid terms)
    const concatenated = textToCheck.match(/\b[a-z][A-Z][a-z]+\b/g);
    if (concatenated) {
        // Filter out remaining valid patterns
        const problematic = concatenated.filter(word => 
            !word.includes('__TEMP_') && 
            !word.match(/^[A-Z]{2,}$/i) &&
            word.length > 2
        );
        if (problematic.length > 0) {
            issues.push(`Concatenated words: ${problematic.join(', ')}`);
        }
    }
    
    // Check for excessive spacing (3+ spaces)
    if (/\s{3,}/.test(textToCheck)) {
        issues.push('Excessive spacing found');
    }
    
    // Check for multiple punctuation WITHIN the text content only
    // Exclude patterns that might be at the boundary of string literals
    const multiplePunct = textToCheck.match(/[.!?;:,]{2,}/g);
    if (multiplePunct) {
        // Filter out boundary artifacts
        const genuineMultiple = multiplePunct.filter(pattern => {
            // Don't flag patterns that look like they're at string boundaries
            return pattern !== '.,' && pattern !== ',.' && pattern.length > 2;
        });
        if (genuineMultiple.length > 0) {
            issues.push(`Multiple punctuation: ${genuineMultiple.join(', ')}`);
        }
    }
    
    return issues;
}

// Extract all resources and check their moreInfo fields
const resources = [];
const resourcePattern = /{\s*name:\s*"([^"]+)"[\s\S]*?}/g;
let match;

while ((match = resourcePattern.exec(content)) !== null) {
    const fullResourceText = match[0];
    const resourceName = match[1];
    
    // Find moreInfo within this resource
    const moreInfoMatch = fullResourceText.match(/moreInfo:\s*"((?:[^"\\]|\\.)*)"/);
    
    if (moreInfoMatch && moreInfoMatch[1]) {
        // Decode the escaped string
        const moreInfoText = moreInfoMatch[1]
            .replace(/\\"/g, '"')
            .replace(/\\'/g, "'")
            .replace(/\\n/g, '\n')
            .replace(/\\r/g, '\r')
            .replace(/\\t/g, '\t')
            .replace(/\\\\/g, '\\');
        
        const issues = checkDataQuality(moreInfoText);
        
        if (issues.length > 0) {
            resources.push({
                name: resourceName,
                moreInfo: moreInfoText,
                issues: issues
            });
        }
    }
}

console.log('=== Final check: moreInfo fields for genuine data quality issues ===\n');

if (resources.length > 0) {
    console.log(`Found ${resources.length} resources with genuine moreInfo data quality issues:\n`);
    
    resources.forEach((resource, index) => {
        console.log(`${index + 1}. ${resource.name}`);
        console.log(`   Problems: ${resource.issues.join('; ')}`);
        console.log(`   Content: "${resource.moreInfo.substring(0, 80)}..."`);
        console.log('');
    });
    
    // Count issue types
    const issueCounts = {};
    resources.forEach(resource => {
        resource.issues.forEach(issue => {
            const issueType = issue.split(':')[0];
            issueCounts[issueType] = (issueCounts[issueType] || 0) + 1;
        });
    });
    
    console.log('=== Summary ===');
    console.log(`Total genuine issues found: ${resources.length}`);
    console.log('Most common problems:');
    Object.entries(issueCounts)
        .sort(([,a], [,b]) => b - a)
        .forEach(([issue, count]) => {
            console.log(`- ${issue}: ${count} occurrences`);
        });
} else {
    console.log('🎉 No genuine data quality issues found in moreInfo fields!');
}
