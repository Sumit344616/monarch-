"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandEmblem } from "./BrandEmblem";
import { ImageStack, StackItem } from "./motion/ImageStack";

const studioPrints: StackItem[] = [
  {
    id: "print-01",
    image: "/images/style_formal.jpg",
    title: "THE DIPLOMAT // CHARCOAL TIES",
    subtitle: "Hand-rolled silk grenadine & Super 150s wool",
    year: "MILAN 2026",
  },
  {
    id: "print-02",
    image: "/images/style_evening.jpg",
    title: "MIDNIGHT TUXEDO // GROSGRAIN",
    subtitle: "Silk grosgrain shawl lapel draped in darkness",
    year: "PARIS 2026",
  },
  {
    id: "print-03",
    image: "/images/style_smart_casual.jpg",
    title: "TUSCAN MEDITERRANEAN // MERINO",
    subtitle: "Double mercerized forest knit in limestone light",
    year: "FLORENCE 2026",
  },
  {
    id: "print-04",
    image: "/images/runway_05.jpg",
    title: "THE CONTINENTAL TRAVELER",
    subtitle: "Mongolian cashmere crewneck & full-grain calfskin",
    year: "GENEVA 2026",
  },
];

export function Editorial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const slide4Ref = useRef<HTMLDivElement>(null);
  const slide5Ref = useRef<HTMLDivElement>(null);
  const actTrackerRef = useRef<HTMLSpanElement>(null);

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
          end: isMobile ? "+=180%" : "+=260%",
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (actTrackerRef.current) {
              const p = self.progress;
              if (p < 0.2) actTrackerRef.current.innerText = "ACT I // STILLNESS IN SHADOW";
              else if (p < 0.4) actTrackerRef.current.innerText = "ACT II // DIAGONAL MOMENTUM";
              else if (p < 0.6) actTrackerRef.current.innerText = "ACT III // ARCHITECTURAL VERTICALITY";
              else if (p < 0.8) actTrackerRef.current.innerText = "ACT IV // HORIZONTAL DRIFT";
              else actTrackerRef.current.innerText = "ACT V // FROM THE DEEP VOID";
            }
          },
        },
      });

      // Slide 1 -> Slide 2: Image 1 slides diagonally out (-100% X, -30% Y, rotation)
      tl.to(
        slide1Ref.current,
        {
          xPercent: -100,
          yPercent: -20,
          rotation: -4,
          ease: "power2.inOut",
          duration: 2.0,
        },
        0.5
      );

      // Slide 2 scales up smoothly behind it
      tl.fromTo(
        slide2Ref.current,
        { scale: 1.18, opacity: 0.4 },
        { scale: 1.0, opacity: 1, duration: 2.0, ease: "none" },
        0.5
      );

      // Slide 2 -> Slide 3: Reveals through a vertical mask wipe
      tl.fromTo(
        slide3Ref.current,
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", scale: 1.1 },
        {
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          scale: 1,
          duration: 2.2,
          ease: "power2.inOut",
        },
        2.5
      );

      // Slide 3 -> Slide 4: Moves horizontally in from right (xPercent: 100 -> 0)
      tl.fromTo(
        slide4Ref.current,
        { xPercent: 100, opacity: 0.5 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 2.2,
          ease: "power3.out",
        },
        4.7
      );

      // Slide 4 -> Slide 5: Appears from darkness (opacity 0 -> 1 with deep black shadow)
      tl.fromTo(
        slide5Ref.current,
        { opacity: 0, scale: 0.94 },
        {
          opacity: 1,
          scale: 1,
          duration: 2.0,
          ease: "power2.out",
        },
        6.9
      );

      // Slide 5 exit into studio photo stack
      tl.to(
        slide5Ref.current,
        {
          opacity: 0,
          scale: 1.05,
          duration: 1.0,
          ease: "power2.inOut",
        },
        9.0
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* 5-Act Fullscreen Editorial Campaign Film */}
      <section
        ref={containerRef}
        id="editorial"
        className="relative w-full h-screen min-h-[640px] bg-[#0B0B0A] text-[#F3F0E8] overflow-hidden z-30"
        style={{ scrollMarginTop: "90px" }}
      >
        {/* Top Header & Progressive Act Tracker */}
        <div className="absolute top-12 left-6 md:left-16 right-6 md:right-16 z-30 flex justify-between items-end border-b border-white/10 pb-4 pointer-events-none">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <BrandEmblem size={20} variant="gold" />
              <span
                ref={actTrackerRef}
                className="text-meta text-[#A58A55] tracking-[0.3em] font-semibold"
              >
                ACT I // STILLNESS IN SHADOW
              </span>
            </div>
            <h2 className="text-display font-serif text-[#F3F0E8] uppercase leading-[0.92]">
              THE CAMPAIGN.
            </h2>
          </div>

          <div className="text-xs text-[#8E887E] tracking-widest uppercase hidden md:block">
            CONTINUOUS CINEMATIC SEQUENCE // 01 — 05
          </div>
        </div>

        {/* SLIDE 01: Fullscreen Master Campaign */}
        <div
          ref={slide1Ref}
          className="absolute inset-0 w-full h-full z-10 will-change-transform"
        >
          <Image
            src="/images/editorial_01.jpg"
            alt="MONARCH Campaign Act I"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/85 via-transparent to-black/40 pointer-events-none" />
          <div className="absolute bottom-12 left-8 md:left-16 max-w-lg">
            <div className="text-meta text-[#A58A55] tracking-[0.25em] mb-1">LOOK 01 // OVERCOAT</div>
            <p className="text-lg md:text-xl font-serif text-[#F3F0E8] uppercase leading-tight">
              &ldquo;Presence is not loud. It is the architectural weight of stillness.&rdquo;
            </p>
          </div>
        </div>

        {/* SLIDE 02: Fullscreen Trench Momentum */}
        <div
          ref={slide2Ref}
          className="absolute inset-0 w-full h-full z-12 will-change-transform"
        >
          <Image
            src="/images/runway_01.jpg"
            alt="MONARCH Campaign Act II"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/85 via-transparent to-black/40 pointer-events-none" />
          <div className="absolute bottom-12 left-8 md:left-16 max-w-lg">
            <div className="text-meta text-[#A58A55] tracking-[0.25em] mb-1">LOOK 02 // TRENCH</div>
            <p className="text-lg md:text-xl font-serif text-[#F3F0E8] uppercase leading-tight">
              Melange virgin wool cut for effortless momentum in the evening air.
            </p>
          </div>
        </div>

        {/* SLIDE 03: Fullscreen Vertical Mask Reveal */}
        <div
          ref={slide3Ref}
          className="absolute inset-0 w-full h-full z-14 will-change-transform"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
        >
          <Image
            src="/images/editorial_02.jpg"
            alt="MONARCH Campaign Act III"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/85 via-transparent to-black/40 pointer-events-none" />
          <div className="absolute bottom-12 left-8 md:left-16 max-w-lg">
            <div className="text-meta text-[#A58A55] tracking-[0.25em] mb-1">LOOK 03 // FORMAL POPLIN</div>
            <p className="text-lg md:text-xl font-serif text-[#F3F0E8] uppercase leading-tight">
              Single-needle tailored poplin designed for commanding evenings.
            </p>
          </div>
        </div>

        {/* SLIDE 04: Fullscreen Horizontal Sweep */}
        <div
          ref={slide4Ref}
          className="absolute inset-0 w-full h-full z-16 will-change-transform"
          style={{ transform: "translateX(100%)" }}
        >
          <Image
            src="/images/editorial_03.jpg"
            alt="MONARCH Campaign Act IV"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/85 via-transparent to-black/40 pointer-events-none" />
          <div className="absolute bottom-12 left-8 md:left-16 max-w-lg">
            <div className="text-meta text-[#A58A55] tracking-[0.25em] mb-1">LOOK 04 // TACTILE CASHMERE</div>
            <p className="text-lg md:text-xl font-serif text-[#F3F0E8] uppercase leading-tight">
              Grade-A Mongolian fibers paired with razor-sharp charcoal pleats.
            </p>
          </div>
        </div>

        {/* SLIDE 05: Emergence from Deep Void */}
        <div
          ref={slide5Ref}
          className="absolute inset-0 w-full h-full z-18 opacity-0 will-change-transform"
        >
          <Image
            src="/images/hero_model_main.jpg"
            alt="MONARCH Campaign Act V"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-transparent to-black/60 pointer-events-none" />
          <div className="absolute bottom-14 left-8 md:left-16 max-w-xl">
            <div className="text-meta text-[#A58A55] tracking-[0.3em] mb-2 font-bold">
              THE PINNACLE // 2026
            </div>
            <h3 className="text-3xl md:text-5xl font-serif text-[#F3F0E8] uppercase leading-none">
              COMMAND QUIET AUTHORITY.
            </h3>
          </div>
        </div>
      </section>

      {/* Studio Photo Stack Section (Photographs sliding across darkroom table) */}
      <section className="relative w-full py-20 bg-[#0B0B0A] text-[#F3F0E8] z-30">
        <div className="container-custom mb-8 flex items-end justify-between border-b border-white/10 pb-6">
          <div>
            <div className="text-meta text-[#A58A55] tracking-[0.3em] mb-2 font-medium">
              DARKROOM ATELIER ARCHIVE
            </div>
            <h3 className="text-h1 font-serif text-[#F3F0E8] uppercase leading-none">
              STUDIO PRINT STACK.
            </h3>
          </div>
          <p className="text-xs text-[#8E887E] tracking-widest uppercase max-w-xs text-right hidden sm:block">
            SCROLL TO SHUFFLE INDIVIDUAL ATELIER PRINTS ACROSS THE STUDIO DESK
          </p>
        </div>

        <ImageStack items={studioPrints} />
      </section>
    </>
  );
}

export default Editorial;
