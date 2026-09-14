"use client";

import React, { useEffect, useState } from "react";
import { BrandEmblem } from "./BrandEmblem";

export function Preloader() {
  const [complete, setComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1200; // 1.2 seconds max

    const animate = (time: number) => {
      const elapsed = time - start;
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setComplete(true), 150);
      }
    };

    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  if (complete) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#0B0B0A",
        zIndex: 999999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: progress === 100 ? 0 : 1,
        pointerEvents: progress === 100 ? "none" : "auto",
      }}
    >
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Monogram */}
        <div style={{ marginBottom: "1.25rem", transform: "scale(1.15)" }}>
          <BrandEmblem size={52} variant="gold" />
        </div>

        {/* Brand Name */}
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.5rem",
            letterSpacing: "0.3em",
            color: "#F3F0E8",
            marginBottom: "0.5rem",
            fontWeight: 400,
          }}
        >
          MONARCH
        </div>

        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            color: "#A58A55",
            textTransform: "uppercase",
            marginBottom: "2rem",
            opacity: 0.85,
          }}
        >
          BUILT FOR PRESENCE
        </div>

        {/* Minimal Progress Line */}
        <div
          style={{
            width: "140px",
            height: "1px",
            backgroundColor: "rgba(243, 240, 232, 0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "#A58A55",
              transition: "width 0.1s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
