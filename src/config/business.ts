/**
 * Business Configuration for DigiGrowth Intelligence
 * Centralized configuration to enable seamless rebranding and market expansion.
 */

export interface LocationConfig {
  slug: string;
  name: string;
  state: string;
  isInitialMarket?: boolean;
  marketHighlights: string[];
  localKeywords: string[];
}

export interface BusinessConfig {
  BUSINESS_NAME: string;
  TAGLINE: string;
  SUPPORTING_TAGLINE: string;
  CORE_MESSAGE: string;
  WHATSAPP_NUMBER: string;
  PHONE: string;
  EMAIL: string;
  PRIMARY_CITY: string;
  PRIMARY_STATE: string;
  COUNTRY: string;
  LOCATIONS: LocationConfig[];
  INDUSTRIES: string[];
  SOCIAL_LINKS: {
    linkedin: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  BUSINESS_NAME: "DigiGrowth Intelligence",
  TAGLINE: "Before spending more on marketing, find out what's actually stopping your business from growing online.",
  SUPPORTING_TAGLINE: "Audit your Google presence, website, social media, customer trust and conversion journey — then get a practical growth plan.",
  CORE_MESSAGE: "We don't just sell marketing services. We identify growth gaps and help fix them.",
  
  // Official contact information - easily modifiable
  WHATSAPP_NUMBER: "918808707737", // E.164 formatted without '+' for WhatsApp API
  PHONE: "+91 88087 07737",
  EMAIL: "hello@digigrowthintelligence.com",
  PRIMARY_CITY: "Azamgarh",
  PRIMARY_STATE: "Uttar Pradesh",
  COUNTRY: "India",

  LOCATIONS: [
    {
      slug: "azamgarh",
      name: "Azamgarh",
      state: "Uttar Pradesh",
      isInitialMarket: true,
      marketHighlights: [
        "Rapidly digitizing commercial hub of Eastern UP",
        "High local search intent for clinics, showrooms, coaching & retail",
        "Significant Google Maps discovery gap among local businesses"
      ],
      localKeywords: [
        "Digital Marketing Agency Azamgarh",
        "Digital Growth Agency Azamgarh",
        "SEO Agency Azamgarh",
        "Local SEO Azamgarh",
        "Website Development Azamgarh",
        "Google Business Profile Management Azamgarh"
      ]
    },
    {
      slug: "varanasi",
      name: "Varanasi",
      state: "Uttar Pradesh",
      isInitialMarket: false,
      marketHighlights: [
        "Major tourist, cultural, healthcare, and educational center",
        "Intense local competition across hotels, dining, clinics & retail",
        "Need for multi-channel reputation and AI search visibility"
      ],
      localKeywords: [
        "Digital Marketing Agency Varanasi",
        "Local SEO Agency Varanasi",
        "Google Maps Optimization Varanasi"
      ]
    },
    {
      slug: "lucknow",
      name: "Lucknow",
      state: "Uttar Pradesh",
      isInitialMarket: false,
      marketHighlights: [
        "State capital with flourishing B2B, real estate, and healthcare sectors",
        "Higher customer acquisition cost requiring tighter conversion funnels",
        "High demand for automated WhatsApp leads and performance marketing"
      ],
      localKeywords: [
        "Digital Growth Agency Lucknow",
        "Performance Marketing Agency Lucknow",
        "SEO Services Lucknow"
      ]
    },
    {
      slug: "gorakhpur",
      name: "Gorakhpur",
      state: "Uttar Pradesh",
      isInitialMarket: false,
      marketHighlights: [
        "Key regional trade center with booming medical and retail corridors",
        "Large consumer base transitioning to mobile-first discovery"
      ],
      localKeywords: [
        "Digital Marketing Agency Gorakhpur",
        "Local Business Growth Gorakhpur"
      ]
    },
    {
      slug: "delhi-ncr",
      name: "Delhi NCR",
      state: "National Capital Region",
      isInitialMarket: false,
      marketHighlights: [
        "Hyper-competitive metro ecosystem",
        "Advanced AEO, GEO, and cross-channel funnel requirements"
      ],
      localKeywords: [
        "Digital Growth Intelligence India",
        "AEO Agency India",
        "GEO Agency Delhi NCR"
      ]
    }
  ],

  INDUSTRIES: [
    "Hospitals & Clinics",
    "Car Dealerships & Detailing",
    "Coaching Institutes & Schools",
    "Restaurants & Cafes",
    "Hotels & Banquet Venues",
    "Salons, Spas & Aesthetic Centers",
    "Gyms & Fitness Studios",
    "Real Estate & Builders",
    "Retail Stores & Supermarkets",
    "E-commerce Brands",
    "Local Service Providers",
    "Insurance & Financial Firms",
    "Manufacturers & Industrial B2B",
    "Professional Practices (Law, CA, Architecture)"
  ],

  SOCIAL_LINKS: {
    linkedin: "https://linkedin.com/company/digigrowth-intelligence",
    twitter: "https://x.com/digigrowthintel",
    instagram: "https://instagram.com/digigrowthintelligence",
    youtube: "https://youtube.com/@digigrowthintelligence"
  }
};

export const getWhatsAppLink = (message?: string): string => {
  const defaultMsg = "Hi, I want a Digital Growth Audit for my business.";
  const encoded = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${BUSINESS_CONFIG.WHATSAPP_NUMBER}?text=${encoded}`;
};
