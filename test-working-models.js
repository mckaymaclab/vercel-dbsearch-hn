import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyAWvcTh8bEAYyZMqiqPLLT0JbMvO7Ql4a8');

const modelsToTest = [
  'models/gemini-flash-latest',
  'models/gemini-pro-latest', 
  'models/gemini-2.5-flash',
  'models/gemini-2.5-pro',
  'models/gemini-2.0-flash'
];

console.log('Testing working Gemini models...\n');

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
    const result = await model.generateContent('You are an academic librarian. Respond with just: "working"');
    console.log(`✅ ${modelName}: SUCCESS - "${result.response.text().trim()}"`);
    
    // Test structured output
    try {
      const structuredModel = genAI.getGenerativeModel({ 
        model: modelName,
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 200,
          responseMimeType: "application/json",
        },
      });
      const structuredResult = await structuredModel.generateContent('Return JSON: {"test": "working", "score": 85}');
      console.log(`   📝 ${modelName}: Structured output - ${structuredResult.response.text().trim()}`);
    } catch (structuredError) {
      console.log(`   📝 ${modelName}: No structured output support`);
    }
    
    console.log(''); // Add spacing
  } catch (error) {
    console.log(`❌ ${modelName}: FAILED - ${error.message}`);
  }
}