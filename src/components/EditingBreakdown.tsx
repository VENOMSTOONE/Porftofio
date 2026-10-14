'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Film, FileText, Crosshair } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EditingBreakdown: React.FC = () => {
  const { breakdown } = portfolioData;
  const { featuredCase } = breakdown;
  const [activeFrame, setActiveFrame] = useState(0);

  const currentFrame = featuredCase.keyframes[activeFrame];

  return (
    <section
      id="breakdown"
      aria-label="Editorial Breakdown"
      className="py-28 lg:py-40 border-b border-[#F3F0E9]/15 bg-[#070809] relative"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 mb-16 border-b border-[#F3F0E9]/15">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#D9A45B]">
              <span>[ 03 // ANATOMY OF A CUT ]</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>SCENE-LEVEL DECONSTRUCTION</span>
            </div>
            <h2 className="font-display-brutal text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-[-0.04em] text-[#F3F0E9]">
              {breakdown.heading}
            </h2>
          </div>
          <div className="max-w-md font-sans-editorial text-sm sm:text-base text-[#A6A6A2] leading-relaxed">
            {breakdown.subheading}
          </div>
        </div>

        {/* Forensic Cutting Room Console */}
        <div className="border border-[#F3F0E9]/20 bg-[#0c0d0f] rounded-[1px] overflow-hidden">
          {/* Header strip */}
          <div className="p-6 bg-[#090a0b] border-b border-[#F3F0E9]/15 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono-tech text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D9A45B] animate-pulse" />
              <span className="text-[#D9A45B] font-bold">{featuredCase.context}</span>
            </div>
            <div className="text-[#A6A6A2]">
              CASE SEQUENCE: {featuredCase.title} · DURATION: 01:10
            </div>
          </div>

          {/* 4 Pillars Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#F3F0E9]/15 border-b border-[#F3F0E9]/15 bg-[#0a0b0d]">
            <div className="p-8 space-y-3">
              <span className="font-mono-tech text-xs text-[#e74c3c] uppercase tracking-wider block font-bold">
                01 The Challenge
              </span>
              <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                {featuredCase.storytellingChallenge}
              </p>
            </div>

            <div className="p-8 space-y-3">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider block font-bold">
                02 Creative Decision
              </span>
              <p className="font-sans-editorial text-sm text-[#F3F0E9]/90 leading-relaxed">
                {featuredCase.creativeDecision}
              </p>
            </div>

            <div className="p-8 space-y-3">
              <span className="font-mono-tech text-xs text-[#A6A6A2] uppercase tracking-wider block font-bold">
                03 Editorial Rationale
              </span>
              <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                {featuredCase.reasoning}
              </p>
            </div>

            <div className="p-8 space-y-3">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider block font-bold">
                04 Voiceover Support
              </span>
              <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                {featuredCase.howVisualsSupportNarration}
              </p>
            </div>
          </div>

          {/* Interactive Frame Stepper */}
          <div className="p-6 sm:p-10 lg:p-12 bg-[#08090a]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#F3F0E9]/10 gap-4">
              <div>
                <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-widest block">
                  KEYFRAME SEQUENCE SCRUBBER
                </span>
                <h4 className="font-display-brutal text-2xl sm:text-3xl text-[#F3F0E9] font-bold uppercase">
                  Select Narrative Timecode
                </h4>
              </div>
              <div className="font-mono-tech text-xs text-[#A6A6A2]/70">
                [ SMPTE 24.00 FPS KEYED FRAME ANALYSIS ]
              </div>
            </div>

            {/* Timecode Selector Rail */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {featuredCase.keyframes.map((frame, index) => (
                <button
                  key={frame.timecode}
                  type="button"
                  onClick={() => setActiveFrame(index)}
                  className={`p-5 text-left border rounded-[1px] transition-all relative ${
                    activeFrame === index
                      ? 'bg-[#141517] border-[#D9A45B] shadow-[0_0_20px_rgba(217,164,91,0.2)]'
                      : 'bg-[#0b0c0e] border-[#F3F0E9]/10 hover:border-[#F3F0E9]/30'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono-tech text-xs text-[#D9A45B] mb-2 font-bold">
                    <span>{frame.timecode}</span>
                    {activeFrame === index && <Crosshair className="w-3.5 h-3.5 text-[#D9A45B]" />}
                  </div>
                  <div className="font-mono-tech text-xs text-[#F3F0E9] uppercase font-semibold">
                    {frame.label}
                  </div>
                </button>
              ))}
            </div>

            {/* Detailed Frame Decomposition Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFrame}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="p-8 bg-[#0f1013] border border-[#F3F0E9]/15 space-y-6"
              >
                {/* Voiceover Hook */}
                <div className="p-6 bg-[#070809] border-l-2 border-[#D9A45B]">
                  <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider mb-2">
                    <FileText className="w-4 h-4" />
                    <span>Voiceover Transcript ({currentFrame.timecode})</span>
                  </div>
                  <p className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9] italic font-light">
                    {currentFrame.narrationPrompt}
                  </p>
                </div>

                {/* Visual vs Sound Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-[#0a0b0d] border border-[#F3F0E9]/[0.08] space-y-2">
                    <div className="flex items-center gap-2 font-mono-tech text-xs text-[#F3F0E9] uppercase tracking-wider font-bold">
                      <Film className="w-4 h-4 text-[#D9A45B]" />
                      <span>Visual Assembly Strategy</span>
                    </div>
                    <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                      {currentFrame.editorialChoice}
                    </p>
                  </div>

                  <div className="p-6 bg-[#0a0b0d] border border-[#F3F0E9]/[0.08] space-y-2">
                    <div className="flex items-center gap-2 font-mono-tech text-xs text-[#F3F0E9] uppercase tracking-wider font-bold">
                      <Volume2 className="w-4 h-4 text-[#D9A45B]" />
                      <span>Acoustic Stem & Foley</span>
                    </div>
                    <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                      {currentFrame.soundCue}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
