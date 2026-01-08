Project: "Patrick Blonien – Personal Academic Website"

Goal:
- Personal academic website for Patrick Blonien, Assistant Professor of Finance
  at Carnegie Mellon University, Tepper School of Business.
- Pages: Home and Research.
- Tech: Next.js 15 (App Router), React 19, Tailwind CSS 4, TypeScript,
  next/font, fully static export. Vercel deployment with Analytics and Speed
  Insights.
- Design: Finance-professor aesthetic; clean, credible, and fast.

Requirements:
- Layout:
  - Sticky top navbar: left = site name ("Patrick Blonien"), right = links
    [Home, Research]. Active link style with underline indicator.
  - Footer with 3 columns:
    - Contact: email and physical address
    - Links: social links (Google Scholar, SSRN, LinkedIn)
    - Affiliations: CMU Tepper School of Business and Faculty Directory links
  - Max content width = 1280px (--max-width-content), generous white space.
- Home Page:
  - Hero section with name, title, current position at Carnegie Mellon
    University, Tepper School of Business, and a hero portrait image.
  - Research focus paragraph from data/site.ts.
  - Primary CTAs: "View Research" and "Download CV".
- Research Page:
  - Full-width CMU tartan banner with overlaid "Research" title.
  - Papers grouped by type: "Working Papers" and "Publications" sections.
  - Each paper card includes:
    - Optional paper image (or gradient placeholder with FileText icon)
    - Title
    - Authors list (with clickable links for external authors, Patrick Blonien
      highlighted)
    - Venue/status label and date
    - Collapsible abstract (closed by default, smooth height animation)
    - Action links with icons: Paper, Slides, BibTeX, Code, Data, External
    - Modal buttons for: Presentations, Awards, Media (when data exists)
- Accessibility:
  - Keyboard focus styles with custom .focus-ring class
  - aria-expanded for collapsible abstracts
  - aria-modal and role="dialog" for modals
  - Semantic landmarks (header/main/footer/nav)
  - Alt text for all images
  - Escape key closes modals
- Responsiveness:
  - Mobile-first design
  - Paper cards stack vertically on mobile, side-by-side (image + content) on
    desktop
  - Navbar remains inline (no hamburger menu), wraps on small screens
  - Footer columns stack on mobile
- Theming:
  - Primary color = CMU red rgb(196, 18, 48) with full palette (50-900)
  - Neutral grays using Tailwind zinc scale
  - High contrast for readability
- Typography:
  - Body: Open Sans (next/font/google, weights 400/700)
  - Headings: Merriweather (next/font/google, weights 400/700)
  - Line height 1.75 for paragraphs
- Copy:
  - Professional, concise, academic tone

Data & Types:
- Type-safe TypeScript modules for research papers and site info.
- Use TypeScript const assertions and type inference.
- Schema (data/types.ts):
  - ResearchPaper:
    - id: string (unique slug)
    - title: string
    - authors: Author[] (PatrickAuthor | ExternalAuthor)
      - PatrickAuthor: { name: string; isPatrick: true }
      - ExternalAuthor: { name: string; url: UrlType; isPatrick?: never }
    - paperType: "Working Papers" | "Publications"
    - venue?: string (journal/venue/status label)
    - date?: string
    - abstract?: string
    - tags?: string[]
    - imageUrl?: StaticImageData (imported from next/image)
    - presentations?: Presentation[]
      - { venue: string; location: string; date?: string; isPresentedByCoauthor?: true }
    - awards?: Award[]
      - { title: string; year?: string }
    - media?: MediaLink[]
      - { label: string; url: UrlType }
    - links?: ResearchLink[]
      - { type: LinkType; label?: string; url: UrlType }
      - LinkType: "paper" | "slides" | "bibtex" | "presentation" | "media" |
                  "code" | "data" | "external"
  - SiteInfo:
    - name: string
    - title: string
    - institution: string
    - email: string
    - address: string
    - researchFocus?: string
    - cvUrl?: PublicUrlPath
    - portraitUrl: PublicUrlPath
    - socials: SocialLink[]
      - { type: SocialLinkType; url: UrlType }
      - SocialLinkType: "scholar" | "ssrn" | "linkedin"
    - affiliations: Affiliation[]
      - { label: string; url: UrlType }
- Keep data local (no remote fetch). Export typed constants.

Interactions:
- Collapsible abstract with smooth height animation and aria attributes.
- Modals for Presentations, Awards, and Media (client components).
- Link icons: use lucide-react; ensure external links open in new tab with
  rel="noopener noreferrer".
- Modal closes on: backdrop click, X button click, Escape key.
- Body scroll locked when modal is open.

Code constraints:
- Next.js 15 app dir structure with static generation (output: 'export').
- Server components by default; client components only for interactivity
  (modals, collapsible abstracts).
- Tailwind CSS 4 for styling with @theme directive in globals.css.
- Fonts via next/font/google with preload and display: swap.
- Icons via lucide-react.
- No extra UI libraries.
- Logical Tailwind class ordering.
- SEO: use Next.js Metadata API for title, description, open graph, canonical.
- Structured data: JSON-LD for Person, Website, and Breadcrumb schemas.
- Static export-friendly; ensure build-time data import.

