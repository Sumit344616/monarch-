"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { runwayItems } from "@/data/collections";

export function HorizontalRunway() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinStageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const portalImageRef = useRef<HTMLDivElement>(null);
  const portalInnerRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const getScrollAmount = () => track.scrollWidth - window.innerWidth + (isMobile ? 100 : 250);

      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: pinStageRef.current,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount() * 1.25}`,
          invalidateOnRefresh: true,
        },
      });

      // 1. Initial horizontal drift (0% -> 45%)
      mainTl.to(track, {
        x: () => -getScrollAmount() * 0.45,
        ease: "none",
        duration: 3,
      });

      // Parallax foreground vs background items
      const foregroundItems = track.querySelectorAll(".runway-foreground");
      const backgroundItems = track.querySelectorAll(".runway-background");

      mainTl.to(
        foregroundItems,
        {
          xPercent: -25,
          ease: "none",
          duration: 3,
        },
        0
      );

      mainTl.to(
        backgroundItems,
        {
          xPercent: 15,
          ease: "none",
          duration: 3,
        },
        0
      );

      // 2. RUNWAY SURPRISE (45% -> 65%): Camera Passes Through Photograph
      if (portalImageRef.current && portalInnerRef.current) {
        mainTl.to(
          portalImageRef.current,
          {
            scale: 2.6,
            zIndex: 50,
            opacity: 0.15,
            ease: "power2.inOut",
            duration: 1.8,
          },
          3.0
        );

        mainTl.fromTo(
          portalInnerRef.current,
          {
            scale: 0.5,
            opacity: 0,
            clipPath: "circle(0% at 50% 50%)",
          },
          {
            scale: 1,
            opacity: 1,
            clipPath: "circle(100% at 50% 50%)",
            ease: "power2.out",
            duration: 1.8,
          },
          3.2
        );

        mainTl.to(
          portalImageRef.current,
          {
            scale: 1,
            opacity: 1,
            zIndex: 1,
            duration: 1.2,
            ease: "power2.inOut",
          },
          4.8
        );
      }

      // 3. Resume horizontal drift to completion (65% -> 100%)
      mainTl.to(
        track,
        {
          x: () => -getScrollAmount(),
          ease: "none",
          duration: 3.5,
        },
        4.8
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Varied organic sizes & vertical offsets (No uniform grid alignment!)
  const cardStyles = [
    { width: "clamp(300px, 28vw, 440px)", height: "clamp(460px, 68vh, 620px)", mt: "0px", speed: "runway-background" },
    { width: "clamp(420px, 40vw, 620px)", height: "clamp(340px, 48vh, 460px)", mt: "80px", speed: "runway-foreground" },
    { width: "clamp(320px, 30vw, 480px)", height: "clamp(480px, 72vh, 660px)", mt: "-40px", speed: "runway-background" },
    { width: "clamp(340px, 32vw, 500px)", height: "clamp(440px, 66vh, 600px)", mt: "50px", speed: "runway-foreground" },
    { width: "clamp(310px, 29vw, 450px)", height: "clamp(460px, 68vh, 640px)", mt: "-20px", speed: "runway-background" },
    { width: "clamp(330px, 31vw, 470px)", height: "clamp(450px, 65vh, 610px)", mt: "30px", speed: "runway-foreground" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0B0B0A]"
    >
      <div
        ref={pinStageRef}
        className="relative w-full h-screen bg-[#0B0B0A] text-[#F3F0E8] overflow-hidden flex flex-col justify-center z-30"
      >
      {/* Top Editorial Sticky Title */}
      <div className="absolute top-12 left-0 w-full px-8 md:px-16 z-20 pointer-events-none flex justify-between items-end">
        <div>
          <div className="text-meta text-[#A58A55] tracking-[0.3em] mb-2 font-medium">
            RUNWAY ARCHITECTURE // 02
          </div>
          <h2 className="text-h1 font-serif text-[#F3F0E8] uppercase tracking-wide leading-none">
            MOVEMENT DEFINES PRESENCE.
          </h2>
        </div>
        <div className="text-meta text-[#8E887E] tracking-[0.2em] hidden md:block">
          MULTI-SPEED DEPTH DRIFT / 01 — 06
        </div>
      </div>

      {/* Horizontal Moving Track */}
      <div
        ref={trackRef}
        className="flex items-center gap-12 md:gap-20 pl-8 md:pl-16 pr-40 will-change-transform"
        style={{ width: "max-content" }}
      >
        {/* Intro Typographic Statement Panel */}
        <div
          ref={introTextRef}
          className="w-[320px] md:w-[440px] shrink-0 pr-8 flex flex-col justify-center"
        >
          <div className="w-12 h-0.5 bg-[#A58A55] mb-6" />
          <h3 className="text-display font-serif text-[#F3F0E8] uppercase leading-[0.92]">
            THE FLUID <br />
            <span className="italic font-serif-editorial text-[#A58A55]">MENSWEAR</span> <br />
            CANVAS.
          </h3>
          <p className="mt-6 text-sm text-[#B8B2A7] font-light leading-relaxed">
            From the structured wool trench to the tactile linen camp shirt. Each silhouette moves at its own cinematic cadence through the atelier space.
          </p>
          <div className="mt-8 text-meta text-[#8E887E] tracking-[0.22em] flex items-center gap-3">
            <span>SCROLL TO PASS THROUGH</span>
            <span className="text-[#A58A55]">→</span>
          </div>
        </div>

        {/* Varied Dimension Fashion Assets with Parallax Speeds */}
        {runwayItems.map((item, idx) => {
          const style = cardStyles[idx % cardStyles.length];
          const isSurpriseTrigger = idx === 2; // Runway Surprise Portal

          return (
            <div
              key={item.id}
              ref={isSurpriseTrigger ? portalImageRef : undefined}
              className={`relative shrink-0 ${style.speed} transition-shadow duration-500`}
              style={{
                width: style.width,
                height: style.height,
                marginTop: style.mt,
              }}
            >
              <div
                className="relative w-full h-full overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-[#F3F0E8]/10 group bg-[#0B0B0A]"
                data-cursor="explore"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 85vw, 40vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/90 via-transparent to-transparent opacity-85" />

                {/* Runway Surprise Inner Revealing Image */}
                {isSurpriseTrigger && (
                  <div
                    ref={portalInnerRef}
                    className="absolute inset-0 w-full h-full opacity-0 pointer-events-none z-30"
                  >
                    <Image
                      src="/images/runway_02.jpg"
                      alt="Runway Breakthrough Portal"
                      fill
                      sizes="60vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                      <span className="text-meta text-[#A58A55] tracking-[0.3em] uppercase">
                        PORTAL REVEAL // NORMANDY LINEN
                      </span>
                    </div>
                  </div>
                )}

                {/* Typographic Metadata */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col pointer-events-none">
                  <div className="text-[10px] text-[#A58A55] tracking-[0.26em] uppercase font-medium mb-1">
                    {item.tag}
                  </div>
                  <h4 className="text-base md:text-lg font-serif text-[#F3F0E8] uppercase tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#B8B2A7] tracking-wider font-light mt-1">
                    {item.silhouette} • {item.fabric}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}

export default HorizontalRunway;
