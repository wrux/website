import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/jobs' }),
  schema: z.object({
    company: z.string(),
    location: z.string(),
    title: z.string(),
    tenure: z.object({
      from: z.string(),
      to: z.string().nullable(),
    }),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      description: z.string(),
      href: z.string(),
      name: z.string(),
      image: image(),
      toolsUsed: z.array(z.string()),
      order: z.number(),
    }),
});

export const collections = {
  jobs,
  projects,
};
