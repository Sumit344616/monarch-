export interface Showroom {
  city: string;
  address: string;
  district: string;
  phone: string;
}

export interface BrandData {
  name: string;
  tagline: string;
  season: string;
  established: string;
  descriptor: string;
  philosophy: {
    headline: string;
    subheadline: string;
    quote: string;
    body: string[];
  };
  contact: {
    conciergeEmail: string;
    pressEmail: string;
    vipAppointments: string;
    phone: string;
    address: string;
  };
  social: {
    instagram: string;
    journal: string;
    atelier: string;
  };
  showrooms: Showroom[];
}

export const brandData: BrandData = {
  name: "MONARCH",
  tagline: "BUILT FOR PRESENCE.",
  season: "SPRING / SUMMER 2026",
  established: "EST. 2026",
  descriptor: "CONTEMPORARY HAUTE MENSWEAR",
  philosophy: {
    headline: "MORE THAN CLOTHING.",
    subheadline: "BUILT FOR PRESENCE",
    quote: "Style is not about being noticed. It is about being remembered.",
    body: [
      "MONARCH was founded on a singular conviction: that a man's attire should command a room before a single syllable is uttered.",
      "We reject the fleeting frenzy of trend cycles in favor of permanent architectural form, bespoke Italian tailoring, and ultra-dense natural textiles.",
      "Every seam, every horn button, every millimeter of lapel roll is engineered with disciplined precision. Built with quiet authority. Built for presence."
    ],
  },
  contact: {
    conciergeEmail: "concierge@monarch-menswear.com",
    pressEmail: "press@monarch-menswear.com",
    vipAppointments: "private@monarch-menswear.com",
    phone: "+44 (0) 20 7946 0928",
    address: "32 Savile Row, Mayfair, London W1S 3PR",
  },
  social: {
    instagram: "https://instagram.com/monarch.menswear",
    journal: "/journal",
    atelier: "/craft",
  },
  showrooms: [
    {
      city: "LONDON",
      district: "Mayfair",
      address: "32 Savile Row",
      phone: "+44 20 7946 0928",
    },
    {
      city: "MILAN",
      district: "Quadrilatero",
      address: "Via Montenapoleone 18",
      phone: "+39 02 8739 4110",
    },
    {
      city: "NEW YORK",
      district: "SoHo",
      address: "74 Mercer Street",
      phone: "+1 212 555 0192",
    },
    {
      city: "TOKYO",
      district: "Aoyama",
      address: "5-7-22 Minami-Aoyama",
      phone: "+81 3 5555 0148",
    },
  ],
};
