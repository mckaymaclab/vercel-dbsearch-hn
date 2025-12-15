import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from 'dotenv';
config({ path: '.env.local' });

async function listAvailableModels() {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  
  try {
    console.log('Testing available Gemini models...\n');
    
    // Test common model names
    const modelsToTest = [
      'gemini-pro',
      'gemini-1.5-flash',
      'gemini-1.5-pro',
      'gemini-1.0-pro',
      'models/gemini-pro',
      'models/gemini-1.5-flash',
      'models/gemini-1.5-pro'
    ];
    
    for (const modelName of modelsToTest) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent('Test');
        console.log(`✅ Model "${modelName}" is available and working`);
      } catch (error) {
        console.log(`❌ Model "${modelName}" failed: ${error.message}`);
      }
    }
    
  } catch (error) {
    console.error('Error testing models:', error);
  }
}

listAvailableModels();