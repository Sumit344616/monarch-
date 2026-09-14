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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
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
          backgroundColor: scrolled ? "rgba(11, 11, 10, 0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid rgba(243, 240, 232, 0.08)" : "1px solid transparent",
          padding: scrolled ? "1.1rem 2rem" : "1.85rem 2rem",
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
          {/* Brand Logo & Monogram */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              textDecoration: "none",
            }}
          >
            <BrandEmblem size={28} variant="gold" />
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.2rem",
                letterSpacing: "0.26em",
                color: "#F3F0E8",
                fontWeight: 500,
              }}
            >
              {brandData.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "2.75rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
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
                  letterSpacing: "0.18em",
                  color: "#F3F0E8",
                  opacity: 0.82,
                  transition: "all 0.25s ease",
                  position: "relative",
                  paddingBottom: "4px",
                }}
                className="hover:opacity-100 hover:text-[#A58A55]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Contact */}
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
                gap: "0.5rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                color: "#F3F0E8",
                border: "1px solid rgba(243, 240, 232, 0.25)",
                padding: "0.55rem 1.25rem",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="desktop-contact hover:border-[#A58A55] hover:text-[#A58A55]"
            >
              <span>CONTACT</span>
              <span>→</span>
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
              }}
              className="hover:text-[#A58A55]"
            >
              <span>{link.label}</span>
              <span style={{ fontSize: "1.2rem", opacity: 0.4 }}>→</span>
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
        @media (min-width: 900px) {
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
      `}</style>
    </>
  );
}

export default Navbar;
