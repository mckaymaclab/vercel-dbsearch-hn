import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock environment variables
vi.mock('process.env', () => ({
  GEMINI_API_KEY: 'test-api-key',
}));
