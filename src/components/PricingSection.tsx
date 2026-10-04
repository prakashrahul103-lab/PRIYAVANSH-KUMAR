import React from 'react';
import { Check, ArrowRight, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../config/business';

interface PricingSectionProps {
  onOpenAudit: () => void;
  onRequestGrowthPlan: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenAudit, onRequestGrowthPlan }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="text-xs font-semibold text-teal-700 tracking-wide uppercase mb-2">
            Transparent Engagement
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display mb-4">
            No Artificial Packages. Pay Only for What Needs Fixing.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            We do not compete on bargain retainers that produce zero return. Every engagement begins with an objective audit followed by targeted execution.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* 1. Free Basic Audit */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                Diagnostic
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Digital Growth Audit
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Understand your digital strengths, weaknesses, and competitor gaps across 6 dimensions.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-extrabold text-slate-950 font-mono">₹0</span>
                <span className="text-xs text-slate-400 font-mono ml-2">/ Free</span>
              </div>

              <ul className="space-y-2.5 mb-8 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Google presence &amp; GBP health check</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Website mobile speed &amp; friction analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Social proof &amp; review sentiment score</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Sample competitor benchmark gap</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Top 4 high-priority fix checklist</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenAudit}
              className="w-full py-2.5 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <span>RUN FREE AUDIT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2. Growth Plan */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-slate-900 shadow-md flex flex-col justify-between relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Recommended First Step
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                Strategy Blueprint
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Custom Growth Plan
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Deep-dive diagnostic roadmap with step-by-step technical blueprints and local keyword maps.
              </p>

              <div className="mb-6">
                <span className="text-2xl font-extrabold text-slate-950 font-mono">Custom Strategy</span>
                <span className="text-xs text-slate-400 block mt-1">Starting from ₹9,500</span>
              </div>

              <ul className="space-y-2.5 mb-8 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Detailed 90-day execution roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Hyper-local buyer search query dataset</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>WhatsApp &amp; web conversion wireframe</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Competitor keyword &amp; ad teardown</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>60-minute strategy video consultation</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onRequestGrowthPlan}
              className="w-full py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <span>GET GROWTH PLAN</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
            </button>
          </div>

          {/* 3. Implementation Sprint */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                One-Time Sprint
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Implementation Sprint
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Hands-on rebuilding of your conversion website, local citations, and Google Maps architecture.
              </p>

              <div className="mb-6">
                <span className="text-2xl font-extrabold text-slate-950 font-mono">Custom Quote</span>
                <span className="text-xs text-slate-400 block mt-1">Starting from ₹24,000</span>
              </div>

              <ul className="space-y-2.5 mb-8 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Mobile-first WhatsApp funnel deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Complete Google Profile overhaul</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Local citation &amp; Schema markup setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Automated review collection integration</span>
                </li>
              </ul>
            </div>

            <a
              href={getWhatsAppLink("Hi, I want a custom quote for Implementation Sprint.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-teal-600" />
              <span>DISCUSS SCOPE</span>
            </a>
          </div>

          {/* 4. Monthly Growth Retainer */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                Ongoing Partnership
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Monthly Growth Retainer
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Continuous local dominance, weekly content, ad management, and monthly performance tracking.
              </p>

              <div className="mb-6">
                <span className="text-2xl font-extrabold text-slate-950 font-mono">Custom Retainer</span>
                <span className="text-xs text-slate-400 block mt-1">Starting from ₹35,000 / mo</span>
              </div>

              <ul className="space-y-2.5 mb-8 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Weekly Google Maps updates &amp; monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Short-form Reels &amp; video production</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Google &amp; Meta Ads campaign management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Detailed inquiry attribution dashboard</span>
                </li>
              </ul>
            </div>

            <a
              href={getWhatsAppLink("Hi, I want to discuss a Monthly Growth Retainer for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-teal-600" />
              <span>REQUEST RETAINER INFO</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
