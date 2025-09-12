// Test the music aliases
const { findDatabaseResources } = require('./lib/resource-ai.ts');

async function testMusicQuery() {
  try {
    console.log('Testing: "compositional techniques of igor stravinsky"');
    const results = await findDatabaseResources('compositional techniques of igor stravinsky', 'database');
    
    console.log('\nResults:');
    results.forEach((result, index) => {
      console.log(`${index + 1}. ${result.name} (score: ${result.relevanceScore})`);
    });
    
    // Check if Music Periodicals Database is included
    const musicPeriodicalsFound = results.find(r => r.name.includes('Music Periodicals Database'));
    if (musicPeriodicalsFound) {
      console.log('\n✅ SUCCESS: Music Periodicals Database found!');
      console.log(`Position: ${results.indexOf(musicPeriodicalsFound) + 1}`);
      console.log(`Score: ${musicPeriodicalsFound.relevanceScore}`);
    } else {
      console.log('\n❌ FAILED: Music Periodicals Database not found');
    }
    
    // Test other music queries too
    console.log('\n\n--- Testing other music queries ---');
    
    const testQueries = [
      'classical music',
      'music theory',
      'jazz',
      'stravinsky',
      'musicology'
    ];
    
    for (const query of testQueries) {
      const queryResults = await findDatabaseResources(query, 'database');
      const musicDB = queryResults.find(r => r.name.includes('Music Periodicals Database'));
      console.log(`"${query}": ${musicDB ? '✅ FOUND' : '❌ NOT FOUND'}`);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testMusicQuery();
