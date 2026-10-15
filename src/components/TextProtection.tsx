'use client';

import { useEffect } from 'react';

/**
 * TextProtection
 * Prevents text selection, dragging, and accidental copy operations
 * across the site while preserving standard form input functionality.
 */
export const TextProtection: React.FC = () => {
  useEffect(() => {
    const isInputElement = (target: EventTarget | null): boolean => {
      if (!target || !(target instanceof HTMLElement)) return false;
      return Boolean(target.closest('input, textarea, select, [contenteditable="true"]'));
    };

    const handleSelectStart = (e: Event) => {
      if (isInputElement(e.target)) return;
      e.preventDefault();
    };

    const handleCopy = (e: ClipboardEvent) => {
      if (isInputElement(e.target)) return;
      // Prevent copying selected text from the page
      e.preventDefault();
    };

    const handleDragStart = (e: DragEvent) => {
      if (isInputElement(e.target)) return;
      e.preventDefault();
    };

    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return null;
};
