"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandEmblem } from "./BrandEmblem";

const looks = [
  {
    id: "essential",
    num: "01",
    name: "THE ESSENTIAL",
    tagline: "Uncompromised ease without sacrificing stature.",
    desc: "Architectural 320gsm pima cotton drop-shoulder tee with pleated wool trousers.",
    image: "/images/collection_essentials.jpg",
    bg: "#0B0B0A",
    piece: "320 GSM Peruvian Pima Foundation",
  },
  {
    id: "polo",
    num: "02",
    name: "THE SIGNATURE POLO",
    tagline: "Sporting heritage meets quiet authority.",
    desc: "Double-knit mercerized pique with original 24K gold embroidered Crown-M insignia.",
    image: "/images/collection_polo.jpg",
    bg: "#121C17",
    piece: "Como Double-Mercerized Knit",
  },
  {
    id: "casual",
    num: "03",
    name: "THE CASUAL LINEN",
    tagline: "Fluid Mediterranean breathability.",
    desc: "Normandy washed flax camp shirt cut with relaxed horizontal drape.",
    image: "/images/runway_02.jpg",
    bg: "#1C1B19",
    piece: "Pure Normandy Washed Flax",
  },
  {
    id: "check",
    num: "04",
    name: "ARCHITECTURAL CHECK",
    tagline: "Dimensional micro-geometry in brushed flannel.",
    desc: "Huddersfield micro-houndstooth flannel with pattern-matched front placket.",
    image: "/images/collection_checks.jpg",
    bg: "#161E1A",
    piece: "Huddersfield Brushed Cotton",
  },
  {
    id: "tailored",
    num: "05",
    name: "MODERN TAILORED",
    tagline: "The definitive evening silhouette.",
    desc: "Super 150s double-breasted wool jacket with sweeping peak lapels.",
    image: "/images/collection_tailored.jpg",
    bg: "#0B0B0A",
    piece: "Super 150s Floating Canvas",
  },
];

