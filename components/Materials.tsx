"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandEmblem } from "./BrandEmblem";

export function Materials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const macroImgRef = useRef<HTMLDivElement>(null);
  const garmentImgRef = useRef<HTMLDivElement>(null);
  const environmentImgRef = useRef<HTMLDivElement>(null);
  const stepLabelRef = useRef<HTMLSpanElement>(null);

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
          end: isMobile ? "+=150%" : "+=210%",
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (stepLabelRef.current) {
              const p = self.progress;
              if (p < 0.35) {
                stepLabelRef.current.innerText = "PHASE 01 // MACRO FIBER LOOPS (320 GSM)";
              } else if (p < 0.7) {
                stepLabelRef.current.innerText = "PHASE 02 // GARMENT DRAPE & ZERO TORQUE";
              } else {
                stepLabelRef.current.innerText = "PHASE 03 // ARCHITECTURAL ENVIRONMENT";
              }
            }
          },
        },
      });

      // 0.0 -> 3.0: Extreme close fabric texture pulls out (scale 2.2 -> 1.0)
      tl.to(
        macroImgRef.current,
        {
          scale: 1.0,
          ease: "none",
          duration: 3.0,
        },
        0
      );

      // 2.8 -> 5.5: Crossfade & reveal Garment Level (shirt on torso)
      tl.to(
        macroImgRef.current,
        {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
        },
        2.8
      );

      tl.fromTo(
        garmentImgRef.current,
        {
          scale: 1.3,
          opacity: 0,
        },
        {
          scale: 1.0,
          opacity: 1,
          duration: 2.2,
          ease: "none",
        },
        3.0
      );

      // 5.5 -> 8.5: Pull back further to reveal Person in Full Architectural Environment
      tl.to(
        garmentImgRef.current,
        {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
        },
        5.5
      );

      tl.fromTo(
        environmentImgRef.current,
        {
          scale: 1.25,
          opacity: 0,
        },
        {
          scale: 1.0,
          opacity: 1,
          duration: 2.4,
          ease: "none",
        },
        5.8
      );

      // 8.5 -> 10.0: Clean exit
      tl.to(
        stageRef.current,
        {
          opacity: 0,
          y: -30,
          duration: 1.2,
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
      id="craft"
      className="theme-ivory relative w-full h-screen min-h-[640px] overflow-hidden flex flex-col justify-between py-12 px-6 sm:px-12 md:px-20 z-30 transition-colors duration-700"
      style={{ scrollMarginTop: "90px" }}
    >
      {/* Top Header & Progressive Pullback Tracker */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-[#0B0B0A]/12 pb-6 z-20 pointer-events-none">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <BrandEmblem size={20} variant="dark" />
            <span
              ref={stepLabelRef}
              className="text-meta text-[#A58A55] tracking-[0.28em] font-semibold transition-all duration-300"
            >
              PHASE 01 // MACRO FIBER LOOPS (320 GSM)
            </span>
          </div>
          <h2 className="text-display font-serif text-[#0B0B0A] uppercase leading-[0.9]">
            FEEL THE DIFFERENCE.
          </h2>
        </div>

        <div className="mt-4 md:mt-0 text-xs text-[#6B655A] font-light max-w-sm leading-relaxed">
          A garment cannot transcend its material. Scroll to experience the camera pulling back from raw microscopic yarn to architectural presence.
        </div>
      </div>

      {/* Central Pullback Camera Stage */}
      <div
        ref={stageRef}
        className="relative w-full max-w-5xl h-[62vh] mx-auto flex items-center justify-center my-auto will-change-transform"
      >
        {/* PHASE 01: Extreme Macro Knit Texture */}
        <div
          ref={macroImgRef}
          className="absolute inset-0 w-full h-full shadow-2xl overflow-hidden border border-[#0B0B0A]/15 bg-[#0B0B0A] will-change-transform"
          style={{ transform: "scale(2.2)" }}
          data-cursor="view"
        >
          <Image
            src="/images/fabric_knit.jpg"
            alt="Macro Combed Cotton Loops"
            fill
            sizes="85vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-meta text-[#F3F0E8] tracking-[0.25em] uppercase">
            320 GSM COMBED PERUVIAN PIMA • MERCERIZED KNIT
          </div>
        </div>

        {/* PHASE 02: Garment Silhouette Level */}
        <div
          ref={garmentImgRef}
          className="absolute inset-0 w-full h-full shadow-2xl overflow-hidden border border-[#0B0B0A]/15 bg-[#0B0B0A] opacity-0 will-change-transform"
          data-cursor="view"
        >
          <Image
            src="/images/collection_essentials.jpg"
            alt="MONARCH Heavyweight Garment Silhouette"
            fill
            sizes="85vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-meta text-[#F3F0E8] tracking-[0.25em] uppercase">
            ARCHITECTURAL DROP-SHOULDER FOUNDATION
          </div>
        </div>

        {/* PHASE 03: Full Architectural Environment */}
        <div
          ref={environmentImgRef}
          className="absolute inset-0 w-full h-full shadow-2xl overflow-hidden border border-[#0B0B0A]/15 bg-[#0B0B0A] opacity-0 will-change-transform"
          data-cursor="view"
        >
          <Image
            src="/images/hero_model_main.jpg"
            alt="Person and Garment in Architectural Environment"
            fill
            sizes="85vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-meta text-[#F3F0E8] tracking-[0.25em] uppercase">
            THE COMMANDING WHOLE // QUIET AUTHORITY
          </div>
        </div>
      </div>

      {/* Bottom Technical Spec Bar */}
      <div className="w-full flex items-center justify-between border-t border-[#0B0B0A]/10 pt-4 z-20 pointer-events-none text-xs text-[#8E887E] tracking-widest uppercase">
        <div className="flex items-center gap-6">
          <span>ZERO TORQUE DRAPE</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">BLIND STITCHED HEMS</span>
        </div>
        <div className="text-[#A58A55]">
          PULLBACK LENS: 0.1MM MACRO → 3.5M ENVIRONMENT
        </div>
      </div>
    </section>
  );
}

export default Materials;
