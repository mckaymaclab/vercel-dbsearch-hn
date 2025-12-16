# Multi-Provider LLM Setup Guide

This application now supports multiple LLM providers with better free tiers than Gemini. Here's how to set them up:

## 🚀 Recommended Provider Setup (in order of generosity)

### 1. Groq (Most Generous - Fastest)
- **Free Tier**: 14,400 requests/day, 30k tokens/minute
- **Speed**: Extremely fast (500+ tokens/sec)
- **Setup**:
  1. Go to [console.groq.com](https://console.groq.com/keys)
  2. Create account and get API key
  3. Add to `.env.local`: `GROQ_API_KEY=your_groq_key_here`

### 2. Hugging Face (Multiple Providers)
- **Free Tier**: 1000+ requests/day, access to dozens of models
- **Advantage**: Automatic provider fallback
- **Setup**:
  1. Go to [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)
  2. Create fine-grained token with "Make calls to Inference Providers" permission
  3. Add to `.env.local`: `HF_TOKEN=your_hf_token_here`

### 3. Together AI (Production Ready)
- **Free Tier**: $25 free credits (~600 requests)
- **Models**: High-quality Llama and Mixtral models
- **Setup**:
  1. Go to [api.together.xyz](https://api.together.xyz/settings/api-keys)
  2. Sign up and get $25 free credits
  3. Add to `.env.local`: `TOGETHER_API_KEY=your_together_key_here`

### 4. Gemini (Backup)
- **Free Tier**: Limited but still functional
- **Already configured**: Keep as final fallback

## 🔧 Environment Variables Setup

Add these to your `.env.local` file (get as many as possible for best coverage):

```bash
# Primary providers (get these first for best experience)
GROQ_API_KEY=your_groq_key_here
HF_TOKEN=your_hugging_face_token_here
TOGETHER_API_KEY=your_together_key_here

# Backup provider
GEMINI_API_KEY=your_existing_gemini_key_here
```

## 📊 Provider Comparison

| Provider | Free Requests/Day | Speed | Models | Best For |
|----------|------------------|--------|---------|----------|
| Groq | 14,400 | ⚡⚡⚡⚡⚡ | Llama 3.3, Mixtral | High volume, speed |
| Hugging Face | 1,000+ | ⚡⚡⚡⚡ | 100+ models | Variety, reliability |
| Together AI | ~600 ($25 credits) | ⚡⚡⚡⚡ | Premium models | Quality, production |
| Gemini | 1,500 | ⚡⚡⚡ | Gemini models | Backup |

## 🎯 How It Works

The system tries providers in this order:
1. **Groq** (fastest, most generous)
2. **Hugging Face** (great variety and fallback)
3. **Together AI** (high quality)
4. **Gemini** (your existing setup)
5. **Fuzzy Search** (if all AI fails)

Each provider has automatic fallback to secondary models, giving you maximum uptime and the best free tier usage across the industry!

## 🚀 Quick Start

1. Get at least the Groq API key (takes 2 minutes, most generous free tier)
2. Add it to `.env.local`
3. Restart your development server
4. Enjoy 14,400 requests per day instead of Gemini's limited quota!

## 🔍 Testing

Test the multi-provider system by:
1. Starting the development server: `npm run dev`
2. Making a search query to see which provider is used
3. Check the console logs for provider selection and fallback behavior