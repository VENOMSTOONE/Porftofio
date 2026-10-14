'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Services: React.FC = () => {
  const { services } = portfolioData;

  return (
    <section
      id="services"
      aria-label="Post-Production Capabilities"
      className="py-28 lg:py-40 border-b border-[#F3F0E9]/15 bg-[#090a0b] relative"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 mb-16 border-b border-[#F3F0E9]/15">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#D9A45B]">
              <span>[ 04 // DISCIPLINES ]</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>SPECIALIZED CAPABILITIES</span>
            </div>
            <h2 className="font-display-brutal text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-[-0.04em] text-[#F3F0E9]">
              {services.heading}
            </h2>
          </div>
          <div className="max-w-md font-sans-editorial text-sm sm:text-base text-[#A6A6A2] leading-relaxed">
            {services.subheading}
          </div>
        </div>

        {/* Monolithic Editorial Service Directory */}
        <div className="divide-y divide-[#F3F0E9]/15 border-t border-b border-[#F3F0E9]/15">
          {services.items.map((service) => (
            <div
              key={service.number}
              className="py-12 lg:py-16 group hover:bg-[#0e0f12] transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Index Numeral (2 cols) */}
                <div className="lg:col-span-2">
                  <span className="font-display-brutal text-4xl sm:text-6xl font-extrabold text-[#D9A45B]">
                    {service.number}
                  </span>
                </div>

                {/* Service Title & Core Philosophy (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="font-display-brutal text-3xl sm:text-4xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors uppercase font-bold leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-sans-editorial text-sm sm:text-base text-[#A6A6A2] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Craft Deliverables (5 cols) */}
                <div className="lg:col-span-5 lg:pl-10 space-y-3">
                  <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider block font-semibold">
                    Core Craft Focus:
                  </span>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-[#F3F0E9]/90 font-sans-editorial"
                      >
                        <span className="w-1.5 h-1.5 bg-[#D9A45B] mt-2 shrink-0" />
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
