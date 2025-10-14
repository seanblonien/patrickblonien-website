import Image from "next/image";
import Link from "next/link";
import { FileDown, BookOpen } from "lucide-react";
import { siteInfo } from "@/data/site";

export default function Hero() {
  return (
    <section className="py-16 sm:py-24 lg:min-h-[calc(90vh-4rem)] lg:flex lg:items-center">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Decorative accent line */}
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-400 mb-6 rounded-full" />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
              {siteInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl text-primary-700 font-medium mb-3">
              {siteInfo.title}
            </p>
            <p className="text-lg text-zinc-600 mb-8">{siteInfo.institution}</p>

            {siteInfo.researchFocus && (
              <div className="relative pl-4 border-l-4 border-primary-200 mb-10">
                <p className="text-base text-zinc-700 leading-relaxed max-w-2xl">
                  {siteInfo.researchFocus}
                </p>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-medium hover:bg-primary-800 focus-ring shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <BookOpen className="w-5 h-5" aria-hidden="true" />
                View Research
              </Link>

              {siteInfo.cvUrl && (
                <a
                  href={siteInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-zinc-900 border-2 border-zinc-300 rounded-xl font-medium hover:border-primary hover:text-primary hover:bg-primary-50 focus-ring shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <FileDown className="w-5 h-5" aria-hidden="true" />
                  Download CV
                </a>
              )}
            </div>
          </div>

          {/* Portrait Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 via-primary-50 to-transparent rounded-3xl opacity-50 blur-2xl" />

              {/* Image container with unique styling */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Border accent */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary via-primary-600 to-primary-800 rounded-2xl opacity-20" />

                {/* Main image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white">
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
        </div>
      </div>
    </section>
  );
}
