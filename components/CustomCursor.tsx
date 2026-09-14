"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouch, setIsTouch] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const updateHoverState = (target: HTMLElement | null) => {
      if (!target) {
        setIsHovered(false);
        setCursorText("");
        return;
      }

      const interactiveImage = target.closest("[data-cursor='view']");
      const interactiveAction = target.closest("button, a, [data-cursor='action']");

      if (interactiveImage) {
        setIsHovered(true);
        setCursorText("VIEW");
      } else if (interactiveAction) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
      updateHoverState(e.target as HTMLElement);
    };

    const onScroll = () => {
      // Re-evaluate element directly under cursor coordinates during scroll
      if (position.x > 0 && position.y > 0) {
        const el = document.elementFromPoint(position.x, position.y) as HTMLElement | null;
        updateHoverState(el);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
      setCursorText("");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [position.x, position.y]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision Center Dot / Hover Badge */}
      <div
        className="fixed pointer-events-none z-[999999]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: cursorText ? 52 : (isHovered ? 28 : 6),
          height: cursorText ? 52 : (isHovered ? 28 : 6),
          borderRadius: "50%",
          backgroundColor: cursorText ? "rgba(11, 11, 10, 0.75)" : (isHovered ? "transparent" : "#A58A55"),
          border: cursorText ? "1px solid rgba(165, 138, 85, 0.6)" : (isHovered ? "1px solid #A58A55" : "none"),
          backdropFilter: cursorText ? "blur(6px)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F3F0E8",
          fontSize: "0.55rem",
          letterSpacing: "0.24em",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          transition: "width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.15s ease, border 0.15s ease",
        }}
      >
        {cursorText}
      </div>

      {/* Trailing Subtle Ring */}
      {!isHovered && (
        <div
          className="fixed pointer-events-none z-[999998]"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "1px solid rgba(165, 138, 85, 0.3)",
            transition: "transform 0.1s ease-out",
          }}
        />
      )}
    </>
  );
}

export default CustomCursor;
