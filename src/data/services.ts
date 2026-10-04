import { ServiceOffering } from '../types';

export const SERVICES: ServiceOffering[] = [
  {
    id: 'local-business-growth',
    title: 'Local Business Growth',
    category: 'Discovery & Presence',
    description: 'Ensure local customers find your exact business first when searching on Google Maps and regional queries.',
    deliverables: [
      'Google Business Profile complete verification & audit',
      'Local citation building & NAP consistency enforcement',
      'Review acceleration workflows & post-service review triggers',
      'Geo-targeted local visibility expansion across city radius'
    ],
    outcome: 'Dominant local visibility within your city and surrounding commercial radius.'
  },
  {
    id: 'website-conversion',
    title: 'Website & Conversion',
    category: 'Sales Engineering',
    description: 'Turn passive web visitors into direct phone calls and high-intent WhatsApp inquiries.',
    deliverables: [
      'High-speed, mobile-optimized landing pages',
      'Instant one-tap WhatsApp funnel integration',
      'Clear, trust-inducing value proposition copy',
      'Frictionless inquiry forms & call-to-action placement'
    ],
    outcome: 'Higher conversion rate from existing search and social traffic.'
  },
  {
    id: 'social-content',
    title: 'Social & Content',
    category: 'Trust & Engagement',
    description: 'Build local authority with focused video reels and real-world proof that establish immediate credibility.',
    deliverables: [
      'Short-form Reels and video scripting tailored to local queries',
      'Instagram and Facebook profile optimization & bio funnel',
      'Behind-the-scenes & customer story showcase',
      'Consistent publishing calendar focused on customer pain points'
    ],
    outcome: 'A recognizable, authentic brand that customers in your area remember and trust.'
  },
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization)',
    category: 'Organic Traffic',
    description: 'Systematic ranking improvements for high-commercial-intent search queries in your industry.',
    deliverables: [
      'Technical SEO audits and Core Web Vitals speed optimization',
      'On-page content optimization for commercial services',
      'Local schema architecture (LocalBusiness JSON-LD)',
      'High-intent buyer keyword mapping and search monitoring'
    ],
    outcome: 'Sustainable organic discovery without depending exclusively on paid ads.'
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    category: 'Paid Acquisition',
    description: 'Targeted Google and Meta ad campaigns engineered for measurable inquiries rather than empty clicks.',
    deliverables: [
      'Google Search Ads targeted to active local buyers',
      'Meta (Instagram & Facebook) lead campaigns with WhatsApp routing',
      'Hyper-local geo-fencing around commercial zones',
      'End-to-end conversion tracking and monthly cost-per-lead reporting'
    ],
    outcome: 'Predictable, controlled stream of customer inquiries measured by real cost per inquiry.'
  },
  {
    id: 'ai-search-visibility',
    title: 'AI Search Visibility (AEO & GEO)',
    category: 'Next-Gen Search',
    description: 'Prepare your brand to be cited and recommended by AI answer engines (ChatGPT, Google Gemini, Perplexity).',
    deliverables: [
      'Answer Engine Optimization (AEO) structure for direct factual queries',
      'Generative Engine Optimization (GEO) digital PR and entity indexing',
      'Knowledge graph alignment across verified public directories',
      'AI prompt benchmarking for category searches in your region'
    ],
    outcome: 'Presence inside AI-generated business recommendations as search behavior evolves.'
  }
];
