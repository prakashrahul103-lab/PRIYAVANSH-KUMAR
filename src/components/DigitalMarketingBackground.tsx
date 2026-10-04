import React from 'react';

export const DigitalMarketingBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* 1. Base photographic / digital marketing studio gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/5 to-white" />

      {/* 2. Architectural Marketing Workspace Vector Grid & Elements */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-35"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="chartGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="glowGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1e293b" stopOpacity="0.95" />
          </linearGradient>

          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#64748b" strokeWidth="0.5" strokeOpacity="0.2" />
          </pattern>
        </defs>

        {/* Global Grid Mesh */}
        <rect width="1440" height="800" fill="url(#gridPattern)" />

        {/* Ambient Marketing Tech Glows */}
        <circle cx="200" cy="180" r="260" fill="#0d9488" fillOpacity="0.12" filter="blur(60px)" />
        <circle cx="1200" cy="220" r="300" fill="#3b82f6" fillOpacity="0.10" filter="blur(70px)" />
        <circle cx="720" cy="400" r="280" fill="#14b8a6" fillOpacity="0.08" filter="blur(80px)" />

        {/* LEFT FLANK: Digital Marketing Analytics Dashboard Wireframe */}
        <g transform="translate(60, 100) scale(0.9)" opacity="0.75">
          {/* Main Dashboard Window */}
          <rect x="0" y="0" width="340" height="220" rx="16" fill="url(#screenGrad)" stroke="#334155" strokeWidth="1.5" />
          
          {/* Header bar */}
          <rect x="0" y="0" width="340" height="32" rx="16" fill="#0f172a" />
          <circle cx="20" cy="16" r="4" fill="#f43f5e" />
          <circle cx="34" cy="16" r="4" fill="#f59e0b" />
          <circle cx="48" cy="16" r="4" fill="#10b981" />
          <text x="70" y="20" fill="#94a3b8" fontSize="10" fontFamily="monospace">GOOGLE SEARCH CAMPAIGNS // CTR +184%</text>

          {/* Area Chart with Upward ROI Curve */}
          <path
            d="M 25 180 Q 80 160 130 110 T 230 80 T 315 45 L 315 190 L 25 190 Z"
            fill="url(#glowGrad1)"
          />
          <path
            d="M 25 180 Q 80 160 130 110 T 230 80 T 315 45"
            fill="none"
            stroke="url(#chartGrad1)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Metric Nodes on Chart */}
          <circle cx="130" cy="110" r="5" fill="#0d9488" stroke="#ffffff" strokeWidth="2" />
          <circle cx="230" cy="80" r="5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
          <circle cx="315" cy="45" r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" />

          {/* Floating Metric Badge */}
          <rect x="220" y="25" width="85" height="24" rx="6" fill="#1e293b" stroke="#0d9488" strokeWidth="1" />
          <text x="232" y="41" fill="#2dd4bf" fontSize="11" fontWeight="bold" fontFamily="monospace">+320 LEADS</text>

          {/* KPI Columns */}
          <rect x="25" y="50" width="65" height="35" rx="8" fill="#1e293b" />
          <text x="35" y="65" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Impressions</text>
          <text x="35" y="78" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">48.2K</text>

          <rect x="100" y="50" width="65" height="35" rx="8" fill="#1e293b" />
          <text x="110" y="65" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Avg. Cost/Lead</text>
          <text x="110" y="78" fill="#34d399" fontSize="11" fontWeight="bold" fontFamily="monospace">₹185</text>
        </g>

        {/* RIGHT FLANK: Mobile WhatsApp & Google Local Maps Funnel Visual */}
        <g transform="translate(1040, 110) scale(0.9)" opacity="0.75">
          {/* Smartphone device frame */}
          <rect x="40" y="0" width="220" height="320" rx="28" fill="url(#screenGrad)" stroke="#334155" strokeWidth="2" />
          <rect x="105" y="10" width="90" height="6" rx="3" fill="#334155" />

          {/* Simulated Google Maps Pin Card */}
          <rect x="60" y="40" width="180" height="90" rx="14" fill="#1e293b" stroke="#0d9488" strokeWidth="1" />
          <circle cx="85" cy="65" r="14" fill="#0d9488" fillOpacity="0.2" />
          {/* Map Pin Icon */}
          <path d="M 85 57 C 81 57 78 60 78 64 C 78 69 85 75 85 75 C 85 75 92 69 92 64 C 92 60 89 57 85 57 Z" fill="#2dd4bf" />
          <circle cx="85" cy="63" r="2.5" fill="#0f172a" />
          <text x="108" y="62" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Google Maps 3-Pack</text>
          <text x="108" y="74" fill="#34d399" fontSize="8" fontFamily="sans-serif">Rank #1 in Azamgarh</text>
          <text x="108" y="85" fill="#facc15" fontSize="9" fontFamily="sans-serif">★★★★★ 4.9 (184+)</text>

          {/* Direct WhatsApp Callout bubble inside phone */}
          <rect x="60" y="145" width="180" height="65" rx="14" fill="#064e3b" stroke="#059669" strokeWidth="1" />
          <text x="75" y="165" fill="#a7f3d0" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Direct WhatsApp Funnel</text>
          <text x="75" y="180" fill="#ffffff" fontSize="10" fontFamily="sans-serif">&ldquo;Hi, need appointment for clinic&rdquo;</text>
          <text x="75" y="196" fill="#6ee7b7" fontSize="8" fontFamily="monospace">Instant 1-Tap Conversion</text>

          {/* Conversion rate mini bar */}
          <rect x="60" y="225" width="180" height="65" rx="14" fill="#1e293b" />
          <text x="75" y="245" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Inquiry Conversion Rate</text>
          <text x="75" y="265" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="monospace">14.8%</text>
          <rect x="140" y="255" width="85" height="8" rx="4" fill="#0f172a" />
          <rect x="140" y="255" width="65" height="8" rx="4" fill="#0d9488" />
        </g>

        {/* Central connecting digital data rays */}
        <path
          d="M 370 200 C 500 240, 620 220, 720 250 C 820 280, 940 220, 1070 210"
          fill="none"
          stroke="#0d9488"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.4"
        />
        <circle cx="720" cy="250" r="4" fill="#0d9488" opacity="0.6" />

        {/* Floating Digital Marketing Keyword Nodes in Background */}
        <g opacity="0.5" className="text-[11px] font-mono select-none">
          <text x="380" y="90" fill="#64748b" letterSpacing="1">SEO / LOCAL 3-PACK</text>
          <text x="890" y="95" fill="#64748b" letterSpacing="1">GOOGLE &amp; META ADS</text>
          <text x="650" y="80" fill="#0d9488" letterSpacing="1">AEO &amp; GEO AI SEARCH</text>
          <text x="490" y="320" fill="#64748b" letterSpacing="1">WHATSAPP FUNNEL ROI</text>
        </g>
      </svg>

      {/* 3. Subtle overlay scrim ensuring 100% text readability and high contrast */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[0.5px]" />
    </div>
  );
};
