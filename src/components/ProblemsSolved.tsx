'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const ProblemsSolved: React.FC = () => {
  const { problems } = portfolioData;

  return (
    <section
      id="problems"
      aria-label="Documentary Editing Problems Solved"
      className="py-24 lg:py-36 border-b border-[#F3F0E9]/[0.08] bg-[#101112]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-[#D9A45B] mb-4">
              <span>02 // EDITORIAL REASONING</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>RESOLVING NARRATIVE BREAKDOWNS</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#F3F0E9] tracking-tight">
              {problems.heading}
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#A6A6A2] font-sans-editorial leading-relaxed">
              {problems.subheading}
            </p>
          </div>
        </div>

        {/* Editorial Comparison Layout — Divided Rows, No Generic Cards */}
        <div className="border-t border-[#F3F0E9]/[0.08] divide-y divide-[#F3F0E9]/[0.08]">
          {problems.items.map((item) => (
            <div
              key={item.number}
              className="py-10 lg:py-14 group hover:bg-[#141517]/40 transition-colors px-4 -mx-4 rounded-[2px]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Index Numeral & Title (4 cols) */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-serif-editorial text-3xl sm:text-4xl text-[#D9A45B] italic">
                      {item.number}
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#A6A6A2]/60 uppercase tracking-widest">
                      CHALLENGE & RESOLUTION
                    </span>
                  </div>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9] leading-snug group-hover:text-[#D9A45B] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* The Documentary Challenge (4 cols) */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="font-mono-tech text-[11px] text-[#e74c3c] uppercase tracking-wider font-medium">
                    The Production Breakdown:
                  </div>
                  <p className="text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* The Editorial Approach & Takeaway (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div>
                    <div className="font-mono-tech text-[11px] text-[#D9A45B] uppercase tracking-wider font-medium mb-1">
                      The Editorial Approach:
                    </div>
                    <p className="text-sm text-[#F3F0E9]/90 font-sans-editorial leading-relaxed">
                      {item.approach}
                    </p>
                  </div>
                  <div className="font-mono-tech text-xs text-[#D9A45B] italic pt-1 border-t border-[#F3F0E9]/[0.06]">
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
