'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type CollapseProps = {
  children: React.ReactNode;
  isDefaultOpen?: boolean;
  title: string;
};

export function Collapse({
  children,
  isDefaultOpen = false,
  title,
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border border-zinc-200 rounded-md overflow-hidden'>
      <button
        aria-controls='collapse-content'
        aria-expanded={isOpen}
        className='w-full flex items-center justify-between px-4 py-3 text-left bg-zinc-50 hover:bg-zinc-100 focus-ring transition-colors cursor-pointer'
        onClick={handleToggle}
      >
        <span className='font-medium text-sm text-zinc-900'>{title}</span>
        <ChevronDown
          aria-hidden='true'
          className={`w-5 h-5 text-zinc-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        aria-hidden={!isOpen}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-250 opacity-100' : 'max-h-0 opacity-0'
        }`}
        id='collapse-content'
      >
        <div className='px-4 py-3 text-sm text-zinc-700 leading-relaxed bg-white'>
          {children}
        </div>
      </div>
    </div>
  );
}