Deliverables:
- Pages:
  - app/page.tsx (Home)
  - app/research/page.tsx (Research)
  - app/layout.tsx (root layout with fonts, metadata, navbar, footer)
  - app/not-found.tsx (404 page)
  - app/robots.ts (robots.txt generation)
  - app/sitemap.ts (sitemap.xml generation)
- Components:
  - components/NavBar.tsx (server component)
  - components/Footer.tsx (server component)
  - components/Hero.tsx (server component)
  - components/ResearchList.tsx (server component)
  - components/ResearchCard.tsx (server component wrapper)
  - components/ResearchCardClient.tsx (client component for modals)
  - components/Collapse.tsx (client component for abstract)
  - components/IconLink.tsx (server component)
  - components/PaperContent.tsx (server component)
  - components/PaperLinks.tsx (client component for modal triggers)
  - components/Modal.tsx (client component)
  - components/PresentationsModalContent.tsx (server component)
  - components/AwardsModalContent.tsx (server component)
  - components/MediaModalContent.tsx (server component)
  - components/StructuredData.tsx (server component for JSON-LD)
- Data:
  - data/types.ts (TypeScript type definitions)
  - data/papers.ts (typed research papers array with imports for images)
  - data/site.ts (typed site info constant)
- Styles/Config:
  - app/globals.css (Tailwind import, @theme directive, custom CSS)
  - postcss.config.mjs (Tailwind PostCSS plugin)
  - next.config.ts (output: 'export', image optimization config)
- Documentation:
  - Inline comments in data/papers.ts explaining how to add new papers.
  - Inline comments in app/research/page.tsx explaining the structure.

Non-goals:
- No backend, auth, or CMS.
- No dynamic fetching; no databases.
- No dark mode (light mode only).

Architecture:
- Server/Client Component Split:
  - Server components: All pages, layout, most components (NavBar, Footer, Hero,
    ResearchList, ResearchCard wrapper, PaperContent, IconLink, modal content
    components, StructuredData).
  - Client components: Only interactive elements (Modal, Collapse,
    ResearchCardClient for modal state, PaperLinks for modal triggers).
- Data Flow:
  - Static data imported from data/papers.ts and data/site.ts.
  - Papers grouped by paperType in ResearchList.
  - Each paper rendered as ResearchCard (server) wrapping ResearchCardClient
    (client).
  - Modal state managed in ResearchCardClient, content passed as children.
- Styling:
  - Tailwind CSS 4 with @theme directive in globals.css.
  - Custom CSS variables: --color-primary (with 50-900 palette),
    --font-family-sans, --font-family-serif, --max-width-content.
  - Focus ring utility class (.focus-ring) for consistent keyboard focus styles.
- SEO & Metadata:
  - Metadata API in layout.tsx and page.tsx files.
  - JSON-LD structured data for Person, Website, and Breadcrumb.
  - Sitemap and robots.txt generated at build time.
  - Open Graph and Twitter card metadata.

Branding & Theme:
- Primary: CMU Red rgb(196, 18, 48) with full palette (50-900)
- Grays: Tailwind zinc scale
- Body font: Open Sans (weights 400/700)
- Heading font: Merriweather (weights 400/700)
- Spacing and rhythm: comfortable line-height (1.75 for paragraphs), consistent
  padding/margins

SEO:
- Titles:
  - Home: "Patrick Blonien | Home"
  - Research: "Patrick Blonien | Research"
  - Template: "Patrick Blonien | %s"
- Description: Research focus from data/site.ts.
- Open Graph + Twitter cards: site name, portrait hero image, canonical URLs.
- Fully static export (output: 'export' in next.config.ts).
- Sitemap and robots.txt generated at build time.
- Google site verification via environment variable.

Implementation Details:
- Images:
  - Paper images imported as StaticImageData from next/image.
  - Portrait image at /public/portrait.webp.
  - CMU tartan banner at /public/cmu_tartan.webp.
  - Favicon and app icons in /public.
- Modals:
  - Fixed position overlay with backdrop.
  - Centered modal with max-width and max-height.
  - Scrollable content area.
  - Close on backdrop click, X button, or Escape key.
  - Body scroll locked when open.
  - Focus management (modal receives focus when opened).
- Collapsible Abstract:
  - Smooth height animation using max-height transition.
  - aria-expanded attribute for accessibility.
  - Chevron icon rotates when expanded.
- Author Links:
  - External authors have clickable links.
  - Patrick Blonien highlighted (no link).
- Paper Links:
  - Icon-based links for Paper, Slides, BibTeX, Code, Data, External.
  - Button-based triggers for Presentations, Awards, Media modals.
  - Only rendered when data exists.

Checklist:
- Sticky navbar with active state (underline indicator)
- Footer with Contact, Links, Affiliations
- Home hero with name, title, institution, portrait image, research focus, CTAs
- Research page with CMU tartan banner and overlaid title
- Research list with papers grouped by type (Working Papers, Publications)
- Paper cards with optional images, collapsible abstracts, links, modal triggers
- Modals for Presentations, Awards, Media
- Fully static (SSG) build with output: 'export'
- SEO metadata with Metadata API
- JSON-LD structured data
- Sitemap and robots.txt
- CMU red primary color with full palette
- Open Sans + Merriweather fonts
- Type-safe papers and site data modules
- Server/client component split for optimal performance
- Accessibility: keyboard focus, ARIA attributes, semantic HTML
- Responsive design: mobile-first, stacks on small screens

