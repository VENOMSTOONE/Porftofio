'use client';

import React, { useEffect, useRef, useState } from 'react';

type CursorMode = 'default' | 'interactive' | 'project' | 'hidden';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>('default');
  const [visible, setVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop devices with a fine pointer and hover capability
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!finePointerQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    setEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Direct immediate positioning for inner dot (zero latency)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Text input elements: hide custom cursor to keep native I-beam
      if (target.closest('input, textarea, select, [contenteditable="true"]')) {
        setMode('hidden');
        return;
      }

      // Interactive project previews
      if (target.closest('[data-cursor="view"]')) {
        setMode('project');
        return;
      }

      // Standard buttons, links, and clickable controls
      if (target.closest('a, button, [role="button"], input[type="submit"]')) {
        setMode('interactive');
        return;
      }

      setMode('default');
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth RAF loop for outer focus ring
    const render = () => {
      // Smooth interpolation (lerp factor 0.18 for cinematic depth without sluggishness)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  if (!enabled) return null;

  // Determine ring sizing & styling by active cursor mode
  let ringClasses = 'w-7 h-7 border border-[#D9A45B]/60 bg-transparent';
  if (mode === 'interactive') {
    ringClasses = 'w-11 h-11 border border-[#D9A45B] bg-[#D9A45B]/15 backdrop-blur-[1px]';
  } else if (mode === 'project') {
    ringClasses =
      'w-20 h-20 border-2 border-[#D9A45B] bg-[#101112]/92 shadow-[0_0_25px_rgba(217,164,91,0.35)] backdrop-blur-sm';
  } else if (mode === 'hidden') {
    ringClasses = 'w-0 h-0 opacity-0 border-transparent bg-transparent';
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none transition-opacity duration-200 ${
        visible && mode !== 'hidden' ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Outer Interpolated Focus Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out will-change-transform ${ringClasses}`}
      >
        {/* Interactive Project Mode: VIEW label */}
        {mode === 'project' && (
          <span
            ref={labelRef}
            className="font-mono-tech text-[10px] text-[#F3F0E9] font-bold tracking-[0.25em] uppercase select-none drop-shadow-sm flex items-center gap-1"
          >
            <span className="w-1 h-1 rounded-full bg-[#D9A45B] inline-block" />
            <span>VIEW</span>
          </span>
        )}

        {/* Normal Crosshair Micro-Notches */}
        {mode === 'default' && (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-1 bg-[#D9A45B]/60" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1px] h-1 bg-[#D9A45B]/60" />
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-[1px] bg-[#D9A45B]/60" />
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1 h-[1px] bg-[#D9A45B]/60" />
          </>
        )}
      </div>

      {/* 2. Synchronized Amber Center Point */}
      {mode !== 'project' && (
        <div
          ref={dotRef}
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#D9A45B] rounded-full will-change-transform shadow-[0_0_8px_rgba(217,164,91,0.9)]"
        />
      )}
    </div>
  );
};
