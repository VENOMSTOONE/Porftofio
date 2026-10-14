'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
      className="py-24 lg:py-36 border-b border-[#F3F0E9]/[0.08] bg-[#0c0d0e]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-[#D9A45B] mb-4">
              <span>03 // EDITORIAL ANATOMY</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>DECONSTRUCTING A SEQUENCE</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#F3F0E9] tracking-tight">
              {breakdown.heading}
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#A6A6A2] font-sans-editorial leading-relaxed">
              {breakdown.subheading}
            </p>
          </div>
        </div>

        {/* Featured Case Study Board */}
        <div className="border border-[#F3F0E9]/[0.08] bg-[#141517] rounded-[2px] overflow-hidden">
          {/* Top Metadata Strip */}
          <div className="p-6 sm:p-8 bg-[#101112] border-b border-[#F3F0E9]/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider block mb-1">
                {featuredCase.context}
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9]">
                {featuredCase.title}
              </h3>
            </div>
            <div className="font-mono-tech text-xs text-[#A6A6A2]/75 px-3 py-1.5 bg-[#191A1C] border border-[#F3F0E9]/[0.06] rounded-[2px] self-start md:self-auto">
              SEQUENCE DURATION: 01:10 · 4 KEY CUTS
            </div>
          </div>

          {/* 4 Storytelling Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#F3F0E9]/[0.08] border-b border-[#F3F0E9]/[0.08]">
            <div className="p-6 lg:p-8 space-y-2">
              <span className="font-mono-tech text-[11px] text-[#A6A6A2] uppercase tracking-wider block">
                01 Storytelling Challenge
              </span>
              <p className="text-xs sm:text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                {featuredCase.storytellingChallenge}
              </p>
            </div>

            <div className="p-6 lg:p-8 space-y-2">
              <span className="font-mono-tech text-[11px] text-[#D9A45B] uppercase tracking-wider block">
                02 Creative Decision
              </span>
              <p className="text-xs sm:text-sm text-[#F3F0E9]/90 font-sans-editorial leading-relaxed">
                {featuredCase.creativeDecision}
              </p>
            </div>

            <div className="p-6 lg:p-8 space-y-2">
              <span className="font-mono-tech text-[11px] text-[#A6A6A2] uppercase tracking-wider block">
                03 Editorial Reasoning
              </span>
              <p className="text-xs sm:text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                {featuredCase.reasoning}
              </p>
            </div>

            <div className="p-6 lg:p-8 space-y-2">
              <span className="font-mono-tech text-[11px] text-[#A6A6A2] uppercase tracking-wider block">
                04 Narration Support
              </span>
              <p className="text-xs sm:text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                {featuredCase.howVisualsSupportNarration}
              </p>
            </div>
          </div>

          {/* Keyframe Sequence Navigator */}
          <div className="p-6 sm:p-8 lg:p-10 bg-[#121315]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#F3F0E9]/[0.08] gap-3">
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-wider text-[#D9A45B] block">
                  TIMELINE DECONSTRUCTION
                </span>
                <h4 className="font-serif-editorial text-2xl text-[#F3F0E9]">
                  Inspect Keyframe Decisions
                </h4>
              </div>
              <div className="font-mono-tech text-xs text-[#A6A6A2]">
                Select a sequence phase below to reveal editorial choices
              </div>
            </div>

            {/* Selector Buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {featuredCase.keyframes.map((frame, index) => (
                <button
                  key={frame.timecode}
                  type="button"
                  onClick={() => setActiveFrame(index)}
                  className={`p-4 text-left border rounded-[2px] transition-all ${
                    activeFrame === index
                      ? 'bg-[#191A1C] border-[#D9A45B] shadow-[0_0_15px_rgba(217,164,91,0.15)]'
                      : 'bg-[#141517] border-[#F3F0E9]/[0.08] hover:border-[#F3F0E9]/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono-tech text-xs text-[#D9A45B]">
                      {frame.timecode}
                    </span>
                    {activeFrame === index && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B]" />
                    )}
                  </div>
                  <div className="font-mono-tech text-xs text-[#F3F0E9] font-medium truncate">
                    {frame.label}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Keyframe Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFrame}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 bg-[#16171a] border border-[#F3F0E9]/[0.08] rounded-[2px] space-y-6"
              >
                {/* Script Voiceover */}
                <div className="p-4 bg-[#101112] border-l-2 border-[#D9A45B] rounded-r-[2px]">
                  <div className="font-mono-tech text-[11px] text-[#D9A45B] uppercase tracking-wider mb-1">
                    Voiceover Script at {currentFrame.timecode}
                  </div>
                  <p className="font-serif-editorial text-xl sm:text-2xl text-[#F3F0E9] italic">
                    {currentFrame.narrationPrompt}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-[#121315] border border-[#F3F0E9]/[0.04] rounded-[2px] space-y-2">
                    <div className="font-mono-tech text-xs text-[#F3F0E9] uppercase tracking-wider">
                      Editorial Visual Strategy
                    </div>
                    <p className="text-xs sm:text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                      {currentFrame.editorialChoice}
                    </p>
                  </div>

                  <div className="p-4 bg-[#121315] border border-[#F3F0E9]/[0.04] rounded-[2px] space-y-2">
                    <div className="font-mono-tech text-xs text-[#F3F0E9] uppercase tracking-wider">
                      Acoustic & Sound Design Cue
                    </div>
                    <p className="text-xs sm:text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
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
