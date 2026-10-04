import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const SUPABASE_PROJECT_ID = 'cozlykbxnunxikpoynje';
export const DEFAULT_SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;

const getEnvKey = () => {
  return import.meta.env.VITE_SUPABASE_ANON_KEY || localStorage.getItem('digigrowth_supabase_anon_key') || '';
};

const getEnvUrl = () => {
  return import.meta.env.VITE_SUPABASE_URL || localStorage.getItem('digigrowth_supabase_url') || DEFAULT_SUPABASE_URL;
};

export const getSupabaseConfig = () => {
  const url = getEnvUrl();
  const anonKey = getEnvKey();
  return {
    projectId: SUPABASE_PROJECT_ID,
    url: url || DEFAULT_SUPABASE_URL,
    anonKey: anonKey.trim(),
    isConfigured: Boolean(anonKey && anonKey.trim().length > 10)
  };
};

export const saveSupabaseKey = (key: string) => {
  localStorage.setItem('digigrowth_supabase_anon_key', key.trim());
};

let cachedClient: SupabaseClient | null = null;
let lastKeyUsed: string = '';

export const getSupabaseClient = (): SupabaseClient | null => {
  const { url, anonKey, isConfigured } = getSupabaseConfig();
  
  if (!isConfigured) {
    return null;
  }

  if (cachedClient && lastKeyUsed === anonKey) {
    return cachedClient;
  }

  try {
    cachedClient = createClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true
      }
    });
    lastKeyUsed = anonKey;
    return cachedClient;
  } catch (err) {
    console.error('Failed to initialize Supabase client:', err);
    return null;
  }
};
