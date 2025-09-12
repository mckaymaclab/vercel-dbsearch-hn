#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import Fuse from 'fuse.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load the resources from your resource database
let resources = [];

async function loadResources() {
  try {
    // Manually create a smaller test dataset for now
    resources = [
      {
        id: 1,
        title: "APA PsycInfo - EBSCOhost",
        resourceType: "Database",
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=psyh",
        moreInfo: "APA PsycInfo is the most comprehensive database of psychological literature from the 1800s to the present. The database includes millions of bibliographic records with abstracts from thousands of scholarly publications."
      },
      {
        id: 2,
        title: "NewsBank",
        resourceType: "Database",
        url: "https://byui.idm.oclc.org/login?url=https://infoweb.newsbank.com/",
        moreInfo: "NewsBank provides access to thousands of news sources including newspapers, newswires, news journals, television and radio transcripts, blogs, and government press releases."
      },
      {
        id: 3,
        title: "Music Periodicals Database",
        resourceType: "Database", 
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/musicperiodicals",
        moreInfo: "Comprehensive database covering all aspects of music including classical, jazz, popular, and world music. Contains articles from music journals, magazines, and periodicals."
      },
      {
        id: 4,
        title: "JSTOR",
        resourceType: "Database",
        url: "https://byui.idm.oclc.org/login?url=https://www.jstor.org/",
        moreInfo: "JSTOR provides access to thousands of academic journals, books, and primary sources across many disciplines including arts, business, humanities, science, and social sciences."
      },
      {
        id: 5,
        title: "Business Source Premier",
        resourceType: "Database",
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=bth",
        moreInfo: "Business Source Premier is the industry's most used business research database, providing full text for more than 2,300 journals, including full text for more than 1,100 peer-reviewed business publications."
      }
    ];
    console.error(`Loaded ${resources.length} test resources`);
    return resources;
  } catch (error) {
    console.error('Error loading resources:', error);
    return [];
  }
}

// Initialize search
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

class LibraryMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: "library-search-server",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: "search_library_resources",
            description: "Search the library database for academic resources, databases, and collections based on keywords or research topics",
            inputSchema: {
              type: "object",
              properties: {
                query: {
                  type: "string",
                  description: "Search query for library resources (e.g., 'psychology databases', 'historical newspapers', 'music research')",
                },
                limit: {
                  type: "number",
                  description: "Maximum number of results to return (default: 10)",
                  default: 10,
                },
              },
              required: ["query"],
            },
          },
          {
            name: "get_resource_details",
            description: "Get detailed information about a specific library resource by its exact name",
            inputSchema: {
              type: "object",
              properties: {
                resourceName: {
                  type: "string",
                  description: "Exact name of the library resource to retrieve details for",
                },
              },
              required: ["resourceName"],
            },
          },
          {
            name: "list_resources_by_category",
            description: "List resources filtered by category, type, or subject area",
            inputSchema: {
              type: "object",
              properties: {
                category: {
                  type: "string",
                  description: "Category to filter by (e.g., 'databases', 'historical', 'science', 'news')",
                },
                limit: {
                  type: "number",
                  description: "Maximum number of results to return (default: 20)",
                  default: 20,
                },
              },
              required: ["category"],
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case "search_library_resources":
            return await this.searchLibraryResources(args);
          case "get_resource_details":
            return await this.getResourceDetails(args);
          case "list_resources_by_category":
            return await this.listResourcesByCategory(args);
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  async searchLibraryResources(args) {
    const { query, limit = 10 } = args;
    
    try {
      // Load resources if not already loaded
      if (resources.length === 0) {
        await loadResources();
      }
      
      if (resources.length === 0) {
        throw new Error('No resources available');
      }
      
      // Create search index and perform search
      const fuse = createFuseIndex(resources);
      const searchResults = fuse.search(query, { limit });
      
      // Format results
      const results = searchResults.map(result => ({
        ...result.item,
        score: 1 - result.score, // Convert Fuse score to relevance score
      }));
      
      const formattedResults = results.map((resource, index) => {
        return `${index + 1}. **${resource.title}**
   - Type: ${resource.resourceType}
   - URL: ${resource.url}
   - Description: ${resource.moreInfo || 'No description available'}
   - Match Score: ${resource.score ? resource.score.toFixed(3) : 'N/A'}`;
      }).join('\n\n');

      return {
        content: [
          {
            type: "text",
            text: `Found ${results.length} library resources for "${query}":\n\n${formattedResults}`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Search failed: ${error.message}`);
    }
  }

  async getResourceDetails(args) {
    const { resourceName } = args;
    
    // Load resources if not already loaded
    if (resources.length === 0) {
      await loadResources();
    }
    
    const resource = resources.find(r => 
      r.title.toLowerCase() === resourceName.toLowerCase()
    );

    if (!resource) {
      return {
        content: [
          {
            type: "text",
            text: `Resource "${resourceName}" not found in the library database.`,
          },
        ],
      };
    }

    const details = `**${resource.title}**

**Type:** ${resource.resourceType}
**URL:** ${resource.url}
**Description:** ${resource.moreInfo || 'No description available'}

**Additional Information:**
- Database ID: ${resource.id}
- Available 24/7 with university credentials
- Part of the BYU-Idaho McKay Library collection`;

    return {
      content: [
        {
          type: "text",
          text: details,
        },
      ],
    };
  }

  async listResourcesByCategory(args) {
    const { category, limit = 20 } = args;
    
    // Load resources if not already loaded
    if (resources.length === 0) {
      await loadResources();
    }
    
    const categoryLower = category.toLowerCase();
    const filteredResources = resources.filter(resource => {
      const title = resource.title.toLowerCase();
      const type = resource.resourceType.toLowerCase();
      const info = (resource.moreInfo || '').toLowerCase();
      
      return title.includes(categoryLower) || 
             type.includes(categoryLower) || 
             info.includes(categoryLower);
    });

    if (filteredResources.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No resources found for category "${category}".`,
          },
        ],
      };
    }

    const formattedResults = filteredResources.slice(0, limit).map((resource, index) => {
      return `${index + 1}. **${resource.title}**
   - Type: ${resource.resourceType}
   - URL: ${resource.url}`;
    }).join('\n\n');

    return {
      content: [
        {
          type: "text",
          text: `Found ${filteredResources.length} resources in category "${category}" (showing first ${Math.min(limit, filteredResources.length)}):\n\n${formattedResults}`,
        },
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Library MCP Server running on stdio");
  }
}

// Start the server
const server = new LibraryMCPServer();
server.run().catch(console.error);