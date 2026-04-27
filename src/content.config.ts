import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    area: z.enum(["Medical AI", "MLOps"]),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    year: z.string(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string()
        })
      )
      .default([])
  })
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([])
  })
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    year: z.string(),
    authors: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([])
  })
});

const timeline = defineCollection({
  type: "data",
  schema: z.object({
    order: z.number(),
    title: z.string(),
    date: z.string(),
    period: z.string(),
    description: z.string(),
    image: z.string(),
    alt: z.string()
  })
});

export const collections = { projects, blog, publications, timeline };
