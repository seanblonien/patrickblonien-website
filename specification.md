Project: “Patrick Blonien – Personal Academic Website”

Goal:
- Build a personal academic website for Patrick Blonien, Assistant Professor of
  Finance at Carnegie Mellon University, Tepper School of Business.
- Pages: Home and Research.
- Tech: Next.js 15 (App Router), React, Tailwind CSS, TypeScript, next/font,
  pre-rendered static pages for all routes. Vercel deployment.
- Design: Finance-professor aesthetic; clean, credible, and fast.

Requirements:
- Layout:
  - Sticky top navbar: left = site name (“Patrick Blonien”), right = links
    [Home, Research]. Active link style.
  - Footer with 3 columns:
    - Contact: email and physical address
    - Links: social links (e.g., Google Scholar, SSRN, Twitter/𝕏, LinkedIn)
    - Affiliations: CMU site directory link(s) and Tepper faculty directory link
  - Max content width ~1140–1280px, generous white space.
- Home Page:
  - Hero section with name, title, current position at Carnegie Mellon
    University, Tepper School of Business, and a hero portrait image.
  - Short research focus paragraph (placeholder if none provided).
  - Primary CTAs: “View Research” and “Download CV”.
- Research Page:
  - Static list of Working Papers / Publications (single list is fine).
  - Each paper card includes:
    - Title
    - Authors list
    - Journal/venue label and year (or status like “R&R” / “Forthcoming”)
    - Collapsible abstract (closed by default)
    - Action links with helpful icons: Paper (PDF/url), Slides, BibTeX,
      Presentations, Media, Code & Data, External profile (e.g., SSRN/GS)
- Accessibility:
  - Keyboard focus styles, aria-expanded for collapsible abstract,
    semantic landmarks (header/main/footer/nav), alt text for images.
- Responsiveness:
  - Mobile-first, stack layout on small screens.
  - Navbar collapses to a simple menu button on <md (optional); if not, keep a
    simple inline nav that wraps.
- Theming:
  - Light mode primary color = CMU red rgb(196, 18, 48).
  - Neutral grays elsewhere; high contrast
- Typography:
  - Body: Open Sans (next/font/google).
  - Headings: Merriweather (or Libre Baskerville) for a scholarly feel.
- Copy:
  - Keep professional, concise, neutral. Placeholder text where needed.

Data & Types:
- A type-safe JSON-literal–backed module for research papers; easy to append.
- Use TypeScript const assertions and “satisfies” to enforce schema.
- Schema:
  - ResearchPaper:
    - id: string (slug)
    - title: string
    - authors: string[] (order matters)
    - venue?: string (journal/venue/status label)
    - year?: number
    - abstract?: string
    - tags?: string[]
    - links?: Array<{
        type: "paper" | "slides" | "bibtex" | "presentation" | "media" |
              "code" | "data" | "external";
        label?: string; // override default label
        url: string;
      }>
- Keep data local (no remote fetch). Export a list: papers[].

Interactions:
- Collapsible abstract with smooth height animation and aria attributes.
- Link icons: use lucide-react or heroicons; ensure external links open in new
  tab with rel="noopener noreferrer".
- Optional filter/search (not required).

Code constraints:
- Next.js 15 app dir structure with static generation (no server calls).
- Tailwind for styling; minimal custom CSS.
- Fonts via next/font/google.
- Icons via lucide-react.
- No extra UI libraries unless necessary
- Prettier formatting; logical Tailwind class ordering.
- SEO: use Next.js Metadata API for title, description, open graph, canonical.
- Static export-friendly where possible; ensure build-time data import.

Deliverables:
- Pages:
  - app/page.tsx (Home)
  - app/research/page.tsx (Research)
  - app/layout.tsx (root layout with fonts, metadata, navbar, footer)
- Components:
  - components/NavBar.tsx
  - components/Footer.tsx
  - components/Hero.tsx
  - components/ResearchList.tsx
  - components/ResearchCard.tsx
  - components/Collapse.tsx (for abstract)
  - components/IconLink.tsx
- Data:
  - data/papers.ts (typed JSON-literal module)
  - data/site.ts (name, title, email, address, socials, affiliations)
- Styles/Config:
  - tailwind.config.ts with CMU red as primary
  - globals.css (basic resets and prose tweaks)
- README comment at top of each page with how to add papers (AI friendly) and deploy to Vercel.

Non-goals:
- No backend, auth, or CMS.
- No dynamic fetching; no databases.

Examples for reference:
- Layout vibe: https://www.patrickblonien.com/ (model overall structure)
- Research list vibe: use the attached screenshots for structure and icons

Branding & Theme:
- Primary: CMU Red rgb(196, 18, 48)
- Grays: Tailwind zinc/neutral scale.
- Body font: Open Sans
- Heading font: Merriweather
- Spacing and rhythm: comfortable line-height, 8px grid.

SEO:
- Titles:
  - Home: “Patrick Blonien – Assistant Professor of Finance, Carnegie Mellon
    University (Tepper)”
  - Research: “Research – Patrick Blonien”
- Description: Short bio line and research focus.
- Open Graph + Twitter cards: site name, portrait hero image, canonical URLs.
- Pre-render all routes; set revalidate to false (fully static).

Initial content (sample):
- site.ts
  - name: "Patrick Blonien"
  - title: "Assistant Professor of Finance"
  - institution: "Carnegie Mellon University, Tepper School of Business"
  - email: "patrick@patrickblonien.com" (placeholder)
  - address: "5000 Forbes Ave, Pittsburgh, PA 15213, USA" (placeholder)
  - links: [{ type: "scholar", url: "..." }, { type: "ssrn", url: "..." },
    { type: "twitter", url: "..." }, { type: "linkedin", url: "..." }]
  - affiliations: [
      { label: "CMU Tepper School of Business", url: "..." },
      { label: "Faculty Directory", url: "..." }
    ]
- papers.ts
  - export const papers = [
      {
        id: "example-paper",
        title: "Sample Title: Investor Behavior and Market Dynamics",
        authors: ["Patrick Blonien", "Coauthor Name"],
        venue: "Working Paper",
        year: 2025,
        abstract:
          "Short abstract text describing the paper's contribution and methods.",
        tags: ["corporate finance", "asset pricing"],
        links: [
          { type: "paper", url: "https://example.com/paper.pdf" },
          { type: "slides", url: "https://example.com/slides.pdf" },
          { type: "bibtex", url: "https://example.com/cite.bib" },
          { type: "external", label: "SSRN", url: "https://ssrn.com/..." }
        ]
      }
    ] satisfies ResearchPaper[];

Checklist to include:
- Sticky navbar with active state
- Footer with Contact, Links, Affiliations
- Home hero with name, title, institution, portrait image
- Research list with cards, icons, and collapsible abstracts
- Fully static (SSG) build; SEO metadata; canonical URLs
- CMU red primary color; Open Sans + Merriweather fonts
- Type-safe papers data module; easy append-only workflow
