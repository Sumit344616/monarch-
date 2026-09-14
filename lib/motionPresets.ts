/**
 * MONARCH Editorial Motion Presets
 * 20 High-end luxury motion design presets with cinematic easing curves.
 */

export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const; // Smooth power3/expo curve
export const CINEMATIC_EASE = [0.25, 1, 0.5, 1] as const;
export const SHARP_EASE = [0.33, 1, 0.68, 1] as const;

export const motionPresets = {
  // 1. RISE
  rise: {
    hidden: { y: 60, opacity: 0 },
    visible: (custom = 0) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 1.1, delay: custom * 0.12, ease: LUXURY_EASE },
    }),
  },

  // 2. PAN_LEFT
  panLeft: {
    hidden: { x: 60, opacity: 0 },
    visible: (custom = 0) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1.0, delay: custom * 0.1, ease: LUXURY_EASE },
    }),
  },

  // 3. PAN_RIGHT
  panRight: {
    hidden: { x: -60, opacity: 0 },
    visible: (custom = 0) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1.0, delay: custom * 0.1, ease: LUXURY_EASE },
    }),
  },

  // 4. PAN_UP
  panUp: {
    hidden: { y: 50, opacity: 0 },
    visible: (custom = 0) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.95, delay: custom * 0.1, ease: LUXURY_EASE },
    }),
  },

  // 5. PAN_DOWN
  panDown: {
    hidden: { y: -50, opacity: 0 },
    visible: (custom = 0) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.95, delay: custom * 0.1, ease: LUXURY_EASE },
    }),
  },

  // 6. BREATHE
  breathe: {
    hidden: { scale: 0.98, opacity: 0.8 },
    visible: {
      scale: [0.98, 1.02, 0.98],
      opacity: 1,
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  },

  // 7. SLOW_ZOOM
  slowZoom: {
    hidden: { scale: 1 },
    visible: {
      scale: 1.08,
      transition: { duration: 8, ease: "easeOut" },
    },
  },

  // 8. ZOOM_OUT
  zoomOut: {
    hidden: { scale: 1.15, opacity: 0 },
    visible: (custom = 0) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 1.4, delay: custom * 0.12, ease: LUXURY_EASE },
    }),
  },

  // 9. SOFT_BLUR
  softBlur: {
    hidden: { filter: "blur(12px)", opacity: 0, scale: 1.04 },
    visible: (custom = 0) => ({
      filter: "blur(0px)",
      opacity: 1,
      scale: 1,
      transition: { duration: 1.3, delay: custom * 0.15, ease: LUXURY_EASE },
    }),
  },

  // 10. SHARPEN_REVEAL
  sharpenReveal: {
    hidden: { filter: "blur(20px) contrast(1.4)", opacity: 0, scale: 0.96 },
    visible: (custom = 0) => ({
      filter: "blur(0px) contrast(1)",
      opacity: 1,
      scale: 1,
      transition: { duration: 1.1, delay: custom * 0.1, ease: SHARP_EASE },
    }),
  },

  // 11. CLIP_REVEAL
  clipReveal: {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0.2 },
    visible: (custom = 0) => ({
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: { duration: 1.2, delay: custom * 0.1, ease: LUXURY_EASE },
    }),
  },

  // 12. MASK_REVEAL
  maskReveal: {
    hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", opacity: 0 },
    visible: (custom = 0) => ({
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      transition: { duration: 1.15, delay: custom * 0.1, ease: LUXURY_EASE },
    }),
  },

  // 13. DRIFT
  drift: {
    hidden: { x: -20, y: 15, opacity: 0 },
    visible: (custom = 0) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: custom * 0.15, ease: CINEMATIC_EASE },
    }),
  },

  // 14. PARALLAX
  parallax: (distance = 50) => ({
    hidden: { y: distance },
    visible: { y: -distance },
  }),

  // 15. IMAGE_SWAP
  imageSwap: {
    exit: { x: "100%", opacity: 0, transition: { duration: 0.8, ease: LUXURY_EASE } },
    enter: { x: "-100%", opacity: 0 },
    active: { x: "0%", opacity: 1, transition: { duration: 0.8, ease: LUXURY_EASE } },
  },

  // 16. IMAGE_WIPE
  imageWipe: {
    hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 1.3, ease: LUXURY_EASE },
    },
  },

  // 17. SCALE_REVEAL
  scaleReveal: {
    hidden: { scale: 0.88, opacity: 0 },
    visible: (custom = 0) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, delay: custom * 0.12, ease: LUXURY_EASE },
    }),
  },

  // 18. CINEMATIC_PUSH
  cinematicPush: {
    hidden: { scale: 1, z: 0 },
    active: {
      scale: 1.14,
      transition: { duration: 2.0, ease: CINEMATIC_EASE },
    },
  },

  // 19. CROP_SHIFT
  cropShift: {
    hidden: { clipPath: "inset(12% 12% 12% 12%)", scale: 1.1 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      transition: { duration: 1.2, ease: LUXURY_EASE },
    },
  },

  // 20. EDITORIAL_SLIDE
  editorialSlide: {
    hidden: { x: 100, opacity: 0, skewX: -3 },
    visible: (custom = 0) => ({
      x: 0,
      opacity: 1,
      skewX: 0,
      transition: { duration: 1.1, delay: custom * 0.1, ease: LUXURY_EASE },
    }),
  },
};
