"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandEmblem } from "./BrandEmblem";

export function FinalCampaign() {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Slow panoramic camera push (scale 1.00 -> 1.10)
      gsap.fromTo(
        zoomImageRef.current,
        { scale: 1.0 },
        {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[680px] bg-[#0B0B0A] text-[#F3F0E8] overflow-hidden flex items-center justify-center z-30"
    >
      {/* Fullscreen Master Image with Slow Cinematic Zoom */}
      <div
        ref={zoomImageRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <Image
          src="/images/final_campaign.jpg"
          alt="MONARCH Haute Menswear Final Campaign Master"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          data-cursor="view"
        />
        {/* Subtle Film Grain and Chiaroscuro Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-[#0B0B0A]/35 to-[#0B0B0A]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[#0B0B0A]/20 pointer-events-none" />
      </div>

      {/* Center Cinematic Typography (Zero Clutter, Pure Breathing Room) */}
      <div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">
        <BrandEmblem size={48} variant="gold" className="mb-6 drop-shadow-md" />

        <div className="text-meta text-[#A58A55] tracking-[0.35em] mb-4 uppercase">
          CLOSING STATEMENT // SS26
        </div>

        <h2 className="text-hero font-serif text-[#F3F0E8] uppercase leading-[0.88] tracking-[-0.01em] select-none">
          DRESS <br />
          WITH <br />
          <span className="italic font-serif-editorial text-[#A58A55]">INTENT.</span>
        </h2>

        <p className="mt-8 text-[#B8B2A7] text-base md:text-lg font-light max-w-md mx-auto leading-relaxed">
          Presence is not inherited. It is assembled, worn, and commanded.
        </p>
      </div>

      {/* Minimal Bottom Film Metadata */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-[10px] text-[#8E887E] tracking-[0.25em] uppercase pointer-events-none z-10 hidden sm:flex">
        <span>35MM CINEMA FORMAT // PANAVISION PRIMO</span>
        <span>VIA MONTENAPOLEONE • SAVILE ROW • GINZA</span>
        <span>© 2026 MONARCH ALL RIGHTS RESERVED</span>
      </div>
    </section>
  );
}

export default FinalCampaign;
