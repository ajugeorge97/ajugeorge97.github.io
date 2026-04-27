# Research Systems Portfolio

Static-first Astro portfolio for Aju George, focused on synthetic breast MRI research, Kubernetes/MLOps engineering, and the intersection between research and scalable systems.

## Stack

- Astro static output
- Tailwind CSS
- MDX content collections
- React island only for timeline scroll progress

## Local Setup

Use Node 22 LTS. The project includes `.nvmrc` and package `engines` for that reason.

```bash
nvm use
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Content

- Timeline: `src/content/timeline`
- Projects: `src/content/projects`
- Blog: `src/content/blog`
- Publications: `src/content/publications`

## Key Components

- Layout: `src/layouts/BaseLayout.astro`
- Timeline: `src/components/Timeline.astro`
- Timeline progress island: `src/components/TimelineProgress.tsx`
- Project card: `src/components/ProjectCard.astro`
- Architecture diagram: `src/components/ArchitectureDiagram.astro`
