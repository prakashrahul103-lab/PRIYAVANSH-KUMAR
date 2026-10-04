import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../config/business';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside 
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 group"
    >
      {/* Sleek Tooltip - Only visible on hover/focus to prevent obscuring page content */}
      <div 
        role="tooltip"
        className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 translate-x-2 group-hover:translate-x-0 hidden sm:flex items-center gap-2 py-1.5 px-3 bg-slate-950 text-white border border-slate-800 rounded-lg shadow-xl text-xs font-medium whitespace-nowrap"
      >
        <span>Chat with a growth strategist</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink("Hi, I want a Digital Growth Audit for my business.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-emerald-300 focus:outline-none"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Subtle Online Pulse Indicator */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-teal-300 border-2 border-white rounded-full" />
      </a>
    </aside>
  );
};
