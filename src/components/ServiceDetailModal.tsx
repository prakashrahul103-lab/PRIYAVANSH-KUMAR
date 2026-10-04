import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/services';

interface ServiceDetailModalProps {
  serviceId: string | null;
  onClose: () => void;
  onOpenAudit: () => void;
  onRequestGrowthPlan: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  serviceId,
  onClose,
  onOpenAudit,
  onRequestGrowthPlan
}) => {
  if (!serviceId) return null;

  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-slate-100 flex items-start justify-between bg-slate-950 text-white">
          <div>
            <div className="text-xs font-mono font-bold text-teal-400 uppercase mb-1">
              {service.category}
            </div>
            <h2 id="service-modal-title" className="text-xl sm:text-2xl font-extrabold text-white font-display">
              {service.title}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Targeted growth capability engineered for measurable local inquiries.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Strategic Intent
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Included Deliverables
            </h3>
            <div className="space-y-2.5">
              {service.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600">
            <span className="font-bold text-slate-900 block mb-1">Expected Business Outcome:</span>
            {service.outcome}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenAudit();
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              First check if your business needs this
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestGrowthPlan();
              }}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>DISCUSS THIS CAPABILITY</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
