"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandEmblem } from "./BrandEmblem";

export function Shirts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frame1Ref = useRef<HTMLDivElement>(null); // Small initial shirt -> expands
  const frame2Ref = useRef<HTMLDivElement>(null); // Lens Shift 1: Cuff & Watch
  const frame3Ref = useRef<HTMLDivElement>(null); // Lens Shift 2: Fabric & Weave
  const frame4Ref = useRef<HTMLDivElement>(null); // Lens Shift 3: Full Model Look
  const lensLabelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: isMobile ? "+=150%" : "+=220%",
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // 0.0 -> 2.0: Lens 1 — Shirt expands from small to dominant
      tl.to(
        frame1Ref.current,
        {
          scale: 1.35,
          ease: "none",
          duration: 2.0,
        },
        0
      );

      // 2.0 -> 4.0: Lens Shift 1 — Macro French Cuff & Timepiece
      tl.to(
        frame1Ref.current,
        {
          opacity: 0,
          scale: 1.5,
          duration: 1.2,
          ease: "power2.inOut",
        },
        1.8
      );

      tl.fromTo(
        frame2Ref.current,
        {
          clipPath: "inset(20% 20% 20% 20%)",
          scale: 1.2,
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power2.out",
        },
        2.0
      );

      // 4.0 -> 6.0: Lens Shift 2 — Tactile Weave & Stitching
      tl.to(
        frame2Ref.current,
        {
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: "power2.inOut",
        },
        3.8
      );

      tl.fromTo(
        frame3Ref.current,
        {
          clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          scale: 1.15,
          opacity: 0,
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power2.out",
        },
        4.0
      );

      // 6.0 -> 8.5: Lens Shift 3 — Full Model Look in Architectural Space
      tl.to(
        frame3Ref.current,
        {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
        },
        5.8
      );

      tl.fromTo(
        frame4Ref.current,
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2.0,
          ease: "power2.out",
        },
        6.0
      );

      // 8.5 -> 10.0: Pristine exit
      tl.to(
        [frame4Ref.current, headlineRef.current, lensLabelRef.current],
        {
          opacity: 0,
          y: -30,
          duration: 1.0,
          ease: "power2.inOut",
        },
        8.8
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="shirts"
      className="relative w-full h-screen min-h-[640px] bg-[#0B0B0A] text-[#F3F0E8] overflow-hidden flex items-center justify-center z-30"
      style={{ scrollMarginTop: "90px" }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0A] via-[#121413] to-[#0B0B0A] pointer-events-none" />

      {/* Floating Header & Lens Tracker */}
      <div
        ref={headlineRef}
        className="absolute top-12 left-6 md:left-16 z-30 pointer-events-none"
      >
        <div className="flex items-center gap-3 mb-2">
          <BrandEmblem size={18} variant="gold" />
          <span className="text-meta text-[#A58A55] tracking-[0.3em]">
            LENS CHOREOGRAPHY // 03
          </span>
        </div>
        <h2 className="text-display font-serif text-[#F3F0E8] uppercase leading-[0.92]">
          THE SHIRT <br />
          <span className="italic font-serif-editorial text-[#A58A55]">REDEFINED.</span>
        </h2>
      </div>

      {/* Central Visual Camera Stage */}
      <div
        ref={stageRef}
        className="relative w-[clamp(320px,46vw,720px)] h-[clamp(440px,70vh,740px)] flex items-center justify-center"
      >
        {/* LENS 01: Initial Shirt Still (Expands on Scroll) */}
        <div
          ref={frame1Ref}
          className="absolute inset-0 w-full h-full shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden border border-[#F3F0E8]/10 bg-[#0B0B0A] will-change-transform"
          data-cursor="view"
        >
          <Image
            src="/images/shirt_white.jpg"
            alt="MONARCH 140/2 Poplin Bespoke Shirt"
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-meta text-[#A58A55] tracking-[0.26em] mb-1">
              LENS 01 // OVERVIEW
            </div>
            <div className="text-sm font-serif uppercase tracking-wider text-[#F3F0E8]">
              140/2 TWIN-TWIST ITALIAN POPLIN
            </div>
          </div>
        </div>

        {/* LENS 02: Horological French Cuff & Timepiece */}
        <div
          ref={frame2Ref}
          className="absolute inset-0 w-full h-full shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden border border-[#A58A55]/30 bg-[#0B0B0A] opacity-0 will-change-transform"
          data-cursor="view"
        >
          <Image
            src="/images/runway_04.jpg"
            alt="MONARCH Horological Cuff & Tailoring"
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-meta text-[#A58A55] tracking-[0.26em] mb-1">
              LENS 02 // ATELIER CUFF
            </div>
            <div className="text-sm font-serif uppercase tracking-wider text-[#F3F0E8]">
              MITERED FRENCH CUFF • WRIST RADIUS
            </div>
          </div>
        </div>

        {/* LENS 03: Tactile Weave & Stitching */}
        <div
          ref={frame3Ref}
          className="absolute inset-0 w-full h-full shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden border border-[#A58A55]/30 bg-[#0B0B0A] opacity-0 will-change-transform"
          data-cursor="view"
        >
          <Image
            src="/images/fabric_knit.jpg"
            alt="MONARCH Dense Tactile Weave"
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/85 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-meta text-[#A58A55] tracking-[0.26em] mb-1">
              LENS 03 // MICRO YARN
            </div>
            <div className="text-sm font-serif uppercase tracking-wider text-[#F3F0E8]">
              COMBED LONG-STAPLE FIBER LOOPS
            </div>
          </div>
        </div>

        {/* LENS 04: Full Model Look in Architectural Space */}
        <div
          ref={frame4Ref}
          className="absolute inset-0 w-full h-full shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden border border-[#F3F0E8]/15 bg-[#0B0B0A] opacity-0 will-change-transform"
          data-cursor="view"
        >
          <Image
            src="/images/collection_shirts.jpg"
            alt="MONARCH Model Wearing Bespoke Shirt"
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/85 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-meta text-[#A58A55] tracking-[0.26em] mb-1">
              LENS 04 // FULL SILHOUETTE
            </div>
            <div className="text-sm font-serif uppercase tracking-wider text-[#F3F0E8]">
              THE ARCHITECTURAL CANVAS // COMPLETE
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Spec strip */}
      <div
        ref={lensLabelRef}
        className="absolute bottom-8 left-6 right-6 md:left-16 md:right-16 flex items-center justify-between border-t border-white/10 pt-4 z-30 pointer-events-none text-xs text-[#8E887E] tracking-widest uppercase"
      >
        <div className="flex items-center gap-6">
          <span>140/2 DOUBLE TWIST</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">REMOVABLE BRASS STAYS</span>
        </div>
        <div className="text-[#A58A55]">
          OPTICAL ZOOM: 1.0X → 4.5X → PULLBACK
        </div>
      </div>
    </section>
  );
}

export default Shirts;
