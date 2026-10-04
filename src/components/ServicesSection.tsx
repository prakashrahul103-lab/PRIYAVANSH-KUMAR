import React from 'react';
import { 
  MapPin, 
  Smartphone, 
  Video, 
  Search, 
  Target, 
  Cpu, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { SERVICES } from '../data/services';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenAudit: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenAudit }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'local-business-growth': return MapPin;
      case 'website-conversion': return Smartphone;
      case 'social-content': return Video;
      case 'seo': return Search;
      case 'performance-marketing': return Target;
      case 'ai-search-visibility': return Cpu;
      default: return Search;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-teal-700 tracking-wide uppercase mb-2">
            Execution Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display mb-4 [text-wrap:balance]">
            Execution Capabilities Built to Fix Your Specific Gaps
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            We don&apos;t push cookie-cutter packages. Once the audit reveals what is actually holding your revenue back, we implement the precise solution.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((srv) => {
            const Icon = getIcon(srv.id);
            return (
              <div
                key={srv.id}
                className="p-6 sm:p-7 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-900 group-hover:bg-slate-950 group-hover:text-teal-400 transition-colors flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400">
                      {srv.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {srv.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Core Focus Deliverables:
                    </div>
                    <ul className="space-y-1.5">
                      {srv.deliverables.map((item) => (
                        <li key={item} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="text-teal-600 font-bold shrink-0">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-slate-700">Target Outcome: </span>
                    {srv.outcome}
                  </div>
                  <button
                    onClick={() => onSelectService(srv.id)}
                    className="text-xs font-semibold text-slate-900 group-hover:text-teal-600 transition-colors flex items-center gap-1"
                  >
                    <span>View implementation roadmap</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Marketing Guarantee Disclaimer banner */}
        <div className="mt-12 p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-900">Our Honesty Pledge: </span>
            We do NOT promise guaranteed #1 rankings on Google or fixed vanity lead numbers. Any agency promising guaranteed outcomes uses artificial tactics that hurt businesses long-term. We build real search visibility, trust assets, conversion funnels, and rigorous attribution.
          </div>
        </div>

      </div>
    </section>
  );
};
