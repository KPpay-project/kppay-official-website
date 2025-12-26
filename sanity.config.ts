import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { schemas } from './src/lib/sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'KPPAY Blog',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/blog/studio',
  plugins: [structureTool(), visionTool(), codeInput()],
  schema: {
    types: schemas,
  },
});
