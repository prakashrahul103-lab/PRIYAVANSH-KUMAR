import React from 'react';
import { 
  MapPinOff, 
  MousePointerClick, 
  ClockAlert, 
  EyeOff, 
  StarOff, 
  PhoneMissed, 
  Unplug,
  ArrowRight
} from 'lucide-react';

interface ProblemSectionProps {
  onOpenAudit: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenAudit }) => {
  const problems = [
    {
      icon: MapPinOff,
      title: 'Business Appears Poorly on Google',
      description: 'Your business profile is missing secondary categories, product listings, or fresh updates—so local customers search and find competitors instead.',
      impact: 'Lost discovery at point of purchase'
    },
    {
      icon: MousePointerClick,
      title: "Website Doesn't Generate Enquiries",
      description: 'You paid for a website that functions as a passive digital brochure. Visitors click around, find no immediate reason to act, and bounce without contacting.',
      impact: 'Wasted web traffic and ad spend'
    },
    {
      icon: ClockAlert,
      title: 'Social Media Is Inconsistent',
      description: 'Posting sporadic holiday greetings or arbitrary stock photos does not build authority. Customers see dormant accounts and question if you are still active.',
      impact: 'Erosion of brand credibility'
    },
    {
      icon: EyeOff,
      title: 'Competitors Have Stronger Visibility',
      description: 'Nearby businesses with inferior service or products capture the lion’s share of inquiries simply because their search and review footprint is wider.',
      impact: 'Unfair market share capture'
    },
    {
      icon: StarOff,
      title: "Reviews Aren't Being Leveraged",
      description: 'Dozens of happy customers leave your premises every week without ever being asked for a Google review, leaving your digital reputation stagnant.',
      impact: 'Missing word-of-mouth multiplication'
    },
    {
      icon: PhoneMissed,
      title: "Customers Can't Easily Contact You",
      description: 'Forcing mobile users to fill out complex web forms rather than tapping for a fast WhatsApp message or direct phone call causes 70%+ abandonment.',
      impact: 'Severe drop-off at final step'
    },
    {
      icon: Unplug,
      title: "Marketing Activities Aren't Connected",
      description: 'You run occasional ads, post on Instagram, and print pamphlets, but none of these efforts connect to a unified measurement system or lead pipeline.',
      impact: 'Unpredictable, chaotic results'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-teal-700 tracking-wide uppercase mb-2">
            The Digital Growth Disconnect
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display mb-4 [text-wrap:balance]">
            Your Customers Are Searching. What Are They Finding?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Most businesses don&apos;t fail online because they lack marketing budget. They fail because their digital presence is broken at critical discovery and trust touchpoints.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            const isMarquee = idx === 0 || idx === 6;
            return (
              <div
                key={prob.title}
                className={`p-6 rounded-2xl border transition-all duration-200 ${
                  isMarquee 
                    ? 'border-slate-300/80 bg-slate-50/70 md:col-span-2 lg:col-span-1' 
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-teal-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {prob.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {prob.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Bottleneck Impact:</span>
                  <span className="font-semibold text-rose-600">{prob.impact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Callout banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-1">
              Stop guessing which problem is draining your revenue.
            </h4>
            <p className="text-sm text-slate-400">
              Run an objective audit across all 6 touchpoints to find your true bottleneck.
            </p>
          </div>
          <button
            onClick={onOpenAudit}
            className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <span>AUDIT MY BUSINESS NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
