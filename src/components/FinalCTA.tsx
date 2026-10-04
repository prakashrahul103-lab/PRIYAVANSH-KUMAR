import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../config/business';

interface FinalCTAProps {
  onOpenAudit: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #0d9488 0%, transparent 65%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="text-xs font-semibold text-teal-400 tracking-wider uppercase mb-3 font-mono">
          KNOW WHAT&apos;S WRONG · KNOW WHAT TO FIX · THEN GROW
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-display mb-6 [text-wrap:balance]">
          Find Your Biggest Digital Growth Gap.
        </h2>

        <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 [text-wrap:balance]">
          Stop guessing where your marketing budget should go. Start with a clear picture of what is working, what is weak and what should be fixed first.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
          >
            <span>CHECK MY BUSINESS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={getWhatsAppLink("Hi, I want a Digital Growth Audit for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-teal-400" />
            <span>TALK ON WHATSAPP</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            100% Free Initial Assessment
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            No Long-Term Contracts
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            Azamgarh &amp; Pan-India Coverage
          </span>
        </div>

      </div>
    </section>
  );
};
