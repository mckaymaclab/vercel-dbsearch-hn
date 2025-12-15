// Test all configured LLM providers
import { LLM_PROVIDERS, callOpenAICompatibleAPI, getAIRecommendationsWithFallback } from './lib/multi-llm-providers.js';

async function testAllProviders() {
  console.log('🧪 Testing Multi-Provider LLM System...\n');
  
  // Test each provider individually
  console.log('📊 Provider Availability:');
  for (const [key, provider] of Object.entries(LLM_PROVIDERS)) {
    const apiKey = process.env[provider.apiKeyEnv];
    const status = apiKey ? '✅ API Key Found' : '❌ No API Key';
    const limit = provider.rateLimits.requestsPerDay;
    console.log(`  ${provider.name}: ${status} (${limit} requests/day free)`);
  }
  
  console.log('\n🔄 Testing Multi-Provider Fallback System:');
  
  try {
    const testQuery = "databases for American Civil War research";
    console.log(`Query: "${testQuery}"\n`);
    
    const results = await getAIRecommendationsWithFallback(testQuery);
    
    if (results && results.length > 0) {
      console.log(`✅ SUCCESS: Got ${results.length} recommendations`);
      console.log('\n📋 Sample Results:');
      results.slice(0, 3).forEach((result, i) => {
        console.log(`  ${i + 1}. ${result.name}`);
        console.log(`     Score: ${result.relevanceScore}/100`);
        console.log(`     Reason: ${result.matchReason?.substring(0, 80)}...`);
      });
    } else {
      console.log('❌ No results returned');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
  
  console.log('\n💡 Recommendations:');
  
  const hasGroq = process.env.GROQ_API_KEY;
  const hasHF = process.env.HF_TOKEN;
  const hasTogether = process.env.TOGETHER_API_KEY;
  
  if (!hasGroq) {
    console.log('  🚀 Get Groq API key for 14,400 free requests/day: https://console.groq.com/keys');
  }
  
  if (!hasHF) {
    console.log('  🤗 Get Hugging Face token for multiple providers: https://huggingface.co/settings/tokens');
  }
  
  if (!hasTogether) {
    console.log('  🤖 Get Together AI key for $25 free credits: https://api.together.xyz/settings/api-keys');
  }
  
  if (hasGroq && hasHF) {
    console.log('  ✨ Great setup! You have excellent free tier coverage.');
  }
}

testAllProviders().catch(console.error);