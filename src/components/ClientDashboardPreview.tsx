import React, { useState } from 'react';
import { 
  TrendingUp, 
  Calendar, 
  PhoneCall, 
  MessageSquare, 
  Search, 
  Globe, 
  Users, 
  Star,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export const ClientDashboardPreview: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<'Jan' | 'Feb' | 'Mar' | 'Apr'>('Apr');

  const monthlyData = {
    Jan: {
      score: 54,
      calls: 38,
      whatsapp: 44,
      organicImpressions: '12,400',
      gbpViews: '3,800',
      costPerLead: '₹420',
      whatWeDid: [
        'Executed baseline technical SEO audit and resolved 34 crawl errors',
        'Claimed Google Business Profile, updated official NAP and business hours',
        'Launched first WhatsApp-integrated landing page prototype'
      ],
      whatImproved: [
        'Initial discovery started reflecting in Eastern UP search radius',
        'Bounce rate decreased from 78% to 58% on mobile visits'
      ],
      whatNeedsAttention: [
        'Review collection pipeline still manual and slow',
        'Google Ads cost per click was higher than regional benchmark'
      ],
      nextMonth: [
        'Launch automated post-transaction review collection SMS/WhatsApp',
        'Deploy 4 targeted Google Search Ad campaigns with strict negative keyword lists'
      ]
    },
    Feb: {
      score: 63,
      calls: 62,
      whatsapp: 79,
      organicImpressions: '21,800',
      gbpViews: '6,200',
      costPerLead: '₹310',
      whatWeDid: [
        'Restructured Google Business Profile categories and added 24 service photos',
        'Activated automated review generation, gathering 28 new 5-star ratings',
        'Fine-tuned Google Search ad copy for high-intent local queries'
      ],
      whatImproved: [
        'Local 3-Pack rank moved from #8 to #4 across 5 commercial queries',
        'Direct WhatsApp inquiries surged +79% from mobile landing page'
      ],
      whatNeedsAttention: [
        'Short-form video output remains inconsistent; need dedicated filming schedule',
        'Retargeting audience pool too small for Meta Ads'
      ],
      nextMonth: [
        'Script and edit 6 problem-solving Reels addressing common local customer objections',
        'Implement LocalBusiness JSON-LD schema across all web pages'
      ]
    },
    Mar: {
      score: 75,
      calls: 94,
      whatsapp: 132,
      organicImpressions: '38,200',
      gbpViews: '11,400',
      costPerLead: '₹240',
      whatWeDid: [
        'Published 8 educational video Reels and established weekly posting cadence',
        'Injected structured LocalBusiness schema and directory citations',
        'Launched geo-fenced Meta video ad campaigns around commercial center'
      ],
      whatImproved: [
        'Ranked #2 on Google Maps for highest-volume local category search',
        'Inbound phone calls increased +51% month-over-month',
        'Cost per qualified inquiry dropped to ₹240'
      ],
      whatNeedsAttention: [
        'Lead response time during peak lunch hours exceeded 20 minutes',
        'Need weekend auto-responder sequence for WhatsApp'
      ],
      nextMonth: [
        'Install 24/7 automated WhatsApp qualification flow with instant brochure routing',
        'Initiate Answer Engine Optimization (AEO) for AI search citations'
      ]
    },
    Apr: {
      score: 84,
      calls: 142,
      whatsapp: 218,
      organicImpressions: '56,800',
      gbpViews: '18,900',
      costPerLead: '₹185',
      whatWeDid: [
        'Configured 24/7 WhatsApp AI qualification workflow for after-hours leads',
        'Published 12 customer transformation videos and verified Google Q&A database',
        'Optimized AEO entity mapping across authoritative regional portals'
      ],
      whatImproved: [
        'Consistent #1 and #2 ranking across 14 primary and secondary search queries',
        'Record 218 verified WhatsApp inquiries with 88% qualification rate',
        'Attribution tracking confirmed 3.4x return on marketing spend'
      ],
      whatNeedsAttention: [
        'High demand creating operational capacity constraints during weekends',
        'Consider introducing appointment booking advance-deposit mechanism'
      ],
      nextMonth: [
        'Scale top-performing Meta video ads into neighboring district radius',
        'Launch VIP loyalty retention workflow for repeat clientele'
      ]
    }
  };

  const current = monthlyData[selectedMonth];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-teal-700 tracking-wide uppercase mb-2">
              Future-Ready Client Experience
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display mb-4 [text-wrap:balance]">
              What Working With Us Actually Looks Like: The Client Intelligence Dashboard
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
              No confusing 40-page PDF reports filled with vanity impressions. Every month, you access a transparent dashboard showing actions completed, rankings won, and inquiries generated.
            </p>
          </div>

          {/* Month Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start lg:self-end">
            {(['Jan', 'Feb', 'Mar', 'Apr'] as const).map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedMonth === month
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {month === 'Jan' && 'Month 1 (Jan)'}
                {month === 'Feb' && 'Month 2 (Feb)'}
                {month === 'Mar' && 'Month 3 (Mar)'}
                {month === 'Apr' && 'Month 4 (Apr)'}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Shell */}
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          
          {/* Executive KPI Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pb-8 mb-8 border-b border-slate-800">
            
            <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">Growth Score</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-white font-mono">{current.score}</span>
                <span className="text-xs text-slate-500 font-mono">/100</span>
              </div>
              <span className="text-[10px] text-teal-400 font-mono mt-1 block">+ progress tracked</span>
            </div>

            <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">Direct Phone Calls</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-teal-300 font-mono">{current.calls}</span>
                <PhoneCall className="w-3.5 h-3.5 text-teal-400 ml-1" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono mt-1 block">Google Maps clicks</span>
            </div>

            <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">WhatsApp Leads</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-teal-300 font-mono">{current.whatsapp}</span>
                <MessageSquare className="w-3.5 h-3.5 text-teal-400 ml-1" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono mt-1 block">Verified inquiries</span>
            </div>

            <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">Organic Impressions</span>
              <span className="text-2xl font-extrabold text-white font-mono">{current.organicImpressions}</span>
              <span className="text-[10px] text-slate-400 font-mono mt-1 block">Local search queries</span>
            </div>

            <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">Google Maps Views</span>
              <span className="text-2xl font-extrabold text-white font-mono">{current.gbpViews}</span>
              <span className="text-[10px] text-slate-400 font-mono mt-1 block">Profile discovery</span>
            </div>

            <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">Cost Per Inbound Lead</span>
              <span className="text-2xl font-extrabold text-emerald-400 font-mono">{current.costPerLead}</span>
              <span className="text-[10px] text-slate-400 font-mono mt-1 block">Blended paid &amp; organic</span>
            </div>

          </div>

          {/* 4 Core Action Cards required by spec */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. WHAT WE DID */}
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>WHAT WE DID ({selectedMonth})</span>
              </div>
              <ul className="space-y-3">
                {current.whatWeDid.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <span className="text-teal-400 font-mono font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. WHAT IMPROVED */}
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>WHAT IMPROVED</span>
              </div>
              <ul className="space-y-3">
                {current.whatImproved.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <span className="text-emerald-400 font-mono font-bold">↑</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. WHAT NEEDS ATTENTION */}
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
                <AlertCircle className="w-4 h-4" />
                <span>WHAT NEEDS ATTENTION</span>
              </div>
              <ul className="space-y-3">
                {current.whatNeedsAttention.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <span className="text-amber-400 font-mono font-bold">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. NEXT MONTH */}
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">
                <Clock className="w-4 h-4" />
                <span>PLANNED SPRINT NEXT MONTH</span>
              </div>
              <ul className="space-y-3">
                {current.nextMonth.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <span className="text-indigo-400 font-mono font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Footer of Client Dashboard */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Interactive Client Portal Preview · Retainer clients receive secure live dashboard access with custom domain.</span>
            </div>
            <div className="font-mono text-[11px] text-slate-500">
              Updated: Weekly Sync Every Monday
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
