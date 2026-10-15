'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film } from 'lucide-react';

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING 35MM OPTICAL ENGINE');
  const [timecode, setTimecode] = useState('00:00:00:00');
  const [isComplete, setIsComplete] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if user has already seen preloader in this browser session
    const seen = sessionStorage.getItem('vaibhav_labs_intro_viewed');
    if (seen === 'true') {
      setShouldRender(false);
      return;
    }

    // Lock body scroll while preloading
    document.body.style.overflow = 'hidden';

    // Fast, rhythmic counter mimicking authentic video editing ingest
    const startTime = performance.now();
    const duration = 1400; // 1.4 seconds total for snappy, cinematic UX

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      // Status updates mapped to progress milestones
      if (rawProgress < 25) {
        setStatusText('INITIALIZING 35MM OPTICAL ENGINE');
      } else if (rawProgress < 55) {
        setStatusText('CALIBRATING 42Hz SUB-BASS TELEMETRY');
      } else if (rawProgress < 85) {
        setStatusText('DECRYPTING FORENSIC DOSSIER & EVIDENCE GRIDS');
      } else {
        setStatusText('VAIBHAV LABS // ARCHIVE DOSSIER READY');
      }

      // SMPTE Frame calculation
      const frameCount = Math.floor((rawProgress / 100) * 36);
      const frames = String(frameCount % 24).padStart(2, '0');
      const seconds = String(Math.floor(frameCount / 24)).padStart(2, '0');
      setTimecode(`00:00:${seconds}:${frames}`);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          document.body.style.overflow = 'unset';
          sessionStorage.setItem('vaibhav_labs_intro_viewed', 'true');
          setTimeout(() => setShouldRender(false), 900); // Allow exit shutter animation
        }, 180);
      }
    }, 24);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        clearInterval(interval);
        setProgress(100);
        setIsComplete(true);
        document.body.style.overflow = 'unset';
        sessionStorage.setItem('vaibhav_labs_intro_viewed', 'true');
        setTimeout(() => setShouldRender(false), 300);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSkip = () => {
    setProgress(100);
    setIsComplete(true);
    document.body.style.overflow = 'unset';
    sessionStorage.setItem('vaibhav_labs_intro_viewed', 'true');
    setTimeout(() => setShouldRender(false), 200);
  };

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: 'blur(6px)',
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] bg-[#000000] flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none"
        >
          {/* Top Status & Telemetry Header */}
          <div className="flex items-center justify-between text-xs font-mono-tech text-[#9A9A9A]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D9A45B] animate-pulse" />
              <span className="text-[#D9A45B] font-bold tracking-widest">[ SYSTEM CALIBRATION ]</span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span className="hidden sm:inline tracking-wider">SMPTE 24.00 FPS PRORES ENGINE</span>
            </div>

            <button
              type="button"
              onClick={handleSkip}
              className="text-[10px] text-[#9A9A9A]/70 hover:text-[#D9A45B] border border-white/[0.14] hover:border-[#D9A45B]/60 px-2.5 py-1 uppercase tracking-widest transition-colors rounded-[1px]"
              aria-label="Skip introductory calibration"
            >
              SKIP [ESC]
            </button>
          </div>

          {/* Center Stage: Monumental Digital Counter & Horizon Waveform */}
          <div className="max-w-2xl mx-auto w-full text-center space-y-8 my-auto">
            {/* Visual Icon Reticle */}
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 border border-white/[0.14] border-t-[#D9A45B] rounded-full animate-spin" style={{ animationDuration: '3s' }} />
              <Film className="w-6 h-6 text-[#D9A45B]" />
            </div>

            {/* Studio Brandmark */}
            <div className="space-y-1">
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[#D9A45B] block font-semibold">
                VAIBHAV LABS
              </span>
              <h1 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9] italic font-light tracking-wide">
                Documentary Video Editing & Visual Storytelling
              </h1>
            </div>

            {/* Giant Monospaced Numerals */}
            <div className="flex items-baseline justify-center gap-3">
              <span className="font-mono-tech text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-[#F3F0E9] tabular-nums">
                {String(progress).padStart(2, '0')}
              </span>
              <span className="font-mono-tech text-2xl sm:text-4xl text-[#D9A45B] font-bold">
                %
              </span>
            </div>

            {/* Razor-Thin Amber Calibration Track */}
            <div className="space-y-3">
              <div className="relative w-full h-[2px] bg-white/[0.1] overflow-hidden rounded-[1px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D9A45B]/60 via-[#D9A45B] to-[#F3F0E9] shadow-[0_0_16px_rgba(217,164,91,0.9)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                />
              </div>

              {/* Dynamic Status Text & Running Timecode */}
              <div className="flex items-center justify-between font-mono-tech text-[10px] sm:text-xs text-[#9A9A9A] tracking-widest uppercase">
                <span className="text-[#D9A45B] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D9A45B]" />
                  <span>{statusText}</span>
                </span>
                <span className="tabular-nums text-[#F3F0E9]">{timecode}</span>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Footer Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[10px] text-[#9A9A9A]/60 uppercase tracking-widest border-t border-white/[0.08] pt-4">
            <span>COORD: 28.7041° N · 77.2017° E</span>
            <span className="hidden sm:inline">COLOR GRADE: 35MM KODAK 5219 EMULATION</span>
            <span>AUDIO: 42Hz SUB-BASS DRONE BED</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
