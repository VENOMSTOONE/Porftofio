import React from 'react';

interface CinematicPosterProps {
  assetKey: string;
  category: string;
  aspectRatio?: string;
  className?: string;
}

export const CinematicPoster: React.FC<CinematicPosterProps> = ({
  assetKey,
  category,
  aspectRatio = '16/9',
  className = '',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[#141518] select-none ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={`Poster visual representation for ${assetKey} - ${category}`}
    >
      {/* Dynamic graphic based on asset key */}
      {assetKey === 'Intro Demo 1' && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 640 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="grad-intro1" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#2c3038" />
              <stop offset="60%" stopColor="#141518" />
              <stop offset="100%" stopColor="#0d0e10" />
            </radialGradient>
            <linearGradient id="beam-amber" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D9A45B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D9A45B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="640" height="360" fill="url(#grad-intro1)" />

          {/* Topographic elevation lines */}
          <path
            d="M-50 280 C100 240, 220 310, 360 270 C480 230, 580 290, 700 260"
            stroke="#ffffff"
            strokeOpacity="0.07"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M-50 240 C120 200, 240 260, 380 220 C500 190, 600 240, 700 210"
            stroke="#ffffff"
            strokeOpacity="0.06"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-50 200 C150 160, 280 210, 410 180 C520 150, 620 190, 700 170"
            stroke="#D9A45B"
            strokeOpacity="0.18"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 4"
          />

          {/* Distant mountain silhouette */}
          <path
            d="M0 360 L0 250 L120 190 L210 240 L340 160 L450 230 L550 170 L640 220 L640 360 Z"
            fill="#0f1012"
            fillOpacity="0.85"
          />

          {/* Searchlight / cinematic focal beam */}
          <polygon points="340,160 180,360 500,360" fill="url(#beam-amber)" opacity="0.35" />

          {/* Focal coordinate pin */}
          <circle cx="340" cy="160" r="4" fill="#D9A45B" />
          <circle cx="340" cy="160" r="14" stroke="#D9A45B" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="340" y1="140" x2="340" y2="180" stroke="#D9A45B" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="320" y1="160" x2="360" y2="160" stroke="#D9A45B" strokeWidth="1" strokeOpacity="0.5" />

          {/* Documentary annotations */}
          <text x="360" y="164" fill="#D9A45B" fontSize="9" fontFamily="monospace" letterSpacing="1">
            LOC // 44°12'32"N · 71°18'44"W
          </text>
          <text x="360" y="178" fill="#A6A6A2" fontSize="8" fontFamily="monospace">
            ELEV: 1,842M · LAST CONTACT
          </text>
        </svg>
      )}

      {assetKey === 'Intro Demo 2' && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 640 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="640" height="360" fill="#121316" />
          {/* Radar Circles */}
          <circle cx="320" cy="180" r="130" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
          <circle cx="320" cy="180" r="90" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />
          <circle cx="320" cy="180" r="50" stroke="#D9A45B" strokeOpacity="0.15" strokeWidth="1" />
          <line x1="160" y1="180" x2="480" y2="180" stroke="#ffffff" strokeOpacity="0.05" />
          <line x1="320" y1="30" x2="320" y2="330" stroke="#ffffff" strokeOpacity="0.05" />

          {/* Sweeper cone */}
          <path
            d="M320 180 L440 100 A130 130 0 0 0 320 50 Z"
            fill="#D9A45B"
            fillOpacity="0.08"
          />

          {/* Flight Path Points */}
          <path
            d="M200 240 L250 210 L300 185 L350 170 L395 160"
            stroke="#D9A45B"
            strokeWidth="1.5"
            strokeDasharray="6 3"
          />
          <circle cx="200" cy="240" r="2.5" fill="#A6A6A2" />
          <circle cx="250" cy="210" r="2.5" fill="#A6A6A2" />
          <circle cx="300" cy="185" r="2.5" fill="#A6A6A2" />
          <circle cx="350" cy="170" r="2.5" fill="#A6A6A2" />
          <circle cx="395" cy="160" r="4" fill="#D9A45B" />
          <circle cx="395" cy="160" r="10" stroke="#D9A45B" strokeOpacity="0.5" strokeWidth="1" />

          {/* Split-screen audio waveform display at bottom */}
          <rect x="50" y="275" width="540" height="45" fill="#0d0e10" stroke="#26282d" rx="2" />
          <path
            d="M60 297 Q90 280 120 297 T180 297 T240 285 T300 297 T360 278 T420 297 T480 290 T540 297 T570 297"
            stroke="#D9A45B"
            strokeWidth="1.2"
            fill="none"
          />
          <text x="65" y="290" fill="#A6A6A2" fontSize="7" fontFamily="monospace">
            ATC FREQ 124.30 MHZ // TRANSCRIPT INGEST
          </text>
        </svg>
      )}

      {assetKey === 'Intro Demo 3' && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 640 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="640" height="360" fill="#141312" />
          {/* Microfiche paper document frame */}
          <rect
            x="120"
            y="40"
            width="400"
            height="280"
            fill="#1b1a18"
            stroke="#3a3733"
            strokeWidth="1"
            rx="2"
          />
          {/* Archive header */}
          <line x1="140" y1="75" x2="500" y2="75" stroke="#4a4640" strokeWidth="1" />
          <text x="140" y="66" fill="#D9A45B" fontSize="9" fontFamily="monospace" letterSpacing="1">
            ARCHIVAL TRANSCRIPT // OCTOBER 1974
          </text>
          <text x="440" y="66" fill="#888" fontSize="8" fontFamily="monospace">
            PAGE 04 / 12
          </text>

          {/* Redaction lines simulating historical document */}
          <rect x="140" y="95" width="220" height="10" fill="#292825" />
          <rect x="375" y="95" width="125" height="10" fill="#292825" />

          <rect x="140" y="115" width="360" height="10" fill="#292825" />
          <rect x="140" y="135" width="180" height="10" fill="#D9A45B" fillOpacity="0.4" />
          <rect x="330" y="135" width="170" height="10" fill="#292825" />

          {/* Sepia photograph placeholder within document */}
          <rect x="140" y="160" width="160" height="120" fill="#100f0e" stroke="#333" />
          <circle cx="220" cy="210" r="30" fill="#1e1c1a" />
          <path d="M160 270 Q220 230 280 270" fill="#191716" />
          <text x="145" y="295" fill="#666" fontSize="7" fontFamily="monospace">
            FIG. 12 — EVIDENCE MARKER A
          </text>

          {/* Right column textual block */}
          <rect x="320" y="165" width="180" height="6" fill="#292825" />
          <rect x="320" y="180" width="160" height="6" fill="#292825" />
          <rect x="320" y="195" width="175" height="6" fill="#292825" />
          <rect x="320" y="210" width="140" height="6" fill="#292825" />
          <rect x="320" y="235" width="180" height="2" fill="#444" />
          <text x="320" y="255" fill="#D9A45B" fontSize="8" fontFamily="monospace">
            VERIFIED WITNESS TESTIMONY
          </text>
        </svg>
      )}

      {assetKey === 'MG Demo 1' && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 640 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="640" height="360" fill="#111214" />
          {/* Manila Case File Folder Geometry */}
          <path
            d="M80 70 L240 70 L260 95 L560 95 L560 310 L80 310 Z"
            fill="#18191c"
            stroke="#2e3137"
            strokeWidth="1.5"
          />
          {/* Red string investigation connection */}
          <line x1="160" y1="160" x2="330" y2="220" stroke="#b33939" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="330" y1="220" x2="470" y2="150" stroke="#b33939" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Pin 1 */}
          <circle cx="160" cy="160" r="4" fill="#D9A45B" />
          <rect x="120" y="175" width="80" height="50" fill="#121316" stroke="#444" rx="2" />
          <text x="130" y="195" fill="#ddd" fontSize="8" fontFamily="monospace">
            SUSPECT #1
          </text>
          <text x="130" y="210" fill="#777" fontSize="7" fontFamily="monospace">
            LOG: 22:14
          </text>

          {/* Pin 2 */}
          <circle cx="330" cy="220" r="4" fill="#D9A45B" />
          <rect x="290" y="235" width="85" height="50" fill="#121316" stroke="#444" rx="2" />
          <text x="300" y="255" fill="#D9A45B" fontSize="8" fontFamily="monospace">
            VEHICLE SIGHTING
          </text>
          <text x="300" y="270" fill="#777" fontSize="7" fontFamily="monospace">
            HIGHWAY 9
          </text>

          {/* Pin 3 - Redacted Document */}
          <circle cx="470" cy="150" r="4" fill="#b33939" />
          <rect x="420" y="165" width="100" height="60" fill="#121316" stroke="#555" rx="2" />
          <rect x="430" y="178" width="80" height="8" fill="#D9A45B" fillOpacity="0.8" />
          <rect x="430" y="192" width="70" height="8" fill="#222" />
          <rect x="430" y="206" width="60" height="8" fill="#222" />

          {/* Large Declassified Stamp */}
          <g transform="translate(360, 90) rotate(-8)">
            <rect x="0" y="0" width="140" height="34" fill="none" stroke="#D9A45B" strokeWidth="1.5" strokeOpacity="0.7" rx="3" />
            <text x="12" y="22" fill="#D9A45B" fontSize="12" fontFamily="monospace" fontWeight="bold" letterSpacing="2" fillOpacity="0.85">
              DECLASSIFIED
            </text>
          </g>
        </svg>
      )}

      {assetKey === 'MG Demo 2' && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 640 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="640" height="360" fill="#0f1113" />
          {/* Isometric 3D terrain grid */}
          <g stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1">
            <line x1="80" y1="280" x2="320" y2="120" />
            <line x1="160" y1="310" x2="400" y2="150" />
            <line x1="240" y1="340" x2="480" y2="180" />
            <line x1="80" y1="280" x2="320" y2="350" />
            <line x1="160" y1="225" x2="400" y2="295" />
            <line x1="240" y1="170" x2="480" y2="240" />
            <line x1="320" y1="120" x2="560" y2="190" />
          </g>

          {/* Topographic elevation hill */}
          <ellipse cx="340" cy="200" rx="140" ry="60" stroke="#D9A45B" strokeOpacity="0.25" strokeWidth="1.2" fill="none" />
          <ellipse cx="340" cy="180" rx="100" ry="42" stroke="#D9A45B" strokeOpacity="0.35" strokeWidth="1.2" fill="none" />
          <ellipse cx="340" cy="160" rx="60" ry="25" stroke="#D9A45B" strokeOpacity="0.55" strokeWidth="1.2" fill="none" />
          <ellipse cx="340" cy="145" rx="25" ry="10" stroke="#D9A45B" strokeOpacity="0.8" strokeWidth="1.5" fill="#D9A45B" fillOpacity="0.1" />

          {/* Projected GPS Path */}
          <path
            d="M140 260 L220 220 L300 210 L340 145"
            stroke="#D9A45B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Waypoints */}
          <circle cx="140" cy="260" r="3" fill="#A6A6A2" />
          <circle cx="220" cy="220" r="3" fill="#A6A6A2" />
          <circle cx="300" cy="210" r="3" fill="#A6A6A2" />
          <circle cx="340" cy="145" r="5" fill="#D9A45B" />
          <circle cx="340" cy="145" r="14" stroke="#D9A45B" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="3 3" />

          {/* Altitude callout */}
          <line x1="340" y1="145" x2="440" y2="105" stroke="#D9A45B" strokeOpacity="0.7" strokeWidth="1" />
          <rect x="440" y="88" width="140" height="36" fill="#141619" stroke="#333" rx="2" />
          <text x="450" y="104" fill="#D9A45B" fontSize="9" fontFamily="monospace" fontWeight="bold">
            ALT: 2,410 METERS
          </text>
          <text x="450" y="117" fill="#A6A6A2" fontSize="8" fontFamily="monospace">
            FINAL GPS PING // 04:18:22
          </text>
        </svg>
      )}

      {assetKey === 'Timeline 1' && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 640 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="640" height="360" fill="#111215" />
          {/* Main Horizontal Timeline Spine */}
          <line x1="60" y1="180" x2="580" y2="180" stroke="#D9A45B" strokeOpacity="0.4" strokeWidth="2" />

          {/* Time markers */}
          <g fill="#A6A6A2" fontSize="9" fontFamily="monospace">
            <line x1="100" y1="170" x2="100" y2="190" stroke="#D9A45B" strokeWidth="2" />
            <text x="85" y="205">21:00</text>
            <rect x="65" y="115" width="85" height="42" fill="#18191d" stroke="#2e3138" rx="2" />
            <text x="75" y="132" fill="#D9A45B" fontSize="8">DEPARTURE</text>
            <text x="75" y="146" fill="#777" fontSize="7">DEPOT A</text>

            <line x1="240" y1="170" x2="240" y2="190" stroke="#D9A45B" strokeWidth="2" />
            <text x="225" y="205">22:45</text>
            <rect x="200" y="220" width="95" height="42" fill="#18191d" stroke="#2e3138" rx="2" />
            <text x="210" y="237" fill="#f3f0e9" fontSize="8">WITNESS SIGHTING</text>
            <text x="210" y="251" fill="#777" fontSize="7">ROUTE 4 JUNCTION</text>

            <line x1="380" y1="170" x2="380" y2="190" stroke="#D9A45B" strokeWidth="2" />
            <text x="365" y="205">01:15</text>
            <rect x="340" y="115" width="105" height="42" fill="#18191d" stroke="#D9A45B" strokeOpacity="0.5" rx="2" />
            <text x="350" y="132" fill="#D9A45B" fontSize="8">CALL TO DISPATCH</text>
            <text x="350" y="146" fill="#777" fontSize="7">DURATION: 14 SEC</text>

            <line x1="510" y1="165" x2="510" y2="195" stroke="#b33939" strokeWidth="2.5" />
            <text x="495" y="210" fill="#b33939" fontWeight="bold">03:42</text>
            <rect x="465" y="225" width="105" height="42" fill="#18191d" stroke="#b33939" strokeOpacity="0.7" rx="2" />
            <text x="475" y="242" fill="#ff6b6b" fontSize="8">SIGNAL SILENCE</text>
            <text x="475" y="256" fill="#777" fontSize="7">CELL TOWER LOST</text>
          </g>

          {/* Synchronized timeline playhead */}
          <line x1="380" y1="60" x2="380" y2="300" stroke="#D9A45B" strokeWidth="1" strokeDasharray="4 3" />
          <polygon points="375,60 385,60 380,70" fill="#D9A45B" />
        </svg>
      )}

      {/* Subtle scanline and film grain overlay effect on all posters */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 bg-repeat"
        style={{
          backgroundImage:
            'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.45) 50%)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/60" />

      {/* Corner documentary markings */}
      <div className="absolute top-3 left-3 flex items-center space-x-2 font-mono text-[9px] text-[#A6A6A2]/70 tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B]/80 animate-pulse"></span>
        <span>{assetKey}</span>
      </div>

      <div className="absolute bottom-3 right-3 font-mono text-[9px] text-[#A6A6A2]/70 tracking-widest uppercase">
        {category}
      </div>
    </div>
  );
};
