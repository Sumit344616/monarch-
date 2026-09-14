"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface StackItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  year?: string;
}

interface ImageStackProps {
  items: StackItem[];
  className?: string;
}

export function ImageStack({ items, className = "" }: ImageStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // Pinned stack timeline simulating studio table slide
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: `+=${items.length * (isMobile ? 75 : 95)}%`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (!card || index === items.length - 1) return;

        // Slide top photo off-table diagonally with gentle rotation
        tl.to(
          card,
          {
            xPercent: index % 2 === 0 ? 120 : -120,
            yPercent: index % 2 === 0 ? -25 : -15,
            rotation: index % 2 === 0 ? 14 : -14,
            opacity: 0,
            ease: "power2.inOut",
            duration: 1,
          },
          index * 1.1
        );

        // Bring the next photo up to dominant scale
        const nextCard = cardsRef.current[index + 1];
        if (nextCard) {
          tl.to(
            nextCard,
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              ease: "none",
              duration: 1,
            },
            index * 1.1
          );
        }
      });
    }, el);

    return () => ctx.revert();
  }, [items]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0B0B0A] ${className}`}
    >
      {/* Studio Lighting Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0A] via-[#141413] to-[#0B0B0A] pointer-events-none" />

      {/* Stacked Photographs Area */}
      <div className="relative w-[clamp(320px,46vw,720px)] h-[clamp(440px,68vh,720px)] mx-auto flex items-center justify-center">
        {items.map((item, index) => {
          // Pre-set organic studio rotations and stack scale
          const initialRot = (index % 2 === 0 ? 1 : -1) * (index * 2.5);
          const initialScale = Math.max(0.85, 1 - index * 0.05);
          const zIndex = items.length - index;

          return (
            <div
              key={item.id}
              ref={(node) => {
                cardsRef.current[index] = node;
              }}
              className="absolute inset-0 w-full h-full shadow-[0_30px_70px_rgba(0,0,0,0.85)] border border-[#F3F0E8]/15 bg-[#0B0B0A] overflow-hidden will-change-transform"
              style={{
                zIndex,
                transform: `rotate(${initialRot}deg) scale(${initialScale})`,
                opacity: index === 0 ? 1 : 0.88 - index * 0.15,
              }}
              data-cursor="view"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 90vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />

              {/* Physical photo border and print vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/90 via-transparent to-transparent pointer-events-none" />

              {/* Editorial print caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
                <div>
                  <div className="text-[10px] text-[#A58A55] tracking-[0.26em] uppercase mb-1">
                    PRINT 0{index + 1} // STUDIO ARCHIVE
                  </div>
                  <h4 className="text-lg md:text-xl font-serif text-[#F3F0E8] uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#B8B2A7] tracking-wider uppercase">
                    {item.subtitle}
                  </p>
                </div>
                {item.year && (
                  <div className="text-xs text-[#8E887E] font-serif tracking-widest">
                    {item.year}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageStack;
