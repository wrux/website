import { z, defineCollection } from 'astro:content';

const jobs = defineCollection({
  type: 'data',
  schema: () =>
    z.object({
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
  type: 'data',
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
