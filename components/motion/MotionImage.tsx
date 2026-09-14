"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MotionImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  aspect?: string; // e.g. "3/4", "4/5", "16/9"
  priority?: boolean;
  preset?:
    | "rise"
    | "slowZoom"
    | "zoomOut"
    | "clipReveal"
    | "maskReveal"
    | "cinematicPush"
    | "cropShift"
    | "softBlur"
    | "parallax";
  cursorType?: "view" | "explore";
  overlay?: boolean;
  parallaxDistance?: number;
}

export function MotionImage({
  src,
  alt,
  className = "",
  style = {},
  aspect = "3/4",
  priority = false,
  preset = "rise",
  cursorType = "view",
  overlay = true,
  parallaxDistance = 40,
}: MotionImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    const ctx = gsap.context(() => {
      // Check prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      switch (preset) {
        case "rise":
          gsap.fromTo(
            el,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
            }
          );
          break;

        case "slowZoom":
          gsap.fromTo(
            img,
            { scale: 1 },
            {
              scale: 1.12,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
          break;

        case "zoomOut":
          gsap.fromTo(
            img,
            { scale: 1.18 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
          break;

        case "clipReveal":
          gsap.fromTo(
            el,
            { clipPath: "inset(0 100% 0 0)", opacity: 0.3 },
            {
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
              duration: 1.3,
              ease: "power3.inOut",
              scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none reverse" },
            }
          );
          break;

        case "maskReveal":
          gsap.fromTo(
            el,
            { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", opacity: 0.2 },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 82%", toggleActions: "play none none reverse" },
            }
          );
          break;

        case "cropShift":
          gsap.fromTo(
            el,
            { clipPath: "inset(8% 8% 8% 8%)", scale: 1.05 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none reverse" },
            }
          );
          break;

        case "softBlur":
          gsap.fromTo(
            el,
            { filter: "blur(12px)", opacity: 0 },
            {
              filter: "blur(0px)",
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
            }
          );
          break;

        case "parallax":
          gsap.fromTo(
            img,
            { y: -parallaxDistance },
            {
              y: parallaxDistance,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
          break;

        default:
          break;
      }
    }, el);

    return () => ctx.revert();
  }, [preset, parallaxDistance]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: aspect,
        backgroundColor: "#0B0B0A",
        ...style,
      }}
      data-cursor={cursorType}
    >
      <div ref={imgRef} className="relative w-full h-full will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  );
}

export default MotionImage;
