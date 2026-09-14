import type { Metadata, Viewport } from "next";
import { Cinzel, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif-editorial",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MONARCH — Built For Presence",
  description: "A contemporary men's fashion house defined by precision, confidence, and timeless design.",
  keywords: [
    "MONARCH",
    "Luxury Menswear",
    "Haute Menswear",
    "Bespoke Tailoring",
    "Quiet Luxury",
    "Italian Fabrics",
    "High Fashion",
  ],
  authors: [{ name: "MONARCH Fashion House" }],
  creator: "MONARCH",
  metadataBase: new URL("https://monarch-menswear.com"),
  openGraph: {
    title: "MONARCH — Built For Presence",
    description: "A contemporary men's fashion house defined by precision, confidence, and timeless design.",
    url: "https://monarch-menswear.com",
    siteName: "MONARCH",
    images: [
      {
        url: "/images/hero_model_main.jpg",
        width: 1200,
        height: 630,
        alt: "MONARCH — Built For Presence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MONARCH — Built For Presence",
    description: "A contemporary men's fashion house defined by precision, confidence, and timeless design.",
    images: ["/images/hero_model_main.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${playfair.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="antialiased bg-[#0B0B0A] text-[#F3F0E8] overflow-x-hidden selection:bg-[#A58A55] selection:text-[#0B0B0A]"
      >
        {/* Subtle Film Grain Shader Overlay */}
        <div className="film-grain" aria-hidden="true" />

        {/* Rapid Luxury Preloader */}
        <Preloader />

        {/* Custom Desktop Magnetic Cursor */}
        <CustomCursor />

        {/* Minimalist Editorial Scroll Progress */}
        <ScrollProgress />

        {/* Smooth Scroll Container with GSAP Integration */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
