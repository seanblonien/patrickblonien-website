import type { ResearchPaper } from "@/data/types";
import Collapse from "./Collapse";
import IconLink from "./IconLink";
import { FileText } from "lucide-react";

interface ResearchCardProps {
  paper: ResearchPaper;
}

const gradients = [
  "from-blue-400 to-blue-600",
  "from-purple-400 to-purple-600",
  "from-emerald-400 to-emerald-600",
  "from-amber-400 to-amber-600",
  "from-rose-400 to-rose-600",
  "from-cyan-400 to-cyan-600",
  "from-indigo-400 to-indigo-600",
  "from-pink-400 to-pink-600",
];

function getGradientForPaper(paperId: string): string {
  let hash = 0;
  for (let i = 0; i < paperId.length; i++) {
    hash = paperId.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

export default function ResearchCard({ paper }: ResearchCardProps) {
  const gradient = getGradientForPaper(paper.id);

  return (
    <article className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-zinc-300">
      <div className="flex flex-col sm:flex-row">
        {/* Image Placeholder */}
        <div className={`flex-shrink-0 w-full sm:w-48 h-48 sm:h-auto bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <div className="text-white/90">
            <FileText className="w-16 h-16 sm:w-20 sm:h-20" strokeWidth={1.5} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Title */}
          <h3 className="text-xl font-serif font-semibold text-zinc-900 mb-3 leading-tight">
            {paper.title}
          </h3>

          {/* Authors */}
          <p className="text-sm text-zinc-600 mb-2">
            {paper.authors.join(", ")}
          </p>

          {/* Venue and Year */}
          {(paper.venue || paper.year) && (
            <p className="text-sm text-zinc-500 mb-4">
              {paper.venue}
              {paper.venue && paper.year && " • "}
              {paper.year}
            </p>
          )}

          {/* Tags */}
          {paper.tags && paper.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {paper.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-2.5 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Abstract */}
          {paper.abstract && (
            <div className="mb-4">
              <Collapse title="Abstract">
                <p>{paper.abstract}</p>
              </Collapse>
            </div>
          )}

          {/* Links */}
          {paper.links && paper.links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {paper.links.map((link, index) => (
                <IconLink
                  key={`${link.type}-${index}`}
                  type={link.type}
                  label={link.label}
                  url={link.url}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
