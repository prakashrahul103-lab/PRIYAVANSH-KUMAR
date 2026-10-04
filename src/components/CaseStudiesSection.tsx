import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  AlertCircle, 
  Search, 
  Compass, 
  CheckCircle, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudy } from '../types';

interface CaseStudiesSectionProps {
  onOpenAudit: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenAudit }) => {
  const [activeCaseId, setActiveCaseId] = useState<string>(CASE_STUDIES[0].id);

  const activeCase: CaseStudy = CASE_STUDIES.find(c => c.id === activeCaseId) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-teal-700 tracking-wide uppercase mb-2">
            Methodology &amp; Evidence
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display mb-4 [text-wrap:balance]">
            How the Growth Audit Architecture Solves Real Business Gaps
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Explore sample walkthroughs detailing the diagnostic and execution sequence across regional healthcare, automotive detailing, and education sectors.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCaseId(c.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeCaseId === c.id
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Building2 className="w-4 h-4 text-teal-400" />
              <span>{c.industry}</span>
            </button>
          ))}
        </div>

        {/* Case Study Card adhering strictly to 6-part anatomy */}
        <div className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-10">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 rounded">
                  SAMPLE CASE STUDY — Demonstration of audit-driven methodology
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-display">
                {activeCase.business}
              </h3>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                <span>{activeCase.industry}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {activeCase.location}
                </span>
              </div>
            </div>

            <button
              onClick={onOpenAudit}
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-colors self-start sm:self-center flex items-center gap-1.5"
            >
              <span>AUDIT YOUR BUSINESS SIMILARLY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 6-Part Anatomy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            
            {/* 1. Problem */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>1. Problem &amp; Bottleneck</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeCase.problem}
              </p>
            </div>

            {/* 2. Audit Findings */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                <Search className="w-4 h-4" />
                <span>2. Digital Growth Audit Discoveries</span>
              </div>
              <ul className="space-y-2">
                {activeCase.auditFindings.map((finding, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-amber-500 font-bold">·</span>
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Strategy */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
                <Compass className="w-4 h-4" />
                <span>3. Prescribed Growth Strategy</span>
              </div>
              <ul className="space-y-2">
                {activeCase.strategy.map((st, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-teal-600 font-bold">·</span>
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Implementation */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span>4. Hands-on Implementation</span>
              </div>
              <ul className="space-y-2">
                {activeCase.implementation.map((imp, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">·</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* 5 & 6. Results Banner */}
          <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>5 &amp; 6. Measured Outcomes (Demonstration Metrics)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {activeCase.results.map((res, idx) => (
                <div key={idx} className="p-4 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
                    {res.metric}
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mb-1">
                    {res.label}
                  </div>
                  <div className="text-[11px] text-teal-400 font-mono">
                    {res.timeframe}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
