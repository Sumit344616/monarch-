"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandEmblem } from "./BrandEmblem";
import { brandData } from "@/data/brand";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Act 1 Elements
  const imageMainRef = useRef<HTMLDivElement>(null);
  const textBuildRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const titleLine3Ref = useRef<HTMLSpanElement>(null);
  const goldLineRef = useRef<HTMLDivElement>(null);
  const metaSeasonRef = useRef<HTMLDivElement>(null);
  const descParaRef = useRef<HTMLParagraphElement>(null);
  const ctaBarRef = useRef<HTMLDivElement>(null);

  // Act 2 Elements (Outstanding Editorial Diptych + Atmospheric Layer)
  const act2SpreadRef = useRef<HTMLDivElement>(null);
  const act2AmbientBgRef = useRef<HTMLDivElement>(null);
  const act2ModelFrameRef = useRef<HTMLDivElement>(null);
  const act2DetailFrameRef = useRef<HTMLDivElement>(null);
  const act2TextRef = useRef<HTMLDivElement>(null);

  // Act 3 Elements (Ivory Cashmere Silhouette)
  const imageSecondRef = useRef<HTMLDivElement>(null);
  const textFormRef = useRef<HTMLDivElement>(null);

  // Act 4 Elements (Emblem Reveal)
  const logoRevealRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // ===============================================================
      // ENTRANCE ANIMATION (Canva / Editorial slide, pan & mask reveal)
      // Runs automatically on mount with high-end luxury easing
      // ===============================================================
      const entryTl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Season metadata slides in from left with tracking expansion
      entryTl.fromTo(
        metaSeasonRef.current,
        { x: -30, opacity: 0, letterSpacing: "0.4em" },
        { x: 0, opacity: 1, letterSpacing: "0.28em", duration: 1.2 },
        0.1
      );

      // 2. Title lines slide up smoothly from overflow masks with subtle blur reveal
      entryTl.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current, titleLine3Ref.current],
        { yPercent: 120, opacity: 0, filter: "blur(8px)" },
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.14,
          duration: 1.4,
          ease: "power4.out",
        },
        0.2
      );

      // 3. Delicate gold hairline divider expands smoothly
      entryTl.fromTo(
        goldLineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1.4, ease: "power3.inOut" },
        0.6
      );

      // 4. Description paragraph soft blur-to-sharp rise
      entryTl.fromTo(
        descParaRef.current,
        { y: 25, opacity: 0, filter: "blur(6px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2 },
        0.75
      );

      // 5. Bottom navigation bar slides up
      entryTl.fromTo(
        ctaBarRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0 },
        0.9
      );

      // 6. Hero photograph gentle scale & pan entrance
      entryTl.fromTo(
        imageMainRef.current,
        { scale: 1.08, opacity: 0, x: 40 },
        { scale: 1, opacity: 1, x: 0, duration: 1.8, ease: "power3.out" },
        0.2
      );

      // ===============================================================
      // MASTER PINNED SCROLL TIMELINE (220vh)
      // ===============================================================
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: isMobile ? "+=150%" : "+=230%",
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressLineRef.current) {
              progressLineRef.current.style.width = `${Math.round(self.progress * 100)}%`;
            }
          },
        },
      });

      // ---------------------------------------------------------------
      // SCENE 01 -> SCENE 02: CAMERA PUSH-IN ON OPENING
      // ---------------------------------------------------------------
      scrollTl.to(
        imageMainRef.current,
        {
          scale: 1.12,
          xPercent: isMobile ? -2 : -4,
          ease: "none",
          duration: 2.0,
        },
        0
      );

      scrollTl.to(
        textBuildRef.current,
        {
          yPercent: -12,
          ease: "none",
          duration: 2.0,
        },
        0
      );

      // ---------------------------------------------------------------
      // SCENE 02 -> SCENE 03: OUTSTANDING EDITORIAL DIPTYCH REVEAL
      // Old text and hero model cleanly fade OUT
      // Outstanding dual-photography spread + kinetic typography takes over!
      // ---------------------------------------------------------------
      scrollTl.to(
        textBuildRef.current,
        {
          opacity: 0,
          yPercent: -30,
          duration: 1.0,
          ease: "power2.inOut",
        },
        1.8
      );

      scrollTl.to(
        imageMainRef.current,
        {
          opacity: 0,
          scale: 1.18,
          duration: 1.2,
          ease: "power2.inOut",
        },
        2.0
      );

      // Ambient background texture fades in
      scrollTl.fromTo(
        act2AmbientBgRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 0.22, scale: 1.0, duration: 1.5, ease: "power2.out" },
        2.2
      );

      // Frame 1 (Full Model in Motion) sweeps in from bottom-left
      scrollTl.fromTo(
        act2ModelFrameRef.current,
        {
          yPercent: 40,
          xPercent: -15,
          scale: 0.94,
          opacity: 0,
        },
        {
          yPercent: 0,
          xPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 2.0,
          ease: "power3.out",
        },
        2.2
      );

      // Frame 2 (Macro 24K Embroidered Monogram) sweeps in from bottom-right with slight delay
      scrollTl.fromTo(
        act2DetailFrameRef.current,
        {
          yPercent: 50,
          xPercent: 15,
          scale: 0.92,
          opacity: 0,
        },
        {
          yPercent: 0,
          xPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 2.2,
          ease: "power3.out",
        },
        2.4
      );

      // Kinetic Typography "CRAFTED IN DETAIL" reveals in center
      scrollTl.fromTo(
        act2TextRef.current,
        {
          y: 35,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.8,
          ease: "power2.out",
        },
        2.5
      );

      // ---------------------------------------------------------------
      // SCENE 03 -> SCENE 04: TRANSITION TO THIRD SILHOUETTE (IVORY CASHMERE)
      // Act 2 diptych sweeps out cleanly; Look 3 enters smoothly
      // ---------------------------------------------------------------
      scrollTl.to(
        [act2ModelFrameRef.current, act2DetailFrameRef.current, act2TextRef.current, act2AmbientBgRef.current],
        {
          opacity: 0,
          yPercent: -25,
          scale: 0.96,
          duration: 1.5,
          ease: "power2.inOut",
        },
        4.8
      );

      scrollTl.fromTo(
        imageSecondRef.current,
        {
          xPercent: 60,
          scale: 1.06,
          opacity: 0,
        },
        {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 2.0,
          ease: "power3.out",
        },
        5.2
      );

      scrollTl.fromTo(
        textFormRef.current,
        {
          xPercent: -40,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          xPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.8,
          ease: "power3.out",
        },
        5.4
      );

      // ---------------------------------------------------------------
      // SCENE 04 -> SCENE 05: LOGO CREST REVEAL IN OBSIDIAN VOID
      // ---------------------------------------------------------------
      scrollTl.to(
        [imageSecondRef.current, textFormRef.current],
        {
          opacity: 0,
          scale: 0.96,
          duration: 1.2,
          ease: "power2.inOut",
        },
        7.4
      );

      scrollTl.fromTo(
        logoRevealRef.current,
        {
          opacity: 0,
          scale: 0.88,
          y: 25,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.6,
          ease: "power3.out",
        },
        7.8
      );

      // Final dissolve before releasing cleanly into the collection
      scrollTl.to(
        logoRevealRef.current,
        {
          opacity: 0,
          scale: 1.06,
          duration: 0.8,
          ease: "power2.inOut",
        },
        9.4
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[640px] bg-[#0B0B0A] text-[#F3F0E8] overflow-hidden flex items-center justify-center"
      style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}
    >
      {/* Subtle Background Film Shade */}
      <div className="absolute inset-0 bg-[#0B0B0A]/30 z-10 pointer-events-none" />

      {/* ========================================================================= */}
      {/* ACT 1: HERO OVERCOAT MODEL (ALIGNED RIGHT ON EDITORIAL GRID) */}
      {/* ========================================================================= */}
      <div
        ref={imageMainRef}
        className="absolute inset-0 w-full h-full flex items-center justify-end pr-0 md:pr-10 lg:pr-20 will-change-transform pointer-events-none"
      >
        <div
          className="relative shadow-[0_35px_80px_rgba(0,0,0,0.9)] overflow-hidden"
          style={{
            width: "clamp(350px, 56vw, 880px)",
            height: "clamp(520px, 86vh, 900px)",
          }}
          data-cursor="view"
        >
          <Image
            src="/images/hero_model_main.jpg"
            alt="MONARCH Haute Menswear Hero Campaign"
            fill
            priority
            sizes="(max-width: 768px) 95vw, 56vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0A]/85 via-transparent to-transparent hidden md:block" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ACT 1 TYPOGRAPHY: ANIMATED EDITORIAL ENTRANCE WITH CANVA-GRADE MASKS */}
      {/* ========================================================================= */}
      <div
        ref={textBuildRef}
        className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-end pb-16 md:pb-20 px-6 sm:px-12 md:px-18 lg:px-24 max-w-[1720px] mx-auto w-full will-change-transform"
      >
        {/* Main Monograph Title Block */}
        <div className="max-w-xl lg:max-w-2xl mb-12">
          
          {/* 1. Animated Season Tag with gold pulse dot */}
          <div
            ref={metaSeasonRef}
            className="flex items-center gap-3 mb-4 opacity-0"
          >
            <span className="w-2 h-2 rounded-full bg-[#A58A55] animate-pulse" />
            <span className="text-meta text-[#A58A55] tracking-[0.28em] font-semibold">
              {brandData.season} • {brandData.established}
            </span>
            <span className="text-meta text-[#8E887E] tracking-[0.22em] hidden sm:inline">
              // {brandData.descriptor}
            </span>
          </div>

          {/* 2. Line-by-Line Masked Slide-Up Titles (Canva / Editorial Power Easing) */}
          <h1 className="text-hero text-[#F3F0E8] font-serif leading-[0.88] uppercase tracking-[-0.01em] select-none">
            <span className="block overflow-hidden pb-1">
              <span ref={titleLine1Ref} className="block will-change-transform opacity-0">
                BUILT
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span ref={titleLine2Ref} className="block will-change-transform opacity-0">
                FOR
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span
                ref={titleLine3Ref}
                className="block italic font-serif-editorial text-[#F3F0E8] will-change-transform opacity-0"
              >
                PRESENCE.
              </span>
            </span>
          </h1>

          {/* 3. Expanding Luxury Gold Hairline */}
          <div
            ref={goldLineRef}
            className="w-24 h-[1px] bg-[#A58A55] my-6 will-change-transform"
          />

          {/* 4. Description Paragraph */}
          <p
            ref={descParaRef}
            className="text-[#B8B2A7] text-body max-w-md font-light leading-relaxed opacity-0 will-change-transform"
          >
            Engineered with architectural discipline and rare Italian fibers. For the man who commands quiet authority.
          </p>
        </div>

        {/* 5. Bottom Interactive Navigation Bar */}
        <div
          ref={ctaBarRef}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-white/10 opacity-0 will-change-transform"
        >
          <a
            href="#collection"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#collection")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="pointer-events-auto inline-flex items-center gap-4 text-meta text-[#F3F0E8] pb-1 tracking-[0.22em] hover:text-[#A58A55] transition-colors group"
          >
            <span>EXPLORE THE COLLECTION</span>
            <span className="transition-transform group-hover:translate-x-1.5 text-[#A58A55]">→</span>
          </a>

          <div className="flex items-center gap-3 text-meta text-[#8E887E] tracking-[0.16em]">
            <span>SCROLL TO EXPERIENCE</span>
            <span className="animate-bounce text-[#A58A55]">↓</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ACT 2: OUTSTANDING DUAL-PHOTOGRAPHY EDITORIAL DIPTYCH (ON SCROLL) */}
      {/* Replaces the single isolated box with an extraordinary multi-layered campaign */}
      {/* ========================================================================= */}
      <div
        ref={act2SpreadRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-20 flex items-center justify-center"
      >
        {/* Ambient Atmospheric Texture Layer (Drifting Fabric/Stone Architecture) */}
        <div
          ref={act2AmbientBgRef}
          className="absolute inset-0 w-full h-full opacity-0 will-change-transform overflow-hidden"
        >
          <Image
            src="/images/fabric_knit.jpg"
            alt="Ambient Textile Weave"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center", filter: "blur(20px)" }}
          />
          <div className="absolute inset-0 bg-[#0B0B0A]/85" />
        </div>

        {/* Central Diptych Container */}
        <div className="relative w-full max-w-[1600px] h-[78vh] mx-auto px-6 sm:px-12 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
          
          {/* FRAME 1: Full-Length Model in Motion (Tuscan Loggia) */}
          <div
            ref={act2ModelFrameRef}
            className="relative w-full lg:w-[46%] h-[40vh] lg:h-[70vh] shadow-[0_30px_90px_rgba(0,0,0,0.9)] border border-white/15 bg-[#0B0B0A] overflow-hidden opacity-0 will-change-transform"
            data-cursor="view"
          >
            <Image
              src="/images/collection_polo.jpg"
              alt="MONARCH Haute Sporting Knitwear Look"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/90 via-transparent to-transparent pointer-events-none" />
            
            {/* Editorial Look Tag */}
            <div className="absolute top-6 left-6 bg-[#0B0B0A]/90 backdrop-blur-md px-4 py-1.5 text-meta text-[#A58A55] tracking-[0.24em] border-l-2 border-[#A58A55]">
              LOOK 02 // SPORTING DISCIPLINE
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#8E887E] tracking-widest uppercase">
              <span className="text-[#F3F0E8] font-medium">COMO DOUBLE MERCERIZED PIQUE</span>
              <span>100% GIZA COTTON</span>
            </div>
          </div>

          {/* FRAME 2: Macro Lens Focus onto 24K Embroidered Chest Insignia */}
          <div
            ref={act2DetailFrameRef}
            className="relative w-full lg:w-[48%] h-[35vh] lg:h-[64vh] shadow-[0_35px_100px_rgba(0,0,0,0.95)] border-2 border-[#A58A55]/50 bg-[#0B0B0A] overflow-hidden opacity-0 will-change-transform"
            data-cursor="view"
          >
            <Image
              src="/images/hero_polo_detail.jpg"
              alt="MONARCH 24K Gold Embroidered Crown-M Monogram"
              fill
              sizes="(max-width: 768px) 90vw, 48vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/95 via-transparent to-black/30 pointer-events-none" />

            {/* Pulsing Coordinate Marker on Emblem */}
            <div className="absolute top-[64%] left-[63%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A58A55] opacity-75" />
                <span className="relative inline-flex rounded-full h-5 w-5 bg-[#A58A55] border border-white/60" />
              </span>
            </div>

            {/* Bottom Atelier Spec Bar */}
            <div className="absolute bottom-6 left-6 right-6 border-t border-white/20 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-[10px] text-[#A58A55] tracking-[0.3em] uppercase font-bold">
                  24K GOLD EMBROIDERED CROWN-M
                </div>
                <div className="text-base font-serif text-[#F3F0E8] uppercase tracking-wider mt-0.5">
                  IDENTITY IN EVERY STITCH
                </div>
              </div>
              <div className="text-[11px] text-[#B8B2A7] tracking-widest uppercase">
                STITCH PITCH: 8 SPI
              </div>
            </div>
          </div>

        </div>

        {/* Center Kinetic Headline Badge */}
        <div
          ref={act2TextRef}
          className="absolute top-12 left-1/2 -translate-x-1/2 text-center pointer-events-none opacity-0 will-change-transform z-30"
        >
          <div className="text-meta text-[#A58A55] tracking-[0.35em] uppercase font-semibold mb-1">
            CAMPAIGN PROGRESSION // 02
          </div>
          <div className="text-2xl md:text-3xl font-serif text-[#F3F0E8] uppercase tracking-[0.18em]">
            CRAFTED IN <span className="italic font-serif-editorial text-[#A58A55]">DETAIL.</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ACT 3: THIRD SILHOUETTE (IVORY CASHMERE ALIGNED RIGHT) */}
      {/* ========================================================================= */}
      <div
        ref={imageSecondRef}
        className="absolute inset-0 w-full h-full flex items-center justify-end pr-0 md:pr-10 lg:pr-20 z-20 pointer-events-none opacity-0 will-change-transform"
      >
        <div
          className="relative shadow-[0_35px_90px_rgba(0,0,0,0.95)] overflow-hidden border border-white/10 bg-[#0B0B0A]"
          style={{
            width: "clamp(350px, 54vw, 840px)",
            height: "clamp(500px, 84vh, 880px)",
          }}
          data-cursor="view"
        >
          <Image
            src="/images/hero_model_second.jpg"
            alt="MONARCH Contemporary Silhouette"
            fill
            sizes="(max-width: 768px) 90vw, 54vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/85 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0A]/80 via-transparent to-transparent hidden md:block" />
        </div>
      </div>

      {/* ACT 3 TYPOGRAPHY: "FORM. FIT. CHARACTER." (SITS ON LEFT WITH ZERO OVERLAP) */}
      <div
        ref={textFormRef}
        className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-center items-start px-6 sm:px-12 md:px-18 lg:px-24 max-w-[1720px] mx-auto w-full opacity-0 will-change-transform"
      >
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#A58A55]" />
            <span className="text-meta text-[#A58A55] tracking-[0.28em] font-medium">
              THE 2026 SILHOUETTE
            </span>
          </div>

          <h2 className="text-display text-[#F3F0E8] font-serif leading-[0.92] uppercase">
            FORM. FIT. <br />
            <span className="italic font-serif-editorial text-[#A58A55]">CHARACTER.</span>
          </h2>

          <p className="mt-6 text-[#B8B2A7] text-base md:text-lg leading-relaxed font-light max-w-md">
            Fine-gauge Mongolian cashmere paired with razor-sharp wool pleats. A seamless dialogue between soft comfort and commanding form.
          </p>

          <div className="mt-8 text-xs text-[#8E887E] tracking-widest uppercase flex items-center gap-6">
            <span>MONGOLIAN GRADE-A CASHMERE</span>
            <span>•</span>
            <span>BIELLA VIRGIN WOOL</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ACT 4: EMBOSSED METALLIC LOGO REVEAL */}
      {/* ========================================================================= */}
      <div
        ref={logoRevealRef}
        className="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-center p-6 text-center opacity-0 will-change-transform"
      >
        <div className="relative flex flex-col items-center">
          {/* Subtle Ambient Metallic Glow */}
          <div className="absolute w-72 h-72 bg-[#A58A55]/15 rounded-full blur-3xl pointer-events-none" />
          
          <BrandEmblem size={76} variant="gold" className="mb-6 drop-shadow-[0_10px_30px_rgba(165,138,85,0.45)]" />
          
          <div className="text-display font-serif text-[#F3F0E8] tracking-[0.25em] uppercase font-light">
            MONARCH
          </div>
          <div className="text-meta text-[#A58A55] tracking-[0.35em] mt-3 uppercase font-medium">
            BUILT FOR PRESENCE.
          </div>
        </div>
      </div>

      {/* Hero Pinned Progress Line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-30 pointer-events-none"
        style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px", zIndex: 30 }}
      >
        <div
          ref={progressLineRef}
          className="h-full bg-[#A58A55] transition-all duration-75 w-0"
        />
      </div>
    </section>
  );
}

export default Hero;
