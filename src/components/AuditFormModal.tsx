import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, ShieldAlert, Sparkles, CheckCircle2, Loader2, Building, Globe, Send } from 'lucide-react';
import { AuditFormData, PrimaryMarketingGoal } from '../types';
import { BUSINESS_CONFIG } from '../config/business';

interface AuditFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitAudit: (data: AuditFormData) => void;
}

export const AuditFormModal: React.FC<AuditFormModalProps> = ({ isOpen, onClose, onSubmitAudit }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisPhase, setAnalysisPhase] = useState('Initializing audit engines...');

  const [formData, setFormData] = useState<AuditFormData>({
    businessName: '',
    businessCategory: BUSINESS_CONFIG.INDUSTRIES[0],
    city: BUSINESS_CONFIG.PRIMARY_CITY,
    websiteUrl: '',
    gbpUrl: '',
    instagramUrl: '',
    facebookUrl: '',
    whatsappNumber: '',
    email: '',
    primaryGoal: 'More WhatsApp Enquiries'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.businessName.trim()) {
        newErrors.businessName = 'Please enter your business name.';
      }
      if (!formData.city.trim()) {
        newErrors.city = 'Please enter your operating city.';
      }
    }

    if (currentStep === 3) {
      if (!formData.whatsappNumber.trim()) {
        newErrors.whatsappNumber = 'Please enter your WhatsApp number for audit delivery.';
      } else if (!/^[0-9+ -]{8,15}$/.test(formData.whatsappNumber.trim())) {
        newErrors.whatsappNumber = 'Please enter a valid phone or WhatsApp number.';
      }

      if (!formData.email.trim()) {
        newErrors.email = 'Please enter an email address for report backup.';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email format.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 3) {
        setStep((step + 1) as 1 | 2 | 3);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as 1 | 2 | 3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsAnalyzing(true);
    setAnalysisPhase('Connecting to diagnostic engines...');

    setTimeout(() => {
      setAnalysisPhase('Auditing Google Business Profile & local citation grid...');
    }, 400);

    setTimeout(() => {
      setAnalysisPhase('Evaluating mobile speed, contact funnels & competitor gaps...');
    }, 900);

    setTimeout(() => {
      setIsAnalyzing(false);
      onSubmitAudit(formData);
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-modal-title"
        className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden"
      >
        
        {/* Top Progress Bar */}
        <div className="bg-slate-100 h-1.5 w-full">
          <div 
            className="bg-teal-600 h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-slate-100 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-teal-700 font-bold uppercase mb-1">
              <span>Step {step} of 3</span>
              <span aria-hidden="true">·</span>
              <span>
                {step === 1 && 'Business Identity'}
                {step === 2 && 'Digital Channels'}
                {step === 3 && 'Contact & Primary Objective'}
              </span>
            </div>
            <h2 id="audit-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-950 font-display">
              Free Digital Growth Audit
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Find out what is actually stopping your business from growing online.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close audit form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mandatory Transparent Demo Disclaimer */}
        <div className="px-6 py-2.5 bg-amber-50/80 border-b border-amber-200/70 flex items-center gap-2 text-xs text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Demo Audit Mode:</strong> Connect live data sources for production analysis. No real rankings or competitor data will be fabricated.
          </span>
        </div>

        {/* Form Body or Analyzing State */}
        {isAnalyzing ? (
          <div className="p-10 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-950 text-teal-400 flex items-center justify-center animate-pulse">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-950 font-display">
                Analyzing Digital Footprint...
              </h3>
              <p className="text-xs font-mono text-teal-700 mt-1">
                {analysisPhase}
              </p>
            </div>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Preparing your 6-dimension digital score card and high-priority action roadmap.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
            
            {/* STEP 1: Business Identity */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Business Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Apollo Dental Clinic or Royal Motors"
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
                  />
                  {errors.businessName && (
                    <p className="text-xs text-rose-600 mt-1">{errors.businessName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Business Category <span className="text-rose-600">*</span>
                  </label>
                  <select
                    value={formData.businessCategory}
                    onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
                  >
                    {BUSINESS_CONFIG.INDUSTRIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Operating City <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Azamgarh, Varanasi, Lucknow, etc."
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[11px] text-slate-400 self-center">Quick pick:</span>
                    {BUSINESS_CONFIG.LOCATIONS.map((loc) => (
                      <button
                        type="button"
                        key={loc.slug}
                        onClick={() => setFormData({ ...formData, city: loc.name })}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      >
                        {loc.name}
                      </button>
                    ))}
                  </div>
                  {errors.city && (
                    <p className="text-xs text-rose-600 mt-1">{errors.city}</p>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2: Digital URLs */}
            {step === 2 && (
              <div className="space-y-4">
                <p className="text-xs text-slate-500">
                  Provide any links you currently have. Leave blank if not yet created.
                </p>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Website URL (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="e.g. https://mybusiness.com (or leave empty)"
                    className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Google Maps / Google Business Profile URL
                  </label>
                  <input
                    type="text"
                    value={formData.gbpUrl}
                    onChange={(e) => setFormData({ ...formData, gbpUrl: e.target.value })}
                    placeholder="e.g. https://maps.app.goo.gl/... or business name on Maps"
                    className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Instagram Handle / URL
                  </label>
                  <input
                    type="text"
                    value={formData.instagramUrl}
                    onChange={(e) => setFormData({ ...formData, instagramUrl: e.target.value })}
                    placeholder="e.g. @yourbusiness or instagram.com/..."
                    className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Facebook Page URL
                  </label>
                  <input
                    type="text"
                    value={formData.facebookUrl}
                    onChange={(e) => setFormData({ ...formData, facebookUrl: e.target.value })}
                    placeholder="e.g. facebook.com/yourbusiness"
                    className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 3: WhatsApp Number, Email & Goal */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    WhatsApp Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                  {errors.whatsappNumber && (
                    <p className="text-xs text-rose-600 mt-1">{errors.whatsappNumber}</p>
                  )}
                  <p className="text-[11px] text-slate-400 mt-1">
                    We will send the prioritized action plan directly to your WhatsApp.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. business@gmail.com"
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Primary Marketing Goal <span className="text-rose-600">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {([
                      'More Calls',
                      'More WhatsApp Enquiries',
                      'More Walk-ins',
                      'More Website Leads',
                      'More Instagram Customers',
                      'More Local Visibility',
                      'More Sales'
                    ] as PrimaryMarketingGoal[]).map((goal) => (
                      <button
                        type="button"
                        key={goal}
                        onClick={() => setFormData({ ...formData, primaryGoal: goal })}
                        className={`px-3 py-2 text-xs font-semibold rounded-xl text-left border transition-all ${
                          formData.primaryGoal === goal
                            ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-950 rounded-xl flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4 text-teal-400" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-7 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>ANALYZE MY BUSINESS</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              )}
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
