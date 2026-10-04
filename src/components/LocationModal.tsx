import React from 'react';
import { X, MapPin, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface LocationModalProps {
  locationSlug: string | null;
  onClose: () => void;
  onOpenAudit: (city: string) => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ locationSlug, onClose, onOpenAudit }) => {
  if (!locationSlug) return null;

  const loc = BUSINESS_CONFIG.LOCATIONS.find(l => l.slug === locationSlug) || BUSINESS_CONFIG.LOCATIONS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-modal-title"
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-slate-100 flex items-start justify-between bg-slate-950 text-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-teal-400 font-bold uppercase mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>REGIONAL MARKET INTELLIGENCE</span>
              {loc.isInitialMarket && (
                <span className="bg-teal-500/20 text-teal-300 border border-teal-500/40 px-1.5 py-0.5 rounded text-[10px]">
                  INITIAL HUB
                </span>
              )}
            </div>
            <h2 id="location-modal-title" className="text-xl sm:text-2xl font-extrabold text-white font-display">
              {loc.name}, {loc.state}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Configurable regional growth architecture for commercial enterprises.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full transition-colors"
            aria-label="Close location modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Regional Commercial Dynamics
            </h3>
            <div className="space-y-2.5">
              {loc.marketHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              High-Value Local Buyer Search Queries
            </h3>
            <div className="flex flex-wrap gap-2">
              {loc.localKeywords.map((kw, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 text-xs bg-slate-100 text-slate-800 rounded-lg border border-slate-200 font-medium"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 text-xs text-teal-950 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-teal-900 mb-0.5">Location-Specific Optimization:</strong>
              Our system audits your specific presence in the {loc.name} commercial radius to ensure your Google Maps pin and search footprint outrank nearby competitors.
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400 font-mono">
              Ready for immediate deployment in {loc.name}
            </span>

            <button
              onClick={() => {
                onClose();
                onOpenAudit(loc.name);
              }}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>AUDIT MY {loc.name.toUpperCase()} BUSINESS</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
