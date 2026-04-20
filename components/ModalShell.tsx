'use client';

import React, { useEffect } from 'react';

interface ModalShellProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  containerClassName?: string;
  backdropClassName?: string;
  panelClassName?: string;
}

const ModalShell: React.FC<ModalShellProps> = ({
  isOpen,
  onClose,
  children,
  containerClassName = '',
  backdropClassName = 'bg-brand-black/95 backdrop-blur-xl animate-in fade-in duration-300',
  panelClassName = 'ds-panel-shell relative bg-brand-black w-full max-w-4xl max-h-full overflow-y-auto rounded-[2.5rem] shadow-2xl p-8 md:p-12 animate-in zoom-in-95 duration-300',
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[300] flex items-center justify-center px-4 py-8 ${containerClassName}`.trim()}>
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        className={`absolute inset-0 ${backdropClassName}`.trim()}
        onClick={onClose}
      />
      <div className={panelClassName} role="dialog" aria-modal="true">
        {children}
      </div>
    </div>
  );
};

export default ModalShell;
