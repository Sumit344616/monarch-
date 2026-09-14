"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandEmblem } from "./BrandEmblem";

export function Polo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomStageRef = useRef<HTMLDivElement>(null);
  const emblemCalloutRef = useRef<HTMLDivElement>(null);
  const modelFullRef = useRef<HTMLDivElement>(null);
  const headlineGroupRef = useRef<HTMLDivElement>(null);

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
          end: isMobile ? "+=140%" : "+=200%",
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // 0.0 -> 3.5: Slow Camera Push toward the chest Crown-M emblem
      tl.to(
        zoomStageRef.current,
        {
          scale: 1.85,
          xPercent: -12,
          yPercent: -15,
          ease: "none",
          duration: 3.5,
        },
        0
      );

      // 3.0 -> 5.5: At maximum zoom — Reveal "MONARCH SIGNATURE EMBLEM"
      tl.fromTo(
        emblemCalloutRef.current,
        {
          opacity: 0,
          scale: 0.85,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        3.0
      );

      // 5.5 -> 7.0: Fade callout and begin pull-back
      tl.to(
        emblemCalloutRef.current,
        {
          opacity: 0,
          scale: 0.95,
          duration: 1.0,
          ease: "power2.inOut",
        },
        5.2
      );

      // 5.5 -> 8.5: Pull back smoothly into full model silhouette
      tl.to(
        zoomStageRef.current,
        {
          scale: 1,
          xPercent: 0,
          yPercent: 0,
          opacity: 0,
          duration: 2.2,
          ease: "power2.inOut",
        },
        5.5
      );

      tl.fromTo(
        modelFullRef.current,
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 2.2,
          ease: "power2.out",
        },
        6.0
      );

      // 8.5 -> 10.0: Pristine exit
      tl.to(
        [modelFullRef.current, headlineGroupRef.current],
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
      id="polo"
      className="relative w-full h-screen min-h-[640px] bg-[#0B0B0A] text-[#F3F0E8] overflow-hidden flex items-center justify-center z-30"
      style={{ scrollMarginTop: "90px" }}
    >
      {/* Background Ambience with Deep Forest Undertone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0A] via-[#121C17]/60 to-[#0B0B0A] pointer-events-none" />

      {/* Grid Composition: Text Left / Camera Stage Right (Zero collision with model face!) */}
      <div className="relative w-full max-w-[1600px] h-full mx-auto px-6 sm:px-12 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8 z-20">
        
        {/* Left Column: Editorial Headline & Heritage Specs */}
        <div
          ref={headlineGroupRef}
          className="w-full md:w-[42%] max-w-lg z-30 pointer-events-none"
        >
          <div className="flex items-center gap-3 mb-3">
            <BrandEmblem size={22} variant="gold" />
            <span className="text-meta text-[#A58A55] tracking-[0.3em] font-medium">
              HERITAGE SPORTING KNIT // 04
            </span>
          </div>

          <h2 className="text-display font-serif text-[#F3F0E8] uppercase leading-[0.92] mb-6">
            THE SIGNATURE <br />
            <span className="italic font-serif-editorial text-[#A58A55]">POLO.</span>
          </h2>

          <p className="text-[#B8B2A7] text-sm md:text-base font-light leading-relaxed mb-8">
            Double mercerized Egyptian Giza cotton knit with an architectural spread collar that refuses to curl. A subtle, commanding statement of quiet authority.
          </p>

          <div className="border-t border-white/10 pt-4 flex flex-col gap-2.5 text-xs text-[#8E887E] tracking-widest uppercase">
            <div className="flex justify-between py-1 border-b border-white/5">
              <span>CHEST EMBLEM</span>
              <span className="text-[#F3F0E8] font-medium">ORIGINAL CROWN-M</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span>THREAD SPEC</span>
              <span className="text-[#A58A55] font-medium">24K ANTIQUE GOLD</span>
            </div>
            <div className="flex justify-between py-1">
              <span>BUTTON DETAILS</span>
              <span className="text-[#F3F0E8] font-medium">CARVED MOTHER-OF-PEARL</span>
            </div>
          </div>
        </div>

        {/* Right Column: Camera Zoom Stage */}
        <div className="relative w-full md:w-[54%] h-[55vh] md:h-[72vh] flex items-center justify-center overflow-hidden">
          
          {/* Zooming Polo Chest & Emblem Frame */}
          <div
            ref={zoomStageRef}
            className="relative w-full h-full shadow-[0_30px_80px_rgba(0,0,0,0.9)] border border-[#A58A55]/30 overflow-hidden bg-[#121C17] will-change-transform"
            data-cursor="view"
          >
            <Image
              src="/images/hero_polo_detail.jpg"
              alt="MONARCH Signature Polo Embroidered Crown-M"
              fill
              sizes="(max-width: 768px) 90vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/80 via-transparent to-transparent pointer-events-none" />

            {/* Hotspot Target Marker */}
            <div className="absolute top-[64%] left-[63%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A58A55] opacity-75" />
                <span className="relative inline-flex rounded-full h-5 w-5 bg-[#A58A55]/90 border border-white/60" />
              </span>
            </div>
          </div>

          {/* Full Model Pull-back Frame */}
          <div
            ref={modelFullRef}
            className="absolute inset-0 w-full h-full shadow-[0_30px_80px_rgba(0,0,0,0.9)] border border-[#F3F0E8]/15 overflow-hidden bg-[#0B0B0A] opacity-0 will-change-transform"
            data-cursor="view"
          >
            <Image
              src="/images/collection_polo.jpg"
              alt="MONARCH Model Wearing Forest Green Polo"
              fill
              sizes="(max-width: 768px) 90vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/85 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* High-Zoom Callout Badge */}
          <div
            ref={emblemCalloutRef}
            className="absolute bottom-8 right-8 z-40 bg-[#0B0B0A]/95 backdrop-blur-md p-5 border border-[#A58A55] opacity-0 pointer-events-none shadow-2xl flex items-center gap-4"
          >
            <BrandEmblem size={34} variant="gold" />
            <div>
              <div className="text-[10px] text-[#A58A55] tracking-[0.28em] uppercase font-bold">
                PRECISION EMBROIDERY
              </div>
              <div className="text-sm font-serif text-[#F3F0E8] uppercase tracking-wider">
                ORIGINAL MONARCH CROWN-M
              </div>
              <div className="text-[11px] text-[#B8B2A7] tracking-widest uppercase mt-0.5">
                IDENTITY IN EVERY STITCH
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Polo;
