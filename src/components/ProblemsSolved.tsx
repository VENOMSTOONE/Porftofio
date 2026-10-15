'use client';

import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';

export const ProblemsSolved: React.FC = () => {
  const { problems } = portfolioData;

  return (
    <section
      id="philosophy"
      aria-label="Philosophy — The Problems I Solve"
      className="py-28 lg:py-40 border-b border-white/[0.14] bg-[#000000] relative"
    >
      {/* Anchor alias for #problems */}
      <span id="problems" className="sr-only" aria-hidden="true" />

      <div className="w-full px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 mb-16 border-b border-white/[0.14]"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#D9A45B]">
              <span>[ 02 // PHILOSOPHY ]</span>
              <span className="text-[#9A9A9A]/50">·</span>
              <span>THE PROBLEMS I SOLVE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#F3F0E9]">
              Every Story Has a{' '}
              <span className="font-serif-editorial italic font-normal text-[#D9A45B]">
                Visual Language.
              </span>
            </h2>
          </div>
          <div className="max-w-md font-sans text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-light">
            {problems.subheading}
          </div>
        </motion.div>

        {/* Refined Editorial Manifesto Rows (No Generic Cards) */}
        <div className="divide-y divide-white/[0.14] border-t border-b border-white/[0.14]">
          {problems.items.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 lg:py-16 group hover:bg-[#101112] transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Numeral & Challenge Title (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-tech text-4xl sm:text-5xl font-bold text-[#D9A45B]">
                      {item.number}
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#9A9A9A]/70 uppercase tracking-widest">
                      CHALLENGE & INTERVENTION
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors italic leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* The Documentary Breakdown (3 cols) */}
                <div className="lg:col-span-3 space-y-2 border-l border-white/[0.1] pl-6">
                  <div className="font-mono-tech text-xs text-[#e74c3c] uppercase tracking-wider font-semibold">
                    The Problem:
                  </div>
                  <p className="font-sans text-sm text-[#9A9A9A] leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* The Editorial Intervention (4 cols) */}
                <div className="lg:col-span-4 space-y-3 border-l border-white/[0.1] pl-6">
                  <div className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider font-semibold">
                    The Editorial Solution:
                  </div>
                  <p className="font-sans text-sm text-[#F3F0E9]/90 leading-relaxed font-light">
                    {item.approach}
                  </p>
                  <div className="pt-2 font-mono-tech text-xs text-[#D9A45B] italic">
                    "{item.keyTakeaway}"
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
