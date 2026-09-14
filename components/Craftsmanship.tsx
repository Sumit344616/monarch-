"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandEmblem } from "./BrandEmblem";

export function Craftsmanship() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinStageRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGLineElement>(null);
  const path2Ref = useRef<SVGLineElement>(null);
  const path3Ref = useRef<SVGLineElement>(null);
  const measure1Ref = useRef<HTMLDivElement>(null);
  const measure2Ref = useRef<HTMLDivElement>(null);
  const measure3Ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
          end: isMobile ? "+=140%" : "+=190%",
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // 0.0 -> 3.0: Blueprint Lines Animate & Draw
      tl.fromTo(
        [path1Ref.current, path2Ref.current, path3Ref.current],
        { strokeDashoffset: 800 },
        { strokeDashoffset: 0, duration: 2.5, ease: "none" },
        0
      );

      // 1.5 -> 4.0: Measurement calipers move and lock into place
      tl.fromTo(
        [measure1Ref.current, measure2Ref.current, measure3Ref.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.4, duration: 1.5, ease: "power2.out" },
        1.5
      );

      // 2.5 -> 6.0: Central Atelier Tailoring Image Appears
      tl.fromTo(
        imageFrameRef.current,
        {
          clipPath: "inset(25% 25% 25% 25%)",
          scale: 0.92,
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          opacity: 1,
          duration: 2.5,
          ease: "power2.out",
        },
        2.5
      );

      // 4.5 -> 7.5: Specification typography reveals
      tl.fromTo(
        contentRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 2.0, ease: "power2.out" },
        4.0
      );

      // 7.8 -> 9.5: "Then everything disappears" (Pristine exit)
      tl.to(
        [imageFrameRef.current, contentRef.current, measure1Ref.current, measure2Ref.current, measure3Ref.current],
        {
          opacity: 0,
          scale: 0.95,
          duration: 1.5,
          ease: "power2.inOut",
        },
        7.8
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0B0B0A]"
    >
      <div
        ref={pinStageRef}
        className="relative w-full h-screen min-h-[640px] bg-[#0B0B0A] text-[#F3F0E8] overflow-hidden flex items-center justify-center z-30"
      >
      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(165,138,85,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(165,138,85,0.05)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      {/* Animating Blueprint Measurement SVG Vector Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          ref={path1Ref}
          x1="10%"
          y1="25%"
          x2="90%"
          y2="25%"
          stroke="#A58A55"
          strokeWidth="1"
          strokeDasharray="800"
          strokeDashoffset="800"
          opacity="0.3"
        />
        <line
          ref={path2Ref}
          x1="30%"
          y1="10%"
          x2="30%"
          y2="90%"
          stroke="#A58A55"
          strokeWidth="1"
          strokeDasharray="800"
          strokeDashoffset="800"
          opacity="0.3"
        />
        <line
          ref={path3Ref}
          x1="70%"
          y1="10%"
          x2="70%"
          y2="90%"
          stroke="#A58A55"
          strokeWidth="1"
          strokeDasharray="800"
          strokeDashoffset="800"
          opacity="0.3"
        />
      </svg>

      {/* Floating Measurement Caliper Marks */}
      <div
        ref={measure1Ref}
        className="absolute top-[22%] left-[12%] text-[10px] text-[#A58A55] tracking-[0.25em] font-mono opacity-0 z-20 pointer-events-none"
      >
        [SHOULDER PITCH: 48.5 CM // 0° TORQUE]
      </div>
      <div
        ref={measure2Ref}
        className="absolute bottom-[24%] left-[26%] text-[10px] text-[#A58A55] tracking-[0.25em] font-mono opacity-0 z-20 pointer-events-none"
      >
        [LAPEL STANCE: 10.2 CM // FULL FLOATING CANVAS]
      </div>
      <div
        ref={measure3Ref}
        className="absolute top-[35%] right-[14%] text-[10px] text-[#A58A55] tracking-[0.25em] font-mono opacity-0 z-20 pointer-events-none"
      >
        [STITCH ACCURACY: 8 SPI // BIELLA SUPER 150s]
      </div>

      {/* Main Architectural Stage */}
      <div className="relative w-full max-w-[1580px] h-full mx-auto px-6 sm:px-12 md:px-20 flex flex-col md:flex-row items-center justify-between z-20">
        
        {/* Left: Blueprint Specifications */}
        <div
          ref={contentRef}
          className="w-full md:w-[44%] max-w-lg z-30 pointer-events-none opacity-0"
        >
          <div className="flex items-center gap-3 mb-3">
            <BrandEmblem size={22} variant="gold" />
            <span className="text-meta text-[#A58A55] tracking-[0.3em]">
              ATELIER CALIBRATION // 07
            </span>
          </div>

          <h2 className="text-display font-serif text-[#F3F0E8] uppercase leading-[0.92] mb-6">
            BUILT <br />
            <span className="italic font-serif-editorial text-[#A58A55]">DIFFERENT.</span>
          </h2>

          <p className="text-[#B8B2A7] text-sm md:text-base font-light leading-relaxed mb-8">
            Laser-aligned seams meet full floating horsehair canvas. An uncompromising discipline where garment engineering matches the precision of bespoke architecture.
          </p>

          <div className="border-t border-[#A58A55]/20 pt-4 flex flex-col gap-2.5 text-xs text-[#8E887E] tracking-widest uppercase">
            <div className="flex justify-between py-1 border-b border-white/5">
              <span>CANVAS TYPE</span>
              <span className="text-[#F3F0E8]">3-LAYER IRISH HORSEHAIR</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span>LAPEL ROLL</span>
              <span className="text-[#A58A55]">HAND-PADDED SOFT ROLL</span>
            </div>
            <div className="flex justify-between py-1">
              <span>SURGEON CUFFS</span>
              <span className="text-[#F3F0E8]">FUNCTIONAL 4-BUTTON MITER</span>
            </div>
          </div>
        </div>

        {/* Right: Architectural Canvassing Image Frame */}
        <div
          ref={imageFrameRef}
          className="relative w-full md:w-[50%] h-[50vh] md:h-[68vh] shadow-[0_35px_90px_rgba(0,0,0,0.95)] border border-[#A58A55]/40 overflow-hidden bg-[#0B0B0A] opacity-0 will-change-transform"
          data-cursor="view"
        >
          <Image
            src="/images/collection_tailored.jpg"
            alt="MONARCH Hand-Tailored Architectural Suiting"
            fill
            sizes="(max-width: 768px) 90vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/90 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div>
              <div className="text-[10px] text-[#A58A55] tracking-[0.25em] uppercase">
                TAILORING ARCHIVE // MILAN & NAPLES
              </div>
              <div className="text-base font-serif text-[#F3F0E8] uppercase tracking-wider">
                PEAK LAPEL DOUBLE-BREASTED SILHOUETTE
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}

export default Craftsmanship;
