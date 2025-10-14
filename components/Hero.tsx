import Image from "next/image";
import Link from "next/link";
import { FileDown, BookOpen } from "lucide-react";
import { siteInfo } from "@/data/site";

export default function Hero() {
  return (
    <section className="py-16 sm:py-24 lg:min-h-[calc(90vh-4rem)] lg:flex lg:items-center">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-4">
              {siteInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-700 mb-2">
              {siteInfo.title}
            </p>
            <p className="text-lg text-zinc-600 mb-8">{siteInfo.institution}</p>

            {siteInfo.researchFocus && (
              <p className="text-base text-zinc-700 leading-relaxed mb-8 max-w-2xl">
                {siteInfo.researchFocus}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 focus-ring shadow-md hover:shadow-lg transition-all"
              >
                <BookOpen className="w-5 h-5" aria-hidden="true" />
                View Research
              </Link>

              {siteInfo.cvUrl && (
                <a
                  href={siteInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-900 border-2 border-zinc-300 rounded-lg font-medium hover:border-primary hover:text-primary focus-ring shadow-md hover:shadow-lg transition-all"
                >
                  <FileDown className="w-5 h-5" aria-hidden="true" />
                  Download CV
                </a>
              )}
            </div>
          </div>

          {/* Portrait Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              {siteInfo.portraitUrl ? (
                <Image
                  src={siteInfo.portraitUrl}
                  alt={`Portrait of ${siteInfo.name}`}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
                  <span className="text-6xl font-serif text-zinc-400">
                    {siteInfo.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
