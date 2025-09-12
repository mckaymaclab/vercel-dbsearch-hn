#!/usr/bin/env node

// Simple test script to verify MCP server functionality
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testMCPServer() {
  console.log('Testing MCP Server...');
  
  const mcpProcess = spawn('node', ['mcp-server.js'], {
    cwd: __dirname,
    stdio: ['pipe', 'pipe', 'pipe']
  });

  // Test request to list tools
  const listToolsRequest = {
    jsonrpc: "2.0",
    id: 1,
    method: "tools/list"
  };

  mcpProcess.stdin.write(JSON.stringify(listToolsRequest) + '\n');

  mcpProcess.stdout.on('data', (data) => {
    try {
      const response = JSON.parse(data.toString());
      console.log('MCP Response:', JSON.stringify(response, null, 2));
    } catch (e) {
      console.log('Raw output:', data.toString());
    }
  });

  mcpProcess.stderr.on('data', (data) => {
    console.log('MCP Server Error:', data.toString());
  });

  // Test search functionality
  setTimeout(() => {
    const searchRequest = {
      jsonrpc: "2.0",
      id: 2,
      method: "tools/call",
      params: {
        name: "search_library_resources",
        arguments: {
          query: "PsycInfo",
          limit: 5
        }
      }
    };

    mcpProcess.stdin.write(JSON.stringify(searchRequest) + '\n');
  }, 1000);

  // Clean up after 5 seconds
  setTimeout(() => {
    mcpProcess.kill();
    console.log('Test completed');
    process.exit(0);
  }, 5000);
}

testMCPServer().catch(console.error);