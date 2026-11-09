interface BellsProps {
  className?: string;
}

export function Bells({ className }: BellsProps) {
  return (
    <svg
      viewBox="0 0 160 140"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Ribbon / bow at top center */}
      <path
        d="M 80 18 C 70 10, 55 8, 52 18 C 49 26, 60 30, 72 24"
        strokeWidth="1.2"
      />
      <path
        d="M 80 18 C 90 10, 105 8, 108 18 C 111 26, 100 30, 88 24"
        strokeWidth="1.2"
      />
      {/* Ribbon tails */}
      <path d="M 52 18 C 48 28, 42 35, 38 32" strokeWidth="1" />
      <path d="M 108 18 C 112 28, 118 35, 122 32" strokeWidth="1" />
      {/* Ribbon center knot */}
      <ellipse cx="80" cy="20" rx="4" ry="5" strokeWidth="1" />

      {/* Strings from bow to bells */}
      <path d="M 76 24 C 68 35, 58 42, 55 50" strokeWidth="0.8" />
      <path d="M 84 24 C 92 35, 102 42, 105 50" strokeWidth="0.8" />

      {/* Left bell */}
      <path
        d="M 35 90 
           C 35 68, 42 52, 55 48 
           C 68 52, 75 68, 75 90"
        strokeWidth="1.3"
      />
      {/* Left bell bottom rim */}
      <ellipse cx="55" cy="92" rx="20" ry="5" strokeWidth="1.3" />
      {/* Left bell clapper */}
      <line x1="55" y1="88" x2="55" y2="105" strokeWidth="1" />
      <circle cx="55" cy="107" r="3" fill="currentColor" stroke="none" />
      {/* Left bell top */}
      <ellipse cx="55" cy="48" rx="4" ry="2" strokeWidth="1" />
      {/* Left bell decorative lines */}
      <path d="M 42 75 C 48 73, 62 73, 68 75" strokeWidth="0.7" />
      <path d="M 40 82 C 47 80, 63 80, 70 82" strokeWidth="0.7" />

      {/* Right bell */}
      <path
        d="M 85 90 
           C 85 68, 92 52, 105 48 
           C 118 52, 125 68, 125 90"
        strokeWidth="1.3"
      />
      {/* Right bell bottom rim */}
      <ellipse cx="105" cy="92" rx="20" ry="5" strokeWidth="1.3" />
      {/* Right bell clapper */}
      <line x1="105" y1="88" x2="105" y2="105" strokeWidth="1" />
      <circle cx="105" cy="107" r="3" fill="currentColor" stroke="none" />
      {/* Right bell top */}
      <ellipse cx="105" cy="48" rx="4" ry="2" strokeWidth="1" />
      {/* Right bell decorative lines */}
      <path d="M 92 75 C 98 73, 112 73, 118 75" strokeWidth="0.7" />
      <path d="M 90 82 C 97 80, 113 80, 120 82" strokeWidth="0.7" />

      {/* Small decorative dots around */}
      <circle cx="80" cy="38" r="1" fill="currentColor" stroke="none" />
      <circle cx="30" cy="70" r="1" fill="currentColor" stroke="none" />
      <circle cx="130" cy="70" r="1" fill="currentColor" stroke="none" />
      <circle cx="80" cy="115" r="1.5" fill="currentColor" stroke="none" />

      {/* Sound lines from bells */}
      <path d="M 28 95 C 24 92, 22 88, 24 84" strokeWidth="0.7" />
      <path d="M 24 98 C 19 94, 16 88, 18 82" strokeWidth="0.7" />
      <path d="M 132 95 C 136 92, 138 88, 136 84" strokeWidth="0.7" />
      <path d="M 136 98 C 141 94, 144 88, 142 82" strokeWidth="0.7" />
    </svg>
  );
}
