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

  // Act 2 Elements (Harmonious Editorial Diptych)
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
        { x: -30, opacity: 0, letterSpacing: "0.38em" },
        { x: 0, opacity: 1, letterSpacing: "0.28em", duration: 1.2 },
        0.1
      );

      // 2. Title lines slide up smoothly from overflow masks with subtle blur reveal
      entryTl.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current, titleLine3Ref.current],
        { yPercent: 115, opacity: 0, filter: "blur(8px)" },
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
        { scaleX: 1, duration: 1.3, ease: "power3.inOut" },
        0.6
      );

      // 4. Description paragraph soft blur-to-sharp rise
      entryTl.fromTo(
        descParaRef.current,
        { y: 22, opacity: 0, filter: "blur(6px)" },
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
        { scale: 1.06, opacity: 0, x: 30 },
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
          scale: 1.08,
          xPercent: isMobile ? -2 : -3,
          ease: "none",
          duration: 2.0,
        },
        0
      );

      scrollTl.to(
        textBuildRef.current,
        {
          yPercent: -10,
          ease: "none",
          duration: 2.0,
        },
        0
      );

      // ---------------------------------------------------------------
      // SCENE 02 -> SCENE 03: EDITORIAL DIPTYCH REVEAL
      // Old text and hero model cleanly fade OUT
      // Balanced dual-photography spread + kinetic typography takes over
      // ---------------------------------------------------------------
      scrollTl.to(
        [textBuildRef.current, ctaBarRef.current],
        {
          opacity: 0,
          yPercent: -20,
          duration: 1.0,
          ease: "power2.inOut",
        },
        1.8
      );

      scrollTl.to(
        imageMainRef.current,
        {
          opacity: 0,
          scale: 1.15,
          duration: 1.2,
          ease: "power2.inOut",
        },
        2.0
      );

      // Ambient background texture fades in
      scrollTl.fromTo(
        act2AmbientBgRef.current,
        { opacity: 0, scale: 1.08 },
        { opacity: 0.2, scale: 1.0, duration: 1.4, ease: "power2.out" },
        2.2
      );

      // Frame 1 (Full Model in Motion) sweeps in gracefully
      scrollTl.fromTo(
        act2ModelFrameRef.current,
        {
          yPercent: 25,
          scale: 0.96,
          opacity: 0,
        },
        {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
        },
        2.2
      );

      // Frame 2 (Macro 24K Embroidered Monogram) sweeps in with slight stagger
      scrollTl.fromTo(
        act2DetailFrameRef.current,
        {
          yPercent: 25,
          scale: 0.96,
          opacity: 0,
        },
        {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
        },
        2.4
      );

      // Kinetic Typography "CRAFTED IN DETAIL" reveals in center
      scrollTl.fromTo(
        act2TextRef.current,
        {
          y: 20,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.6,
          ease: "power2.out",
        },
        2.3
      );

      // ---------------------------------------------------------------
      // SCENE 03 -> SCENE 04: TRANSITION TO THIRD SILHOUETTE (IVORY CASHMERE)
      // ---------------------------------------------------------------
      scrollTl.to(
        [act2ModelFrameRef.current, act2DetailFrameRef.current, act2TextRef.current, act2AmbientBgRef.current],
        {
          opacity: 0,
          yPercent: -20,
          scale: 0.96,
          duration: 1.4,
          ease: "power2.inOut",
        },
        4.8
      );

      scrollTl.fromTo(
        imageSecondRef.current,
        {
          xPercent: 30,
          scale: 1.04,
          opacity: 0,
        },
        {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
        },
        5.2
      );

      scrollTl.fromTo(
        textFormRef.current,
        {
          xPercent: -25,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          xPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.6,
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
          y: 20,
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
          scale: 1.05,
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
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "640px",
        backgroundColor: "#0B0B0A",
        color: "#F3F0E8",
        overflow: "hidden",
      }}
    >
      {/* Subtle Background Film Shade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(11, 11, 10, 0.25)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* ========================================================================= */}
      {/* ACT 1: HERO OVERCOAT MODEL (CINEMATIC BLEED CANVAS ON RIGHT) */}
      {/* Seamless architectural dissolve — no box border or sticker effect */}
      {/* ========================================================================= */}
      <div
        ref={imageMainRef}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "clamp(400px, 52vw, 920px)",
          height: "100%",
          zIndex: 10,
          pointerEvents: "none",
          willChange: "transform",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
          <Image
            src="/images/hero_model_main.jpg"
            alt="MONARCH Haute Menswear Hero Campaign"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 52vw"
            style={{
              objectFit: "cover",
              objectPosition: "62% 20%",
            }}
          />
          {/* Deep Architectural Vignette: Fades seamlessly into obsidian black */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, #0B0B0A 0%, rgba(11,11,10,0.75) 20%, rgba(11,11,10,0.2) 55%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, #0B0B0A 0%, transparent 25%, transparent 80%, rgba(11,11,10,0.6) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ACT 1 TYPOGRAPHY: EDITORIAL TITLE MONOGRAPH */}
      {/* Guaranteed luxury margins: matches navbar alignment and never hugs borders */}
      {/* ========================================================================= */}
      <div
        ref={textBuildRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 30,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "clamp(2.5rem, 6vw, 6.5rem)",
          paddingRight: "clamp(2rem, 4vw, 4rem)",
          maxWidth: "1720px",
          willChange: "transform",
        }}
      >
        <div style={{ maxWidth: "680px", paddingTop: "2.5rem", paddingBottom: "5rem" }}>
          {/* 1. Animated Season Tag */}
          <div
            ref={metaSeasonRef}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              marginBottom: "1.5rem",
              opacity: 0,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#A58A55",
              }}
              className="animate-pulse"
            />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-meta)",
                letterSpacing: "0.28em",
                color: "#A58A55",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              {brandData.season} • {brandData.established}
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-meta)",
                letterSpacing: "0.22em",
                color: "#8E887E",
                textTransform: "uppercase",
              }}
              className="hidden sm:inline"
            >
              // {brandData.descriptor}
            </span>
          </div>

          {/* 2. Line-by-Line Masked Titles */}
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-hero)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              color: "#F3F0E8",
              textTransform: "uppercase",
              userSelect: "none",
              margin: 0,
            }}
          >
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em" }}>
              <span ref={titleLine1Ref} style={{ display: "block", willChange: "transform", opacity: 0 }}>
                BUILT
              </span>
            </span>
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em" }}>
              <span ref={titleLine2Ref} style={{ display: "block", willChange: "transform", opacity: 0 }}>
                FOR
              </span>
            </span>
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em" }}>
              <span
                ref={titleLine3Ref}
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif-editorial)",
                  fontStyle: "italic",
                  color: "#C9B07E",
                  willChange: "transform",
                  opacity: 0,
                }}
              >
                PRESENCE.
              </span>
            </span>
          </h1>

          {/* 3. Luxury Gold Hairline Divider */}
          <div
            ref={goldLineRef}
            style={{
              width: "84px",
              height: "1px",
              backgroundColor: "#A58A55",
              margin: "1.75rem 0",
              willChange: "transform",
            }}
          />

          {/* 4. Description Paragraph */}
          <p
            ref={descParaRef}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-body)",
              color: "#B8B2A7",
              lineHeight: 1.75,
              fontWeight: 300,
              maxWidth: "480px",
              margin: 0,
              opacity: 0,
              willChange: "transform",
            }}
          >
            Engineered with architectural discipline and rare Italian fibers. For the man who commands quiet authority.
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. BOTTOM INTERACTIVE BAR — ELEVATED & REFINED LUXURY INDICATOR */}
      {/* Elevated well above bottom screen edge to prevent taskbar & badge collisions */}
      {/* ========================================================================= */}
      <div
        ref={ctaBarRef}
        style={{
          position: "absolute",
          bottom: "clamp(3rem, 6vh, 4.5rem)",
          left: 0,
          width: "100%",
          zIndex: 40,
          pointerEvents: "none",
          paddingLeft: "clamp(2.5rem, 6vw, 6.5rem)",
          paddingRight: "clamp(2.5rem, 6vw, 6.5rem)",
          maxWidth: "1720px",
          opacity: 0,
          willChange: "transform",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(243, 240, 232, 0.12)",
            paddingTop: "1.25rem",
            width: "100%",
          }}
        >
          {/* Left CTA: Explore Collection */}
          <a
            href="#collection"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#collection")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              pointerEvents: "auto",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.85rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              letterSpacing: "0.26em",
              color: "#F3F0E8",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            className="group hover:text-[#A58A55]"
          >
            <span style={{ fontWeight: 500 }}>EXPLORE THE COLLECTION</span>
            <span style={{ color: "#A58A55", transition: "transform 0.3s ease" }} className="group-hover:translate-x-1">→</span>
          </a>

          {/* Right Scroll Indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.24em",
              userSelect: "none",
            }}
          >
            <span style={{ textTransform: "uppercase", fontWeight: 500, color: "#C9B07E" }}>
              SCROLL TO DISCOVER
            </span>
            <div
              style={{
                width: 18,
                height: 28,
                borderRadius: 14,
                border: "1px solid rgba(165, 138, 85, 0.4)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "3px",
              }}
            >
              <div
                style={{
                  width: 3,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "#A58A55",
                }}
                className="animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ACT 2: EDITORIAL DIPTYCH — PURE LUXURY MENSWEAR CAMPAIGN */}
      {/* ========================================================================= */}
      <div
        ref={act2SpreadRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "clamp(2rem, 5.5vw, 6rem)",
          paddingRight: "clamp(2rem, 5.5vw, 6rem)",
        }}
      >
        {/* Ambient Atmospheric Texture Layer */}
        <div
          ref={act2AmbientBgRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
            overflow: "hidden",
            pointerEvents: "none",
            willChange: "transform",
          }}
        >
          <Image
            src="/images/fabric_knit.jpg"
            alt="Ambient Textile Weave"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center", filter: "blur(24px)" }}
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(11, 11, 10, 0.88)" }} />
        </div>

        {/* Central Diptych Headline */}
        <div
          ref={act2TextRef}
          style={{
            position: "relative",
            textAlign: "center",
            marginBottom: "2rem",
            opacity: 0,
            zIndex: 30,
            pointerEvents: "none",
            willChange: "transform",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-meta)",
              color: "#A58A55",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 500,
              marginBottom: "0.4rem",
            }}
          >
            EDITORIAL ARCHIVE // LOOK 02
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 3vw, 2.75rem)",
              color: "#F3F0E8",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              margin: 0,
            }}
          >
            CRAFTED IN <span style={{ fontFamily: "var(--font-serif-editorial)", fontStyle: "italic", color: "#A58A55" }}>DETAIL.</span>
          </h2>
        </div>

        {/* Harmonious Dual-Photography Spread (Equal Proportions & Clean Aesthetics) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1360px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
            zIndex: 20,
          }}
        >
          {/* PANEL 1: Model Silhouette in Tuscan Loggia */}
          <div
            ref={act2ModelFrameRef}
            style={{
              position: "relative",
              width: "50%",
              height: "clamp(360px, 56vh, 560px)",
              boxShadow: "0 30px 90px rgba(0,0,0,0.85)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backgroundColor: "#0B0B0A",
              overflow: "hidden",
              opacity: 0,
              willChange: "transform",
            }}
            data-cursor="view"
          >
            <Image
              src="/images/collection_polo.jpg"
              alt="MONARCH Haute Sporting Knitwear Look"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(11, 11, 10, 0.85) 0%, transparent 40%)",
                pointerEvents: "none",
              }}
            />

            {/* Discreet Editorial Caption */}
            <div
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "1.5rem",
                right: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-meta)",
                color: "#8E887E",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                pointerEvents: "none",
              }}
            >
              <span style={{ color: "#F3F0E8", fontWeight: 500 }}>COMO MERCERIZED PIQUE</span>
              <span className="hidden sm:inline">100% GIZA COTTON</span>
            </div>
          </div>

          {/* PANEL 2: Macro Lens Focus onto 24K Embroidered Insignia */}
          <div
            ref={act2DetailFrameRef}
            style={{
              position: "relative",
              width: "50%",
              height: "clamp(360px, 56vh, 560px)",
              boxShadow: "0 30px 90px rgba(0,0,0,0.85)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backgroundColor: "#0B0B0A",
              overflow: "hidden",
              opacity: 0,
              willChange: "transform",
            }}
            data-cursor="view"
          >
            <Image
              src="/images/hero_polo_detail.jpg"
              alt="MONARCH 24K Gold Embroidered Crown-M Monogram"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(11, 11, 10, 0.85) 0%, transparent 40%)",
                pointerEvents: "none",
              }}
            />

            {/* Discreet Editorial Caption */}
            <div
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "1.5rem",
                right: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-meta)",
                color: "#8E887E",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                pointerEvents: "none",
              }}
            >
              <span style={{ color: "#A58A55", fontWeight: 500 }}>24K GOLD EMBROIDERED MONOGRAM</span>
              <span style={{ color: "#F3F0E8", fontFamily: "var(--font-serif)", letterSpacing: "0.14em" }} className="hidden sm:inline">
                IDENTITY IN DETAIL
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ACT 3: THIRD SILHOUETTE (IVORY CASHMERE) */}
      {/* ========================================================================= */}
      <div
        ref={imageSecondRef}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "clamp(380px, 50vw, 880px)",
          height: "100%",
          zIndex: 20,
          pointerEvents: "none",
          opacity: 0,
          willChange: "transform",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
          <Image
            src="/images/hero_model_second.jpg"
            alt="MONARCH Contemporary Silhouette"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, #0B0B0A 0%, rgba(11,11,10,0.7) 20%, rgba(11,11,10,0.15) 50%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, #0B0B0A 0%, transparent 25%, transparent 80%, rgba(11,11,10,0.6) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* ACT 3 TYPOGRAPHY: "FORM. FIT. CHARACTER." */}
      <div
        ref={textFormRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 30,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "clamp(2.5rem, 6vw, 6.5rem)",
          paddingRight: "clamp(2rem, 4vw, 4rem)",
          maxWidth: "1720px",
          opacity: 0,
          willChange: "transform",
        }}
      >
        <div style={{ maxWidth: "680px", paddingTop: "2.5rem", paddingBottom: "5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#A58A55" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-meta)",
                color: "#A58A55",
                letterSpacing: "0.28em",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              THE 2026 SILHOUETTE
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-display)",
              lineHeight: 0.92,
              color: "#F3F0E8",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            FORM. FIT. <br />
            <span style={{ fontFamily: "var(--font-serif-editorial)", fontStyle: "italic", color: "#C9B07E" }}>
              CHARACTER.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-body)",
              color: "#B8B2A7",
              lineHeight: 1.75,
              fontWeight: 300,
              maxWidth: "480px",
              marginTop: "1.75rem",
              marginBottom: 0,
            }}
          >
            Fine-gauge Mongolian cashmere paired with razor-sharp wool pleats. A seamless dialogue between soft comfort and commanding form.
          </p>

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "#8E887E",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
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
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 30,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
          opacity: 0,
          willChange: "transform",
        }}
      >
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Subtle Ambient Metallic Glow */}
          <div
            style={{
              position: "absolute",
              width: "280px",
              height: "280px",
              backgroundColor: "rgba(165, 138, 85, 0.15)",
              borderRadius: "50%",
              filter: "blur(64px)",
              pointerEvents: "none",
            }}
          />
          
          <BrandEmblem size={76} variant="gold" className="mb-6 drop-shadow-[0_10px_30px_rgba(165,138,85,0.45)]" />
          
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-display)",
              color: "#F3F0E8",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 300,
            }}
          >
            MONARCH
          </div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-meta)",
              color: "#A58A55",
              letterSpacing: "0.35em",
              marginTop: "0.85rem",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            BUILT FOR PRESENCE.
          </div>
        </div>
      </div>

      {/* Hero Pinned Progress Line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "2px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          zIndex: 45,
          pointerEvents: "none",
        }}
      >
        <div
          ref={progressLineRef}
          style={{
            height: "100%",
            backgroundColor: "#A58A55",
            transition: "all 75ms ease",
            width: "0%",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
