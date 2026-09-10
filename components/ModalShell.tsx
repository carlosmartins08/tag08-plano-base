'use client';

import React, { useEffect, useRef } from 'react';

interface ModalShellProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  containerClassName?: string;
  backdropClassName?: string;
  panelClassName?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

const ModalShell: React.FC<ModalShellProps> = ({
  isOpen,
  onClose,
  children,
  containerClassName = '',
  backdropClassName = 'bg-brand-black/95 backdrop-blur-xl animate-in fade-in duration-300',
  panelClassName = 'ds-panel-shell relative bg-brand-black w-full max-w-4xl max-h-full overflow-y-auto rounded-[2.5rem] shadow-2xl p-8 md:p-12 animate-in zoom-in-95 duration-300',
  ariaLabel,
  ariaLabelledBy,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    const getFocusableElements = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    const focusFirstElement = () => {
      const [firstFocusable] = getFocusableElements();
      (firstFocusable ?? panelRef.current)?.focus();
    };

    const focusTimer = window.requestAnimationFrame(focusFirstElement);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (!focusableElements.length) {
        event.preventDefault();
        panelRef.current?.focus();
        return;
      }

      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
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
      <div
        ref={panelRef}
        className={panelClassName}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalShell;
