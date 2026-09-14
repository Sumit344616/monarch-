"use client";

import React from "react";

interface BrandEmblemProps {
  className?: string;
  size?: number | string;
  variant?: "gold" | "ivory" | "dark" | "stone" | "monochrome";
  withCrest?: boolean;
}

export function BrandEmblem({
  className = "",
  size = 40,
  variant = "gold",
  withCrest = false,
}: BrandEmblemProps) {
  // Palette definitions
  const colors = {
    gold: {
      primary: "#A58A55",
      secondary: "#C7B07E",
      glow: "rgba(165, 138, 85, 0.25)",
    },
    ivory: {
      primary: "#F3F0E8",
      secondary: "#DED9CD",
      glow: "rgba(243, 240, 232, 0.2)",
    },
    dark: {
      primary: "#0B0B0A",
      secondary: "#181817",
      glow: "rgba(11, 11, 10, 0.15)",
    },
    stone: {
      primary: "#B8B2A7",
      secondary: "#8E887E",
      glow: "rgba(184, 178, 167, 0.2)",
    },
    monochrome: {
      primary: "currentColor",
      secondary: "currentColor",
      glow: "transparent",
    },
  };

  const selected = colors[variant] || colors.gold;

  return (
    <div
      className={`inline-flex items-center justify-center relative select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="MONARCH Luxury Emblem"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={`goldGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={selected.secondary} />
            <stop offset="50%" stopColor={selected.primary} />
            <stop offset="100%" stopColor={selected.secondary} />
          </linearGradient>
          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor={selected.glow} />
          </filter>
        </defs>

        {/* Optional Architectural Shield Crest */}
        {withCrest && (
          <path
            d="M 50 6 C 74 6 86 16 86 38 C 86 64 68 84 50 94 C 32 84 14 64 14 38 C 14 16 26 6 50 6 Z"
            stroke={`url(#goldGrad-${variant})`}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            fill="none"
            opacity="0.85"
          />
        )}

        {/* Outer subtle concentric diamond detail */}
        <path
          d="M 50 14 L 54 20 L 50 26 L 46 20 Z"
          fill={`url(#goldGrad-${variant})`}
          filter="url(#subtleGlow)"
        />

        {/* Left and Right Crown Finials */}
        <circle cx="28" cy="24" r="2.2" fill={`url(#goldGrad-${variant})`} />
        <circle cx="72" cy="24" r="2.2" fill={`url(#goldGrad-${variant})`} />

        {/* Geometric Crown and M Monogram Core */}
        {/* Left vertical pillar */}
        <path
          d="M 28 26 L 28 74"
          stroke={`url(#goldGrad-${variant})`}
          strokeWidth="2.5"
          strokeLinecap="square"
        />
        {/* Right vertical pillar */}
        <path
          d="M 72 26 L 72 74"
          stroke={`url(#goldGrad-${variant})`}
          strokeWidth="2.5"
          strokeLinecap="square"
        />

        {/* Outer Crown Chevrons meeting at center peak */}
        <path
          d="M 28 26 L 50 15 L 72 26"
          stroke={`url(#goldGrad-${variant})`}
          strokeWidth="2"
          strokeLinejoin="bevel"
        />

        {/* Inner Chevron descent meeting at center base of M */}
        <path
          d="M 28 34 L 50 62 L 72 34"
          stroke={`url(#goldGrad-${variant})`}
          strokeWidth="2.75"
          strokeLinejoin="miter"
        />

        {/* Secondary inner geometric chevron for luxury depth */}
        <path
          d="M 36 44 L 50 62 L 64 44"
          stroke={`url(#goldGrad-${variant})`}
          strokeWidth="1.75"
          strokeLinejoin="miter"
          opacity="0.7"
        />

        {/* Bottom Architectural Serif Bases */}
        <path
          d="M 22 74 L 34 74"
          stroke={`url(#goldGrad-${variant})`}
          strokeWidth="2.5"
          strokeLinecap="square"
        />
        <path
          d="M 66 74 L 78 74"
          stroke={`url(#goldGrad-${variant})`}
          strokeWidth="2.5"
          strokeLinecap="square"
        />

        {/* Center vertical anchor pin */}
        <line
          x1="50"
          y1="64"
          x2="50"
          y2="74"
          stroke={`url(#goldGrad-${variant})`}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default BrandEmblem;
