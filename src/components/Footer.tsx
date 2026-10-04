import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight, Shield, Database } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';

interface FooterProps {
  onOpenAudit: () => void;
  onSelectLocation: (slug: string) => void;
  onOpenAdmin: () => void;
  onOpenInsights: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenAudit, 
  onSelectLocation, 
  onOpenAdmin,
  onOpenInsights
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Lockup & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xl font-extrabold text-white tracking-tight font-display flex items-center gap-1.5">
              <span>DigiGrowth</span>
              <span className="text-teal-400">Intelligence</span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We help local and SME businesses discover their digital growth problems, prioritize what to fix first, and implement conversion systems that generate real inquiries.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Primary Hub: {BUSINESS_CONFIG.PRIMARY_CITY}, {BUSINESS_CONFIG.PRIMARY_STATE}, {BUSINESS_CONFIG.COUNTRY}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.PHONE}`} className="hover:text-white transition-colors">{BUSINESS_CONFIG.PHONE}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.EMAIL}`} className="hover:text-white transition-colors">{BUSINESS_CONFIG.EMAIL}</a>
              </div>
            </div>
          </div>

          {/* Col 3: Service Disciplines */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Growth Disciplines
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Local Business Growth (GBP)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website &amp; WhatsApp Funnels</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Local SEO &amp; Citation Grid</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Short-form Video &amp; Reels</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Google &amp; Meta Performance Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Search (AEO &amp; GEO)</a></li>
            </ul>
          </div>

          {/* Col 4: Service Locations (Configurable) */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Service Locations
            </div>
            <ul className="space-y-2 text-xs">
              {BUSINESS_CONFIG.LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <button
                    onClick={() => onSelectLocation(loc.slug)}
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span>{loc.name}, {loc.state}</span>
                    {loc.isInitialMarket && (
                      <span className="text-[10px] text-teal-400 font-mono font-medium">(Primary)</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Platform & Knowledge */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Resources &amp; Portal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenAudit} className="text-teal-400 hover:text-teal-300 transition-colors font-semibold">
                  Free Growth Audit Tool
                </button>
              </li>
              <li>
                <button onClick={onOpenInsights} className="hover:text-white transition-colors">
                  Digital Growth Insights &amp; Guides
                </button>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Methodology &amp; Case Studies
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Transparent FAQ &amp; Guarantees
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Lead Management &amp; API Portal</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.BUSINESS_NAME}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Transparent Methodology</span>
            <span aria-hidden="true">·</span>
            <span>Zero Fake Vanity Metrics</span>
            <span aria-hidden="true">·</span>
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-400 hover:underline flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp: +{BUSINESS_CONFIG.WHATSAPP_NUMBER}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
