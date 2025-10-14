# Quick Start Guide

## 🚀 Get Your Website Live in 5 Minutes

### Step 1: Update Your Information (2 minutes)

Edit `data/site.ts`:

```typescript
export const siteInfo: SiteInfo = {
  name: "Patrick Blonien",                    // ✏️ Your name
  title: "Assistant Professor of Finance",    // ✏️ Your title
  institution: "Carnegie Mellon University, Tepper School of Business",  // ✏️ Your institution
  email: "your.email@example.com",            // ✏️ Your email
  address: "Your office address",             // ✏️ Your address
  researchFocus: "Your research focus...",    // ✏️ Your research description
  cvUrl: `/${CV_FILENAME}`,                   // ✏️ Auto-generated from CV_FILENAME constant
  portraitUrl: "/portrait.jpg",               // ✏️ Path to your portrait
  socials: [
    { type: "scholar", url: "YOUR_GOOGLE_SCHOLAR_URL" },
    { type: "ssrn", url: "YOUR_SSRN_URL" },
    { type: "twitter", url: "YOUR_TWITTER_URL" },
    { type: "linkedin", url: "YOUR_LINKEDIN_URL" },
  ],
  affiliations: [
    { label: "Your Institution", url: "URL" },
    { label: "Faculty Directory", url: "URL" },
  ],
};
```

### Step 2: Add Your Files (1 minute)

1. Add your portrait image: `public/portrait.jpg` (800x800px recommended)
2. Add your CV to the `public/` folder and update `CV_FILENAME` in `data/site.ts`

### Step 3: Add Your Papers (2 minutes)

Edit `data/papers.ts` and replace the sample papers:

```typescript
export const papers: ResearchPaper[] = [
  {
    id: "your-paper-slug",
    title: "Your Paper Title",
    authors: ["Your Name", "Coauthor"],
    venue: "Journal Name",
    year: 2025,
    abstract: "Your abstract...",
    tags: ["tag1", "tag2"],
    links: [
      { type: "paper", url: "https://link-to-paper.pdf" },
      { type: "slides", url: "https://link-to-slides.pdf" },
    ]
  },
  // Add more papers...
];
```

### Step 4: Test Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to preview.

### Step 5: Deploy to Vercel

**Option A: Via GitHub (Recommended)**
1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com)
4. Click "Import Project"
5. Select your repository
6. Click "Deploy"

**Option B: Via CLI**
```bash
npm i -g vercel
vercel
```

### Step 6: Add Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `yourname.com`)
4. Update `metadataBase` in `app/layout.tsx`:
   ```typescript
   metadataBase: new URL("https://yourname.com"),
   ```

---

## 📝 Common Tasks

### Add a New Paper

1. Open `data/papers.ts`
2. Add a new object to the array:
   ```typescript
   {
     id: "unique-slug",
     title: "Paper Title",
     authors: ["Author 1", "Author 2"],
     venue: "Journal Name",
     year: 2025,
     abstract: "Abstract text...",
     links: [
       { type: "paper", url: "URL" },
     ]
   }
   ```
3. Save and rebuild: `npm run build`

### Update Contact Information

Edit `data/site.ts` and change the `email` and `address` fields.

### Update Your CV

1. Add the new CV file to the `public/` folder
2. Edit `data/site.ts` and update the `CV_FILENAME` constant:
   ```typescript
   export const CV_FILENAME = "Your Name CV Month Year.pdf";
   ```
3. The website will automatically use the new CV

### Change Colors

Edit `app/globals.css`:
```css
--color-primary: rgb(196, 18, 48);  /* Change this */
```

### Add Social Links

Edit `data/site.ts` and add to the `socials` array:
```typescript
{ type: "github", url: "YOUR_GITHUB_URL" }
```

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Showing
- Make sure files are in the `public/` folder
- Use paths starting with `/` (e.g., `/portrait.jpg`)
- Check file names match exactly (case-sensitive)

### Fonts Not Loading
- Fonts are loaded via Google Fonts automatically
- Check your internet connection during build

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Lucide Icons](https://lucide.dev)

---

## ✅ Checklist Before Going Live

- [ ] Updated `data/site.ts` with your information
- [ ] Added `public/portrait.jpg`
- [ ] Added your CV to `public/` and updated `CV_FILENAME` in `data/site.ts`
- [ ] Updated `data/papers.ts` with your papers
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Deployed to Vercel
- [ ] Added custom domain (optional)
- [ ] Updated `metadataBase` to match your domain

---

**That's it! Your academic website is live! 🎉**
