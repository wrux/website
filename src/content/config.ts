import { z, defineCollection } from 'astro:content';

const jobs = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      location: z.string(),
      title: image(),
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
    }),
});

export const collections = {
  jobs,
  projects,
};
