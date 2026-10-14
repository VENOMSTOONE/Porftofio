'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Services: React.FC = () => {
  const { services } = portfolioData;

  return (
    <section
      id="services"
      aria-label="Documentary Editing Services"
      className="py-24 lg:py-36 border-b border-[#F3F0E9]/[0.08] bg-[#101112]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-[#D9A45B] mb-4">
              <span>04 // CAPABILITIES</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>SPECIALIZED POST-PRODUCTION</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#F3F0E9] tracking-tight">
              {services.heading}
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#A6A6A2] font-sans-editorial leading-relaxed">
              {services.subheading}
            </p>
          </div>
        </div>

        {/* Editorial Directory Layout (Hairline Rows) */}
        <div className="border-t border-[#F3F0E9]/[0.08] divide-y divide-[#F3F0E9]/[0.08]">
          {services.items.map((service) => (
            <div
              key={service.number}
              className="py-10 lg:py-14 group hover:bg-[#141517]/50 transition-colors px-4 -mx-4 rounded-[2px]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Number (2 cols) */}
                <div className="lg:col-span-2">
                  <span className="font-serif-editorial text-4xl text-[#D9A45B] italic">
                    {service.number}
                  </span>
                </div>

                {/* Title & Core Philosophy (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors leading-[1.1]">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A6A6A2] font-sans-editorial leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables (5 cols) */}
                <div className="lg:col-span-5 lg:pl-8 space-y-3">
                  <div className="font-mono-tech text-xs text-[#A6A6A2]/60 uppercase tracking-wider">
                    Story Deliverables:
                  </div>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3F0E9]/85 font-sans-editorial"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
