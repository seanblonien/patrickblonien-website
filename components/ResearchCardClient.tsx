'use client';

import { useState } from 'react';
import type { ResearchPaper } from '@/data/types';
import { AwardsModalContent } from './AwardsModalContent';
import { MediaModalContent } from './MediaModalContent';
import { Modal } from './Modal';
import { PaperContent } from './PaperContent';
import { PaperLinks } from './PaperLinks';
import { PresentationsModalContent } from './PresentationsModalContent';

type ResearchCardClientProps = {
  children: React.ReactNode;
  paper: ResearchPaper;
};

export const ResearchCardClient: React.FC<ResearchCardClientProps> = ({ children, paper }) => {
  const [isPresentationsModalOpen, setIsPresentationsModalOpen] = useState(false);
  const [isAwardsModalOpen, setIsAwardsModalOpen] = useState(false);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

  return (
    <>
      <article className='bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-zinc-300'>
        <div className='flex flex-col sm:flex-row'>
          {children}

          <div className='flex-1 p-6'>
            <PaperContent paper={paper} />

            <PaperLinks
              paper={paper}
              onAwardsClickAction={() => setIsAwardsModalOpen(true)}
              onMediaClickAction={() => setIsMediaModalOpen(true)}
              onPresentationsClickAction={() => setIsPresentationsModalOpen(true)}
            />
          </div>
        </div>
      </article>

      <Modal
        isOpen={isPresentationsModalOpen}
        title='Presentations'
        onCloseAction={() => setIsPresentationsModalOpen(false)}
      >
        <PresentationsModalContent presentations={paper.presentations} />
      </Modal>

      <Modal
        isOpen={isAwardsModalOpen}
        title='Awards'
        onCloseAction={() => setIsAwardsModalOpen(false)}
      >
        <AwardsModalContent awards={paper.awards} />
      </Modal>

      <Modal
        isOpen={isMediaModalOpen}
        title='Media'
        onCloseAction={() => setIsMediaModalOpen(false)}
      >
        <MediaModalContent media={paper.media} />
      </Modal>
    </>
  );
};
