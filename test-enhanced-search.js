// Test the enhanced BM25 system after data quality improvements
const { queryResourceDatabase } = require('./lib/resource-ai.js');

async function testEnhancedSearch() {
    console.log('Testing enhanced search system after data quality improvements...\n');
    
    // Test cases
    const testQueries = [
        {
            query: "news",
            description: "NewsBank should be prioritized for news queries"
        },
        {
            query: "music research compositional techniques",
            description: "Music Periodicals Database should be recalled for music research"
        },
        {
            query: "igor stravinsky",
            description: "Music Periodicals Database should be recalled for composer research"
        },
        {
            query: "classical music",
            description: "Music resources should be well represented"
        }
    ];
    
    for (const test of testQueries) {
        console.log(`Query: "${test.query}"`);
        console.log(`Expected: ${test.description}`);
        
        const results = await queryResourceDatabase(test.query);
        const topResults = results.slice(0, 5);
        
        console.log('Top 5 results:');
        topResults.forEach((result, index) => {
            console.log(`  ${index + 1}. ${result.resource.name} (score: ${result.score.toFixed(3)})`);
        });
        
        // Check for expected resources
        const newsBank = results.find(r => r.resource.name === 'NewsBank');
        const musicPeriodicals = results.find(r => r.resource.name === 'Music Periodicals Database');
        
        if (test.query === 'news' && newsBank) {
            const rank = results.indexOf(newsBank) + 1;
            console.log(`✓ NewsBank found at rank ${rank}`);
        }
        
        if (test.query.includes('music') && musicPeriodicals) {
            const rank = results.indexOf(musicPeriodicals) + 1;
            console.log(`✓ Music Periodicals Database found at rank ${rank}`);
        }
        
        console.log('');
    }
}

testEnhancedSearch().catch(console.error);
