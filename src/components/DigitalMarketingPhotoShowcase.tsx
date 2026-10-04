import React, { useState } from 'react';
import { 
  TrendingUp, 
  Search, 
  MessageCircle, 
  BarChart3, 
  Target, 
  Zap, 
  ArrowUpRight, 
  Users, 
  MousePointerClick, 
  CheckCircle, 
  Globe
} from 'lucide-react';

export const DigitalMarketingPhotoShowcase: React.FC<{ onOpenAudit?: () => void }> = ({ onOpenAudit }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'seo' | 'ads' | 'funnel'>('all');

  return (
    <div className="mt-8 mb-4 max-w-5xl mx-auto">
      {/* Photo Showcase Container with Photographic Studio Aesthetics */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        
        {/* Subtle Photographic Lens Glare & Ambient Glows */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Bar / Channel Selector */}
        <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-wider text-teal-400 uppercase">
              LIVE DIGITAL MARKETING ENGINE
            </span>
            <span className="hidden sm:inline-block text-[11px] text-slate-400 font-mono">
              · High-Converting Campaigns
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 text-[11px] font-medium">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                activeTab === 'all' 
                  ? 'bg-teal-500 text-slate-950 font-bold' 
                  : 'text-slate-300 hover:text-white bg-slate-800/60'
              }`}
            >
              Omnichannel Strategy
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                activeTab === 'seo' 
                  ? 'bg-teal-500 text-slate-950 font-bold' 
                  : 'text-slate-300 hover:text-white bg-slate-800/60'
              }`}
            >
              Google &amp; Maps SEO
            </button>
            <button
              onClick={() => setActiveTab('ads')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                activeTab === 'ads' 
                  ? 'bg-teal-500 text-slate-950 font-bold' 
                  : 'text-slate-300 hover:text-white bg-slate-800/60'
              }`}
            >
              Paid Meta &amp; Search Ads
            </button>
            <button
              onClick={() => setActiveTab('funnel')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                activeTab === 'funnel' 
                  ? 'bg-teal-500 text-slate-950 font-bold' 
                  : 'text-slate-300 hover:text-white bg-slate-800/60'
              }`}
            >
              WhatsApp Conversions
            </button>
          </div>
        </div>

        {/* Photographic Graphic Grid */}
        <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Main Visual Display: Modern Digital Marketing Command Workspace */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Visual Studio Monitor Banner */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-4 sm:p-5 shadow-inner">
              
              {/* Marketing Analytics Graphic Simulation */}
              <div className="flex items-center justify-between mb-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-slate-400 text-[11px] ml-1">marketing-suite.dashboard/live</span>
                </div>
                <div className="font-mono text-emerald-400 text-[11px] flex items-center gap-1 font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>ROAS 4.8X // +284% LEADS</span>
                </div>
              </div>

              {/* Graphic Multi-Channel Visual Chart */}
              <div className="h-32 w-full relative flex items-end justify-between gap-1.5 pt-4 pb-1 px-1">
                {/* Simulated Growth Bars */}
                {[
                  { month: 'Jan', val: 32, leads: '45', color: 'from-slate-700 to-slate-800' },
                  { month: 'Feb', val: 44, leads: '72', color: 'from-slate-700 to-slate-800' },
                  { month: 'Mar', val: 58, leads: '110', color: 'from-teal-900 to-teal-800' },
                  { month: 'Apr', val: 74, leads: '164', color: 'from-teal-800 to-teal-700' },
                  { month: 'May', val: 86, leads: '215', color: 'from-teal-700 to-teal-600' },
                  { month: 'Jun', val: 96, leads: '298', color: 'from-teal-500 to-emerald-400' },
                ].map((item, i) => (
                  <div key={item.month} className="flex-1 flex flex-col items-center h-full justify-end group">
                    <div 
                      className={`w-full rounded-t-md bg-gradient-to-t ${item.color} transition-all duration-500 group-hover:brightness-125 relative`}
                      style={{ height: `${item.val}%` }}
                    >
                      {i === 5 && (
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-500 text-slate-950 font-bold font-mono text-[9px] px-1.5 py-0.5 rounded shadow">
                          PEAK ROI
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 mt-1.5">{item.month}</span>
                  </div>
                ))}
              </div>

              {/* Channels Status Strip */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-sans">Google Local Pack</div>
                  <div className="text-xs font-bold text-teal-400 font-mono">Rank #1</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-sans">Cost Per Qualified Lead</div>
                  <div className="text-xs font-bold text-emerald-400 font-mono">₹142.50</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-sans">WhatsApp Inbound Rate</div>
                  <div className="text-xs font-bold text-amber-300 font-mono">34.2%</div>
                </div>
              </div>

            </div>

            {/* Quick Micro-Capabilities */}
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60">
                <CheckCircle className="w-3 h-3 text-teal-400" />
                Google Business Profile Optimization
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60">
                <CheckCircle className="w-3 h-3 text-teal-400" />
                Targeted Meta Ads (Facebook &amp; Instagram)
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60">
                <CheckCircle className="w-3 h-3 text-teal-400" />
                High-Converting WhatsApp Funnel
              </span>
            </div>

          </div>

          {/* Right Column: Live Marketing Strategy Insights */}
          <div className="lg:col-span-5 space-y-3">
            
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-teal-400 font-mono uppercase tracking-wider font-semibold">
                  AUDIT &amp; TARGETING
                </span>
                <span className="text-[10px] font-mono text-slate-400">Eastern UP Focus</span>
              </div>
              <h4 className="text-sm font-bold text-white font-display">
                Data-Driven Marketing For High-Intent Walk-Ins
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rather than burning budgets on broad vanity impressions, our campaigns specifically target nearby customers searching with direct purchase intent in Azamgarh and surrounding regions.
              </p>
            </div>

            {/* Metric Callout Cards */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/90">
                <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                  <MousePointerClick className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-[11px]">Click-Through</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">6.4%</div>
                <div className="text-[10px] text-emerald-400 font-mono">+140% vs industry avg</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/90">
                <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                  <Users className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-[11px]">Direct Inquiries</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">280+</div>
                <div className="text-[10px] text-teal-300 font-mono">Per month per client</div>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-1">
              <button
                onClick={onOpenAudit}
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all shadow flex items-center justify-center gap-2"
              >
                <span>AUDIT YOUR DIGITAL MARKETING CHANNELS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
