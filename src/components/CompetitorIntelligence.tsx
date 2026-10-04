import React, { useState } from 'react';
import { 
  BarChart3, 
  ArrowRight, 
  HelpCircle, 
  SlidersHorizontal,
  Layers,
  Sparkles
} from 'lucide-react';

interface CompetitorIntelligenceProps {
  onOpenAudit: () => void;
}

export const CompetitorIntelligence: React.FC<CompetitorIntelligenceProps> = ({ onOpenAudit }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Clinics & Healthcare');

  const industryBenchmarks: Record<string, { yourScore: number; competitorAvg: number; metrics: { name: string; your: number; comp: number; gap: string }[] }> = {
    'Clinics & Healthcare': {
      yourScore: 61,
      competitorAvg: 74,
      metrics: [
        { name: 'Google Presence', your: 68, comp: 82, gap: '-14 pts' },
        { name: 'Website Conversion', your: 52, comp: 69, gap: '-17 pts' },
        { name: 'Social Activity', your: 60, comp: 66, gap: '-6 pts' },
        { name: 'SEO & Search Grid', your: 47, comp: 72, gap: '-25 pts' },
        { name: 'Reviews & Reputation', your: 84, comp: 76, gap: '+8 pts' },
        { name: 'Content & Video', your: 54, comp: 70, gap: '-16 pts' },
        { name: 'Commercial Offers & Pricing', your: 62, comp: 83, gap: '-21 pts' }
      ]
    },
    'Car Dealerships & Detailing': {
      yourScore: 64,
      competitorAvg: 77,
      metrics: [
        { name: 'Google Presence', your: 72, comp: 85, gap: '-13 pts' },
        { name: 'Website Conversion', your: 48, comp: 71, gap: '-23 pts' },
        { name: 'Social Activity', your: 70, comp: 78, gap: '-8 pts' },
        { name: 'SEO & Search Grid', your: 51, comp: 74, gap: '-23 pts' },
        { name: 'Reviews & Reputation', your: 79, comp: 82, gap: '-3 pts' },
        { name: 'Content & Video', your: 66, comp: 75, gap: '-9 pts' },
        { name: 'Commercial Offers & Pricing', your: 60, comp: 76, gap: '-16 pts' }
      ]
    },
    'Coaching & Schools': {
      yourScore: 59,
      competitorAvg: 73,
      metrics: [
        { name: 'Google Presence', your: 65, comp: 79, gap: '-14 pts' },
        { name: 'Website Conversion', your: 44, comp: 68, gap: '-24 pts' },
        { name: 'Social Activity', your: 58, comp: 71, gap: '-13 pts' },
        { name: 'SEO & Search Grid', your: 49, comp: 67, gap: '-18 pts' },
        { name: 'Reviews & Reputation', your: 82, comp: 74, gap: '+8 pts' },
        { name: 'Content & Video', your: 53, comp: 76, gap: '-23 pts' },
        { name: 'Commercial Offers & Pricing', your: 63, comp: 75, gap: '-12 pts' }
      ]
    }
  };

  const currentData = industryBenchmarks[selectedIndustry] || industryBenchmarks['Clinics & Healthcare'];

  return (
    <section id="competitor-gap" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-teal-400 tracking-wide uppercase mb-2">
              Competitive Intelligence
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4 [text-wrap:balance]">
              Don&apos;t Just Track Your Business. Understand Your Competition.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed [text-wrap:balance]">
              See where your local competitors are taking inquiries that could belong to you. Our comparative intelligence model benchmarks your reach across 7 growth dimensions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="text-xs text-slate-400">Select Benchmark Sector:</div>
            <div className="flex items-center gap-1.5 p-1 bg-slate-800/90 rounded-xl border border-slate-700">
              {Object.keys(industryBenchmarks).map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    selectedIndustry === ind
                      ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Benchmark Visual Container */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
          
          {/* Top Metric Summary */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-6">
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">Your Business Score</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  {currentData.yourScore}
                  <span className="text-sm text-slate-500 font-normal">/100</span>
                </span>
              </div>
              <div className="h-8 w-px bg-slate-800" aria-hidden="true" />
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">Top 3 Competitor Benchmark</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono tabular-nums">
                  {currentData.competitorAvg}
                  <span className="text-sm text-teal-600 font-normal">/100</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-600" />
                <span>Your Business</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-teal-400" />
                <span>Market Leader Avg</span>
              </div>
            </div>
          </div>

          {/* Bar Comparison Rows */}
          <div className="space-y-6">
            {currentData.metrics.map((m) => {
              const isLead = m.gap.startsWith('+');
              return (
                <div key={m.name} className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-slate-200">{m.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-400">
                        You: <strong className="text-white">{m.your}</strong> | Comp: <strong className="text-teal-400">{m.comp}</strong>
                      </span>
                      <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
                        isLead ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                      }`}>
                        {m.gap}
                      </span>
                    </div>
                  </div>

                  {/* Dual Bar Representation */}
                  <div className="space-y-1">
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-slate-400 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${m.your}%` }}
                      />
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-teal-400 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${m.comp}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Transparent Demo Mode Footer */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Sample competitor benchmark — demo data. In production, live Google Places &amp; SERP grid APIs power this analysis.</span>
            </div>
            
            <button
              onClick={onOpenAudit}
              className="px-4 py-2.5 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-colors flex items-center gap-1.5 self-start sm:self-center"
            >
              <span>COMPARE MY BUSINESS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
