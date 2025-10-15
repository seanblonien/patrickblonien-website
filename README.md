# Patrick Blonien – Personal Academic Website

A modern, fully static academic website built with Next.js 15, featuring a clean design optimized for finance professors and researchers. The site showcases research papers with collapsible abstracts, professional branding, and is fully responsive and accessible.

## Tech Stack Overview

Built with **Next.js 15** (App Router) and **TypeScript** for type safety and modern React patterns. Styled with **Tailwind CSS v4** for a utility-first approach with CMU branding. The site is fully static (pre-rendered at build time) for maximum performance and SEO. Content is managed through simple TypeScript files in the `data/` directory—no CMS required. All pages are server components except for interactive elements like collapsible abstracts.

## Getting Started

### Prerequisites
- Node.js 22+ and NPM
- Git

### Development

```bash
# Clone the repository
git clone https://github.com/seanblonien/patrickblonien-website.git
cd patrickblonien-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

## Making Changes/Contributing

This repository is designed to work seamlessly with AI coding agents like Augment, Cursor, or GitHub Copilot. Simply describe the changes you want in natural language—whether updating site content, adding research papers, or modifying styling—and the agent will handle the implementation. The codebase follows clear separation of concerns with content in `data/`, components in `components/`, and pages in `app/`, making it easy for agents to understand and modify the right files.

## Deployment

The site is deployed on Vercel. To deploy your own version, simply connect your GitHub repository to Vercel and enable automatic deployments on push to main. Vercel will handle building and deploying the static site for you.
