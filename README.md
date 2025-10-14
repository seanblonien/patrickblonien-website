# Patrick Blonien – Personal Academic Website

A modern, static academic website built with Next.js 15, featuring a clean design optimized for finance professors and researchers.

## Features

- ✅ **Fully Static**: Pre-rendered at build time for maximum performance
- 🎨 **CMU Branding**: Carnegie Mellon red primary color with professional typography
- 📱 **Responsive Design**: Mobile-first approach that works on all devices
- ♿ **Accessible**: WCAG compliant with keyboard navigation and ARIA labels
- 🔍 **SEO Optimized**: Complete metadata, Open Graph, and Twitter cards
- 📄 **Research Showcase**: Collapsible abstracts, paper links, and tags
- 🚀 **Fast**: Optimized fonts, images, and minimal JavaScript

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Open Sans (body), Merriweather (headings)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:3000` to see the site.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   ├── research/
│   │   └── page.tsx        # Research page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── NavBar.tsx          # Sticky navigation
│   ├── Footer.tsx          # Footer with contact/links
│   ├── Hero.tsx            # Home page hero section
│   ├── ResearchList.tsx    # Research papers list
│   ├── ResearchCard.tsx    # Individual paper card
│   ├── Collapse.tsx        # Collapsible abstract
│   └── IconLink.tsx        # Paper action links
├── data/
│   ├── types.ts            # TypeScript types
│   ├── site.ts             # Site information
│   └── papers.ts           # Research papers data
└── public/
    ├── portrait.jpg        # Hero portrait image
    └── cv.pdf              # CV download
```

## Adding Research Papers

Edit `data/papers.ts` and add a new entry to the `papers` array:

```typescript
{
  id: "my-paper-2025",                    // Unique slug
  title: "Your Paper Title",
  authors: ["Patrick Blonien", "Coauthor"],
  venue: "Journal of Finance",            // Optional
  year: 2025,                             // Optional
  abstract: "Your abstract text...",      // Optional
  tags: ["corporate finance"],            // Optional
  links: [                                // Optional
    { type: "paper", url: "https://..." },
    { type: "slides", url: "https://..." },
    { type: "bibtex", url: "https://..." },
    { type: "code", url: "https://..." },
    { type: "external", label: "SSRN", url: "https://..." }
  ]
}
```

Available link types: `paper`, `slides`, `bibtex`, `presentation`, `media`, `code`, `data`, `external`

## Updating Site Information

Edit `data/site.ts` to update:
- Name, title, institution
- Email and address
- Research focus paragraph
- Social media links (Google Scholar, SSRN, Twitter, LinkedIn)
- Affiliation links

## Customization

### Colors

The primary color (CMU red) is defined in `app/globals.css`:

```css
--color-primary: rgb(196, 18, 48);
```

### Fonts

Fonts are configured in `app/layout.tsx`:
- Body: Open Sans
- Headings: Merriweather

### Images

- Replace `public/portrait.jpg` with your portrait (recommended: 800x800px)
- Replace `public/cv.pdf` with your CV

## Deployment to Vercel

### Option 1: Deploy via GitHub

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Setup

No environment variables are required for basic deployment. The site is fully static.

### Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., `patrickblonien.com`)
4. Update `metadataBase` in `app/layout.tsx` to match your domain

## Accessibility Features

- Semantic HTML landmarks (`header`, `main`, `footer`, `nav`)
- ARIA labels and attributes
- Keyboard navigation support
- Focus visible styles
- Alt text for images
- Proper heading hierarchy

## Performance

- Static generation (SSG) for all routes
- Optimized fonts with `next/font`
- Image optimization ready (add images to `/public`)
- Minimal JavaScript bundle
- CSS-in-JS via Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on GitHub or contact the developer.

---

Built with ❤️ using Next.js and Tailwind CSS

