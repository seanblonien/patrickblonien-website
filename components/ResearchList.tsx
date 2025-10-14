import { papers } from "@/data/papers";
import ResearchCard from "./ResearchCard";

export default function ResearchList() {
  const workingPapers = papers.filter((p) => p.paperType === "Working Papers");
  const publications = papers.filter((p) => p.paperType === "Publications");

  return (
    <div className="space-y-16">
      {workingPapers.length > 0 && (
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-2">
              Working Papers
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
          </div>
          <div className="space-y-8">
            {workingPapers.map((paper) => (
              <ResearchCard key={paper.id} paper={paper} />
            ))}
          </div>
        </section>
      )}

      {publications.length > 0 && (
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-2">
              Publications
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
          </div>
          <div className="space-y-8">
            {publications.map((paper) => (
              <ResearchCard key={paper.id} paper={paper} />
            ))}
          </div>
        </section>
      )}

      {papers.length === 0 && (
        <p className="text-center text-zinc-500 py-12">
          No research papers available yet.
        </p>
      )}
    </div>
  );
}
