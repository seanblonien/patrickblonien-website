import type { ResearchPaper } from "@/data/types";
import Collapse from "./Collapse";
import IconLink from "./IconLink";

interface ResearchCardProps {
  paper: ResearchPaper;
}

export default function ResearchCard({ paper }: ResearchCardProps) {
  return (
    <article className="bg-white border border-zinc-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Title */}
      <h3 className="text-xl font-serif font-semibold text-zinc-900 mb-3">
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
              className="inline-block px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded"
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
    </article>
  );
}

