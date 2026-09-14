"use client";

import React from "react";
import Link from "next/link";
import { BrandEmblem } from "./BrandEmblem";
import { brandData } from "@/data/brand";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0B0B0A] text-[#F3F0E8] border-t border-white/10 pt-20 pb-12 relative overflow-hidden z-30">
      {/* Background Watermark Monogram */}
      <div className="absolute right-[-4%] bottom-[-10%] opacity-[0.03] pointer-events-none select-none">
        <BrandEmblem size={550} variant="ivory" withCrest />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BrandEmblem size={32} variant="gold" />
                <span className="font-serif text-2xl tracking-[0.25em] text-[#F3F0E8]">
                  {brandData.name}
                </span>
              </div>
              <p className="text-meta text-[#A58A55] tracking-[0.3em] uppercase mb-4">
                {brandData.tagline}
              </p>
              <p className="text-xs text-[#8E887E] max-w-sm font-light leading-relaxed">
                An international haute menswear house founded on architectural precision, Italian fiber provenance, and permanent form.
              </p>
            </div>

            <div className="mt-8 text-xs text-[#6B655A] tracking-wider uppercase">
              LONDON • MILANO • NEW YORK • TOKYO
            </div>
          </div>

          {/* Navigation Sitemap */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <div className="text-meta text-[#A58A55] tracking-[0.22em] mb-4">
                EXPLORE
              </div>
              <ul className="flex flex-col gap-3 text-xs tracking-widest text-[#B8B2A7] uppercase font-light">
                <li>
                  <a href="#collection" className="hover:text-[#F3F0E8] transition-colors">
                    COLLECTION
                  </a>
                </li>
                <li>
                  <a href="#editorial" className="hover:text-[#F3F0E8] transition-colors">
                    EDITORIAL
                  </a>
                </li>
                <li>
                  <a href="#craft" className="hover:text-[#F3F0E8] transition-colors">
                    CRAFT & FIBER
                  </a>
                </li>
                <li>
                  <a href="#journal" className="hover:text-[#F3F0E8] transition-colors">
                    JOURNAL
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#F3F0E8] transition-colors">
                    ABOUT MONARCH
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-meta text-[#A58A55] tracking-[0.22em] mb-4">
                DISCIPLINES
              </div>
              <ul className="flex flex-col gap-3 text-xs tracking-widest text-[#B8B2A7] uppercase font-light">
                <li>
                  <a href="#collection" className="hover:text-[#F3F0E8] transition-colors">
                    01 ESSENTIALS
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-[#F3F0E8] transition-colors">
                    02 THE POLO
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-[#F3F0E8] transition-colors">
                    03 SHIRTS
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-[#F3F0E8] transition-colors">
                    04 CHECKS
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-[#F3F0E8] transition-colors">
                    05 TAILORED
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Direct Concierge & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <div className="text-meta text-[#A58A55] tracking-[0.22em] mb-4">
                CONCIERGE
              </div>
              <div className="text-xs text-[#B8B2A7] font-light flex flex-col gap-2 md:text-right">
                <a href="mailto:concierge@monarch-menswear.com" className="hover:text-[#A58A55]">
                  {brandData.contact.conciergeEmail}
                </a>
                <span>{brandData.contact.phone}</span>
                <span className="text-[#8E887E]">{brandData.contact.address}</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 md:mt-0 inline-flex items-center gap-2 text-meta text-[#A58A55] hover:text-[#F3F0E8] tracking-[0.2em] transition-colors"
            >
              <span>BACK TO TOP</span>
              <span>↑</span>
            </button>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B655A] tracking-wider uppercase">
          <div>
            © 2026 MONARCH HAUTE MENSWEAR. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#B8B2A7] cursor-pointer">PRIVACY POLICY</span>
            <span>•</span>
            <span className="hover:text-[#B8B2A7] cursor-pointer">TERMS OF COMMISSION</span>
            <span>•</span>
            <span className="hover:text-[#B8B2A7] cursor-pointer">CODE OF CRAFT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
