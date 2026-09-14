"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandEmblem } from "./BrandEmblem";

export function Checks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const shirtImageRef = useRef<HTMLDivElement>(null);
  const patternOverlayRef = useRef<HTMLDivElement>(null);

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
          end: isMobile ? "+=140%" : "+=190%",
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // 0.0 -> 3.5: Diagonal counter-movement
      // Image moves diagonally down-right, text moves diagonally up-left
      tl.to(
        shirtImageRef.current,
        {
          xPercent: isMobile ? 8 : 16,
          yPercent: -10,
          scale: 1.05,
          ease: "none",
          duration: 3.5,
        },
        0
      );

      tl.to(
        textGroupRef.current,
        {
          xPercent: isMobile ? -8 : -15,
          yPercent: 12,
          ease: "none",
          duration: 3.5,
        },
        0
      );

      // 3.5 -> 6.5: Giant Cropped Check Pattern briefly fills viewport
      tl.fromTo(
        patternOverlayRef.current,
        {
          clipPath: "inset(50% 50% 50% 50%)",
          scale: 0.8,
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          opacity: 1,
          duration: 2.2,
          ease: "power2.inOut",
        },
        3.0
      );

      // 6.5 -> 8.5: Pattern collapses back into the tailored shirt image
      tl.to(
        patternOverlayRef.current,
        {
          clipPath: "inset(45% 45% 45% 45%)",
          scale: 1.1,
          opacity: 0,
          duration: 1.8,
          ease: "power2.inOut",
        },
        5.8
      );

      // 8.5 -> 10.0: Pristine exit into Fabric section
      tl.to(
        [shirtImageRef.current, textGroupRef.current],
        {
          opacity: 0,
          y: -30,
          duration: 1.2,
          ease: "power2.inOut",
        },
        8.5
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="checks"
      className="relative w-full h-screen min-h-[640px] bg-[#121C17] text-[#F3F0E8] overflow-hidden flex items-center justify-center z-30 transition-colors duration-700"
      style={{ scrollMarginTop: "90px" }}
    >
      {/* Subtle Forest Grid Texture Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(243,240,232,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(243,240,232,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative w-full max-w-[1640px] h-full mx-auto px-6 sm:px-12 md:px-20 flex flex-col md:flex-row items-center justify-between z-20">
        
        {/* Left: Experimental Large Typography (Opposite Drift) */}
        <div
          ref={textGroupRef}
          className="w-full md:w-[46%] z-30 pointer-events-none will-change-transform"
        >
          <div className="flex items-center gap-3 mb-3">
            <BrandEmblem size={20} variant="gold" />
            <span className="text-meta text-[#A58A55] tracking-[0.3em]">
              MICRO-GEOMETRY // 05
            </span>
          </div>

          <h2 className="text-display font-serif text-[#F3F0E8] uppercase leading-[0.88] select-none">
            CHECK <br />
            THE <br />
            <span className="italic font-serif-editorial text-[#A58A55]">DETAIL.</span>
          </h2>

          <p className="mt-8 text-[#A8B5AF] text-sm md:text-base font-light max-w-md leading-relaxed">
            Huddersfield brushed flannel woven with mathematically aligned symmetry. Scaled micro-houndstooth that moves with subtle depth between architecture and motion.
          </p>

          <div className="mt-8 flex items-center gap-6 text-xs text-[#8E887E] tracking-widest uppercase">
            <span>NATURAL HORN BUTTONS</span>
            <span>•</span>
            <span>PATTERN-MATCHED PLACKET</span>
          </div>
        </div>

        {/* Right: Model Wearing Checked Flannel */}
        <div
          ref={shirtImageRef}
          className="relative w-full md:w-[50%] h-[50vh] md:h-[72vh] flex items-center justify-center will-change-transform"
        >
          <div
            className="relative w-full h-full shadow-[0_35px_80px_rgba(0,0,0,0.85)] border border-[#F3F0E8]/15 overflow-hidden bg-[#0B0B0A]"
            data-cursor="view"
          >
            <Image
              src="/images/collection_checks.jpg"
              alt="MONARCH Architectural Check Flannel"
              fill
              sizes="(max-width: 768px) 90vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121C17]/85 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Experimental Giant Check Pattern Expansion Overlay */}
      <div
        ref={patternOverlayRef}
        className="absolute inset-4 md:inset-12 z-40 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.95)] border-2 border-[#A58A55] bg-[#0B0B0A] pointer-events-none opacity-0 will-change-transform"
      >
        <Image
          src="/images/shirt_check.jpg"
          alt="Macro Houndstooth Geometry Pattern"
          fill
          sizes="95vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/90 via-transparent to-[#0B0B0A]/50" />
        <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
          <div>
            <div className="text-meta text-[#A58A55] tracking-[0.3em] uppercase font-bold">
              EXPERIMENTAL SCALE TRANSFORMATION
            </div>
            <div className="text-2xl font-serif text-[#F3F0E8] uppercase tracking-wider mt-1">
              HUDDERSFIELD BRUSHED MICRO-HOUNDSTOOTH
            </div>
          </div>
          <div className="text-xs text-[#B8B2A7] tracking-widest uppercase hidden md:block">
            STITCH PITCH: 18 SPI / HAND-MATCHED
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checks;
