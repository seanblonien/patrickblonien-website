/**
 * Home Page
 * 
 * This is the main landing page for the website.
 * It displays the hero section with name, title, institution, and portrait.
 * 
 * To update content:
 * - Edit data/site.ts to change personal information
 * - Update the portrait image in public/portrait.jpg
 * - Modify the research focus text in data/site.ts
 */

import Hero from "@/components/Hero";
import Link from "next/link";
import { FileDown, BookOpen } from "lucide-react";
import { siteInfo } from "@/data/site";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* CTA Section */}
      <section className="py-12 bg-zinc-50">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 focus-ring shadow-md hover:shadow-lg transition-all"
            >
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              View Research
            </Link>

            {siteInfo.cvUrl && (
              <a
                href={siteInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 border-2 border-zinc-300 rounded-lg font-medium hover:border-primary hover:text-primary focus-ring shadow-md hover:shadow-lg transition-all"
              >
                <FileDown className="w-5 h-5" aria-hidden="true" />
                Download CV
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

