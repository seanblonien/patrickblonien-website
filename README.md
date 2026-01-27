# Patrick Blonien – Personal Academic Website

A modern, fully static academic website built with Next.js 16, featuring a clean design optimized for finance professors and researchers. The site showcases research papers with collapsible abstracts, professional branding, and is fully responsive and accessible.

## Tech Stack Overview

Built with **Next.js 16** (App Router) and **TypeScript** for type safety and modern React patterns. Styled with **Tailwind CSS v4** for a utility-first approach with CMU branding. The site is fully static (pre-rendered at build time) for maximum performance and SEO. Content is managed through simple TypeScript files in the `data/` directory—no CMS required. All pages are server components except for interactive elements like collapsible abstracts.

### Prerequisites

- **Node.js 24+** (specified in `.nvmrc`)
- **pnpm 10+** (package manager)
- **Git**
- **Bun** (for build scripts - auto-installed by pnpm)

## Development Workflow

### Development Commands

```bash
# Install dependencies
pnpm install

# Start development server with hot reload
pnpm dev

# Run both linting and type checking in parallel
pnpm validate

# Generate LLMs.txt files for AI context (required when data changes)
pnpm gen
```

### Build & Production

```bash
# Build for production (static export)
pnpm build

# Build and serve locally
pnpm prod

# Start production server (after build)
pnpm start

# Analyze bundle size
pnpm analyze
```

## Content Management

### Adding Research Papers

Edit `data/papers.ts` and add new papers following the existing structure:

```typescript
{
  id: "paper-slug",
  title: "Paper Title",
  authors: [
    { name: "Patrick Blonien", isPatrick: true },
    { name: "Coauthor Name", url: "https://example.com" }
  ],
  paperType: "Working Papers" | "Publications",
  venue: "Journal/Conference Name",
  date: "2025",
  abstract: "Paper abstract...",
  imageUrl: import("@/public/paper-image.webp"),
  links: [
    { type: "paper", url: "/paper.pdf" },
    { type: "code", url: "https://github.com/..." }
  ]
}
```

### Site Information

Update `data/site.ts` to modify:
- Personal details (name, title, institution)
- Contact information
- Social media links
- Research focus description
- CV download link
