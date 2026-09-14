"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandEmblem } from "./BrandEmblem";

const reverseItems = [
  {
    title: "THE LONG TRENCH",
    subtitle: "Water-repellent melange wool tailored in Biella",
    image: "/images/runway_01.jpg",
    spec: "360 GSM Melange Finish",
    aspect: "w-[clamp(340px,40vw,640px)] h-[clamp(440px,64vh,600px)]",
  },
  {
    title: "ARCHITECTURAL FLANNEL",
    subtitle: "Houndstooth check cut with strict vertical symmetry",
    image: "/images/collection_checks.jpg",
    spec: "Huddersfield Brushed Cotton",
    aspect: "w-[clamp(300px,34vw,540px)] h-[clamp(400px,58vh,540px)]",
  },
  {
    title: "ATELIER TAILORING",
    subtitle: "Peak lapel double-breasted jacket draped in stillness",
    image: "/images/collection_tailored.jpg",
    spec: "Super 150s Floating Canvas",
    aspect: "w-[clamp(360px,42vw,660px)] h-[clamp(460px,68vh,640px)]",
  },
];

export function ReverseGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!trackRef.current || !sectionRef.current) return;

      // Start shifted left, and move RIGHT (slower, breathing counter-flow)
      gsap.fromTo(
        trackRef.current,
        { x: -450 },
        {
          x: 80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8, // Slow, elegant kinetic rhythm
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="theme-forest w-full py-32 md:py-44 overflow-hidden relative z-30 transition-colors duration-700"
    >
      <div className="container-custom mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#F3F0E8]/15 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <BrandEmblem size={20} variant="gold" />
              <span className="text-meta text-[#A58A55] tracking-[0.3em]">
                COUNTER MOMENTUM // 06
              </span>
            </div>
            <h2 className="text-display font-serif text-[#F3F0E8] uppercase tracking-wide leading-none">
              PACED PERSPECTIVE.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#A8B5AF] text-sm max-w-sm font-light leading-relaxed">
            A slower counter-flow across the seasonal archive. Generous negative space that allows the eye to rest on pure drape and fiber texture.
          </p>
        </div>
      </div>

      {/* Reverse Moving Track (Moves Left -> Right with Large Whitespace) */}
      <div
        ref={trackRef}
        className="flex items-center gap-16 md:gap-28 pl-10 will-change-transform"
        style={{ width: "max-content" }}
      >
        {reverseItems.map((item, idx) => (
          <div
            key={idx}
            className={`shrink-0 relative overflow-hidden bg-[#121C17] border border-[#F3F0E8]/10 shadow-2xl group ${item.aspect}`}
            data-cursor="view"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="45vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121C17]/90 via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
              <span className="text-meta text-[#A58A55] tracking-[0.22em] mb-1">
                FRAME 0{idx + 1} // PERSPECTIVE
              </span>
              <h3 className="text-xl font-serif text-[#F3F0E8] uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs text-[#A8B5AF] mt-1 font-light">
                {item.subtitle}
              </p>
              <div className="mt-4 text-[10px] tracking-widest text-[#B8B2A7] uppercase border-t border-white/10 pt-2">
                {item.spec}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReverseGallery;
