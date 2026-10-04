export type PrimaryMarketingGoal =
  | 'More Calls'
  | 'More WhatsApp Enquiries'
  | 'More Walk-ins'
  | 'More Website Leads'
  | 'More Instagram Customers'
  | 'More Local Visibility'
  | 'More Sales';

export interface AuditFormData {
  // Step 1
  businessName: string;
  businessCategory: string;
  city: string;
  // Step 2
  websiteUrl: string;
  gbpUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  // Step 3
  whatsappNumber: string;
  email: string;
  primaryGoal: PrimaryMarketingGoal;
}

export interface ScoreCategory {
  title: string;
  score: number;
  maxScore: number;
  benchmark: number;
  status: 'Critical' | 'Needs Attention' | 'Good' | 'Strong';
  summary: string;
  points: string[];
}

export interface PriorityAction {
  id: number;
  title: string;
  impact: 'High' | 'Very High' | 'Critical';
  effort: 'Quick Win' | 'Medium Effort' | 'Strategic';
  description: string;
  estimatedTimeline: string;
}

export interface CompetitorComparisonMetric {
  category: string;
  yourBusiness: number;
  competitorAverage: number;
  unit: string;
  gapLabel: string;
}

export interface AuditReport {
  id: string;
  createdAt: string;
  isDemo: boolean;
  businessName: string;
  businessCategory: string;
  city: string;
  overallScore: number;
  categories: {
    googlePresence: ScoreCategory;
    website: ScoreCategory;
    socialMedia: ScoreCategory;
    localSeo: ScoreCategory;
    customerTrust: ScoreCategory;
    conversion: ScoreCategory;
  };
  working: string[];
  needsAttention: string[];
  highPriority: PriorityAction[];
  competitorBenchmark: CompetitorComparisonMetric[];
  aiInsights: string[];
}

export interface LeadSubmission {
  id: string;
  createdAt: string;
  name: string;
  businessName: string;
  phone: string;
  email: string;
  city: string;
  businessType: string;
  mainProblem: string;
  budgetRange: string;
  preferredContactMethod: 'WhatsApp' | 'Phone Call' | 'Email';
  status: 'New' | 'In Review' | 'Growth Plan Ready' | 'Contacted';
}

export interface ServiceOffering {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  outcome: string;
}

export interface CaseStudy {
  id: string;
  business: string;
  industry: string;
  location: string;
  isSample: boolean;
  problem: string;
  auditFindings: string[];
  strategy: string[];
  implementation: string[];
  results: {
    metric: string;
    label: string;
    timeframe: string;
  }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  summary: string;
  keyTakeaways: string[];
  content: string;
}
