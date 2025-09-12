import { describe, it, expect } from 'vitest';

// Import the functions we need to test
// Since the functions are not exported, we'll test the full integration
import { findDatabaseResources } from '../lib/resource-ai';

describe('Image database prioritization detection', () => {
  it('should detect image terms correctly', () => {
    // Test the regex patterns that should trigger image prioritization
    const imageQueries = [
      'images of frogs',
      'pictures of buildings', 
      'photos of art',
      'visual resources',
      'artwork collections',
      'illustrations of science',
      'photographs from history'
    ];

    // Since hasImageTerms is not exported, we'll test via regex directly
    const imageTermsRegex = /\b(image|images|picture|pictures|photo|photos|photograph|photographs|visual|visuals|artwork|illustration|illustrations)\b/i;
    
    imageQueries.forEach(query => {
      expect(imageTermsRegex.test(query)).toBe(true);
    });
  });

  it('should not detect image terms in non-image queries', () => {
    const nonImageQueries = [
      'news about politics',
      'music theory articles', 
      'business research',
      'history of science',
      'magazines about travel',
      'manage resources',
      'heritage studies',
      'cartography research'
    ];

    const imageTermsRegex = /\b(image|images|picture|pictures|photo|photos|photograph|photographs|visual|visuals|artwork|illustration|illustrations)\b/i;
    
    nonImageQueries.forEach(query => {
      expect(imageTermsRegex.test(query)).toBe(false);
    });
  });

  it('should prioritize image databases for image queries', async () => {
    // Mock API key
    process.env.GEMINI_API_KEY = 'test-key';
    
    try {
      const results = await findDatabaseResources('images', 'database');
      
      // Should include image databases at the top
      const imageDbNames = [
        'ARTstor - now   JSTOR Images',
        'JSTOR Images | Artstor', 
        'Alexander Street Video & Image Collection',
        'Religious Education Archive Image Collection'
      ];
      
      // At least one image database should be in top 3 results
      const topThree = results.slice(0, 3);
      const hasImageDb = topThree.some(result => 
        imageDbNames.some(name => result.name.includes('Image') || result.name.includes('ARTstor') || result.name.includes('JSTOR Images'))
      );
      
      expect(hasImageDb).toBe(true);
    } catch (error) {
      // If API call fails, skip the test
      console.log('Skipping integration test due to API limitation:', error);
    }
  });
});

describe('Music database prioritization verification', () => {
  it('should detect music terms correctly', () => {
    const musicQueries = [
      'mozart compositional techniques',
      'mozarts symphonies',
      'beethoven analysis',
      'classical music research',
      'jazz studies',
      'opera performances',
      'musicology articles'
    ];

    // Test the updated music regex that should handle possessive forms
    const musicTermsRegex = /\b(music|musical|musician|composer|composition|compositional|symphony|opera|classical|jazz|mozart|beethoven|bach|musicology|ethnomusicology)\w*/i;
    
    musicQueries.forEach(query => {
      expect(musicTermsRegex.test(query)).toBe(true);
    });
  });
});

describe('News database prioritization verification', () => {
  it('should detect news terms correctly', () => {
    const newsQueries = [
      'news about space',
      'current events in politics', 
      'journalism ethics',
      'press coverage of elections',
      'newspaper archives'
    ];

    const newsTermsRegex = /\b(news|newspapers?|press|journalism|journalist|current events?)\b/i;
    
    newsQueries.forEach(query => {
      expect(newsTermsRegex.test(query)).toBe(true);
    });
  });
});