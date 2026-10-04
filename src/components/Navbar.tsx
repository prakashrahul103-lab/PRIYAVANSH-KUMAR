import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';

interface NavbarProps {
  onOpenAudit: () => void;
  onOpenBookAppointment?: () => void;
  onOpenInsights?: () => void;
  onOpenContact?: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAudit, 
  onOpenBookAppointment,
  onOpenInsights, 
  onOpenContact,
  onOpenAdmin 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'Audit', href: '#audit', action: onOpenAudit },
    { label: 'Book Appointment', href: '#book', action: onOpenBookAppointment },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Insights', href: '#insights', action: onOpenInsights },
    { label: 'Contact', href: '#contact', action: onOpenContact },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (link.action) {
      link.action();
      return;
    }
    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-lg sm:text-xl font-bold tracking-tight text-slate-950 font-display flex items-center gap-1.5 focus:outline-none shrink-0"
          >
            <span>DigiGrowth</span>
            <span className="text-teal-600">Intelligence</span>
          </a>

          {/* Zone 2: Navigation Links (visible on md screens and above) */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6 text-xs lg:text-sm font-medium text-slate-600 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="hover:text-slate-950 transition-colors py-1 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_CONFIG.PHONE}`}
              className="hidden xl:flex px-2.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors items-center gap-1.5 whitespace-nowrap"
              title="Call directly"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>{BUSINESS_CONFIG.PHONE}</span>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors items-center gap-1.5 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-teal-600" />
              <span>Talk on WhatsApp</span>
            </a>

            <button
              onClick={onOpenAudit}
              className="px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-xs transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>CHECK MY BUSINESS</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
            </button>

            {/* Mobile / Tablet Menu Button (shown when navbar links are hidden) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold text-center text-white bg-slate-950 rounded-lg flex items-center justify-center gap-2"
            >
              <span>CHECK MY BUSINESS</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 text-xs font-semibold text-center text-slate-700 bg-slate-100 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-teal-600" />
              <span>Talk on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.PHONE}`}
              className="w-full py-2 px-4 text-xs font-semibold text-center text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call {BUSINESS_CONFIG.PHONE}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
