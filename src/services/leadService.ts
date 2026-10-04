import { LeadSubmission } from '../types';

const LEADS_STORAGE_KEY = 'digigrowth_captured_leads_v1';

export const saveLead = (lead: Omit<LeadSubmission, 'id' | 'createdAt' | 'status'>): LeadSubmission => {
  const newLead: LeadSubmission = {
    ...lead,
    id: `LEAD-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    status: 'New'
  };

  try {
    const existing = getStoredLeads();
    const updated = [newLead, ...existing];
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // Storage quota or SSR fallback
  }

  // Future backend API dispatch:
  // fetch('/api/leads', { method: 'POST', body: JSON.stringify(newLead) })

  return newLead;
};

export const getStoredLeads = (): LeadSubmission[] => {
  try {
    const data = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!data) {
      // Seed with initial realistic lead samples so admin preview shows real utility
      return [
        {
          id: 'LEAD-K89X21',
          createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
          name: 'Dr. R. K. Srivastava',
          businessName: 'Apex Heart & Diagnostic Clinic',
          phone: '+91 98391 22340',
          email: 'apexdiagnostic.azamgarh@gmail.com',
          city: 'Azamgarh',
          businessType: 'Hospitals & Clinics',
          mainProblem: 'Competitors appear ahead on Google Maps for cardiology searches.',
          budgetRange: '₹25,000 – ₹45,000 / month',
          preferredContactMethod: 'WhatsApp',
          status: 'Growth Plan Ready'
        },
        {
          id: 'LEAD-M72A99',
          createdAt: new Date(Date.now() - 3600000 * 28).toISOString(),
          name: 'Vikramaditya Singh',
          businessName: 'Heritage Luxury Motors',
          phone: '+91 94502 88192',
          email: 'vikram@heritagemotors.in',
          city: 'Varanasi',
          businessType: 'Car Dealerships & Detailing',
          mainProblem: 'Lots of website visitors but very few WhatsApp inquiries for test drives.',
          budgetRange: '₹40,000 – ₹75,000 / month',
          preferredContactMethod: 'Phone Call',
          status: 'In Review'
        }
      ];
    }
    return JSON.parse(data);
  } catch {
    return [];
  }
};
