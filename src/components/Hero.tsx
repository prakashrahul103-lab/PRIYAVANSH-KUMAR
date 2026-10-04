import React from 'react';
import { ArrowRight, Search, Activity, Sparkles, TrendingUp, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { DigitalMarketingBackground } from './DigitalMarketingBackground';

interface HeroProps {
  onOpenAudit: () => void;
  onScrollToHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onScrollToHowItWorks }) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-100 bg-slate-900/5">
      {/* High-Impact Digital Marketing Background Visual */}
      <DigitalMarketingBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Quiet Category Lead-in adhering to zero-pill rule */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-700 tracking-wide uppercase mb-4">
            <span>Digital Growth &amp; Intelligence</span>
            <span aria-hidden="true">·</span>
            <span>Indian SME &amp; Local Business Audit</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-6 font-display [text-wrap:balance]">
            Before You Spend More On Marketing, Check What&apos;s Actually Working.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl mx-auto [text-wrap:balance]">
            Audit your website, Google presence, social media, reviews and conversion journey — and discover where your business can grow.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 group"
            >
              <span>CHECK MY BUSINESS</span>
              <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onScrollToHowItWorks}
              className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors"
            >
              SEE HOW IT WORKS
            </button>
          </div>

          {/* Trust Kicker */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
            <span>Free initial growth audit · No credit card required · Demo preview available</span>
          </div>
        </div>

        {/* Hero Visual: Premium Digital Growth Intelligence Dashboard */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="bg-slate-950 text-white rounded-2xl p-4 sm:p-7 shadow-2xl border border-slate-800/80 ring-1 ring-white/10 relative">
            
            {/* Top Bar of Dashboard Preview */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">DIGITAL GROWTH AUDIT PREVIEW</span>
                    <span className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-mono">DEMO MODE</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    Healthcare &amp; Clinic Growth Profile · Azamgarh Sample
                  </h2>
                </div>
              </div>

              <button
                onClick={onOpenAudit}
                className="self-start sm:self-center px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Run Your Free Audit</span>
                <ArrowRight className="w-3 h-3 text-slate-950" />
              </button>
            </div>

            {/* Core Score Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-center">
              
              {/* Circular Overall Score Indicator */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-900/90 rounded-xl border border-slate-800/90 text-center">
                <div className="relative w-36 h-36 flex items-center justify-center">
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
                      strokeDashoffset={2 * Math.PI * 40 * (1 - 68 / 100)}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-white font-mono tabular-nums">68</span>
                    <span className="text-xs text-slate-400 font-mono">/ 100</span>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm font-semibold text-slate-200">Overall Digital Growth Score</p>
                  <p className="text-xs text-slate-400 mt-1 max-w-[200px]">
                    Strong customer trust undermined by low local search reach and high website drop-off.
                  </p>
                </div>
              </div>

              {/* 6 Dimension Score Grid */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                
                <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span>Google Presence</span>
                    <span className="text-teal-400 font-mono font-semibold">78/100</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                    <div className="bg-teal-500 h-full rounded-full" style={{ width: '78%' }} />
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-2">Good profile info; missing secondary category queries.</p>
                </div>

                <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span>Website</span>
                    <span className="text-amber-400 font-mono font-semibold">52/100</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '52%' }} />
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-2">High mobile bounce; lacks one-tap WhatsApp CTA.</p>
                </div>

                <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span>Social Media</span>
                    <span className="text-teal-400 font-mono font-semibold">64/100</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                    <div className="bg-teal-500 h-full rounded-full" style={{ width: '64%' }} />
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-2">Authentic photos, but irregular publishing cadence.</p>
                </div>

                <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span>Local SEO</span>
                    <span className="text-rose-400 font-mono font-semibold">47/100</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                    <div className="bg-rose-500 h-full rounded-full" style={{ width: '47%' }} />
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-2">Ranks weak beyond 3km boundary in Azamgarh.</p>
                </div>

                <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span>Customer Trust</span>
                    <span className="text-emerald-400 font-mono font-semibold">81/100</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '81%' }} />
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-2">High organic ratings; lack automated review collection.</p>
                </div>

                <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span>Conversion</span>
                    <span className="text-rose-400 font-mono font-semibold">49/100</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                    <div className="bg-rose-500 h-full rounded-full" style={{ width: '49%' }} />
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-2">Complex contact forms result in ~70% lead loss.</p>
                </div>

              </div>
            </div>

            {/* Bottom Insight Bar in Hero Dashboard */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300">
                  Top Priority Action: Deploy WhatsApp-first landing page &amp; optimize secondary GBP categories.
                </span>
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                Sample Score — Demo Mode
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
