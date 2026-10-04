import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Send, ArrowRight, ShieldCheck, Database } from 'lucide-react';
import { saveLead } from '../services/leadService';
import { saveAppointment } from '../services/appointmentService';
import { getSupabaseConfig } from '../services/supabaseClient';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { LeadSubmission } from '../types';

interface GrowthPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBusinessName?: string;
  defaultCity?: string;
  defaultBusinessType?: string;
}

export const GrowthPlanModal: React.FC<GrowthPlanModalProps> = ({
  isOpen,
  onClose,
  defaultBusinessName = '',
  defaultCity = '',
  defaultBusinessType = ''
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<LeadSubmission | null>(null);
  const [savedToSupabase, setSavedToSupabase] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    businessName: defaultBusinessName || '',
    phone: '',
    email: '',
    city: defaultCity || BUSINESS_CONFIG.PRIMARY_CITY,
    businessType: defaultBusinessType || BUSINESS_CONFIG.INDUSTRIES[0],
    mainProblem: '',
    budgetRange: '₹20,000 – ₹40,000 / month',
    preferredContactMethod: 'WhatsApp' as 'WhatsApp' | 'Phone Call' | 'Email'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const config = getSupabaseConfig();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.businessName.trim()) newErrors.businessName = 'Please provide your business name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone or WhatsApp number.';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // 1. Save locally via lead service
    const saved = saveLead(formData);
    setSubmittedLead(saved);

    // 2. Also dispatch directly to Supabase appointment storage
    const aptRes = await saveAppointment({
      name: formData.name,
      business_name: formData.businessName,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      business_type: formData.businessType,
      appointment_type: 'Growth Plan Blueprint Consultation',
      main_problem: formData.mainProblem,
      budget_range: formData.budgetRange,
      preferred_contact_method: formData.preferredContactMethod
    });

    setSavedToSupabase(aptRes.savedToSupabase);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="growth-plan-modal-title"
        className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden"
      >
        
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-slate-100 flex items-start justify-between">
          <div>
            <div className="text-xs font-mono font-bold tracking-wider text-teal-700 uppercase mb-1">
              ACTION BLUEPRINT REQUEST
            </div>
            <h2 id="growth-plan-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-950 font-display">
              Request Your Custom Growth Plan
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Get a tailored execution roadmap addressing your exact digital bottlenecks.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted && submittedLead ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-950 font-display">
                Growth Plan Request Received
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">
                Reference ID: {submittedLead.id}
              </p>
              <p className="text-sm text-slate-600 mt-3 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{submittedLead.name}</strong>. Our digital growth team has started synthesizing your audit findings for <strong>{submittedLead.businessName}</strong>.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 text-slate-600">
              <div><strong className="text-slate-800">Operating City:</strong> {submittedLead.city}</div>
              <div><strong className="text-slate-800">Preferred Channel:</strong> {submittedLead.preferredContactMethod}</div>
              <div><strong className="text-slate-800">Phone / WhatsApp:</strong> {submittedLead.phone}</div>
              <div className="pt-1 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Database Storage:</span>
                <span className="font-mono text-slate-800 font-semibold flex items-center gap-1">
                  <Database className="w-3 h-3 text-teal-600" />
                  {savedToSupabase ? 'Synced to Supabase (cozlykbxnunxikpoynje)' : 'Saved locally (Supabase ready)'}
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppLink(`Hi, I just requested a Custom Growth Plan for ${submittedLead.businessName} (Ref: ${submittedLead.id}). I'd like to fast-track my consultation.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Fast-track on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 max-h-[78vh] overflow-y-auto">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Your Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Rajesh Kumar"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
                {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Business Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Kumar Diagnostic Clinic"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
                {errors.businessName && <p className="text-xs text-rose-600 mt-1">{errors.businessName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Phone / WhatsApp <span className="text-rose-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
                {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Email Address <span className="text-rose-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. contact@business.com"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
                {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Azamgarh"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Business Type
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                >
                  {BUSINESS_CONFIG.INDUSTRIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                Main Problem / Primary Bottleneck
              </label>
              <textarea
                rows={2}
                value={formData.mainProblem}
                onChange={(e) => setFormData({ ...formData, mainProblem: e.target.value })}
                placeholder="e.g. Competitors rank higher on Google Maps, or visitors view our website but don't call."
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Anticipated Budget Range
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                >
                  <option value="₹10,000 – ₹20,000 (One-Time Sprint)">₹10,000 – ₹20,000 (One-Time Sprint)</option>
                  <option value="₹20,000 – ₹40,000 / month">₹20,000 – ₹40,000 / month</option>
                  <option value="₹40,000 – ₹75,000 / month">₹40,000 – ₹75,000 / month</option>
                  <option value="₹75,000+ / month (Multi-Location)">₹75,000+ / month (Multi-Location)</option>
                  <option value="Custom Strategic Scope">Custom Strategic Scope</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Preferred Contact Method
                </label>
                <div className="flex gap-2">
                  {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setFormData({ ...formData, preferredContactMethod: method })}
                      className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-all ${
                        formData.preferredContactMethod === method
                          ? 'bg-slate-950 text-white border-slate-950'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Zero spam · Confidential roadmap</span>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>REQUEST GROWTH PLAN</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
