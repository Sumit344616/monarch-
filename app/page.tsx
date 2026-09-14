import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { HorizontalRunway } from "@/components/HorizontalRunway";
import { ReverseGallery } from "@/components/ReverseGallery";
import { Materials } from "@/components/Materials";
import { Shirts } from "@/components/Shirts";
import { Polo } from "@/components/Polo";
import { Checks } from "@/components/Checks";
import { Editorial } from "@/components/Editorial";
import { StyleStory } from "@/components/StyleStory";
import { Craftsmanship } from "@/components/Craftsmanship";
import { BrandStory } from "@/components/BrandStory";
import { Journal } from "@/components/Journal";
import { FinalCampaign } from "@/components/FinalCampaign";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0A] text-[#F3F0E8] w-full overflow-x-hidden">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Cinematic Scroll-Driven Hero (Pinned GSAP sequence) */}
      <Hero />

      {/* 3. Section 01 — The Collection (Asymmetric Editorial Gallery) */}
      <Collection />

      {/* 4. Section 02 — Pinned Horizontal Fashion Runway (Right -> Left) */}
      <HorizontalRunway />

      {/* 5. Section 03 — Reverse Motion Counter Gallery (Left -> Right) */}
      <ReverseGallery />

      {/* 6. Section 04 — Fabric / Material (Macro Zoom & Fiber Inspector) */}
      <Materials />

      {/* 7. Section 05 — The Shirt Experience (Vertical Choreography) */}
      <Shirts />

      {/* 8. Section 06 — The Signature Polo & Original Emblem Zoom */}
      <Polo />

      {/* 9. Section 07 — Checked Shirt Editorial Campaign */}
      <Checks />

      {/* 10. Section 08 — Fullscreen Cinematic Campaign Sequence */}
      <Editorial />

      {/* 11. Section 09 — Style & Outfit Story (One Man. Many Versions.) */}
      <StyleStory />

      {/* 12. Section 10 — Craftsmanship & Atelier Standards */}
      <Craftsmanship />

      {/* 13. Section 11 — Brand Story & Manifesto */}
      <BrandStory />

      {/* 14. Section 12 — Editorial Journal & Essays */}
      <Journal />

      {/* 15. Section 13 — Final Campaign Film ("Dress With Intent") */}
      <FinalCampaign />

      {/* 16. Section 14 — Contact CTA & Flagship Salons */}
      <Contact />

      {/* 17. Minimalist Quiet Luxury Footer */}
      <Footer />
    </main>
  );
}
