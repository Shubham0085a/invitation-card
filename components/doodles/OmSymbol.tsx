interface OmSymbolProps {
  className?: string;
}

export function OmSymbol({ className }: OmSymbolProps) {
  return (
    <svg
      viewBox="0 0 120 130"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* 
        Om (ॐ) symbol rendered as elegant calligraphic strokes.
        Composed of: lower curve, upper body, tail, crescent, and dot.
      */}

      {/* Lower left curve (the "3" shape bottom) */}
      <path
        d="M 25 72 
           C 18 72, 12 78, 12 86 
           C 12 96, 22 104, 35 104 
           C 50 104, 60 96, 65 86"
        strokeWidth="2.2"
      />

      {/* Upper curve (the "3" shape top part) */}
      <path
        d="M 25 72 
           C 18 72, 14 64, 18 56 
           C 22 48, 32 44, 42 46 
           C 52 48, 58 56, 58 64 
           C 58 70, 55 76, 50 80"
        strokeWidth="2.2"
      />

      {/* Right ascending stroke (the vertical tail going up) */}
      <path
        d="M 65 86 
           C 68 76, 72 66, 74 56 
           C 76 46, 78 36, 82 30 
           C 86 24, 92 22, 96 26"
        strokeWidth="2.2"
      />

      {/* Right hook/curve at bottom of tail */}
      <path
        d="M 65 86 
           C 70 92, 78 96, 86 94 
           C 94 92, 100 84, 98 76 
           C 96 70, 90 68, 86 72"
        strokeWidth="2"
      />

      {/* Top swoosh / virama (the horizontal part with curve) */}
      <path
        d="M 96 26 
           C 100 22, 106 24, 104 30 
           C 102 36, 94 38, 88 36"
        strokeWidth="1.8"
      />

      {/* Chandrabindu - crescent moon */}
      <path
        d="M 78 16 
           C 82 10, 92 10, 96 16"
        strokeWidth="1.8"
      />
      {/* Dot above crescent (bindu) */}
      <circle cx="87" cy="6" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
