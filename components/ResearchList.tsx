import { papers } from "@/data/papers";
import ResearchCard from "./ResearchCard";

export default function ResearchList() {
  return (
    <div className="space-y-6">
      {papers.length === 0 ? (
        <p className="text-center text-zinc-500 py-12">
          No research papers available yet.
        </p>
      ) : (
        papers.map((paper) => <ResearchCard key={paper.id} paper={paper} />)
      )}
    </div>
  );
}

