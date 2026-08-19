import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

// Articles académiques / publications longues
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    lang: z.enum(['fr', 'en', 'es']).default('fr'),
    tags: z.array(z.string()).default([]),
    journal: z.string().optional(),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    bibtex: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Notes courtes, réflexions, format blog
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lang: z.enum(['fr', 'en', 'es']).default('fr'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, notes };