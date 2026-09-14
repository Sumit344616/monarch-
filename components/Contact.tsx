"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandEmblem } from "./BrandEmblem";
import { MagneticButton } from "./motion/MagneticButton";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);
  const word3Ref = useRef<HTMLSpanElement>(null);
  const ctaButtonRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Reveal words one by one
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
        },
      });

      tl.fromTo(
        word1Ref.current,
        { opacity: 0, y: 50, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          word2Ref.current,
          { opacity: 0, y: 50, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          word3Ref.current,
          { opacity: 0, y: 50, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ctaButtonRef.current,
          { opacity: 0, scale: 0.9, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power3.out" },
          "-=0.3"
        );
    }, el);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full min-h-screen bg-[#0B0B0A] text-[#F3F0E8] overflow-hidden flex flex-col justify-between py-20 px-6 sm:px-12 md:px-20 z-30"
      style={{ scrollMarginTop: "90px" }}
    >
      {/* Background Film Tone & Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A58A55]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Brand Insignia */}
      <div className="w-full flex justify-between items-center border-b border-white/10 pb-6 z-20 pointer-events-none">
        <div className="flex items-center gap-4">
          <BrandEmblem size={28} variant="gold" />
          <span className="text-meta text-[#A58A55] tracking-[0.3em]">
            THE FINAL FRAME // SS26
          </span>
        </div>
        <div className="text-xs text-[#8E887E] tracking-widest uppercase hidden sm:block">
          PRIVATE APPOINTMENTS ONLY
        </div>
      </div>

      {/* Center Cinematic Words: "MAKE YOUR PRESENCE COUNT." (Appearing One by One) */}
      <div className="my-auto text-center max-w-5xl mx-auto py-12 flex flex-col items-center z-20">
        <h2 className="text-hero font-serif text-[#F3F0E8] uppercase leading-[0.88] tracking-tight select-none">
          <span ref={word1Ref} className="block will-change-transform">
            MAKE YOUR
          </span>
          <span ref={word2Ref} className="block will-change-transform">
            PRESENCE
          </span>
          <span
            ref={word3Ref}
            className="block italic font-serif-editorial text-[#A58A55] will-change-transform"
          >
            COUNT.
          </span>
        </h2>

        {/* Cinematic Action Trigger */}
        <div ref={ctaButtonRef} className="mt-14 will-change-transform">
          <MagneticButton
            onClick={() => setModalOpen(true)}
            className="px-10 py-5 border-2 border-[#A58A55] text-[#F3F0E8] hover:bg-[#A58A55] hover:text-[#0B0B0A] transition-all duration-300 text-meta tracking-[0.28em] font-medium shadow-[0_15px_40px_rgba(165,138,85,0.25)] flex items-center gap-4 group"
            style={{ backgroundColor: "transparent" }}
          >
            <span>START A CONVERSATION</span>
            <span className="text-[#A58A55] group-hover:text-[#0B0B0A] group-hover:translate-x-2 transition-all">
              →
            </span>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom International Salons */}
      <div className="w-full border-t border-white/10 pt-8 z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-xs text-[#8E887E] tracking-widest uppercase">
        <div className="flex flex-wrap gap-8">
          <div>
            <span className="text-[#A58A55]">LONDON // </span>
            <span>32 SAVILE ROW</span>
          </div>
          <div>
            <span className="text-[#A58A55]">MILAN // </span>
            <span>VIA MONTENAPOLEONE 8</span>
          </div>
          <div>
            <span className="text-[#A58A55]">TOKYO // </span>
            <span>GINZA SIX TOWER</span>
          </div>
        </div>

        <div className="text-[10px] text-[#8E887E] tracking-[0.25em]">
          BY PRIVATE INVITATION OR APPOINTMENT
        </div>
      </div>

      {/* Concierge Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[99999] bg-[#0B0B0A]/90 backdrop-blur-md flex items-center justify-center p-6 animate-fadeIn">
          <div className="bg-[#121211] text-[#F3F0E8] max-w-lg w-full p-8 md:p-12 border border-[#A58A55]/40 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-meta text-[#8E887E] hover:text-[#F3F0E8] tracking-[0.2em]"
            >
              ✕ CLOSE
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <BrandEmblem size={44} variant="gold" className="mx-auto mb-4" />
                <h3 className="text-xl font-serif text-[#F3F0E8] uppercase tracking-wide mb-2">
                  DISPATCH RECEIVED
                </h3>
                <p className="text-sm text-[#B8B2A7] font-light leading-relaxed">
                  Thank you, {name || "Esteemed Client"}. Our private client concierge will be in touch within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <BrandEmblem size={24} variant="gold" />
                  <span className="text-meta text-[#A58A55] tracking-[0.25em]">
                    PRIVATE SALON INQUIRY
                  </span>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-[#B8B2A7] block mb-2 font-medium">
                    YOUR FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Harrison Sterling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-base text-[#F3F0E8] focus:border-[#A58A55] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-[#B8B2A7] block mb-2 font-medium">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="harrison@sterling.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-base text-[#F3F0E8] focus:border-[#A58A55] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-[#B8B2A7] block mb-2 font-medium">
                    PREFERRED SALON
                  </label>
                  <select className="w-full bg-[#1A1A19] border-b border-white/20 py-2 text-sm text-[#F3F0E8] focus:border-[#A58A55] focus:outline-none transition-colors">
                    <option>London — 32 Savile Row</option>
                    <option>Milan — Via Montenapoleone 8</option>
                    <option>Tokyo — Ginza Six Tower</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full py-4 bg-[#A58A55] text-[#0B0B0A] font-semibold text-meta tracking-[0.24em] uppercase hover:bg-[#F3F0E8] transition-colors"
                >
                  TRANSMIT COMMISSION REQUEST
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
