"use client";

import React, { useState } from "react";
import Image from "next/image";
import { journalArticles, JournalArticle } from "@/data/editorial";
import { BrandEmblem } from "./BrandEmblem";

export function Journal() {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <section
      id="journal"
      className="theme-stone w-full py-32 md:py-44 relative z-30 transition-colors duration-700"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 pb-8 border-b border-[#0B0B0A]/15">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <BrandEmblem size={20} variant="dark" />
              <span className="text-meta text-[#0B0B0A] tracking-[0.3em]">
                DISPATCHES & ESSAYS // 11
              </span>
            </div>
            <h2 className="text-display font-serif text-[#0B0B0A] uppercase leading-none">
              MONARCH JOURNAL.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#4A463F] text-sm max-w-xs font-light leading-relaxed">
            Critical reflections on menswear architecture, fiber provenance, and intentional living.
          </p>
        </div>

        {/* 3 Large Editorial Stories (Image Escaping Container on Hover) */}
        <div className="flex flex-col divide-y divide-[#0B0B0A]/15">
          {journalArticles.map((article, idx) => (
            <article
              key={article.id}
              className="py-16 md:py-24 group cursor-pointer transition-colors duration-500 relative"
              data-cursor="action"
              onClick={() => setActiveArticle(article)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Huge Number & Author Metadata */}
                <div className="lg:col-span-2 flex lg:flex-col justify-between items-start">
                  <span className="font-serif text-5xl md:text-7xl text-[#A58A55] font-light leading-none">
                    {article.number}
                  </span>
                  <div className="mt-4">
                    <span className="text-meta text-[#0B0B0A] tracking-[0.2em] font-semibold block">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-[#6B655A] tracking-widest uppercase block mt-1">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Image Preview (Partially Escapes Container on Hover) */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/3] w-full overflow-visible">
                    <div className="relative w-full h-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-[#0B0B0A] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.3)]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Typography & Read Arrow (Displaces horizontally on hover) */}
                <div className="lg:col-span-5 flex flex-col justify-center pl-0 lg:pl-6 transition-transform duration-500 ease-out group-hover:translate-x-3">
                  <div className="text-xs text-[#8E887E] tracking-widest uppercase mb-3 font-medium">
                    WRITTEN BY {article.author}
                  </div>

                  <h3 className="text-h2 font-serif text-[#0B0B0A] uppercase leading-[0.98] group-hover:text-[#A58A55] transition-colors duration-300 mb-4">
                    {article.title}
                  </h3>

                  <p className="text-[#4A463F] text-sm md:text-base font-light leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-meta text-[#0B0B0A] tracking-[0.24em] font-semibold">
                    <span>READ DISPATCH</span>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-4 text-[#A58A55]">
                      →
                    </span>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal Overlay */}
      {activeArticle && (
        <div className="fixed inset-0 z-[99999] bg-[#0B0B0A]/85 backdrop-blur-md flex items-center justify-center p-6 md:p-12 animate-fadeIn">
          <div className="bg-[#FAF8F4] text-[#0B0B0A] max-w-2xl w-full p-8 md:p-14 shadow-2xl relative border border-[#A58A55]/40 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 text-meta text-[#6B655A] hover:text-[#0B0B0A] tracking-[0.2em]"
            >
              ✕ CLOSE
            </button>

            <div className="text-meta text-[#A58A55] tracking-[0.25em] mb-2">
              DISPATCH {activeArticle.number} // {activeArticle.category}
            </div>
            <h3 className="text-2xl md:text-3xl font-serif uppercase tracking-tight mb-4">
              {activeArticle.title}
            </h3>
            <div className="text-xs text-[#8E887E] tracking-widest uppercase mb-6 pb-4 border-b border-[#0B0B0A]/10">
              {activeArticle.readTime} • BY {activeArticle.author}
            </div>

            <p className="text-[#4A463F] leading-relaxed mb-6 font-light">
              {activeArticle.excerpt}
            </p>
            <p className="text-[#4A463F] leading-relaxed mb-6 font-light">
              True sartorial presence begins in the unseen details. When you hold a MONARCH garment, the weight of the fiber immediately conveys its architectural origin. The fabric is not treated with superficial softeners; instead, the natural lanolin of the fleece or the long cellulose chains of combed Pima cotton speak for themselves.
            </p>
            <p className="text-[#4A463F] leading-relaxed font-light">
              We design not for seasonal obsolescence, but for permanent stature. The man who wears MONARCH steps into every room with quiet authority.
            </p>

            <div className="mt-8 pt-6 border-t border-[#0B0B0A]/10 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 bg-[#0B0B0A] text-[#F3F0E8] text-meta tracking-[0.2em]"
              >
                RETURN TO JOURNAL
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Journal;