export function StyleStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinStageRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const trackerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          pin: pinStageRef.current,
          start: "top top",
          end: `+=${looks.length * (isMobile ? 70 : 90)}%`,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            const step = Math.min(looks.length - 1, Math.floor(self.progress * looks.length));
            if (trackerRef.current) {
              trackerRef.current.innerText = `LOOKBOOK PAGE 0${step + 1} // 05`;
            }
          },
        },
      });

      // Page-turn scroll choreography
      for (let i = 0; i < looks.length - 1; i++) {
        const currentSlide = slideRefs.current[i];
        const nextSlide = slideRefs.current[i + 1];
        const currentText = textRefs.current[i];
        const nextText = textRefs.current[i + 1];

        const t = i * 2.0;

        // Current look exits vertically upward
        tl.to(
          currentSlide,
          {
            yPercent: -100,
            opacity: 0.2,
            duration: 1.8,
            ease: "power2.inOut",
          },
          t + 0.2
        );

        tl.to(
          currentText,
          {
            yPercent: -40,
            opacity: 0,
            duration: 1.4,
            ease: "power2.inOut",
          },
          t + 0.2
        );

        // Next look enters from bottom
        tl.fromTo(
          nextSlide,
          { yPercent: 100, opacity: 0.3 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.8,
            ease: "power2.inOut",
          },
          t + 0.2
        );

        tl.fromTo(
          nextText,
          { yPercent: 40, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.6,
            ease: "power2.out",
          },
          t + 0.4
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="style"
      className="relative w-full bg-[#0B0B0A]"
      style={{ scrollMarginTop: "90px" }}
    >
      <div
        ref={pinStageRef}
        className="relative w-full h-screen min-h-[640px] bg-[#0B0B0A] text-[#F3F0E8] overflow-hidden flex flex-col justify-between py-12 px-6 sm:px-12 md:px-20 z-30 transition-colors duration-700"
      >
      {/* Top Lookbook Header */}
      <div className="w-full flex items-end justify-between border-b border-white/10 pb-4 z-30 pointer-events-none">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <BrandEmblem size={20} variant="gold" />
            <span
              ref={trackerRef}
              className="text-meta text-[#A58A55] tracking-[0.3em] font-semibold"
            >
              LOOKBOOK PAGE 01 // 05
            </span>
          </div>
          <h2 className="text-display font-serif text-[#F3F0E8] uppercase leading-[0.92]">
            ONE MAN. <br />
            <span className="italic font-serif-editorial text-[#A58A55]">MANY VERSIONS.</span>
          </h2>
        </div>

        <div className="text-xs text-[#8E887E] tracking-widest uppercase hidden md:block">
          VERTICAL LOOKBOOK FLIP // SS26
        </div>
      </div>

      {/* Center Stage: Split Photography & Narrative */}
      <div className="relative w-full max-w-[1580px] h-[65vh] mx-auto flex items-center justify-between my-auto overflow-hidden">
        
        {/* Left: Dynamic Typographic Archetype Profile */}
        <div className="relative w-full md:w-[44%] h-full flex items-center">
          {looks.map((look, i) => (
            <div
              key={look.id}
              ref={(node) => {
                textRefs.current[i] = node;
              }}
              className="absolute inset-0 flex flex-col justify-center will-change-transform"
              style={{
                opacity: i === 0 ? 1 : 0,
                transform: i === 0 ? "none" : "translateY(40%)",
              }}
            >
              <div className="text-meta text-[#A58A55] tracking-[0.28em] mb-2 font-bold">
                LOOK {look.num} OF 05 // ARCHETYPE
              </div>
              <h3 className="text-h1 font-serif text-[#F3F0E8] uppercase leading-none mb-4">
                {look.name}
              </h3>
              <p className="font-serif-editorial italic text-lg md:text-xl text-[#F3F0E8]/90 mb-5 leading-relaxed">
                &ldquo;{look.tagline}&rdquo;
              </p>
              <p className="text-[#B8B2A7] text-sm md:text-base font-light leading-relaxed mb-6 max-w-md">
                {look.desc}
              </p>
              <div className="border-t border-white/10 pt-4 text-xs text-[#8E887E] tracking-widest uppercase">
                <span className="text-[#A58A55]">FEATURED PIECE: </span>
                <span className="text-[#F3F0E8]">{look.piece}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Vertical Page-Turning Image Stage */}
        <div className="relative w-full md:w-[50%] h-full overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,0.9)] border border-white/10 bg-[#0B0B0A]">
          {looks.map((look, i) => (
            <div
              key={look.id}
              ref={(node) => {
                slideRefs.current[i] = node;
              }}
              className="absolute inset-0 w-full h-full will-change-transform"
              style={{
                transform: i === 0 ? "none" : "translateY(100%)",
                opacity: i === 0 ? 1 : 0,
                zIndex: looks.length - i,
              }}
              data-cursor="view"
            >
              <Image
                src={look.image}
                alt={look.name}
                fill
                sizes="(max-width: 768px) 90vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-6 left-6 bg-[#0B0B0A]/90 backdrop-blur-md px-4 py-2 text-meta text-[#A58A55] tracking-[0.2em] border-l-2 border-[#A58A55]">
                {look.num} // {look.name}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Minimal Timeline Tracker */}
      <div className="w-full flex items-center justify-between border-t border-white/10 pt-4 z-30 pointer-events-none text-xs text-[#8E887E] tracking-widest uppercase">
        <div className="flex items-center gap-6">
          <span>01 ESSENTIAL</span>
          <span>02 POLO</span>
          <span className="hidden sm:inline">03 CASUAL</span>
          <span className="hidden sm:inline">04 CHECK</span>
          <span className="hidden sm:inline">05 TAILORED</span>
        </div>
        <div className="text-[#A58A55]">
          SCROLL TO TURN LOOKBOOK PAGES ↓
        </div>
      </div>
      </div>
    </section>
  );
}

export default StyleStory;
