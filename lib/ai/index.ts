// TODO: Implement your own AI-SDK model here

// import { openai } from '@ai-sdk/openai';
import { groq } from '@ai-sdk/groq';
import { experimental_wrapLanguageModel } from 'ai';
import { wrapLanguageModel, extractReasoningMiddleware } from '../../node_modules/ai/dist/index.mjs';
import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: groq(apiIdentifier),
    middleware: extractReasoningMiddleware({ tagName: 'think' }),
  });
};

// export const imageGenerationModel = openai.image('dall-e-3');