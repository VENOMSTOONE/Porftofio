'use client';

import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setScrollPercentage(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-white/[0.04] pointer-events-none select-none"
      role="progressbar"
      aria-label="Documentary portfolio reading progress"
      aria-valuenow={Math.round(scrollPercentage)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-[#D9A45B]/40 via-[#D9A45B] to-[#F3F0E9] shadow-[0_0_12px_rgba(217,164,91,0.8)] transition-all duration-75 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};
