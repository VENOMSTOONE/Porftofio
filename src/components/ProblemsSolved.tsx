'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const ProblemsSolved: React.FC = () => {
  const { problems } = portfolioData;

  return (
    <section
      id="problems"
      aria-label="Editorial Reasoning"
      className="py-28 lg:py-40 border-b border-[#F3F0E9]/15 bg-[#090a0b] relative"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 mb-16 border-b border-[#F3F0E9]/15">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#D9A45B]">
              <span>[ 02 // EDITORIAL REASONING ]</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>RESOLVING NARRATIVE BREAKDOWNS</span>
            </div>
            <h2 className="font-display-brutal text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-[-0.04em] text-[#F3F0E9]">
              {problems.heading}
            </h2>
          </div>
          <div className="max-w-md font-sans-editorial text-sm sm:text-base text-[#A6A6A2] leading-relaxed">
            {problems.subheading}
          </div>
        </div>

        {/* Brutalist Editorial Manifesto Rows (No Generic Cards) */}
        <div className="divide-y divide-[#F3F0E9]/15 border-t border-b border-[#F3F0E9]/15">
          {problems.items.map((item) => (
            <div
              key={item.number}
              className="py-12 lg:py-16 group hover:bg-[#0e0f12] transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Giant Brutalist Index & Challenge Title (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display-brutal text-4xl sm:text-6xl font-extrabold text-[#D9A45B]">
                      {item.number}
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#A6A6A2]/60 uppercase tracking-widest">
                      CHALLENGE & INTERVENTION
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors italic leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* The Documentary Breakdown (3 cols) */}
                <div className="lg:col-span-3 space-y-2 border-l border-[#F3F0E9]/10 pl-6">
                  <div className="font-mono-tech text-xs text-[#e74c3c] uppercase tracking-wider font-semibold">
                    The Fatal Flaw:
                  </div>
                  <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* The Editorial Intervention (4 cols) */}
                <div className="lg:col-span-4 space-y-3 border-l border-[#F3F0E9]/10 pl-6">
                  <div className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider font-semibold">
                    The Editorial Intervention:
                  </div>
                  <p className="font-sans-editorial text-sm text-[#F3F0E9]/90 leading-relaxed">
                    {item.approach}
                  </p>
                  <div className="pt-2 font-mono-tech text-xs text-[#D9A45B] italic">
                    "{item.keyTakeaway}"
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
