"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brandData } from "@/data/brand";

export function BrandStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const largeImgRef = useRef<HTMLDivElement>(null);
  const smallImgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Large image reveal + subtle scale
      gsap.fromTo(
        largeImgRef.current,
        { scale: 1.08, opacity: 0.3 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Overlapping small image parallax drift
      gsap.to(smallImgRef.current, {
        yPercent: -28,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text rise
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="theme-ivory w-full py-28 md:py-48 relative z-30 transition-colors duration-700 overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Asymmetric Overlapping Images Column */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            {/* Main Large Image */}
            <div
              ref={largeImgRef}
              className="relative w-full aspect-[3/4] max-h-[700px] overflow-hidden bg-[#0B0B0A] shadow-2xl"
            >
              <Image
                src="/images/hero_model_main.jpg"
                alt="MONARCH Haute Menswear Philosophy"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                data-cursor="view"
              />
            </div>

            {/* Small Overlapping Inset Image */}
            <div
              ref={smallImgRef}
              className="hidden sm:block absolute -bottom-14 -right-10 w-52 md:w-64 aspect-[3/4] overflow-hidden shadow-2xl border-4 border-[#F3F0E8] bg-[#0B0B0A] z-20 will-change-transform"
              data-cursor="view"
            >
              <Image
                src="/images/runway_02.jpg"
                alt="MONARCH Atelier Tailor & Architecture"
                fill
                sizes="25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Typography & Brand Philosophy */}
          <div ref={textRef} className="lg:col-span-6 order-1 lg:order-2">
            <div className="text-meta text-[#A58A55] tracking-[0.3em] mb-4">
              THE MONARCH MANIFESTO
            </div>

            <h2 className="text-display font-serif text-[#0B0B0A] uppercase leading-[0.92] mb-8">
              MORE THAN <br />
              <span className="italic font-serif-editorial text-[#A58A55]">CLOTHING.</span>
            </h2>

            <blockquote className="font-serif-editorial italic text-2xl md:text-3xl text-[#0B0B0A] border-l-2 border-[#A58A55] pl-6 mb-8 leading-snug">
              &ldquo;{brandData.philosophy.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col gap-6 text-[#4A463F] text-base font-light leading-relaxed mb-10">
              {brandData.philosophy.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="border-t border-[#0B0B0A]/15 pt-8 flex items-center justify-between">
              <div>
                <div className="text-meta text-[#0B0B0A] tracking-[0.2em] font-semibold">
                  ESTABLISHED IN LONDON & MILAN
                </div>
                <div className="text-xs text-[#6B655A] mt-1">
                  PRIVATE ATELIER COMMISSIONS
                </div>
              </div>
              <div className="font-serif text-lg tracking-widest text-[#A58A55]">
                MMXXVI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
