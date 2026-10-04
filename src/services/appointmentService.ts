import { getSupabaseClient, getSupabaseConfig } from './supabaseClient';

export interface BookingAppointment {
  id?: string;
  created_at?: string;
  name: string;
  business_name: string;
  phone: string;
  email: string;
  city?: string;
  business_type?: string;
  appointment_type?: string;
  preferred_date?: string;
  preferred_time?: string;
  preferred_contact_method?: 'WhatsApp' | 'Phone Call' | 'Email';
  main_problem?: string;
  budget_range?: string;
  status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

const LOCAL_STORAGE_KEY = 'digigrowth_appointments_local';

export const saveAppointment = async (
  appointment: BookingAppointment
): Promise<{ success: boolean; data: BookingAppointment; savedToSupabase: boolean; error?: string }> => {
  const localId = `APT-${Date.now().toString(36).toUpperCase()}`;
  const now = new Date().toISOString();

  const record: BookingAppointment = {
    ...appointment,
    id: appointment.id || localId,
    created_at: appointment.created_at || now,
    status: appointment.status || 'pending',
    appointment_type: appointment.appointment_type || 'Growth Consultation',
    preferred_contact_method: appointment.preferred_contact_method || 'WhatsApp'
  };

  // Always store a local fallback backup
  try {
    const existing = getLocalAppointments();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([record, ...existing]));
  } catch (err) {
    console.warn('Local storage write warning:', err);
  }

  // Attempt Supabase insert if client configured
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('booking_appointments')
        .insert([
          {
            name: record.name,
            business_name: record.business_name,
            phone: record.phone,
            email: record.email,
            city: record.city || '',
            business_type: record.business_type || '',
            appointment_type: record.appointment_type || 'Growth Consultation',
            preferred_date: record.preferred_date || null,
            preferred_time: record.preferred_time || '',
            preferred_contact_method: record.preferred_contact_method || 'WhatsApp',
            main_problem: record.main_problem || '',
            budget_range: record.budget_range || '',
            status: record.status || 'pending'
          }
        ])
        .select();

      if (error) {
        console.error('Supabase insert error:', error.message);
        return {
          success: true,
          data: record,
          savedToSupabase: false,
          error: error.message
        };
      }

      return {
        success: true,
        data: data && data[0] ? data[0] : record,
        savedToSupabase: true
      };
    } catch (err: any) {
      console.error('Supabase execution error:', err);
      return {
        success: true,
        data: record,
        savedToSupabase: false,
        error: err.message || 'Network error while contacting Supabase'
      };
    }
  }

  // Supabase not configured with anon key yet
  return {
    success: true,
    data: record,
    savedToSupabase: false,
    error: 'Supabase Anon Key is not yet configured.'
  };
};

export const getLocalAppointments = (): BookingAppointment[] => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const SUPABASE_SQL_MIGRATION = `-- Run this in your Supabase SQL Editor (Project: cozlykbxnunxikpoynje)
-- 1. Create table for all booking appointments
CREATE TABLE IF NOT EXISTS public.booking_appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT,
  business_type TEXT,
  appointment_type TEXT DEFAULT 'Growth Consultation',
  preferred_date DATE,
  preferred_time TEXT,
  preferred_contact_method TEXT DEFAULT 'WhatsApp',
  main_problem TEXT,
  budget_range TEXT,
  status TEXT DEFAULT 'pending'
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.booking_appointments ENABLE ROW LEVEL SECURITY;

-- 3. Policy to allow visitors to book appointments
DROP POLICY IF EXISTS "Allow public insert to booking_appointments" ON public.booking_appointments;
CREATE POLICY "Allow public insert to booking_appointments" 
ON public.booking_appointments
FOR INSERT 
TO public 
WITH CHECK (true);

-- 4. Policy to allow reading appointments
DROP POLICY IF EXISTS "Allow read booking_appointments" ON public.booking_appointments;
CREATE POLICY "Allow read booking_appointments" 
ON public.booking_appointments
FOR SELECT 
TO public 
USING (true);
`;
