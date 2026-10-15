'use client';

import React from 'react';

interface MediaSkeletonProps {
  aspectRatio?: string;
  className?: string;
  label?: string;
}

export const MediaSkeleton: React.FC<MediaSkeletonProps> = ({
  aspectRatio = '16/9',
  className = '',
  label = 'INGESTING ARCHIVE MASTER · 1080P 24FPS',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[#0a0b0d] flex items-center justify-center select-none ${className}`}
      style={{ aspectRatio }}
      aria-hidden="true"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(217,164,91,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Laser scan line sweep */}
      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A45B]/60 to-transparent pointer-events-none animate-laser" />

      {/* Crosshair grid watermark */}
      <div className="absolute inset-0 bg-grid-noir opacity-40 pointer-events-none" />

      {/* Center Technical Loader HUD */}
      <div className="relative z-10 flex flex-col items-center gap-2.5 p-4 text-center">
        {/* Double-ring spinning reticle */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 border border-white/[0.1] border-t-[#D9A45B] rounded-full animate-spin" />
          <div className="w-4 h-4 border border-[#D9A45B]/30 border-b-[#D9A45B] rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D9A45B] animate-pulse" />
        </div>

        {/* Status label */}
        <div className="font-mono-tech text-[10px] text-[#9A9A9A] tracking-widest uppercase flex items-center gap-1.5">
          <span className="text-[#D9A45B] font-bold">[ BUFFER ]</span>
          <span>{label}</span>
        </div>
      </div>

      {/* Corner calibration marks */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#D9A45B]/40" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#D9A45B]/40" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#D9A45B]/40" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#D9A45B]/40" />
    </div>
  );
};
