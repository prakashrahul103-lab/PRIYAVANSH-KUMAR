import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'clinic-diagnostic',
    business: 'Metro Diagnostic & Dental Specialty Center',
    industry: 'Hospitals & Clinics',
    location: 'Azamgarh, UP',
    isSample: true,
    problem: 'Despite high-tech diagnostic equipment and experienced practitioners, patient walk-ins from outside the immediate neighborhood had stagnated. Google Maps profile ranked #9 for core queries like "best dental clinic" or "digital x-ray near me", and social channels only posted generic medical holidays.',
    auditFindings: [
      'Google Business Profile lacked secondary treatment categories and service menus',
      'Over 60 satisfied patient reviews remained unreplied, reducing Google ranking signals',
      'Website had 5.8s mobile load time with no direct WhatsApp appointment button',
      'Zero local citations across UP healthcare directories'
    ],
    strategy: [
      'Phase 1: Full Google Business Profile restructuring with treatment-specific categories',
      'Phase 2: Deploy lightweight 1.2s mobile appointment landing page with instant WhatsApp booking',
      'Phase 3: Systematic review generation pipeline via SMS/WhatsApp post-treatment',
      'Phase 4: Targeted educational video shorts addressing common dental myths'
    ],
    implementation: [
      'Updated 18 primary and secondary categories on Google Maps',
      'Installed one-tap WhatsApp appointment routing with automated receptionist reply',
      'Secured 45 verified 5-star patient reviews in 60 days via direct automated request',
      'Published 8 hyper-local doctor Q&A videos on Instagram and YouTube Shorts'
    ],
    results: [
      { metric: '#2 Ranking', label: 'In Google Maps Local 3-Pack', timeframe: 'Within 75 days' },
      { metric: '+184%', label: 'Inbound WhatsApp Consultation Inquiries', timeframe: 'Quarter 1' },
      { metric: '4.8 ★', label: 'Average Trust Rating Across 140+ Reviews', timeframe: 'Maintained' }
    ]
  },
  {
    id: 'automobile-detailing',
    business: 'Apex Ceramic Shield & Detailing Studio',
    industry: 'Car Dealerships & Detailing',
    location: 'Varanasi / Eastern UP',
    isSample: true,
    problem: 'The business was spending ₹45,000 monthly on generic Facebook boost ads, generating casual likes but almost zero inquiries for high-ticket ceramic coating packages (₹18,000 to ₹40,000).',
    auditFindings: [
      'Boosted posts had no conversion destination; traffic went to an un-optimized Facebook home tab',
      'Absence of before/after transformation video reels showing local vehicle numbers',
      'Google Maps listing had low review velocity compared to competitor studios',
      'No retargeting mechanism to capture car enthusiasts researching coatings'
    ],
    strategy: [
      'Stop vanity boosting; allocate budget toward high-intent Google Search and Meta video funnels',
      'Build a transparent, interactive package pricing estimator linked directly to WhatsApp',
      'Create high-contrast cinematic process reels emphasizing hydrophobic durability',
      'Implement localized geo-fencing targeting premium residential sectors'
    ],
    implementation: [
      'Launched 3 dedicated landing pages showcasing real client vehicle transformations',
      'Introduced direct "Book Paint Inspection on WhatsApp" workflow',
      'Optimized Google Maps listing with high-resolution studio photos and pricing cards',
      'Activated targeted Meta Ads featuring real customer pickup reactions'
    ],
    results: [
      { metric: '3.8x', label: 'Increase in Qualified Ceramic Package Inquiries', timeframe: 'Month 2' },
      { metric: '-54%', label: 'Reduction in Cost Per Qualified Lead', timeframe: 'After Funnel Launch' },
      { metric: '72%', label: 'Of Inbound Inquiries Closed via WhatsApp Workflow', timeframe: 'Ongoing' }
    ]
  },
  {
    id: 'coaching-institute',
    business: 'Pratibha Science & Competitive Academy',
    industry: 'Coaching Institutes & Schools',
    location: 'Azamgarh & Gorakhpur Region',
    isSample: true,
    problem: 'Annual admission inquiries were declining due to aggressive digital campaigns from national edtech players. Parents could not easily find student topper verification or syllabus schedules online.',
    auditFindings: [
      'Website was a non-responsive desktop portal with broken PDF download links',
      'Google Maps listing had outdated phone numbers and unanswered parent questions',
      'Zero presence in local search results for "IIT-JEE coaching in Azamgarh"',
      'No student result testimonials or scholarship test registration portal'
    ],
    strategy: [
      'Modernize digital footprint with mobile-first Scholarship Entrance Test registration',
      'Restructure Google Business Profile with authentic classroom photos and faculty bios',
      'Create student video success stories addressing parent concerns in Hindi and English',
      'Run hyper-targeted local Google Search ads for admissions season'
    ],
    implementation: [
      'Launched mobile-friendly admission portal with one-click syllabus download via WhatsApp',
      'Published 12 video testimonials of top rankers from previous batch',
      'Claimed and updated Google Maps pins for both regional branch locations',
      'Set up automated lead management dashboard for institute counseling staff'
    ],
    results: [
      { metric: '420+', label: 'Online Scholarship Test Registrations', timeframe: 'Pre-admission cycle' },
      { metric: '#1 Rank', label: 'For Regional Competitive Coaching Searches', timeframe: 'Across 25km radius' },
      { metric: '82%', label: 'Inquiries Handled Within 15 Minutes via WhatsApp', timeframe: 'Admission window' }
    ]
  }
];
