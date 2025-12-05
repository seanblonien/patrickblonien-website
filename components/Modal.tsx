'use client';

import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseAction: () => void;
  title: string;
};

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onCloseAction, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseAction();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onCloseAction]);
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      aria-labelledby='modal-title'
      aria-modal='true'
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      role='dialog'
      style={{
        margin: 0,
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <button
        aria-label='Close modal'
        className='absolute inset-0 bg-zinc-500/50 cursor-default'
        type='button'
        onClick={onCloseAction}
      />
      <div
        ref={modalRef}
        className='relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden'
        tabIndex={-1}
      >
        {/* Header */}
        <div className='flex items-center justify-between px-6 py-5 border-b border-zinc-200'>
          <h2
            className='text-2xl font-serif font-bold text-zinc-900'
            id='modal-title'
          >
            {title}
          </h2>
          <button
            aria-label='Close modal'
            className='p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors focus-ring'
            onClick={onCloseAction}
          >
            <X className='w-6 h-6' />
          </button>
        </div>

        {/* Content */}
        <div className='px-6 py-6 overflow-y-auto max-h-[calc(85vh-5rem)]'>
          {children}
        </div>
      </div>
    </div>
  );
};
