# Nomad Gourmet Chronicles

A personal food & travel blog by Sara Ann Abdilla — where travel tales meet personally tested recipes.

Live site: <https://nomad-gourmet-chronicles.vercel.app/>

## Features

- Next.js 15 (App Router) with TypeScript
- [Contentlayer 2](https://www.contentlayer.dev/) for MDX content management
- [Tailwind CSS 4](https://tailwindcss.com/) with custom purple theme and dark/light mode
- Two content types: **blog posts** and **recipes**
- Comments via [Giscus](https://giscus.app/) (GitHub Discussions)
- Newsletter integration with [Buttondown](https://buttondown.email/)
- Analytics with [Umami](https://umami.is/)
- Command palette search with [Kbar](https://github.com/timc1/kbar)
- Server-side syntax highlighting via [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
- Math display via [KaTeX](https://katex.org/)
- Instagram embeds via custom remark plugin
- [GitHub alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) via [remark-github-blockquote-alert](https://github.com/jaywcjlove/remark-github-blockquote-alert)
- Automatic image optimization via [next/image](https://nextjs.org/docs/basic-features/image-optimization)
- Tag system with per-content-type tag pages
- 3 post layouts: `PostLayout`, `PostSimple`, `PostBanner`
- 2 listing layouts: `ListLayout`, `ListLayoutWithTags`
- SEO friendly with RSS feeds, sitemaps, and structured data
- Preconfigured security headers
- Deployed on [Vercel](https://vercel.com)

Based on the [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template (v2.4.0).

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open <http://localhost:3000> with your browser to see the result.

Content lives in `data/blog/` and `data/recipes/` as MDX files. Pages auto-update as you edit them.

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build + RSS generation
- `npm run serve` — Start production server
- `npm run lint` — ESLint with auto-fix
- `npm run analyze` — Bundle size analysis

## Project Structure

- `app/` — Next.js App Router pages (blog, recipes, tags, contact, about, etc.)
- `components/` — Reusable React components
- `layouts/` — Page layout templates
- `data/blog/` — Blog posts (MDX)
- `data/recipes/` — Recipes (MDX)
- `data/author/` — Author info (MDX)
- `data/siteMetadata.js` — Site-wide configuration
- `data/headerNavLinks.ts` — Navigation links
- `css/` — Tailwind CSS config and Prism code highlighting
- `public/static/` — Static assets (images, favicons)
- `scripts/` — Build scripts (RSS generation, image compression)
- `plugins/` — Custom remark plugins (Instagram embed)

## Content

Content is managed with [Contentlayer 2](https://www.contentlayer.dev/) and written in MDX. Files use numbered prefixes for ordering (e.g. `1_Blog-Intro.mdx`, `20_Blueberry-Muffins.mdx`).

### Frontmatter

```yaml
title: required
date: required (YYYY-MM-DD)
tags: [array]
lastmod: optional
draft: true/false
summary: short description
images: [array of image paths]
layout: PostLayout | PostSimple | PostBanner
bibliography: optional (path to .bib file)
canonicalUrl: optional
```

Example:

```yaml
---
title: Blueberry Banana Muffins
date: '2026-03-21'
tags: ['recipe', 'sweet', 'gluten-free', 'lactose-free']
draft: false
summary: Soft, fruity muffins with banana, oats, and bursts of blueberry.
---
```

## Environment Variables

Create a `.env.local` file with:

```bash
# Giscus comments
NEXT_PUBLIC_GISCUS_REPO=
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=
NEXT_PUBLIC_GISCUS_CATEGORY=
NEXT_PUBLIC_GISCUS_CATEGORY_ID=

# Analytics
NEXT_UMAMI_ID=

# Newsletter
BUTTONDOWN_API_KEY=
```

## Deploy

Deployed on [Vercel](https://vercel.com). Set the environment variables above in your Vercel project settings.
