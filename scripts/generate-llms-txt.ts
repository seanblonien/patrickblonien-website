/**
 * Generate public/llms.txt and public/llms-full.txt files from data sources
 *
 * This script reads from data/site.ts and data/papers.ts to generate
 * a public-facing summary of the website for LLMs and AI agents.
 *
 * Run with:
 *   bun run scripts/generate-llms-txt.ts        # Generate llms.txt (concise)
 *   bun run scripts/generate-llms-txt.ts --full # Generate llms-full.txt (detailed)
 */

import {writeFile} from 'fs/promises';
import {join} from 'path';
import {papers} from '../data/papers';
import {siteInfo} from '../data/site';
import type {Author, ResearchPaper, SocialLinkType} from '../data/types';

const rootDir = process.cwd();

// Parse command-line arguments
const args = process.argv.slice(2);
const isFullVersion = args.includes('--full');

// Helper function to format authors (names only)
function formatAuthors(authors: Author[]): string {
  return authors.map((author) => author.name).join(', ');
}

// Helper function to format author links
function formatAuthorLinks(authors: Author[]): string | null {
  const links = authors
    .filter((author) => !author.isPatrick)
    .map((author) => {
      if ('url' in author && author.url) {
        return `${author.name}: ${author.url}`;
      }
      return null;
    })
    .filter((link): link is string => link !== null);
  return links.length > 0 ? links.join(', ') : null;
}

// Helper function to get social link label
function getSocialLabel(type: SocialLinkType): string {
  const labels: Record<SocialLinkType, string> = {
    scholar: 'Google Scholar',
    ssrn: 'SSRN',
    linkedin: 'LinkedIn',
  };
  return labels[type] || type;
}

// Helper function to convert date to ISO 8601 (YYYY-MM-DD)
function formatDateISO(dateStr: string | undefined): string | null {
  if (!dateStr) return null;

  try {
    const date = new Date(dateStr);
    if (!isNaN(date.getTime())) {
      return date.toISOString().split('T')[0];
    }
  } catch {
    // If parsing fails, return original
  }

  return dateStr;
}

// Build the llms.txt content
const baseUrl = 'https://www.patrickblonien.com';
const lastUpdated = new Date().toISOString().split('T')[0];

// Intro line
let content = `# ${siteInfo.name}

> Academic website for ${siteInfo.name}, ${siteInfo.title} at ${siteInfo.institution}.

## About

${siteInfo.researchFocus}

## Links

`;

// Add social links
if (siteInfo.socials && siteInfo.socials.length > 0) {
  for (const social of siteInfo.socials) {
    content += `- ${getSocialLabel(social.type)}: ${social.url}\n`;
  }
}

// Add CV link with URL encoding
if (siteInfo.cvUrl) {
  const encodedCvUrl = encodeURI(siteInfo.cvUrl);
  content += `- CV: ${baseUrl}${encodedCvUrl}\n`;
}

content += '\n## Affiliations\n\n';

// Add affiliations
if (siteInfo.affiliations && siteInfo.affiliations.length > 0) {
  for (const affiliation of siteInfo.affiliations) {
    content += `- ${affiliation.label}: ${affiliation.url}\n`;
  }
}

// Group papers by type
const papersByType = papers.reduce(
  (acc, paper) => {
    if (!acc[paper.paperType]) {
      acc[paper.paperType] = [];
    }
    acc[paper.paperType].push(paper);
    return acc;
  },
  {} as Record<string, ResearchPaper[]>,
);

// Add research papers
content += '\n## Research\n';

for (const [paperType, typePapers] of Object.entries(papersByType)) {
  content += `\n### ${paperType}\n`;

  for (const paper of typePapers) {
    content += `\n### ${paper.title}\n\n`;

    // Single-line summary (first sentence of abstract or tags) - full version only
    if (isFullVersion && paper.abstract) {
      const firstSentence = paper.abstract.match(/^[^.!?]+[.!?]+/)?.[0] || '';
      if (firstSentence) {
        content += `${firstSentence.trim()}\n\n`;
      }
    }

    // Authors (names only)
    content += `**Authors:** ${formatAuthors(paper.authors)}\n`;

    // Author links (separate line) - full version only
    const authorLinks = formatAuthorLinks(paper.authors);
    if (authorLinks && isFullVersion) {
      content += `**Author links:** ${authorLinks}\n`;
    }

    // Published date in ISO 8601
    if (paper.date) {
      const isoDate = formatDateISO(paper.date);
      content += `**Published:** ${isoDate}\n`;
    }

    // Venue - full version only
    if (paper.venue && isFullVersion) {
      content += `**Venue:** ${paper.venue}\n`;
    }

    // Tags
    if (paper.tags && paper.tags.length > 0) {
      content += `**Tags:** ${paper.tags.join(', ')}\n`;
    }

    content += '\n';

    // Abstract - full version only
    if (paper.abstract && isFullVersion) {
      content += `**Abstract:** ${paper.abstract}\n\n`;
    }

    // Links
    if (paper.links && paper.links.length > 0) {
      content += '**Links:**\n';
      for (const link of paper.links) {
        const label = link.label || link.type.charAt(0).toUpperCase() + link.type.slice(1);
        content += `- ${label}: ${link.url}\n`;
      }
      content += '\n';
    }

    // Awards - full version only
    if (paper.awards && paper.awards.length > 0 && isFullVersion) {
      content += '**Awards:**\n';
      for (const award of paper.awards) {
        const awardText = award.year ? `${award.title} (${award.year})` : award.title;
        content += `- ${awardText}\n`;
      }
      content += '\n';
    }

    // Media coverage
    if (paper.media && paper.media.length > 0) {
      content += '**Media Coverage:**\n';
      for (const mediaItem of paper.media) {
        content += `- ${mediaItem.label}: ${mediaItem.url}\n`;
      }
      content += '\n';
    }
  }
}

// Add contact section
content += '\n## Contact\n\n';
content += `- Email: ${siteInfo.email}\n`;
content += `- Address: ${siteInfo.address}\n`;

// Add site metadata
content += '\n## Site Metadata\n\n';
content += `- Website: ${baseUrl}\n`;
content += `- Sitemap: ${baseUrl}/sitemap.xml\n`;
content += `- Last updated: ${lastUpdated}\n`;

// Add citations note
content += '\n## Citations\n\n';
content += 'When citing research papers, please use SSRN or DOI links as canonical\n';
content += 'sources. Full citation information is available on each paper\'s SSRN page.\n';

// Add policies (if applicable)
if (isFullVersion) {
  content += '\n## Policies\n\n';
  content += 'This website and its content are provided for academic and research\n';
  content += 'purposes. Please cite appropriately when referencing any materials.\n';
}

// Add footer
content += `\n---\n\n`;
content += `Generated: ${lastUpdated}\n`;
if (isFullVersion) {
  content += 'Version: Full (detailed abstracts and extended information)\n';
} else {
  content += 'Version: Concise (see llms-full.txt for complete details)\n';
}

// Write to appropriate file
const fileName = isFullVersion ? 'llms-full.txt' : 'llms.txt';
const outputPath = join(rootDir, 'public', fileName);
await writeFile(outputPath, content, 'utf-8');

console.log(`✅ Generated public/${fileName}`);
