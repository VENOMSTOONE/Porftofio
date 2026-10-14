'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      aria-label="About the Studio"
      className="py-24 lg:py-36 border-b border-[#F3F0E9]/[0.08] bg-[#101112]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-[#D9A45B] mb-4">
              <span>06 // STUDIO IDENTITY</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>PHILOSOPHY & PURPOSE</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#F3F0E9] tracking-tight">
              {about.heading}
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#A6A6A2] font-sans-editorial leading-relaxed">
              {about.subheading}
            </p>
          </div>
        </div>

        {/* Editorial Content: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Manifesto & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="p-8 sm:p-10 border border-[#F3F0E9]/[0.08] bg-[#141517] rounded-[2px]">
              <p className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9] font-normal leading-relaxed">
                "Documentary audiences are not looking for frantic visual noise. They are drawn to intrigue, clarity, and the thrill of uncovering truth. When an edit respects the silence between words as much as the cuts themselves, the story becomes unforgettable."
              </p>
              <div className="mt-8 pt-4 border-t border-[#F3F0E9]/[0.08] flex items-center justify-between font-mono-tech text-xs text-[#A6A6A2]">
                <span className="text-[#D9A45B] font-semibold">VAIBHAV LABS</span>
                <span>INVESTIGATIVE EDITING FOCUS</span>
              </div>
            </div>

            {/* Principles */}
            <div className="space-y-6">
              <h3 className="font-serif-editorial text-3xl text-[#F3F0E9]">
                Core Editorial Commitments
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {about.principles.map((principle) => (
                  <div
                    key={principle.title}
                    className="p-6 border border-[#F3F0E9]/[0.08] bg-[#141517] rounded-[2px] space-y-2"
                  >
                    <h4 className="font-mono-tech text-xs uppercase tracking-wider text-[#D9A45B] font-semibold">
                      {principle.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                      {principle.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Rules of Engagement & Specialization Notice (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 border border-[#F3F0E9]/[0.08] bg-[#141517] rounded-[2px] space-y-6">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[#D9A45B] block">
                EDITORIAL RULES OF ENGAGEMENT
              </span>

              <div className="space-y-5">
                {about.editorialPhilosophy.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 pb-4 border-b border-[#F3F0E9]/[0.06] last:border-b-0 last:pb-0"
                  >
                    <span className="font-serif-editorial text-2xl text-[#D9A45B] italic shrink-0">
                      0{index + 1}
                    </span>
                    <p className="text-sm text-[#F3F0E9]/90 font-sans-editorial leading-relaxed pt-0.5">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border border-[#D9A45B]/25 bg-[#141517] rounded-[2px] space-y-2">
              <span className="font-mono-tech text-[10px] text-[#D9A45B] uppercase tracking-widest font-semibold block">
                SPECIALIZATION COMMITMENT
              </span>
              <p className="text-xs text-[#A6A6A2] font-sans-editorial leading-relaxed">
                VAIBHAV LABS collaborates exclusively with documentary creators, investigative storytellers, and channels dedicated to mystery, true crime, historical enigmas, and procedural accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
