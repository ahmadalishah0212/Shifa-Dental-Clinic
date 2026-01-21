import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// This explains what every blog post MUST have
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// We are calling it "pubDate"
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };