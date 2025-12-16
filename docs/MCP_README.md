# Library Search MCP Server

Your MCP server functionality has been successfully restored! This MCP server exposes your library database search functionality to AI assistants like Claude, ChatGPT, and others.

## What's Been Set Up

### 1. MCP Server (`tools/mcp/mcp-server.js`)
- Exposes 3 tools for AI assistants to search your library database
- Uses Fuse.js for fuzzy search capabilities
- Loads from a test dataset (can be expanded to full database)

### 2. Available Tools

#### `search_library_resources`
Search the library database by keywords or topics
- **Query**: Search terms (e.g., "psychology databases", "historical newspapers") 
- **Limit**: Maximum results to return (default: 10)

#### `get_resource_details` 
Get detailed information about a specific resource by exact name
- **Resource Name**: Exact name of the library resource

#### `list_resources_by_category`
Filter resources by category, type, or subject area
- **Category**: Filter term (e.g., "databases", "historical", "science")
- **Limit**: Maximum results (default: 20)

### 3. VS Code Integration
- Configured in `.vscode/settings.json` for VS Code MCP extensions
- Cline MCP configuration in `tools/mcp/cline_mcp_settings.json`

## How to Use

### With Cline (VS Code Extension)
1. Open VS Code in this project
2. Open the Cline panel (should be in your sidebar)
3. Configure Cline with your API key (Claude, OpenAI, etc.)
4. In Cline settings, point to the MCP configuration file: `tools/mcp/cline_mcp_settings.json`
5. Now you can ask Cline to search your library database!

Example prompts:
- "Search for psychology databases in the library"
- "Find resources about historical newspapers"
- "Get details about PsycInfo database"

### Manual Testing
Run the test script: `node tools/scripts/test-mcp.js` (if available)

### Start MCP Server
Run: `npm run mcp`

## Example AI Conversation

**You:** "Search for psychology resources in the library database"

**AI Assistant:** *Uses the MCP server to search and returns:*
"Found 1 library resource for psychology:
1. **APA PsycInfo - EBSCOhost**
   - Type: Database
   - URL: https://byui.idm.oclc.org/login?url=...
   - Description: Comprehensive database of psychological literature from the 1800s to present..."

## Next Steps

### Expand the Database
Currently using 5 test resources. To use your full database:
1. Convert your resource files to proper JSON format
2. Update the `loadResources()` function in `tools/mcp/mcp-server.js`
3. Point to your complete database file

### Add More Tools
You could add additional MCP tools for:
- Subject browsing
- Resource type filtering  
- Advanced search options
- Citation formatting

## Files Created/Modified

- `tools/mcp/mcp-server.js` - Main MCP server
- `package.json` - Added MCP script and ES module support
- `.vscode/settings.json` - VS Code MCP configuration
- `tools/mcp/cline_mcp_settings.json` - Cline MCP configuration
- `tools/mcp/mcp-search.js` - Search utilities (unused currently)

Your MCP server is now ready to help AI assistants search your library database! 🎉