import React, { useState } from 'react';
import { X, BookOpen, Clock, ArrowRight, Share2, Sparkles } from 'lucide-react';
import { INSIGHTS } from '../data/insights';
import { BlogPost } from '../types';

interface InsightsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAudit: () => void;
}

export const InsightsModal: React.FC<InsightsModalProps> = ({ isOpen, onClose, onOpenAudit }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost>(INSIGHTS[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="insights-modal-title"
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
      >
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-teal-700 uppercase">
                INTELLIGENCE PAPERS &amp; GUIDES
              </div>
              <h2 id="insights-modal-title" className="text-lg sm:text-xl font-bold text-slate-950 font-display">
                Digital Growth Insights (/insights)
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="Close insights modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content with Sidebar / Main Pane */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          
          {/* Article Selector List */}
          <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-slate-200 p-4 overflow-y-auto bg-slate-50/60 space-y-2 shrink-0">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
              Browse Topics
            </div>
            {INSIGHTS.map((post) => (
              <button
                key={post.slug}
                onClick={() => setSelectedPost(post)}
                className={`w-full text-left p-3 rounded-xl transition-all ${
                  selectedPost.slug === post.slug
                    ? 'bg-white shadow-xs border border-slate-200 text-slate-950 font-bold'
                    : 'text-slate-600 hover:bg-slate-100 font-medium'
                }`}
              >
                <div className="text-[11px] font-mono text-teal-700 mb-1">{post.category}</div>
                <div className="text-xs line-clamp-2 leading-snug">{post.title}</div>
                <div className="text-[10px] text-slate-400 mt-1.5 flex items-center gap-2">
                  <span>{post.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.publishDate}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Article Detail */}
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-mono">
                <span className="text-teal-700 font-semibold">{selectedPost.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedPost.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedPost.publishDate}</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-display leading-tight mb-4">
                {selectedPost.title}
              </h3>

              <p className="text-sm font-medium text-slate-700 bg-slate-100/80 p-4 rounded-xl border border-slate-200/80 leading-relaxed mb-6">
                {selectedPost.summary}
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="p-4 bg-teal-50/60 border border-teal-200 rounded-xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                <span>Executive Takeaways</span>
              </div>
              <ul className="space-y-1.5 text-xs text-teal-950">
                {selectedPost.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold shrink-0">·</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prose Content */}
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
              {selectedPost.content}
            </div>

            {/* Article Action CTA */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Want to know how this applies to your specific business?
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenAudit();
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors flex items-center gap-1.5"
              >
                <span>RUN FREE BUSINESS AUDIT</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
