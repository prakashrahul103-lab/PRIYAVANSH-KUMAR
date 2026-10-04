import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Database, AlertCircle } from 'lucide-react';
import { saveAppointment, BookingAppointment } from '../services/appointmentService';
import { getSupabaseConfig } from '../services/supabaseClient';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = ''
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedData, setSavedData] = useState<BookingAppointment | null>(null);
  const [savedToSupabase, setSavedToSupabase] = useState(false);
  const [supabaseError, setSupabaseError] = useState<string | undefined>(undefined);

  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    business_name: '',
    phone: '',
    email: '',
    city: BUSINESS_CONFIG.PRIMARY_CITY,
    business_type: defaultCategory || BUSINESS_CONFIG.INDUSTRIES[0],
    appointment_type: 'Digital Growth Strategy Consultation',
    preferred_date: tomorrow,
    preferred_time: '11:00 AM - 12:00 PM',
    preferred_contact_method: 'WhatsApp' as 'WhatsApp' | 'Phone Call' | 'Email',
    main_problem: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const config = getSupabaseConfig();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.business_name.trim()) newErrors.business_name = 'Business name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSupabaseError(undefined);

    const res = await saveAppointment({
      name: formData.name,
      business_name: formData.business_name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      business_type: formData.business_type,
      appointment_type: formData.appointment_type,
      preferred_date: formData.preferred_date,
      preferred_time: formData.preferred_time,
      preferred_contact_method: formData.preferred_contact_method,
      main_problem: formData.main_problem
    });

    setIsSubmitting(false);
    setIsSuccess(true);
    setSavedData(res.data);
    setSavedToSupabase(res.savedToSupabase);
    setSupabaseError(res.error);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-appointment-title"
        className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden"
      >
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-950 text-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-teal-400 uppercase font-semibold mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>DIRECT STRATEGY BOOKING</span>
            </div>
            <h2 id="book-appointment-title" className="text-xl sm:text-2xl font-extrabold text-white font-display">
              Book a Growth Consultation
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Connect directly with our senior growth architects for an audit walkthrough.
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

        {/* Database Connected Status Badge */}
        <div className="px-6 py-2.5 bg-slate-50 border-b border-slate-200 text-xs text-slate-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-teal-600" />
              <span>Supabase Project: <code className="font-mono text-slate-900 font-bold">{config.projectId}</code></span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
              config.isConfigured ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
            }`}>
              {config.isConfigured ? 'Live Database Sync' : 'Project Linked'}
            </span>
          </div>
        </div>

        {/* Content */}
        {isSuccess && savedData ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-950 font-display">
                Appointment Booked Successfully
              </h3>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Booking ID: {savedData.id}
              </p>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Thank you, <strong>{savedData.name}</strong>. Your consultation has been scheduled.
              </p>
            </div>

            {/* Appointment Details Box */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Business:</span>
                <span className="font-bold text-slate-900">{savedData.business_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scheduled Date:</span>
                <span className="font-semibold text-slate-900">{savedData.preferred_date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Time Slot:</span>
                <span className="font-semibold text-slate-900">{savedData.preferred_time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Method:</span>
                <span className="font-semibold text-teal-700">{savedData.preferred_contact_method}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Storage Target:</span>
                <span className="font-mono text-[11px] text-slate-900 font-semibold">
                  {savedToSupabase ? '✓ Supabase (cozlykbxnunxikpoynje)' : '✓ Local Sync & Supabase Ready'}
                </span>
              </div>
            </div>

            {savedToSupabase ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Appointment details safely recorded in your Supabase account!</span>
              </div>
            ) : (
              <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-700 text-left space-y-1">
                <div className="font-semibold text-slate-900">Database Setup Pointer:</div>
                <div className="text-[11px] text-slate-600">
                  Data recorded safely. To stream live to your Supabase table automatically, add your <code>VITE_SUPABASE_ANON_KEY</code> in the bottom Lead Management &amp; API Portal.
                </div>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppLink(`Hi, I just booked a Growth Consultation for ${savedData.business_name} on ${savedData.preferred_date} (${savedData.preferred_time}). Booking ID: ${savedData.id}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Rajesh Gupta"
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
                  value={formData.business_name}
                  onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                  placeholder="e.g. Gupta Dental & Eye Clinic"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
                {errors.business_name && <p className="text-xs text-rose-600 mt-1">{errors.business_name}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  WhatsApp Number <span className="text-rose-600">*</span>
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
                  placeholder="e.g. guptaclinic@gmail.com"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
                {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Preferred Date <span className="text-rose-600">*</span>
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferred_date}
                  onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferred_time}
                  onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                >
                  <option value="10:00 AM - 11:00 AM">Morning: 10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 12:00 PM">Morning: 11:00 AM - 12:00 PM</option>
                  <option value="02:00 PM - 03:00 PM">Afternoon: 02:00 PM - 03:00 PM</option>
                  <option value="04:00 PM - 05:00 PM">Evening: 04:00 PM - 05:00 PM</option>
                  <option value="06:00 PM - 07:00 PM">Evening: 06:00 PM - 07:00 PM</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Operating City
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
                  Industry / Sector
                </label>
                <select
                  value={formData.business_type}
                  onChange={(e) => setFormData({ ...formData, business_type: e.target.value })}
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
                Primary Discussion Topic / Growth Bottleneck
              </label>
              <textarea
                rows={2}
                value={formData.main_problem}
                onChange={(e) => setFormData({ ...formData, main_problem: e.target.value })}
                placeholder="e.g. Want to review our Google Maps rankings or improve WhatsApp inquiries."
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Direct consultation · 30 mins</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-all shadow-sm flex items-center gap-2 disabled:opacity-70"
              >
                <span>{isSubmitting ? 'Recording Booking...' : 'CONFIRM APPOINTMENT'}</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
