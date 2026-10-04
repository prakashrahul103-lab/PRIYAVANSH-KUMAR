import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQS } from '../data/faqs';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-teal-700 tracking-wide uppercase mb-2">
            Direct &amp; Honest Answers
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            Clear, transparent answers about our audit methodology, scope of work, and results policy.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const isGuarantee = faq.question.toLowerCase().includes('guarantee');
            return (
              <div
                key={faq.question}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-slate-300 bg-slate-50/60 shadow-xs' 
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold tracking-tight ${
                    isGuarantee ? 'text-slate-950 flex items-center gap-2' : 'text-slate-900'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform shrink-0 ${
                    isOpen ? 'rotate-180 bg-slate-950 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-150">
                    <p>{faq.answer}</p>
                    {isGuarantee && (
                      <div className="mt-3 p-3 bg-teal-50 border border-teal-200 rounded-xl text-xs text-teal-900 font-medium flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                        <span>Core principle: We focus strictly on measurable system improvements rather than empty promises.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
