import React from 'react';
import { 
  ClipboardList, 
  SearchCheck, 
  ScanSearch, 
  ListFilter, 
  Wrench, 
  LineChart,
  ArrowRight
} from 'lucide-react';

interface HowItWorksProps {
  onOpenAudit: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenAudit }) => {
  const steps = [
    {
      num: '01',
      title: 'CHECK',
      action: 'Submit your business details',
      description: 'Enter your business name, category, city, and active web or social links in our clean 3-step audit form.',
      icon: ClipboardList
    },
    {
      num: '02',
      title: 'AUDIT',
      action: 'Review digital presence',
      description: 'We evaluate your Google profile, mobile website speed, local ranking boundary, social proof, and inquiry friction.',
      icon: SearchCheck
    },
    {
      num: '03',
      title: 'IDENTIFY',
      action: 'Find growth gaps',
      description: 'Discover exactly where potential buyers drop off—whether at initial map discovery, page load, or the contact button.',
      icon: ScanSearch
    },
    {
      num: '04',
      title: 'PRIORITIZE',
      action: 'Determine what should be fixed first',
      description: 'We separate high-impact quick wins from longer strategic initiatives so you do not waste resources.',
      icon: ListFilter
    },
    {
      num: '05',
      title: 'IMPLEMENT',
      action: 'Execute the strategy',
      description: 'Our team rebuilds the funnels, optimizes your local presence, scripts high-converting video, and launches targeted campaigns.',
      icon: Wrench
    },
    {
      num: '06',
      title: 'MEASURE',
      action: 'Track improvements',
      description: 'Review transparent monthly reports focused on verified phone calls, WhatsApp inquiries, and cost per customer acquisition.',
      icon: LineChart
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="text-xs font-semibold text-teal-700 tracking-wide uppercase mb-2">
            The Growth Journey
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display mb-4">
            How Digital Growth Intelligence Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            From diagnosing silent bottlenecks to engineering measurable local market dominance.
          </p>
        </div>

        {/* 6 Steps Timeline */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-8 z-0" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon & Step Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-950 text-teal-400 flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-extrabold text-slate-300 font-mono">
                        {step.num}
                      </span>
                    </div>

                    {/* Step Title & Action */}
                    <div className="mb-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                        Step {step.num} · {step.title}
                      </h3>
                      <h4 className="text-lg font-bold text-slate-900 leading-snug">
                        {step.action}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500">
                    <span>Structured Deliverable</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl shadow-sm transition-all"
          >
            <span>START WITH STEP 01 — RUN FREE AUDIT</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
