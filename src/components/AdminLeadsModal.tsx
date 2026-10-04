import React, { useState, useEffect } from 'react';
import { 
  X, 
  Lock, 
  Database, 
  Users, 
  Calendar,
  Clock, 
  CheckCircle2, 
  Key, 
  RefreshCw,
  ExternalLink,
  Copy,
  Check,
  AlertCircle,
  Plus
} from 'lucide-react';
import { getStoredLeads } from '../services/leadService';
import { 
  getLocalAppointments, 
  BookingAppointment, 
  SUPABASE_SQL_MIGRATION,
  saveAppointment 
} from '../services/appointmentService';
import { 
  getSupabaseConfig, 
  saveSupabaseKey, 
  getSupabaseClient 
} from '../services/supabaseClient';
import { LeadSubmission } from '../types';

interface AdminLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLeadsModal: React.FC<AdminLeadsModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  
  const [activeTab, setActiveTab] = useState<'supabase' | 'leads'>('supabase');
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [appointments, setAppointments] = useState<BookingAppointment[]>([]);
  
  // Supabase state
  const [supabaseKeyInput, setSupabaseKeyInput] = useState('');
  const [isKeySaved, setIsKeySaved] = useState(false);
  const [isCopiedSql, setIsCopiedSql] = useState(false);
  const [testResult, setTestResult] = useState<{ message: string; success: boolean } | null>(null);
  const [isTesting, setIsTesting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const config = getSupabaseConfig();
      setSupabaseKeyInput(config.anonKey);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'growth2026' || passcode.trim() === 'admin' || passcode.trim() === 'supabase') {
      setIsAuthenticated(true);
      setLeads(getStoredLeads());
      setAppointments(getLocalAppointments());
      setAuthError('');
    } else {
      setAuthError('Invalid passcode. Use demo key: growth2026');
    }
  };

  const handleRefresh = () => {
    setLeads(getStoredLeads());
    setAppointments(getLocalAppointments());
  };

  const handleSaveKey = () => {
    saveSupabaseKey(supabaseKeyInput);
    setIsKeySaved(true);
    setTimeout(() => setIsKeySaved(false), 2500);
  };

  const handleCopySql = () => {
    navigator.clipboard?.writeText(SUPABASE_SQL_MIGRATION);
    setIsCopiedSql(true);
    setTimeout(() => setIsCopiedSql(false), 2500);
  };

  const handleTestConnection = async () => {
    setIsTesting(true);
    setTestResult(null);

    if (supabaseKeyInput.trim()) {
      saveSupabaseKey(supabaseKeyInput);
    }

    const client = getSupabaseClient();
    if (!client) {
      setIsTesting(false);
      setTestResult({
        success: false,
        message: 'Supabase Anon Key is empty. Please enter your Anon Key from your Supabase Dashboard.'
      });
      return;
    }

    try {
      const testRes = await saveAppointment({
        name: 'Test Booking Sync',
        business_name: 'Apex Test Diagnostics',
        phone: '+91 99999 00000',
        email: 'test@digigrowth.in',
        city: 'Azamgarh',
        appointment_type: 'Supabase Connection Verification',
        preferred_date: new Date().toISOString().split('T')[0],
        preferred_time: '12:00 PM',
        main_problem: 'Verifying automated Supabase booking insertion.'
      });

      setAppointments(getLocalAppointments());
      setIsTesting(false);

      if (testRes.savedToSupabase) {
        setTestResult({
          success: true,
          message: 'Success! Test booking appointment saved directly into Supabase (table: booking_appointments).'
        });
      } else {
        setTestResult({
          success: false,
          message: `Saved locally, but Supabase returned: ${testRes.error || 'Ensure table booking_appointments exists'}`
        });
      }
    } catch (err: any) {
      setIsTesting(false);
      setTestResult({
        success: false,
        message: `Error connecting to Supabase: ${err.message}`
      });
    }
  };

  const config = getSupabaseConfig();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-portal-title"
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
      >
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-950 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-teal-400 font-semibold">
                  DATABASE CONTROL CENTER
                </span>
                <span className="text-[10px] bg-slate-800 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded font-mono">
                  SUPABASE CONNECTED
                </span>
              </div>
              <h2 id="admin-portal-title" className="text-lg font-bold text-white font-display">
                Supabase Storage &amp; Appointment Booking Hub
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
            aria-label="Close admin modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto my-auto space-y-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700">
              <Lock className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-950 font-display">
                Database Management Console
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Enter your administrative passcode to configure your Supabase account and view booking appointment records.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode (Hint: growth2026)"
                className="w-full px-4 py-2.5 text-sm text-center bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              {authError && <p className="text-xs text-rose-600">{authError}</p>}
              <button
                type="submit"
                className="w-full py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors"
              >
                Authenticate &amp; Open Supabase Center
              </button>
            </form>

            <div className="text-[11px] text-slate-400 font-mono">
              Project ID: {config.projectId}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Top Navigation Tabs */}
            <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-2 shrink-0 gap-3">
              <button
                onClick={() => setActiveTab('supabase')}
                className={`py-2.5 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
                  activeTab === 'supabase'
                    ? 'border-teal-600 text-teal-800 bg-white rounded-t-lg'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Database className="w-4 h-4 text-teal-600" />
                <span>Supabase Appointments ({appointments.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('leads')}
                className={`py-2.5 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
                  activeTab === 'leads'
                    ? 'border-teal-600 text-teal-800 bg-white rounded-t-lg'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Users className="w-4 h-4 text-slate-600" />
                <span>All Captured Leads ({leads.length})</span>
              </button>
            </div>

            {/* Scrollable Container */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              
              {activeTab === 'supabase' ? (
                <div className="space-y-6">
                  
                  {/* Project Credentials Card */}
                  <div className="p-5 bg-slate-950 text-white rounded-2xl border border-slate-800 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
                      <div>
                        <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider block">
                          CONFIGURED DATABASE CONNECTION
                        </span>
                        <h4 className="text-base font-bold text-white font-display">
                          Supabase Project: {config.projectId}
                        </h4>
                      </div>

                      <a
                        href={`https://supabase.com/dashboard/project/${config.projectId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-teal-300 hover:text-teal-200 flex items-center gap-1 self-start sm:self-center"
                      >
                        <span>Open Supabase Dashboard</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 block mb-1">API Endpoint URL:</span>
                        <div className="p-2 bg-slate-900 rounded-lg font-mono text-teal-300 border border-slate-800 select-all">
                          {config.url}
                        </div>
                      </div>

                      <div>
                        <span className="text-slate-400 block mb-1">Target Appointments Table:</span>
                        <div className="p-2 bg-slate-900 rounded-lg font-mono text-emerald-300 border border-slate-800">
                          public.booking_appointments
                        </div>
                      </div>
                    </div>

                    {/* Anon Key input */}
                    <div className="pt-2">
                      <div className="flex justify-between items-center mb-1 text-xs">
                        <span className="text-slate-300 font-medium">Supabase Anon Key (Public Key):</span>
                        <span className="text-[11px] text-slate-400">Found in Project Settings &gt; API &gt; anon public</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="text"
                          value={supabaseKeyInput}
                          onChange={(e) => setSupabaseKeyInput(e.target.value)}
                          placeholder="Paste your anon key (e.g. eyJhbGciOiJIUzI1NiIsInR5cCI6...)"
                          className="flex-1 px-3 py-2 text-xs font-mono bg-slate-900 text-white border border-slate-700 rounded-xl focus:border-teal-500 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={handleSaveKey}
                          className="px-4 py-2 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-colors flex items-center justify-center gap-1"
                        >
                          {isKeySaved ? <Check className="w-3.5 h-3.5" /> : <Key className="w-3.5 h-3.5" />}
                          <span>{isKeySaved ? 'Saved!' : 'Save Key'}</span>
                        </button>
                        <button
                          type="button"
                          disabled={isTesting}
                          onClick={handleTestConnection}
                          className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-colors flex items-center justify-center gap-1"
                        >
                          <RefreshCw className={`w-3.5 h-3.5 ${isTesting ? 'animate-spin' : ''}`} />
                          <span>Test Sync</span>
                        </button>
                      </div>
                    </div>

                    {testResult && (
                      <div className={`p-3 rounded-xl text-xs flex items-start gap-2 ${
                        testResult.success 
                          ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300' 
                          : 'bg-amber-950/60 border border-amber-500/40 text-amber-200'
                      }`}>
                        {testResult.success ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> : <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />}
                        <span>{testResult.message}</span>
                      </div>
                    )}
                  </div>

                  {/* SQL Schema helper box */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="font-bold text-slate-900">Need to create the table in Supabase?</div>
                      <div className="text-slate-600 text-[11px]">
                        Run our 1-click SQL migration script in your Supabase SQL Editor.
                      </div>
                    </div>
                    <button
                      onClick={handleCopySql}
                      className="px-4 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors flex items-center gap-1.5 self-start sm:self-center whitespace-nowrap"
                    >
                      {isCopiedSql ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopiedSql ? 'SQL Script Copied!' : 'Copy Supabase SQL'}</span>
                    </button>
                  </div>

                  {/* Appointments Table */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-teal-600" />
                        <span>Booking Appointments Details ({appointments.length})</span>
                      </h4>
                      <button
                        onClick={handleRefresh}
                        className="px-3 py-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg flex items-center gap-1"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Refresh</span>
                      </button>
                    </div>

                    <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                          <tr>
                            <th className="py-3 px-4">Client &amp; Business</th>
                            <th className="py-3 px-4">Contact</th>
                            <th className="py-3 px-4">Scheduled Slot</th>
                            <th className="py-3 px-4">Discussion Problem</th>
                            <th className="py-3 px-4">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {appointments.length === 0 ? (
                            <tr>
                              <td colSpan={5} className="py-8 text-center text-slate-400">
                                No appointments recorded yet. Use the &quot;Book Consultation&quot; button on the website to test.
                              </td>
                            </tr>
                          ) : (
                            appointments.map((apt, idx) => (
                              <tr key={apt.id || idx} className="hover:bg-slate-50/70 transition-colors">
                                <td className="py-3 px-4">
                                  <div className="font-bold text-slate-900">{apt.name}</div>
                                  <div className="text-slate-600">{apt.business_name}</div>
                                  <div className="text-[10px] text-teal-700 font-mono">{apt.city || 'Azamgarh'}</div>
                                </td>
                                <td className="py-3 px-4">
                                  <div className="font-mono text-slate-900">{apt.phone}</div>
                                  <div className="text-slate-500 text-[11px]">{apt.email}</div>
                                  <span className="text-[10px] text-slate-400">via {apt.preferred_contact_method}</span>
                                </td>
                                <td className="py-3 px-4">
                                  <div className="font-semibold text-slate-900">{apt.preferred_date || 'Prompt Callback'}</div>
                                  <div className="text-slate-500 text-[11px]">{apt.preferred_time || 'Business Hours'}</div>
                                </td>
                                <td className="py-3 px-4 max-w-[200px]">
                                  <div className="text-slate-700 line-clamp-2">{apt.main_problem || 'General Audit Review'}</div>
                                </td>
                                <td className="py-3 px-4">
                                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                                    {apt.status || 'Pending'}
                                  </span>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              ) : (
                /* All Leads Tab */
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">
                      Captured Inquiries &amp; Audit Requests ({leads.length})
                    </h4>
                    <button
                      onClick={handleRefresh}
                      className="px-3 py-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Refresh</span>
                    </button>
                  </div>

                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">Contact &amp; Business</th>
                          <th className="py-3 px-4">Location &amp; Sector</th>
                          <th className="py-3 px-4">Primary Bottleneck</th>
                          <th className="py-3 px-4">Budget &amp; Method</th>
                          <th className="py-3 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {leads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-3 px-4">
                              <div className="font-bold text-slate-900">{lead.name}</div>
                              <div className="text-slate-600 font-medium">{lead.businessName}</div>
                              <div className="text-[11px] text-slate-400 font-mono">{lead.phone}</div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-slate-900 font-medium">{lead.city}</div>
                              <div className="text-slate-500 text-[11px]">{lead.businessType}</div>
                            </td>
                            <td className="py-3 px-4 max-w-[220px]">
                              <div className="text-slate-700 line-clamp-2">{lead.mainProblem || 'Not specified'}</div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-slate-900 font-medium">{lead.budgetRange}</div>
                              <span className="text-[10px] font-mono bg-teal-50 text-teal-800 px-1.5 py-0.5 rounded">
                                Via {lead.preferredContactMethod}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-800">
                                {lead.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
