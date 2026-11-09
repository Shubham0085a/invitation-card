interface GaneshProps {
  className?: string;
}

export function Ganesh({ className }: GaneshProps) {
  return (
    <svg
      viewBox="0 0 140 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Crown / Mukut */}
      <path
        d="M 55 28 L 60 12 L 65 24 L 70 8 L 75 24 L 80 12 L 85 28"
        strokeWidth="1.2"
      />
      {/* Crown base */}
      <path d="M 55 28 C 55 30, 85 30, 85 28" strokeWidth="1.2" />

      {/* Head - rounded */}
      <path
        d="M 52 32 
           C 42 32, 32 42, 32 55 
           C 32 65, 38 72, 45 75"
        strokeWidth="1.4"
      />
      <path
        d="M 88 32 
           C 98 32, 108 42, 108 55 
           C 108 65, 102 72, 95 75"
        strokeWidth="1.4"
      />
      {/* Top of head connecting to crown */}
      <path d="M 52 32 L 55 28" strokeWidth="1.2" />
      <path d="M 88 32 L 85 28" strokeWidth="1.2" />

      {/* Left ear */}
      <path
        d="M 32 50 
           C 22 45, 15 52, 18 62 
           C 20 68, 28 70, 32 65"
        strokeWidth="1.3"
      />
      {/* Left ear inner detail */}
      <path d="M 28 52 C 24 54, 22 60, 26 64" strokeWidth="0.8" />

      {/* Right ear */}
      <path
        d="M 108 50 
           C 118 45, 125 52, 122 62 
           C 120 68, 112 70, 108 65"
        strokeWidth="1.3"
      />
      {/* Right ear inner detail */}
      <path d="M 112 52 C 116 54, 118 60, 114 64" strokeWidth="0.8" />

      {/* Eyes */}
      <ellipse cx="55" cy="50" rx="5" ry="3" strokeWidth="1" />
      <circle cx="55" cy="50" r="1.5" fill="currentColor" stroke="none" />
      <ellipse cx="85" cy="50" rx="5" ry="3" strokeWidth="1" />
      <circle cx="85" cy="50" r="1.5" fill="currentColor" stroke="none" />

      {/* Tilak / bindi on forehead */}
      <circle cx="70" cy="40" r="2" fill="currentColor" stroke="none" />

      {/* Trunk */}
      <path
        d="M 65 62 
           C 62 62, 58 68, 55 78 
           C 52 88, 55 95, 60 100 
           C 65 105, 72 102, 70 95 
           C 68 90, 62 88, 58 92"
        strokeWidth="1.4"
      />
      {/* Trunk right side line */}
      <path
        d="M 75 62 
           C 72 65, 68 72, 65 80 
           C 62 88, 64 94, 68 98"
        strokeWidth="1.2"
      />

      {/* Trunk base / mouth area */}
      <path d="M 65 62 C 67 60, 73 60, 75 62" strokeWidth="1" />

      {/* Tusk (small, on right) */}
      <path
        d="M 78 68 C 82 75, 84 82, 80 85"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Body suggestion - rounded belly */}
      <path
        d="M 45 75 
           C 40 82, 38 95, 40 108 
           C 42 118, 50 128, 58 130"
        strokeWidth="1.3"
      />
      <path
        d="M 95 75 
           C 100 82, 102 95, 100 108 
           C 98 118, 90 128, 82 130"
        strokeWidth="1.3"
      />

      {/* Bottom / seat */}
      <path d="M 58 130 C 65 134, 75 134, 82 130" strokeWidth="1.2" />

      {/* Arms suggestion */}
      {/* Left arm holding modak */}
      <path
        d="M 42 90 C 34 92, 28 98, 30 105 C 31 108, 35 108, 36 105"
        strokeWidth="1"
      />
      {/* Modak (sweet) in hand */}
      <path
        d="M 30 105 C 26 102, 24 106, 28 108 C 32 110, 34 108, 30 105"
        strokeWidth="0.8"
      />

      {/* Right arm raised with blessing */}
      <path
        d="M 98 90 C 106 88, 112 82, 110 76"
        strokeWidth="1"
      />
      {/* Open palm */}
      <path d="M 110 76 C 108 72, 112 70, 114 74" strokeWidth="0.8" />
      <path d="M 110 76 C 110 71, 114 71, 113 75" strokeWidth="0.8" />

      {/* Belly line */}
      <path
        d="M 58 100 C 62 108, 78 108, 82 100"
        strokeWidth="0.8"
      />

      {/* Small Om on belly */}
      <path
        d="M 67 104 C 65 102, 67 100, 70 101 C 73 102, 72 105, 70 106 C 68 107, 66 106, 67 104"
        strokeWidth="0.6"
      />

      {/* Base / Aasan (seat cushion) */}
      <path
        d="M 35 132 C 35 136, 45 140, 70 140 C 95 140, 105 136, 105 132"
        strokeWidth="1"
      />
      <path d="M 35 132 C 40 130, 55 134, 70 134" strokeWidth="0.8" />
      <path d="M 105 132 C 100 130, 85 134, 70 134" strokeWidth="0.8" />
    </svg>
  );
}
