// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

//TODO: Define your models here.
export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
  },
  
  
  {
    id: 'llama3-8b-8192',
    label: 'LLAMA 3.1 8b',
    apiIdentifier: 'llama3-8b-8192',
    description: 'For testing',
  },
  {
    id: 'llama3-70b-8192',
    label: 'LLAMA 3.1 70b',
    apiIdentifier: 'llama3-70b-8192',
    description: 'For testing',
  },
  {
    id: 'deepseek-r1-distill-llama-70b',
    label: 'DEEPSEEK r1',
    apiIdentifier: 'deepseek-r1-distill-llama-70b',
    description: 'For testing mf',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'deepseek-r1-distill-llama-70b';
