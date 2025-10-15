'use client';

import type {ResearchPaper} from '@/data/types';
import {useState} from 'react';
import AwardsModalContent from './AwardsModalContent';
import MediaModalContent from './MediaModalContent';
import Modal from './Modal';
import PaperContent from './PaperContent';
import PaperLinks from './PaperLinks';
import PresentationsModalContent from './PresentationsModalContent';

type ResearchCardClientProps = {
  paper: ResearchPaper;
  children: React.ReactNode;
};

export default function ResearchCardClient({paper, children}: ResearchCardClientProps) {
  const [isPresentationsModalOpen, setIsPresentationsModalOpen] = useState(false);
  const [isAwardsModalOpen, setIsAwardsModalOpen] = useState(false);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

  return (
    <>
      <article className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-zinc-300">
        <div className="flex flex-col sm:flex-row">
          {children}

          <div className="flex-1 p-6">
            <PaperContent paper={paper} />

            <PaperLinks
              paper={paper}
              onPresentationsClickAction={() => setIsPresentationsModalOpen(true)}
              onAwardsClickAction={() => setIsAwardsModalOpen(true)}
              onMediaClickAction={() => setIsMediaModalOpen(true)}
            />
          </div>
        </div>
      </article>

      <Modal
        isOpen={isPresentationsModalOpen}
        onClose={() => setIsPresentationsModalOpen(false)}
        title="Presentations"
      >
        <PresentationsModalContent presentations={paper.presentations} />
      </Modal>

      <Modal
        isOpen={isAwardsModalOpen}
        onClose={() => setIsAwardsModalOpen(false)}
        title="Awards"
      >
        <AwardsModalContent awards={paper.awards} />
      </Modal>

      <Modal
        isOpen={isMediaModalOpen}
        onClose={() => setIsMediaModalOpen(false)}
        title="Media"
      >
        <MediaModalContent media={paper.media} />
      </Modal>
    </>
  );
}
