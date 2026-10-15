import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    year: z.string(),
    role: z.string(),
    tech: z.array(z.string()),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    problem: z.string(),
    solution: z.string(),
    features: z.array(z.string()),
    results: z.string(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { projects };