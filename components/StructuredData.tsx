import { siteInfo } from "@/data/site";

export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteInfo.name,
    jobTitle: siteInfo.title,
    affiliation: {
      "@type": "Organization",
      name: siteInfo.institution,
      address: {
        "@type": "PostalAddress",
        streetAddress: "5000 Forbes Ave",
        addressLocality: "Pittsburgh",
        addressRegion: "PA",
        postalCode: "15213",
        addressCountry: "US",
      },
    },
    email: siteInfo.email,
    url: "https://www.patrickblonien.com",
    image: siteInfo.portraitUrl,
    sameAs: siteInfo.socials
      .map((social) => social.url)
      .filter((url) => url.startsWith("http")),
    description: siteInfo.researchFocus,
    knowsAbout: [
      "Corporate Finance",
      "Asset Pricing",
      "Investor Behavior",
      "Financial Economics",
      "Market Dynamics",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteInfo.name} - Academic Website`,
    url: "https://www.patrickblonien.com",
    description: `Academic website of ${siteInfo.name}, ${siteInfo.title} at ${siteInfo.institution}`,
    author: {
      "@type": "Person",
      name: siteInfo.name,
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

