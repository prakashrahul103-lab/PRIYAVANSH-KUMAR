import { AuditFormData, AuditReport } from '../types';

/**
 * Audit Service
 * 
 * IMPORTANT ARCHITECTURAL PRINCIPLE:
 * Real third-party APIs (Google Business Profile, Google PageSpeed, Meta Graph, Search Console)
 * are not connected in client demonstration mode. This service provides a transparent,
 * clearly labeled DEMO AUDIT that mirrors production intelligence architecture.
 */

export const generateAuditReport = (formData: AuditFormData): AuditReport => {
  const hasWebsite = Boolean(formData.websiteUrl && formData.websiteUrl.trim().length > 3);
  const hasGbp = Boolean(formData.gbpUrl && formData.gbpUrl.trim().length > 3);
  const hasSocial = Boolean(formData.instagramUrl || formData.facebookUrl);

  return {
    id: `AUD-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }),
    isDemo: true,
    businessName: formData.businessName || 'Your Business',
    businessCategory: formData.businessCategory || 'Local Business',
    city: formData.city || 'Azamgarh',
    overallScore: 68,
    categories: {
      googlePresence: {
        title: 'Google Presence',
        score: hasGbp ? 78 : 54,
        maxScore: 100,
        benchmark: 74,
        status: hasGbp ? 'Good' : 'Needs Attention',
        summary: 'Profile completeness is decent, but lacks structured product catalogues and weekly geo-tagged updates.',
        points: [
          'Primary category is defined, but missing high-value secondary categories',
          'Business hours and NAP (Name, Address, Phone) are mostly consistent',
          'Opportunity: Add verified Q&A entries and regular visual photo updates'
        ]
      },
      website: {
        title: 'Website',
        score: hasWebsite ? 52 : 30,
        maxScore: 100,
        benchmark: 68,
        status: 'Needs Attention',
        summary: 'Site lacks fast mobile response triggers and direct high-intent WhatsApp action triggers.',
        points: [
          'Mobile layout needs dedicated sticky call and WhatsApp buttons',
          'Value proposition is generic and does not answer why a customer should choose you',
          'No visible local trust signals (testimonials, location badge, verified results)'
        ]
      },
      socialMedia: {
        title: 'Social Media',
        score: hasSocial ? 64 : 45,
        maxScore: 100,
        benchmark: 70,
        status: 'Good',
        summary: 'Active aesthetic feed, but content does not actively guide followers into high-intent inbound inquiries.',
        points: [
          'Visual aesthetics are present but posting cadence is inconsistent',
          'Bio lacks a trackable link-in-bio with WhatsApp or consultation booking',
          'Opportunity: Produce short-form Reels answering the top 5 customer questions'
        ]
      },
      localSeo: {
        title: 'Local SEO',
        score: 47,
        maxScore: 100,
        benchmark: 65,
        status: 'Critical',
        summary: 'Search visibility drops sharply 3km outside your core pin location in local search grid queries.',
        points: [
          'Missing location-specific landing pages for surrounding catchment neighborhoods',
          'Local citation profile on Indian business directories is incomplete',
          'No structured LocalBusiness Schema markup detected on the web property'
        ]
      },
      customerTrust: {
        title: 'Customer Trust',
        score: 81,
        maxScore: 100,
        benchmark: 75,
        status: 'Strong',
        summary: 'Existing customer sentiment is your strongest asset, but it is currently underutilized across conversion pages.',
        points: [
          'Strong organic review presence with high positive sentiment',
          'Missing an automated review collection workflow after successful transactions',
          'Reviews are not highlighted on landing pages or social media highlights'
        ]
      },
      conversion: {
        title: 'Conversion',
        score: 49,
        maxScore: 100,
        benchmark: 69,
        status: 'Critical',
        summary: 'Visitor-to-enquiry drop-off is high. Interested prospects encounter too much friction before contacting.',
        points: [
          'Forms have too many fields; lack quick one-tap WhatsApp chat initiation',
          'No clear lead incentive or immediate gratification offer for first-time visitors',
          'Absence of basic conversion event tracking to know where leads drop off'
        ]
      }
    },
    working: [
      'Strong review presence with genuine customer goodwill',
      'Complete contact information and verified location pin',
      'Active social profile with authentic real-world imagery'
    ],
    needsAttention: [
      'Weak website call-to-actions failing to capture high-intent traffic',
      'Inconsistent content frequency and lack of problem-solving Reels',
      'Local SEO gaps causing competitors to rank higher in neighboring areas'
    ],
    highPriority: [
      {
        id: 1,
        title: 'Optimize Google Business Profile with Local Keywords & Catalog',
        impact: 'High',
        effort: 'Quick Win',
        description: 'Update secondary categories, add complete service/product menus with pricing pointers, and publish geo-tagged updates.',
        estimatedTimeline: 'Week 1–2'
      },
      {
        id: 2,
        title: 'Deploy High-Converting WhatsApp & Call Funnel Landing Page',
        impact: 'Critical',
        effort: 'Medium Effort',
        description: 'Build a mobile-first page engineered specifically for one-tap WhatsApp chats and direct phone calls with zero page clutter.',
        estimatedTimeline: 'Week 2–3'
      },
      {
        id: 3,
        title: 'Execute Local Citation & Schema Authority Campaign',
        impact: 'High',
        effort: 'Medium Effort',
        description: 'Standardize Name, Address, and Phone across top regional directories and inject JSON-LD LocalBusiness schema.',
        estimatedTimeline: 'Week 3–4'
      },
      {
        id: 4,
        title: 'Establish a Systematic Review Generation & Case Study Pipeline',
        impact: 'Very High',
        effort: 'Quick Win',
        description: 'Automate post-service WhatsApp review links and transform best reviews into social proof carousels.',
        estimatedTimeline: 'Ongoing'
      }
    ],
    competitorBenchmark: [
      { category: 'Google Presence', yourBusiness: 61, competitorAverage: 74, unit: '/100', gapLabel: '-13 pts gap' },
      { category: 'Website', yourBusiness: 52, competitorAverage: 68, unit: '/100', gapLabel: '-16 pts gap' },
      { category: 'Social Media', yourBusiness: 64, competitorAverage: 70, unit: '/100', gapLabel: '-6 pts gap' },
      { category: 'SEO', yourBusiness: 47, competitorAverage: 65, unit: '/100', gapLabel: '-18 pts gap' },
      { category: 'Reviews', yourBusiness: 81, competitorAverage: 75, unit: '/100', gapLabel: '+6 pts lead' },
      { category: 'Content', yourBusiness: 58, competitorAverage: 72, unit: '/100', gapLabel: '-14 pts gap' },
      { category: 'Conversion', yourBusiness: 49, competitorAverage: 69, unit: '/100', gapLabel: '-20 pts gap' }
    ],
    aiInsights: [
      "Your digital presence appears stronger in customer trust than in local discovery.",
      "Your biggest opportunity is improving the path from social media visitors to enquiries.",
      "Your website should make WhatsApp and phone contact more prominent."
    ]
  };
};

/**
 * Future API Integration Architecture Interfaces
 * In production, these interfaces connect to real microservices without altering the UI contract.
 */
export interface ProductionApiAdapters {
  googleBusinessProfile?: {
    apiKey: string;
    locationId: string;
    fetchLiveMetrics: () => Promise<unknown>;
  };
  googlePageSpeed?: {
    apiKey: string;
    url: string;
    fetchLighthouseMetrics: () => Promise<unknown>;
  };
  metaGraph?: {
    accessToken: string;
    pageId: string;
    fetchEngagement: () => Promise<unknown>;
  };
  searchConsole?: {
    serviceAccount: string;
    fetchQueryImpressions: () => Promise<unknown>;
  };
}
