export interface CollectionCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  motionType: "riseBlur" | "panLeft" | "clipReveal" | "scaleReveal" | "panRightParallax";
  aspect: string;
  materials: string;
  palette: string;
  highlights: string[];
  origin: string;
  quote: string;
  detailImage: string;
  detailCaption: string;
}

export interface GarmentItem {
  id: string;
  name: string;
  category: string;
  silhouette: string;
  fabric: string;
  color: string;
  year: string;
  image: string;
  tag: string;
  editorialNote: string;
}

export const collectionCategories: CollectionCategory[] = [
  {
    id: "essentials",
    number: "01",
    title: "ESSENTIALS",
    subtitle: "Heavyweight Foundation",
    description: "320gsm combed Peruvian Pima cotton. Cut with an architectural drop-shoulder silhouette that maintains clean lines throughout movement.",
    image: "/images/collection_essentials.jpg",
    motionType: "riseBlur",
    aspect: "3:4",
    materials: "100% Long-Staple Pima Cotton",
    palette: "Obsidian Black / Charcoal",
    highlights: ["Pre-shrunk double-rib collar", "Blind-stitched hems", "Zero torque drape"],
    origin: "Piura Valley, Peru",
    quote: "A foundational garment is not casual—it is an exercise in structural permanence.",
    detailImage: "/images/hero_model_second.jpg",
    detailCaption: "Dense single jersey weave / Pre-shrunk rib",
  },
  {
    id: "polo",
    number: "02",
    title: "THE SIGNATURE POLO",
    subtitle: "Mercerized Pique Knit",
    description: "A refined interpretation of classic sporting heritage. Fine-gauge double knit with genuine carved mother-of-pearl buttons and our crown-M chest monogram.",
    image: "/images/collection_polo.jpg",
    motionType: "panLeft",
    aspect: "3:4",
    materials: "Egyptian Giza Cotton & Merino",
    palette: "Deep Forest Green / Muted Stone",
    highlights: ["Non-curling reinforced collar", "Antique gold embroidered insignia", "Split-tail vented hem"],
    origin: "Como, Italy",
    quote: "Sporting heritage elevated to an art of quiet authority.",
    detailImage: "/images/hero_polo_detail.jpg",
    detailCaption: "24K Gold embroidered Crown-M / Mercerized knit",
  },
  {
    id: "shirts",
    number: "03",
    title: "BESPOKE SHIRTS",
    subtitle: "High-Count Poplin & Oxford",
    description: "Woven in Biella, Italy using 140/2 double-twisted yarns. Crisp, breathable, and cut with a tailored spread collar suited for day and evening wear.",
    image: "/images/collection_shirts.jpg",
    motionType: "clipReveal",
    aspect: "3:4",
    materials: "140/2 Italian Poplin & Crisp Linen",
    palette: "Warm Ivory / Optical White",
    highlights: ["Hand-turned collar band", "Removable brass collar stays", "French mitered cuffs"],
    origin: "Biella, Italy",
    quote: "The shirt is an architectural canvas between body and tailored jacket.",
    detailImage: "/images/runway_04.jpg",
    detailCaption: "140/2 double-twist Italian poplin / French mitered cuff",
  },
  {
    id: "checks",
    number: "04",
    title: "ARCHITECTURAL CHECKS",
    subtitle: "Micro-Houndstooth & Flannel",
    description: "Subtle geometric patterns scaled for modern depth. Brushed organic cotton with rich textural complexity that transitions seamlessly between formal and casual.",
    image: "/images/collection_checks.jpg",
    motionType: "scaleReveal",
    aspect: "3:4",
    materials: "Brushed Melange Cotton Wool",
    palette: "Charcoal / Warm Stone",
    highlights: ["Pattern-matched front placket", "Natural buffalo horn buttons", "Soft washed finish"],
    origin: "Huddersfield, England",
    quote: "Micro-geometry cut with mathematically aligned symmetry.",
    detailImage: "/images/fabric_knit.jpg",
    detailCaption: "Brushed micro-houndstooth / Natural horn buttons",
  },
  {
    id: "tailored",
    number: "05",
    title: "MODERN TAILORED",
    subtitle: "Structural Outerwear & Suiting",
    description: "Unstructured canvassing meets sharp architectural peak lapels. Made from Super 150s virgin wool that drapes with authoritative grace.",
    image: "/images/collection_tailored.jpg",
    motionType: "panRightParallax",
    aspect: "3:4",
    materials: "Super 150s Wool & Cashmere",
    palette: "Deep Charcoal / Obsidian",
    highlights: ["Full floating canvas construction", "Functional surgeon cuffs", "Silk-cupro interior lining"],
    origin: "Naples & Milan, Italy",
    quote: "An authoritative drape that commands without speaking.",
    detailImage: "/images/runway_01.jpg",
    detailCaption: "Super 150s floating canvas / Peak lapel architecture",
  },
];

