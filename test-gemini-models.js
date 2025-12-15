// Test script to find working Gemini models
import fs from 'fs';

// Read environment variables from .env.local
const envContent = fs.readFileSync('.env.local', 'utf8');
const lines = envContent.split('\n');
let apiKey = null;

for (const line of lines) {
  if (line.startsWith('GOOGLE_API_KEY=') || line.startsWith('GEMINI_API_KEY=')) {
    apiKey = line.split('=')[1].trim();
    break;
  }
}

if (!apiKey) {
  console.error('No GOOGLE_API_KEY or GEMINI_API_KEY found in .env.local');
  process.exit(1);
}

// Import after we know we have the API key
const { GoogleGenerativeAI } = await import('@google/generative-ai');

async function testGeminiModels() {
  const genAI = new GoogleGenerativeAI(apiKey);
  
  console.log('Testing Gemini model availability...\n');
  
  // Test various model naming patterns
  const modelsToTest = [
    'gemini-pro',
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-1.0-pro',
    'gemini-1.5-flash-latest',
    'gemini-1.5-pro-latest',
    'gemini-1.0-pro-latest',
    'models/gemini-pro',
    'models/gemini-1.5-flash',
    'models/gemini-1.5-pro',
    'models/gemini-1.0-pro',
    'models/gemini-1.5-flash-latest',
    'models/gemini-1.5-pro-latest',
    'models/gemini-1.0-pro-latest',
    'text-bison-001',
    'models/text-bison-001'
  ];
  
  const workingModels = [];
  
  for (const modelName of modelsToTest) {
    try {
      console.log(`Testing: ${modelName}...`);
      
      const model = genAI.getGenerativeModel({
        model: modelName,
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 100,
        },
      });
      
      const result = await model.generateContent('Hello, respond with just "working"');
      const response = await result.response;
      const text = response.text();
      
      console.log(`✅ ${modelName}: WORKING - Response: "${text.trim()}"`);
      workingModels.push(modelName);
      
      // Test if it supports structured output
      try {
        const structuredModel = genAI.getGenerativeModel({
          model: modelName,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 100,
            responseMimeType: "application/json",
          },
        });
        
        const structuredResult = await structuredModel.generateContent('Return {"status": "working"}');
        const structuredResponse = await structuredResult.response;
        const structuredText = structuredResponse.text();
        
        console.log(`   📝 ${modelName}: Supports structured output - ${structuredText.trim()}`);
      } catch (structuredError) {
        console.log(`   📝 ${modelName}: No structured output support`);
      }
      
    } catch (error) {
      console.log(`❌ ${modelName}: FAILED - ${error.message}`);
    }
  }
  
  console.log(`\n🎯 Summary: Found ${workingModels.length} working models:`);
  workingModels.forEach(model => console.log(`  - ${model}`));
  
  return workingModels;
}

testGeminiModels().catch(console.error);