import React, { useState, useEffect, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroImageBannerProps {
  onOpenAudit?: () => void;
}

const STORAGE_KEY = 'digigrowth_hero_custom_image';

export const HeroImageBanner: React.FC<HeroImageBannerProps> = ({ onOpenAudit }) => {
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCustomImage(stored);
      }
    } catch {
      // LocalStorage access safe guard
    }
  }, []);

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          if (result) {
            setCustomImage(result);
            try {
              localStorage.setItem(STORAGE_KEY, result);
            } catch {
              // Ignore quota error if base64 too large
            }
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomImage(result);
          try {
            localStorage.setItem(STORAGE_KEY, result);
          } catch {
            // Safe guard
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Primary image source priority:
  // 1. User uploaded/dragged image
  // 2. Exact filename Copilot_20261002_095215.png (if hosted)
  // 3. Fallback high-res Claude AI Marketing SVG
  const displaySrc = customImage || '/Copilot_20261002_095215.png';

  return (
    <div className="mt-8 mb-6 max-w-5xl mx-auto px-2">
      {/* Hidden file input for click-to-upload alternative */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept="image/*"
        className="hidden"
      />

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleFileDrop}
        className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 border ${
          isDragging 
            ? 'ring-4 ring-teal-400 border-teal-500 scale-[1.01]' 
            : 'border-slate-800/80 hover:border-slate-700'
        } bg-slate-950 group`}
      >
        {/* Drag & Drop Overlaid Active Scrim */}
        {isDragging && (
          <div className="absolute inset-0 z-30 bg-teal-950/85 backdrop-blur-sm flex flex-col items-center justify-center text-white border-2 border-dashed border-teal-400 p-6 text-center animate-fade-in">
            <UploadCloud className="w-16 h-16 text-teal-300 animate-bounce mb-3" />
            <h3 className="text-xl font-bold font-display">Drop Your Image Here!</h3>
            <p className="text-xs text-teal-200 mt-1 max-w-sm">
              Release to instantly update this hero section with your custom digital marketing graphic.
            </p>
          </div>
        )}

        {/* Image Display Container */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] bg-slate-950 flex items-center justify-center overflow-hidden">
          <img
            src={displaySrc}
            alt="Claude AI Marketing"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Seamless fallback to the SVG artwork if PNG is not directly on static server
              if (e.currentTarget.src !== window.location.origin + '/claude_ai_marketing.svg') {
                e.currentTarget.src = '/claude_ai_marketing.svg';
              }
            }}
            className="w-full h-full object-cover sm:object-contain object-center transition-transform duration-700 group-hover:scale-[1.015]"
          />

          {/* Quick Floating Controls */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-20">
            <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono font-semibold text-teal-400 flex items-center gap-1.5 shadow">
              <Sparkles className="w-3 h-3 text-teal-400" />
              <span>AI DIGITAL MARKETING</span>
            </span>
          </div>

          <div className="absolute bottom-3.5 right-3.5 z-20 flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5 shadow"
              title="Click to choose another image or drag & drop directly"
            >
              <ImageIcon className="w-3.5 h-3.5 text-teal-400" />
              <span>Drag &amp; Drop or Change</span>
            </button>
            {onOpenAudit && (
              <button
                onClick={onOpenAudit}
                className="hidden sm:flex px-3.5 py-1.5 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 text-xs font-bold transition-all shadow"
              >
                <span>Audit My Marketing</span>
              </button>
            )}
          </div>
        </div>

        {/* Bottom Context Bar */}
        <div className="px-5 py-3 bg-slate-900/90 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-300">
              AI-Powered Marketing: Omnichannel campaigns, WhatsApp funnels, and local discovery intelligence.
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            Drag any image onto this box to customize
          </span>
        </div>

      </div>
    </div>
  );
};
