import { GoogleGenerativeAI } from '@google/generative-ai';

async function testModels() {
  // Get API key from environment 
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error('GOOGLE_API_KEY environment variable not set');
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  
  console.log('Testing available Gemini models...\n');
  
  // Test common model names that might work
  const modelsToTest = [
    'text-bison-001',
    'text-bison',
    'gemini-pro',
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-1.0-pro',
    'models/text-bison-001',
    'models/gemini-pro',
    'models/gemini-1.5-flash',
    'models/gemini-1.5-pro'
  ];
  
  for (const modelName of modelsToTest) {
    try {
      console.log(`Testing model: ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent('Hello');
      console.log(`✅ Model "${modelName}" is available and working`);
      console.log(`   Response: ${result.response.text().substring(0, 50)}...`);
      break; // If one works, use it
    } catch (error) {
      console.log(`❌ Model "${modelName}" failed: ${error.message.substring(0, 100)}...`);
    }
  }
}

testModels().catch(console.error);