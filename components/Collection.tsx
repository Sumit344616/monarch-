"use client";

import React, { useState } from "react";
import Image from "next/image";
import { collectionCategories } from "@/data/collections";
import { BrandEmblem } from "./BrandEmblem";

export function Collection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = collectionCategories[activeIdx];

  const nextDiscipline = () => {
    setActiveIdx((prev) => (prev + 1) % collectionCategories.length);
  };

  const prevDiscipline = () => {
    setActiveIdx((prev) => (prev - 1 + collectionCategories.length) % collectionCategories.length);
  };

  return (
    <section
      id="collection"
      className="theme-ivory w-full py-28 md:py-36 relative z-30 transition-colors duration-700"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="container-custom">
        {/* ========================================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#0B0B0A]/12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <BrandEmblem size={20} variant="dark" />
              <span className="text-meta text-[#A58A55] tracking-[0.3em]">
                ATELIER REPERTOIRE // SS26
              </span>
            </div>
            <h2 className="text-display font-serif text-[#0B0B0A] uppercase leading-[0.9]">
              THE COLLECTION.
            </h2>
          </div>

          <div className="mt-6 md:mt-0 max-w-sm">
            <p className="text-[#6B655A] text-sm font-light leading-relaxed">
              &ldquo;Designed for every version of the modern man.&rdquo; Five foundational menswear disciplines engineered with structural permanence.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DISCIPLINE SELECTOR TABS (Zero scrollbar lines) */}
        {/* ========================================================================= */}
        <div
          className="flex items-center gap-4 md:gap-8 mb-12 border-b border-[#0B0B0A]/10 pb-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {collectionCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveIdx(idx)}
              className={`py-2 px-1 text-meta tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap ${
                activeIdx === idx
                  ? "text-[#0B0B0A] font-bold"
                  : "text-[#8E887E] hover:text-[#0B0B0A]"
              }`}
            >
              <span>
                {cat.number} {cat.title}
              </span>
              {activeIdx === idx && (
                <span className="absolute bottom-[-17px] left-0 w-full h-[2px] bg-[#A58A55]" />
              )}
            </button>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* EDITORIAL MONOGRAPH STAGE (Magazine Spread Presentation) */}
        {/* ========================================================================= */}
        <div className="bg-[#FAF8F4] p-8 md:p-14 lg:p-16 border border-[#0B0B0A]/10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Full-Bleed Fashion Portrait */}
            <div className="lg:col-span-6 relative flex flex-col items-center">
              <div
                className="relative w-full shadow-2xl overflow-hidden bg-[#0B0B0A] group"
                style={{ height: "clamp(460px, 64vh, 640px)" }}
                data-cursor="view"
              >
                <Image
                  key={current.image}
                  src={current.image}
                  alt={`MONARCH ${current.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 48vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Look Badge */}
                <div className="absolute top-6 left-6 bg-[#0B0B0A]/90 backdrop-blur-md px-4 py-2 text-meta text-[#F3F0E8] tracking-[0.22em] border-l-2 border-[#A58A55] shadow-lg">
                  LOOK {current.number} // {current.title}
                </div>

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right: Editorial Narrative & Specifications */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Origin & Discipline Index */}
              <div className="flex items-center justify-between mb-3 border-b border-[#0B0B0A]/10 pb-2">
                <span className="text-meta text-[#A58A55] tracking-[0.28em] font-semibold">
                  DISCIPLINE {current.number} OF 05
                </span>
                <span className="text-xs text-[#8E887E] tracking-widest uppercase font-medium">
                  {current.origin}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-h1 font-serif text-[#0B0B0A] uppercase leading-none mb-2">
                {current.title}
              </h3>

              <div className="text-meta text-[#6B655A] tracking-[0.2em] mb-5">
                {current.subtitle}
              </div>

              {/* Italic Editorial Quote */}
              <blockquote className="font-serif-editorial italic text-lg md:text-xl text-[#0B0B0A]/90 border-l-2 border-[#A58A55] pl-4 mb-6 leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Garment Description */}
              <p className="text-[#4A463F] text-sm md:text-base font-light leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Refined Minimalist Specifications */}
              <div className="border-t border-[#0B0B0A]/10 pt-4 mb-8 flex flex-col gap-3 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-[#0B0B0A]/5">
                  <span className="text-[#8E887E] uppercase tracking-wider">TEXTILE</span>
                  <strong className="text-[#0B0B0A] uppercase font-medium tracking-wide">
                    {current.materials}
                  </strong>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-[#0B0B0A]/5">
                  <span className="text-[#8E887E] uppercase tracking-wider">PALETTE</span>
                  <strong className="text-[#0B0B0A] uppercase font-medium tracking-wide">
                    {current.palette}
                  </strong>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#0B0B0A]/5">
                  <span className="text-[#8E887E] uppercase tracking-wider whitespace-nowrap mr-4">
                    ATELIER DETAILS
                  </span>
                  <span className="text-[#4A463F] text-right font-light">
                    {current.highlights.join(" • ")}
                  </span>
                </div>

                {/* Macro Detail Callout Cleanly Contained */}
                <div className="flex items-center justify-between py-2 bg-[#F3F0E8]/70 px-4 border border-[#0B0B0A]/5 mt-2">
                  <span className="text-[#8E887E] uppercase tracking-wider text-[11px]">
                    FOCUS SWATCH
                  </span>
                  <span className="text-[#A58A55] text-xs tracking-wider uppercase font-medium">
                    {current.detailCaption}
                  </span>
                </div>
              </div>

              {/* Action Buttons & Navigation */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
                <a
                  href="#contact"
                  className="px-7 py-3.5 bg-[#0B0B0A] text-[#F3F0E8] text-meta tracking-[0.22em] font-medium border border-[#0B0B0A] hover:bg-[#A58A55] hover:border-[#A58A55] hover:text-[#0B0B0A] transition-all duration-300 shadow-md group inline-flex items-center gap-3"
                  style={{ backgroundColor: "#0B0B0A", color: "#F3F0E8" }}
                >
                  <span style={{ color: "#F3F0E8" }}>REQUEST COMMISSION</span>
                  <span className="text-[#A58A55] group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Prev / Next Navigation Controls */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevDiscipline}
                    aria-label="Previous discipline"
                    className="w-10 h-10 border border-[#0B0B0A]/20 flex items-center justify-center text-sm text-[#0B0B0A] hover:border-[#A58A55] hover:text-[#A58A55] transition-colors"
                  >
                    ←
                  </button>
                  <span className="text-meta text-[#8E887E] tracking-[0.2em]">
                    {current.number} / 05
                  </span>
                  <button
                    onClick={nextDiscipline}
                    aria-label="Next discipline"
                    className="w-10 h-10 border border-[#0B0B0A]/20 flex items-center justify-center text-sm text-[#0B0B0A] hover:border-[#A58A55] hover:text-[#A58A55] transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
