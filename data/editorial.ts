export interface StyleVersion {
  id: string;
  name: string;
  tagline: string;
  description: string;
  keyPiece: string;
  colorway: string;
  image: string;
  bgClass: string;
}

export interface JournalArticle {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  readTime: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
}

export interface MaterialDetail {
  id: string;
  name: string;
  origin: string;
  weight: string;
  spec: string;
  description: string;
}

export const styleVersions: StyleVersion[] = [
  {
    id: "casual",
    name: "CASUAL",
    tagline: "Uncompromised ease without sacrificing authority.",
    description: "The architectural heavyweight drop-shoulder tee paired with pleated wool trousers. Elevating the foundational wardrobe to sculptural permanence.",
    keyPiece: "320gsm Heavyweight Tee in Obsidian",
    colorway: "Obsidian & Deep Charcoal",
    image: "/images/collection_essentials.jpg",
    bgClass: "bg-obsidian",
  },
  {
    id: "smart-casual",
    name: "SMART CASUAL",
    tagline: "The modern executive uniform.",
    description: "The Signature Polo in deep forest green layered beneath an unstructured blazer or worn cleanly with tailored trousers. Confident, modern, disciplined.",
    keyPiece: "Double-Knit Crown-M Polo in Forest Green",
    colorway: "Deep Forest Green & Stone",
    image: "/images/collection_polo.jpg",
    bgClass: "bg-forest",
  },
  {
    id: "weekend",
    name: "WEEKEND",
    tagline: "Effortless tactile luxury away from the city.",
    description: "Ultra-soft ivory cashmere crewneck and relaxed stone trousers in golden hour sunlight. Quiet confidence in natural surroundings.",
    keyPiece: "Fine-Gauge Mongolian Cashmere Knit in Ivory",
    colorway: "Warm Ivory & Charcoal",
    image: "/images/hero_model_second.jpg",
    bgClass: "bg-ivory",
  },
  {
    id: "evening",
    name: "EVENING",
    tagline: "Commanding the night with sharp silhouette.",
    description: "Dramatic longline trench and obsidian black shirting. Chiaroscuro shadows and clean lines designed for the private lounge or gallery opening.",
    keyPiece: "Structured Wool Overcoat in Deep Black",
    colorway: "Deep Black & Antique Gold",
    image: "/images/runway_01.jpg",
    bgClass: "bg-charcoal",
  },
  {
    id: "formal",
    name: "FORMAL",
    tagline: "The absolute pinnacle of bespoke power.",
    description: "Super 150s double-breasted suit jacket with sharp peak lapels and hand-sewn buttonholes. Built for boardrooms and international galas.",
    keyPiece: "Peak Lapel Double-Breasted Jacket in Charcoal",
    colorway: "Midnight Charcoal & Crisp White",
    image: "/images/collection_tailored.jpg",
    bgClass: "bg-obsidian",
  },
];

export const journalArticles: JournalArticle[] = [
  {
    id: "01",
    number: "01",
    title: "THE ART OF THE PERFECT FIT",
    subtitle: "Why millimeters dictate the architecture of human presence.",
    readTime: "4 MIN READ",
    category: "CRAFT & TAILORING",
    author: "MASTER TAILOR G. RINALDI",
    excerpt: "True luxury is never loud. It lives in the exact pitch of the shoulder seam, the gentle drape across the chest, and the break of the trouser above the shoe.",
    image: "/images/collection_tailored.jpg",
  },
  {
    id: "02",
    number: "02",
    title: "WHY FABRIC MATTERS",
    subtitle: "From rare Peruvian Pima to Biella double-twist poplin.",
    readTime: "6 MIN READ",
    category: "TEXTILE SCIENCE",
    author: "DIRECTOR OF TEXTILES M. VANE",
    excerpt: "Before a pattern is drawn, the fiber must be chosen. We examine why long-staple fibers yield garments that improve with every single wear.",
    image: "/images/fabric_knit.jpg",
  },
  {
    id: "03",
    number: "03",
    title: "THE MODERN GENTLEMAN",
    subtitle: "Dressing with intention in an era of casual indifference.",
    readTime: "5 MIN READ",
    category: "PHILOSOPHY",
    author: "EDITORIAL BOARD",
    excerpt: "In a world drowning in disposable trends, deliberate dressing is an act of defiance. Presence is not an accident—it is an engineered state of being.",
    image: "/images/runway_02.jpg",
  },
];

export const materialsList: MaterialDetail[] = [
  {
    id: "cotton",
    name: "Peruvian Pima Cotton",
    origin: "Piura Valley, Peru",
    weight: "320 GSM",
    spec: "Extra-Long Staple (ELS) 38mm",
    description: "Harvested by hand to prevent fiber breakage, producing an extraordinarily smooth surface with natural luster and superior tensile strength.",
  },
  {
    id: "pique",
    name: "Mercerized Double-Knit Pique",
    origin: "Como, Italy",
    weight: "240 GSM",
    spec: "Double-twisted Giza 87 yarn",
    description: "Subjected to a specialized tension mercerization process that locks in deep, rich colors and creates a silky, structured knit that never loses shape.",
  },
  {
    id: "poplin",
    name: "140/2 Twill & Poplin",
    origin: "Biella, Italy",
    weight: "120 GSM",
    spec: "Two-ply compact yarn weave",
    description: "Featherlight yet crisp, offering remarkable breathability and a natural wrinkle-recovery memory that endures through demanding travel.",
  },
  {
    id: "flannel",
    name: "Brushed Melange Flannel",
    origin: "Huddersfield, UK",
    weight: "210 GSM",
    spec: "Organic cotton blended with virgin wool",
    description: "Gently sheared to raise fine surface fibers, producing an insulating, velvety hand feel with rich architectural depth in check motifs.",
  },
  {
    id: "wool",
    name: "Super 150s Virgin Wool",
    origin: "Piedmont, Italy",
    weight: "280 GSM",
    spec: "16.0 micron fine merino wool",
    description: "Spun with extreme precision for luxurious fluid drape, thermal comfort, and resilience that maintains razor-sharp lapel contours.",
  },
];
