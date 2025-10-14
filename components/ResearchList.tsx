import { papers } from "@/data/papers";
import ResearchCard from "./ResearchCard";

export default function ResearchList() {
  const workingPapers = papers.filter((p) => p.paperType === "Working Papers");
  const publications = papers.filter((p) => p.paperType === "Publications");

  return (
    <div className="space-y-12">
      {workingPapers.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">
            Working Papers
          </h2>
          <hr className="border-zinc-300 mb-8" />
          <div className="space-y-6">
            {workingPapers.map((paper) => (
              <ResearchCard key={paper.id} paper={paper} />
            ))}
          </div>
        </section>
      )}

      {publications.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">
            Publications
          </h2>
          <hr className="border-zinc-300 mb-8" />
          <div className="space-y-6">
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
