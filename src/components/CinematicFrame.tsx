'use client';

import React from 'react';

interface CinematicFrameProps {
  type: 'hero' | 'intro-1' | 'intro-2' | 'intro-3' | 'mg-1' | 'mg-2' | 'timeline-1';
  aspectRatio?: string;
  className?: string;
}

export const CinematicFrame: React.FC<CinematicFrameProps> = ({
  type,
  aspectRatio = '16/9',
  className = '',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[#0e0f11] select-none ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={`Cinematic documentary visual for ${type}`}
    >
      {/* 1. HERO VISUAL: A24 / HBO style cinematic mystery still */}
      {type === 'hero' && (
        <svg
          className="absolute inset-0 w-full h-full object-cover"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="hero-sky" cx="50%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#25272e" />
              <stop offset="45%" stopColor="#151619" />
              <stop offset="100%" stopColor="#0c0d0e" />
            </radialGradient>
            <linearGradient id="fog-layer" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#101112" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#181a1d" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#25272e" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="amber-beacon" cx="62%" cy="48%" r="40%">
              <stop offset="0%" stopColor="#D9A45B" stopOpacity="0.45" />
              <stop offset="25%" stopColor="#D9A45B" stopOpacity="0.15" />
              <stop offset="70%" stopColor="#D9A45B" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="headlight-beam" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#D9A45B" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#D9A45B" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#D9A45B" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Deep night sky */}
          <rect width="1200" height="600" fill="url(#hero-sky)" />

          {/* Subtle star / dust particles */}
          <circle cx="210" cy="80" r="1" fill="#F3F0E9" opacity="0.4" />
          <circle cx="380" cy="120" r="1.2" fill="#F3F0E9" opacity="0.3" />
          <circle cx="750" cy="65" r="1" fill="#F3F0E9" opacity="0.5" />
          <circle cx="920" cy="110" r="1.5" fill="#F3F0E9" opacity="0.4" />
          <circle cx="1040" cy="75" r="0.8" fill="#F3F0E9" opacity="0.6" />

          {/* Distant Ridge Silhouette (Layer 1) */}
          <path
            d="M-50 360 Q180 240 420 310 T890 260 T1250 320 L1250 600 L-50 600 Z"
            fill="#121316"
          />

          {/* Midground Ridge Silhouette (Layer 2) */}
          <path
            d="M-50 410 Q240 310 540 370 T980 320 T1250 390 L1250 600 L-50 600 Z"
            fill="#0f1012"
          />

          {/* Moody fog layer over valley */}
          <rect y="280" width="1200" height="220" fill="url(#fog-layer)" />

          {/* Atmospheric ambient beacon glow */}
          <circle cx="740" cy="290" r="280" fill="url(#amber-beacon)" />

          {/* Solitary mystery road winding into darkness */}
          <path
            d="M380 600 C520 480 640 410 740 350 C760 338 775 320 780 300"
            stroke="#1b1c20"
            strokeWidth="38"
            fill="none"
          />
          <path
            d="M380 600 C520 480 640 410 740 350 C760 338 775 320 780 300"
            stroke="#282a30"
            strokeWidth="32"
            fill="none"
          />
          {/* Faint road centerline */}
          <path
            d="M380 600 C520 480 640 410 740 350 C760 338 775 320 780 300"
            stroke="#D9A45B"
            strokeWidth="1.5"
            strokeDasharray="14 18"
            strokeOpacity="0.4"
            fill="none"
          />

          {/* Lone vehicle / observation post light beam */}
          <polygon
            points="740,350 420,580 680,600"
            fill="url(#headlight-beam)"
            opacity="0.6"
          />
          <circle cx="740" cy="350" r="4" fill="#D9A45B" />
          <circle cx="740" cy="350" r="18" stroke="#D9A45B" strokeWidth="1" strokeOpacity="0.3" />

          {/* Distant weather observation tower / radio mast */}
          <line x1="840" y1="230" x2="840" y2="330" stroke="#F3F0E9" strokeOpacity="0.25" strokeWidth="1.5" />
          <line x1="830" y1="330" x2="850" y2="330" stroke="#F3F0E9" strokeOpacity="0.25" strokeWidth="1" />
          <line x1="835" y1="280" x2="845" y2="280" stroke="#F3F0E9" strokeOpacity="0.25" strokeWidth="1" />
          {/* Blinking red transmitter warning light */}
          <circle cx="840" cy="230" r="2.5" fill="#e74c3c" opacity="0.85" />
          <circle cx="840" cy="230" r="8" stroke="#e74c3c" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* Editorial Documentary Overlays */}
          <g fontFamily="var(--font-jetbrains-mono), monospace" fontSize="11" fill="#A6A6A2" opacity="0.75">
            <text x="50" y="70" letterSpacing="2">
              REC // 00:03:42:18
            </text>
            <text x="50" y="90" fontSize="9" opacity="0.6">
              ISO 1600 · 24.00 FPS · 35MM ANAMORPHIC
            </text>
            <text x="1150" y="70" textAnchor="end" letterSpacing="1.5">
              LAT 44°12'32"N · LON 71°18'44"W
            </text>
            <text x="1150" y="90" textAnchor="end" fontSize="9" opacity="0.6">
              LOCATION: NORTH SADDLE ELEVATION 1,842M
            </text>
          </g>

          {/* Minimalist framing reticles */}
          <g stroke="#F3F0E9" strokeOpacity="0.18" strokeWidth="1">
            <line x1="570" y1="300" x2="630" y2="300" />
            <line x1="600" y1="270" x2="600" y2="330" />
          </g>

          {/* 2.39:1 Anamorphic Letterbox Bars */}
          <rect x="0" y="0" width="1200" height="28" fill="#090a0b" />
          <rect x="0" y="572" width="1200" height="28" fill="#090a0b" />
        </svg>
      )}

      {/* 2. INTRO DEMO 1: Cold Open & Tension */}
      {type === 'intro-1' && (
        <svg
          className="absolute inset-0 w-full h-full object-cover"
          viewBox="0 0 800 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="800" height="450" fill="#111214" />
          <path
            d="M0 380 L180 260 L380 320 L580 210 L800 290 L800 450 L0 450 Z"
            fill="#0b0c0d"
          />
          {/* Topographic elevation overlays */}
          <path
            d="M-40 280 Q200 180 400 240 T840 200"
            stroke="#D9A45B"
            strokeOpacity="0.25"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="4 4"
          />
          <path
            d="M-40 230 Q220 140 420 190 T840 160"
            stroke="#ffffff"
            strokeOpacity="0.08"
            strokeWidth="1"
            fill="none"
          />
          {/* Search beam */}
          <polygon points="580,210 320,450 780,450" fill="#D9A45B" fillOpacity="0.12" />
          <circle cx="580" cy="210" r="4" fill="#D9A45B" />
          <circle cx="580" cy="210" r="14" stroke="#D9A45B" strokeWidth="1" strokeOpacity="0.5" />

          {/* Timecode and meta */}
          <text x="35" y="45" fill="#D9A45B" fontSize="10" fontFamily="monospace" letterSpacing="1">
            DEMO 01 // COLD OPEN HOOK
          </text>
          <text x="765" y="45" textAnchor="end" fill="#888" fontSize="9" fontFamily="monospace">
            PACING CADENCE · 01:45
          </text>
        </svg>
      )}

      {/* 3. INTRO DEMO 2: Radar Logs & Conflict */}
      {type === 'intro-2' && (
        <svg
          className="absolute inset-0 w-full h-full object-cover"
          viewBox="0 0 800 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="800" height="450" fill="#0f1012" />
          {/* Sweep circles */}
          <circle cx="400" cy="225" r="180" stroke="#ffffff" strokeOpacity="0.05" />
          <circle cx="400" cy="225" r="120" stroke="#ffffff" strokeOpacity="0.07" />
          <circle cx="400" cy="225" r="60" stroke="#D9A45B" strokeOpacity="0.2" />
          <line x1="200" y1="225" x2="600" y2="225" stroke="#ffffff" strokeOpacity="0.05" />
          <line x1="400" y1="30" x2="400" y2="420" stroke="#ffffff" strokeOpacity="0.05" />

          {/* Radar sweep slice */}
          <path d="M400 225 L560 120 A180 180 0 0 0 400 45 Z" fill="#D9A45B" fillOpacity="0.08" />

          {/* Lost target point */}
          <circle cx="510" cy="190" r="5" fill="#D9A45B" />
          <circle cx="510" cy="190" r="14" stroke="#D9A45B" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="3 3" />

          {/* Lower waveform */}
          <rect x="40" y="360" width="720" height="50" fill="#141518" stroke="#25272e" />
          <path
            d="M50 385 Q110 365 170 385 T290 385 T410 370 T530 385 T650 375 T750 385"
            stroke="#D9A45B"
            strokeWidth="1.5"
            fill="none"
          />
          <text x="50" y="375" fill="#A6A6A2" fontSize="8" fontFamily="monospace">
            TRANSCRIPT FREQ: 124.30 MHZ // LAST RECORDED TRANSMISSION
          </text>
        </svg>
      )}

      {/* 4. INTRO DEMO 3: Historical Microfiche */}
      {type === 'intro-3' && (
        <svg
          className="absolute inset-0 w-full h-full object-cover"
          viewBox="0 0 800 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="800" height="450" fill="#131211" />
          {/* Microfiche document frame */}
          <rect x="140" y="45" width="520" height="360" fill="#1a1918" stroke="#33312e" />
          <line x1="170" y1="90" x2="630" y2="90" stroke="#3d3b38" />
          <text x="170" y="78" fill="#D9A45B" fontSize="10" fontFamily="monospace" letterSpacing="1">
            ARCHIVAL DOSSIER // DEPT OF INTERIOR 1974
          </text>

          {/* Redactions */}
          <rect x="170" y="115" width="280" height="12" fill="#282624" />
          <rect x="470" y="115" width="160" height="12" fill="#282624" />
          <rect x="170" y="140" width="460" height="12" fill="#282624" />
          <rect x="170" y="165" width="220" height="12" fill="#D9A45B" fillOpacity="0.4" />
          <rect x="410" y="165" width="220" height="12" fill="#282624" />

          {/* Sepia photo */}
          <rect x="170" y="200" width="200" height="160" fill="#0e0d0c" stroke="#2b2927" />
          <circle cx="270" cy="265" r="35" fill="#1d1b19" />
          <path d="M190 350 Q270 290 350 350" fill="#161513" />

          <rect x="395" y="205" width="235" height="8" fill="#282624" />
          <rect x="395" y="225" width="210" height="8" fill="#282624" />
          <rect x="395" y="245" width="230" height="8" fill="#282624" />
          <rect x="395" y="265" width="180" height="8" fill="#282624" />
          <text x="395" y="320" fill="#D9A45B" fontSize="9" fontFamily="monospace">
            AUTHENTICATED WITNESS LOGBOOK
          </text>
        </svg>
      )}

      {/* 5. MG DEMO 1: Forensic Case File */}
      {type === 'mg-1' && (
        <svg
          className="absolute inset-0 w-full h-full object-cover"
          viewBox="0 0 800 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="800" height="450" fill="#111215" />
          {/* Manila Case File Folder */}
          <path
            d="M100 80 L300 80 L330 110 L700 110 L700 400 L100 400 Z"
            fill="#17181c"
            stroke="#2b2d35"
            strokeWidth="1.5"
          />
          {/* Evidence line */}
          <line x1="200" y1="200" x2="420" y2="280" stroke="#b33939" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="420" y1="280" x2="580" y2="180" stroke="#b33939" strokeWidth="2" strokeDasharray="4 4" />

          <circle cx="200" cy="200" r="5" fill="#D9A45B" />
          <circle cx="420" cy="280" r="5" fill="#D9A45B" />
          <circle cx="580" cy="180" r="5" fill="#b33939" />

          {/* Stamp */}
          <g transform="translate(460, 100) rotate(-7)">
            <rect x="0" y="0" width="180" height="44" stroke="#D9A45B" strokeWidth="2" fill="none" strokeOpacity="0.8" rx="2" />
            <text x="18" y="29" fill="#D9A45B" fontSize="16" fontFamily="monospace" fontWeight="bold" letterSpacing="3">
              DECLASSIFIED
            </text>
          </g>

          <text x="130" y="360" fill="#A6A6A2" fontSize="9" fontFamily="monospace">
            EXHIBIT B // CHAIN OF CUSTODY VERIFIED
          </text>
        </svg>
      )}

      {/* 6. MG DEMO 2: Topographic Route */}
      {type === 'mg-2' && (
        <svg
          className="absolute inset-0 w-full h-full object-cover"
          viewBox="0 0 800 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="800" height="450" fill="#0f1114" />
          {/* Isometric grid */}
          <g stroke="#ffffff" strokeOpacity="0.06">
            <line x1="100" y1="360" x2="400" y2="160" />
            <line x1="200" y1="400" x2="500" y2="200" />
            <line x1="300" y1="440" x2="600" y2="240" />
            <line x1="100" y1="360" x2="400" y2="440" />
            <line x1="200" y1="290" x2="500" y2="370" />
            <line x1="300" y1="220" x2="600" y2="300" />
          </g>

          {/* Topographic elevation hill */}
          <ellipse cx="440" cy="250" rx="160" ry="70" stroke="#D9A45B" strokeOpacity="0.25" strokeWidth="1.2" fill="none" />
          <ellipse cx="440" cy="225" rx="115" ry="50" stroke="#D9A45B" strokeOpacity="0.4" strokeWidth="1.2" fill="none" />
          <ellipse cx="440" cy="200" rx="70" ry="30" stroke="#D9A45B" strokeOpacity="0.65" strokeWidth="1.2" fill="none" />
          <ellipse cx="440" cy="180" rx="30" ry="12" stroke="#D9A45B" strokeOpacity="0.9" strokeWidth="1.5" fill="#D9A45B" fillOpacity="0.1" />

          {/* GPS Path */}
          <path
            d="M180 340 L280 280 L380 270 L440 180"
            stroke="#D9A45B"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="440" cy="180" r="6" fill="#D9A45B" />
          <circle cx="440" cy="180" r="16" stroke="#D9A45B" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="3 3" />

          <text x="465" y="175" fill="#D9A45B" fontSize="10" fontFamily="monospace" fontWeight="bold">
            ELEV: 2,410 METERS
          </text>
          <text x="465" y="190" fill="#A6A6A2" fontSize="9" fontFamily="monospace">
            LAST CONFIRMED SATELLITE FIX
          </text>
        </svg>
      )}

      {/* 7. TIMELINE 1: Multi-Perspective Chronology */}
      {type === 'timeline-1' && (
        <svg
          className="absolute inset-0 w-full h-full object-cover"
          viewBox="0 0 1000 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1000" height="450" fill="#101114" />
          {/* Main Axis */}
          <line x1="80" y1="225" x2="920" y2="225" stroke="#D9A45B" strokeOpacity="0.45" strokeWidth="2" />

          {/* Pins */}
          <g fill="#A6A6A2" fontSize="11" fontFamily="monospace">
            <line x1="160" y1="210" x2="160" y2="240" stroke="#D9A45B" strokeWidth="2" />
            <text x="140" y="260">21:00</text>
            <rect x="100" y="140" width="120" height="50" fill="#17181c" stroke="#2b2d35" rx="2" />
            <text x="112" y="162" fill="#D9A45B" fontSize="10">DEPARTURE</text>
            <text x="112" y="178" fill="#777" fontSize="9">BASE CAMP A</text>

            <line x1="380" y1="210" x2="380" y2="240" stroke="#D9A45B" strokeWidth="2" />
            <text x="360" y="260">23:15</text>
            <rect x="320" y="280" width="130" height="50" fill="#17181c" stroke="#2b2d35" rx="2" />
            <text x="332" y="302" fill="#f3f0e9" fontSize="10">RADIO CHECK</text>
            <text x="332" y="318" fill="#777" fontSize="9">PASS SADDLE</text>

            <line x1="620" y1="210" x2="620" y2="240" stroke="#D9A45B" strokeWidth="2" />
            <text x="600" y="260">01:40</text>
            <rect x="560" y="140" width="140" height="50" fill="#17181c" stroke="#D9A45B" strokeOpacity="0.5" rx="2" />
            <text x="572" y="162" fill="#D9A45B" fontSize="10">CALL TO DISPATCH</text>
            <text x="572" y="178" fill="#777" fontSize="9">14 SEC DURATION</text>

            <line x1="840" y1="205" x2="840" y2="245" stroke="#b33939" strokeWidth="3" />
            <text x="820" y="265" fill="#b33939" fontWeight="bold">03:42</text>
            <rect x="780" y="280" width="130" height="50" fill="#17181c" stroke="#b33939" strokeOpacity="0.7" rx="2" />
            <text x="792" y="302" fill="#ff7675" fontSize="10">SIGNAL LOSS</text>
            <text x="792" y="318" fill="#777" fontSize="9">TOWER DROPOUT</text>
          </g>

          {/* Sync Playhead */}
          <line x1="620" y1="70" x2="620" y2="380" stroke="#D9A45B" strokeWidth="1.5" strokeDasharray="6 4" />
          <polygon points="613,70 627,70 620,84" fill="#D9A45B" />
        </svg>
      )}

      {/* Subtle scanline atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)',
          backgroundSize: '100% 3px',
        }}
      />
    </div>
  );
};