export const runwayItems: GarmentItem[] = [
  {
    id: "runway-01",
    name: "Double-Breasted Wool Trench",
    category: "Outerwear",
    silhouette: "Structured Longline",
    fabric: "Dense Wool Melange",
    color: "Deep Black",
    year: "2026",
    image: "/images/runway_01.jpg",
    tag: "RUNWAY LOOK 01",
    editorialNote: "Commanding length with storm flap architecture and hand-carved horn buckles.",
  },
  {
    id: "runway-02",
    name: "Relaxed Stone Linen Camp Shirt",
    category: "Casual Shirts",
    silhouette: "Fluid Relaxed",
    fabric: "Normandy Washed Linen",
    color: "Muted Stone",
    year: "2026",
    image: "/images/runway_02.jpg",
    tag: "RUNWAY LOOK 02",
    editorialNote: "Effortless casual quiet luxury for Mediterranean or warm urban settings.",
  },
  {
    id: "runway-03",
    name: "Architectural Houndstooth Shirt & Watch",
    category: "Cuffs & Tailoring",
    silhouette: "Bespoke Fit",
    fabric: "120s Brushed Cotton",
    color: "Charcoal & Stone",
    year: "2026",
    image: "/images/runway_04.jpg",
    tag: "DETAIL LOOK 03",
    editorialNote: "Precision cuff tailoring designed to sit flush against haute horlogerie timepieces.",
  },
  {
    id: "runway-04",
    name: "Cashmere Knit & Weekend Holdall",
    category: "Travel & Knitwear",
    silhouette: "Contemporary Traveler",
    fabric: "Grade-A Mongolian Cashmere",
    color: "Charcoal Grey",
    year: "2026",
    image: "/images/runway_05.jpg",
    tag: "TRAVEL LOOK 04",
    editorialNote: "Quiet authority in motion. Sculpted crewneck paired with full-grain calfskin leather.",
  },
  {
    id: "runway-05",
    name: "Signature Peak Lapel Wool Jacket",
    category: "Tailored Suiting",
    silhouette: "Sculpted Hourglass",
    fabric: "Super 150s Virgin Wool",
    color: "Deep Charcoal",
    year: "2026",
    image: "/images/collection_tailored.jpg",
    tag: "EVENING LOOK 05",
    editorialNote: "A statement of status. Hand-padded lapels roll gracefully down to a low-button stance.",
  },
  {
    id: "runway-06",
    name: "Forest Green Signature Polo",
    category: "Sporting Knit",
    silhouette: "Athletic Tailored",
    fabric: "Double Mercerized Cotton",
    color: "Deep Forest Green",
    year: "2026",
    image: "/images/collection_polo.jpg",
    tag: "HERITAGE LOOK 06",
    editorialNote: "Embroidered with the MONARCH Crown-M insignia in 24-karat tone antique gold thread.",
  },
];
