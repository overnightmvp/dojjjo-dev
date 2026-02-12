import { defineCollection, z } from 'astro:content';

const protocol = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).optional(),
    }),
});

const roadmap = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
    }),
});

export const collections = { protocol, roadmap };
