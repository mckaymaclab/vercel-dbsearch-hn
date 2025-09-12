// Simple search functionality for MCP server
import Fuse from 'fuse.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load resources dynamically
let resources = [];

async function loadResources() {
  try {
    const resourcePath = path.join(__dirname, 'lib', 'resource-database.js');
    const { resources: loadedResources } = await import('./resource-database.js');
    resources = loadedResources;
    return resources;
  } catch (error) {
    console.error('Error loading resources:', error);
    return [];
  }
}

// Initialize Fuse.js for fuzzy search
function createFuseIndex(data) {
  return new Fuse(data, {
    keys: [
      { name: 'title', weight: 0.4 },
      { name: 'resourceType', weight: 0.2 },
      { name: 'moreInfo', weight: 0.3 },
      { name: 'url', weight: 0.1 }
    ],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2,
  });
}

export async function searchResources(query, options = {}) {
  const { limit = 10 } = options;
  
  // Load resources if not already loaded
  if (resources.length === 0) {
    await loadResources();
  }
  
  if (resources.length === 0) {
    throw new Error('No resources loaded');
  }
  
  // Create search index
  const fuse = createFuseIndex(resources);
  
  // Perform search
  const results = fuse.search(query, { limit });
  
  // Format results
  return results.map(result => ({
    ...result.item,
    score: 1 - result.score, // Convert Fuse score to relevance score
  }));
}

export { resources };