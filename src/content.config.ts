import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const strengths = defineCollection({
  loader: file('./src/data/strengths.json'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    body:  z.string(),
  }),
});

const awards = defineCollection({
  loader: file('./src/data/awards.json'),
  schema: z.object({
    order:    z.number(),
    year:     z.string(),
    title:    z.string(),
    issuer:   z.string(),
    detail:   z.string().optional(),
    featured: z.boolean(),
  }),
});

const testimonials = defineCollection({
  loader: file('./src/data/testimonials.json'),
  schema: z.object({
    order:    z.number(),
    featured: z.boolean(),
    category: z.string(),
    excerpt:  z.string(),
    quote:    z.string(),
    name:     z.string(),
    title:    z.string(),
  }),
});

const services = defineCollection({
  loader: file('./src/data/services.json'),
  schema: z.object({
    order:       z.number(),
    name:        z.string(),
    icon:        z.string(),
    description: z.string(),
    tags:        z.array(z.string()),
    featured:    z.boolean(),
  }),
});

export const collections = { strengths, awards, testimonials, services };
