"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandEmblem } from "./BrandEmblem";
import { brandData } from "@/data/brand";

const navLinks = [
  { label: "COLLECTION", href: "#collection" },
  { label: "EDITORIAL", href: "#editorial" },
  { label: "CRAFT", href: "#craft" },
  { label: "JOURNAL", href: "#journal" },
  { label: "ABOUT", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9000,
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          backgroundColor: scrolled ? "rgba(11, 11, 10, 0.90)" : "transparent",
          backgroundImage: scrolled
            ? "none"
            : "linear-gradient(to bottom, rgba(11, 11, 10, 0.92) 0%, rgba(11, 11, 10, 0.45) 55%, transparent 100%)",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid rgba(165, 138, 85, 0.22)" : "1px solid transparent",
          boxShadow: scrolled ? "0 12px 36px rgba(0, 0, 0, 0.65)" : "none",
          padding: scrolled
            ? "1.1rem clamp(2.5rem, 6vw, 6.5rem)"
            : "1.75rem clamp(2.5rem, 6vw, 6.5rem)",
        }}
      >
        <div
          style={{
            maxWidth: "1720px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand Identity: Monogram + Wordmark */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.95rem",
              textDecoration: "none",
            }}
            className="group"
          >
            <BrandEmblem
              size={30}
              variant="gold"
              className="drop-shadow-[0_4px_12px_rgba(165,138,85,0.35)] transition-transform duration-500 group-hover:scale-105"
            />
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                letterSpacing: "0.28em",
                color: "#F3F0E8",
                fontWeight: 500,
                transition: "color 0.3s ease",
              }}
              className="group-hover:text-[#FAF8F4]"
            >
              {brandData.name}
            </span>
          </Link>

          {/* Desktop Navigation Links with Clean Luxury Gliding Gold Line */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "3rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  color: hoveredIdx === idx ? "#FAF8F4" : "#D4CEBF",
                  textDecoration: "none",
                  position: "relative",
                  padding: "6px 0",
                  transition: "all 0.3s ease",
                }}
                className="group"
              >
                <span>{link.label}</span>

                {/* Gliding Gold Underline Indicator */}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#A58A55",
                    transformOrigin: "left",
                    transform: hoveredIdx === idx ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Right Action: Contact CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#contact");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              style={{
                display: "none",
                alignItems: "center",
                gap: "0.65rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                color: "#F3F0E8",
                border: "1px solid rgba(165, 138, 85, 0.45)",
                backgroundColor: "rgba(165, 138, 85, 0.08)",
                backdropFilter: "blur(12px)",
                padding: "0.6rem 1.45rem",
                borderRadius: "9999px",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                textDecoration: "none",
              }}
              className="desktop-contact group hover:border-[#A58A55] hover:bg-[#A58A55]/20 hover:text-white"
            >
              <span style={{ fontWeight: 500 }}>CONTACT</span>
              <span
                style={{
                  color: "#A58A55",
                  transition: "transform 0.3s ease",
                }}
                className="group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                padding: "8px",
                cursor: "pointer",
              }}
              className="mobile-toggle"
            >
              <span
                style={{
                  width: "26px",
                  height: "1.5px",
                  backgroundColor: "#F3F0E8",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                }}
              />
              <span
                style={{
                  width: "18px",
                  height: "1.5px",
                  backgroundColor: "#A58A55",
                  transition: "opacity 0.2s ease",
                  opacity: mobileMenuOpen ? 0 : 1,
                  alignSelf: "flex-end",
                }}
              />
              <span
                style={{
                  width: "26px",
                  height: "1.5px",
                  backgroundColor: "#F3F0E8",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  transform: mobileMenuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Curtain */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#0B0B0A",
          zIndex: 8999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "7rem 2.5rem 3rem",
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: mobileMenuOpen ? "translateY(0%)" : "translateY(-100%)",
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              color: "#A58A55",
              fontFamily: "var(--font-sans)",
              textTransform: "uppercase",
            }}
          >
            NAVIGATION / {brandData.season}
          </div>

          {[...navLinks, { label: "CONTACT", href: "#contact" }].map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 7vw, 3.2rem)",
                letterSpacing: "0.08em",
                color: "#F3F0E8",
                transition: "all 0.3s ease",
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${0.1 + idx * 0.06}s`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none",
              }}
              className="hover:text-[#A58A55]"
            >
              <span>{link.label}</span>
              <span style={{ fontSize: "1.2rem", color: "#A58A55", opacity: 0.6 }}>→</span>
            </a>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(243, 240, 232, 0.12)",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "#B8B2A7",
            }}
          >
            PRIVATE APPOINTMENTS: {brandData.contact.phone}
          </div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "#6B655A",
            }}
          >
            {brandData.contact.address}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-contact {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (min-width: 1240px) {
          .desktop-atelier {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
