import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  MessageCircle, 
  TrendingUp, 
  ShieldAlert, 
  Share2, 
  Download,
  Info
} from 'lucide-react';
import { AuditReport } from '../types';
import { getWhatsAppLink } from '../config/business';

interface AuditReportModalProps {
  report: AuditReport | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenGrowthPlan: () => void;
}

export const AuditReportModal: React.FC<AuditReportModalProps> = ({ 
  report, 
  isOpen, 
  onClose,
  onOpenGrowthPlan
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'competitor' | 'actionPlan'>('overview');

  if (!isOpen || !report) return null;

  const scoreCategories = [
    { key: 'googlePresence', title: 'GOOGLE PRESENCE', score: report.categories.googlePresence.score, benchmark: 74, color: 'text-teal-600', stroke: '#0d9488' },
    { key: 'website', title: 'WEBSITE', score: report.categories.website.score, benchmark: 68, color: 'text-amber-600', stroke: '#d97706' },
    { key: 'socialMedia', title: 'SOCIAL MEDIA', score: report.categories.socialMedia.score, benchmark: 70, color: 'text-teal-600', stroke: '#0d9488' },
    { key: 'localSeo', title: 'LOCAL SEO', score: report.categories.localSeo.score, benchmark: 65, color: 'text-rose-600', stroke: '#e11d48' },
    { key: 'customerTrust', title: 'CUSTOMER TRUST', score: report.categories.customerTrust.score, benchmark: 75, color: 'text-emerald-600', stroke: '#059669' },
    { key: 'conversion', title: 'CONVERSION', score: report.categories.conversion.score, benchmark: 69, color: 'text-rose-600', stroke: '#e11d48' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-report-title"
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
      >
        
        {/* Sticky Report Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold tracking-wider text-teal-700 uppercase">
                DIGITAL GROWTH REPORT
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[11px] font-mono bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded font-semibold">
                SAMPLE SCORE — DEMO MODE
              </span>
            </div>

            <h2 id="audit-report-title" className="text-xl sm:text-2xl font-extrabold text-slate-950 font-display">
              {report.businessName}
            </h2>

            <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
              <span>{report.businessCategory}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {report.city}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-[11px] text-slate-400">ID: {report.id}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <button
              onClick={() => {
                const text = `Digital Growth Audit for ${report.businessName} (${report.city}) - Score: ${report.overallScore}/100`;
                navigator.clipboard?.writeText(window.location.href);
                alert("Report link copied to clipboard!");
              }}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
              title="Share report"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Close report"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Demo Mode Notice */}
        <div className="px-6 py-2 bg-slate-900 text-slate-300 text-xs flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>
              <strong>Demo Audit:</strong> Connect live data sources for production analysis. Simulated benchmark based on regional industry baseline.
            </span>
          </div>
        </div>

        {/* Scrollable Report Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Top Score Banner: Overall Circular Progress & Executive Summary */}
          <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              {/* Circular Progress Indicator */}
              <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#1e293b"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#0d9488"
                    strokeWidth="8"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - report.overallScore / 100)}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-extrabold text-white font-mono tabular-nums">
                    {report.overallScore}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">/ 100</span>
                </div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-teal-400 font-semibold mb-1">
                  Overall Digital Growth Score
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                  Growth Leaks Detected in Conversion &amp; Local Discovery
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-lg leading-relaxed">
                  Your business possesses strong customer sentiment, but potential clients in {report.city} drop off due to weak website inquiry channels and narrow local SEO radius.
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row md:flex-col gap-2">
              <button
                onClick={onOpenGrowthPlan}
                className="w-full px-5 py-3 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>GET MY GROWTH PLAN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={getWhatsAppLink(`Hi, I reviewed the Digital Growth Report for ${report.businessName} (Score: ${report.overallScore}/100) and want to discuss next steps.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 text-teal-400" />
                <span>TALK ON WHATSAPP</span>
              </a>
            </div>

          </div>

          {/* 7. SIX EXACT SCORE CARDS */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider font-mono">
                DIMENSION SCORE CARDS
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                Sample Score — Demo Mode
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {scoreCategories.map((cat) => (
                <div 
                  key={cat.key}
                  className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-2xs"
                >
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {cat.title}
                  </div>

                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tabular-nums">
                      {cat.score}
                      <span className="text-xs text-slate-400 font-normal">/100</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Bench: {cat.benchmark}
                    </span>
                  </div>

                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-3">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${cat.score}%`,
                        backgroundColor: cat.stroke 
                      }} 
                    />
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {report.categories[cat.key as keyof typeof report.categories]?.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 8. AUDIT INSIGHTS (WHAT'S WORKING, NEEDS ATTENTION, HIGH PRIORITY) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* What's Working */}
            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/70">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>WHAT&apos;S WORKING</span>
              </div>
              <ul className="space-y-2.5">
                {report.working.map((item, idx) => (
                  <li key={idx} className="text-xs text-emerald-950 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Needs Attention */}
            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/70">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>NEEDS ATTENTION</span>
              </div>
              <ul className="space-y-2.5">
                {report.needsAttention.map((item, idx) => (
                  <li key={idx} className="text-xs text-amber-950 flex items-start gap-2">
                    <span className="text-amber-600 font-bold">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* High Priority Actions */}
            <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/70">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800 mb-3">
                <TrendingUp className="w-4 h-4 text-rose-600" />
                <span>HIGH PRIORITY (FIX FIRST)</span>
              </div>
              <ol className="space-y-2.5">
                {report.highPriority.map((act, idx) => (
                  <li key={act.id} className="text-xs text-rose-950 flex items-start gap-2">
                    <span className="font-mono font-bold text-rose-600 shrink-0">0{idx + 1}.</span>
                    <div>
                      <span className="font-semibold block">{act.title}</span>
                      <span className="text-[11px] text-rose-700/80">{act.description}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

          </div>

          {/* 9. COMPETITOR GAP VISUAL COMPARISON */}
          <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-200 gap-2">
              <div>
                <h3 className="text-base font-extrabold text-slate-900 font-display">
                  COMPETITOR GAP ANALYSIS
                </h3>
                <p className="text-xs text-slate-500">
                  Business vs Competitor Average across 7 growth dimensions
                </p>
              </div>

              <span className="text-[11px] font-mono font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-lg self-start sm:self-center">
                Sample competitor benchmark — demo data
              </span>
            </div>

            <div className="space-y-4">
              {report.competitorBenchmark.map((comp) => {
                const isAhead = comp.gapLabel.startsWith('+');
                return (
                  <div key={comp.category} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800">{comp.category}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-slate-500">
                          You: <strong className="text-slate-900">{comp.yourBusiness}</strong> | Avg: <strong className="text-teal-700">{comp.competitorAverage}</strong>
                        </span>
                        <span className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded ${
                          isAhead ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {comp.gapLabel}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-slate-700 h-full rounded-full" style={{ width: `${comp.yourBusiness}%` }} />
                      </div>
                      <div className="bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-teal-600 h-full rounded-full" style={{ width: `${comp.competitorAverage}%` }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 10. AI GROWTH INSIGHTS */}
          <div className="bg-gradient-to-r from-slate-950 to-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 mb-4 font-mono">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>AI GROWTH INSIGHTS (SYNTHESIZED DIAGNOSTIC)</span>
            </div>

            <div className="space-y-3">
              {report.aiInsights.map((insight, idx) => (
                <div key={idx} className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-mono text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    &ldquo;{insight}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 mt-4">
              Demo insights shown. In production, these insights are generated directly from Google Search Console, Google PageSpeed, and Meta Graph API data.
            </p>
          </div>

          {/* 11. CONVERSION CTA */}
          <div className="p-6 sm:p-8 bg-slate-50 border border-slate-300 rounded-2xl text-center space-y-4">
            <h4 className="text-xl sm:text-2xl font-bold font-display text-slate-950">
              Want us to fix these growth gaps?
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Get a practical action plan tailored to your business with exact technical steps and keyword maps.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={onOpenGrowthPlan}
                className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>GET MY GROWTH PLAN</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>

              <a
                href={getWhatsAppLink(`Hi, I reviewed the Digital Growth Report for ${report.businessName} and want to discuss getting our Growth Plan implemented.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-teal-600" />
                <span>TALK ON WHATSAPP</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
