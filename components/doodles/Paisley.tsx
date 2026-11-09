interface PaisleyProps {
  className?: string;
}

export function Paisley({ className }: PaisleyProps) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Main paisley/ambi outer shape */}
      <path
        d="M 60 15 
           C 30 15, 12 45, 12 75 
           C 12 110, 35 145, 65 145 
           C 85 145, 95 130, 95 115 
           C 95 95, 78 80, 60 85 
           C 48 88, 42 100, 50 110"
        strokeWidth="1.4"
      />

      {/* Inner decorative line following the shape */}
      <path
        d="M 60 25 
           C 36 25, 22 50, 22 75 
           C 22 105, 40 135, 63 135 
           C 78 135, 85 125, 85 113 
           C 85 100, 75 92, 65 95"
        strokeWidth="0.8"
      />

      {/* Curled tip at top */}
      <path
        d="M 60 15 C 68 10, 78 12, 80 22 C 82 30, 75 35, 68 32"
        strokeWidth="1.2"
      />

      {/* Center spine line */}
      <path
        d="M 55 40 C 50 60, 45 80, 50 105"
        strokeWidth="0.8"
      />

      {/* Decorative inner details - small leaves along spine */}
      <path d="M 55 45 C 62 42, 65 48, 58 52" strokeWidth="0.8" />
      <path d="M 52 55 C 44 52, 40 58, 48 62" strokeWidth="0.8" />
      <path d="M 53 65 C 60 62, 64 68, 57 72" strokeWidth="0.8" />
      <path d="M 50 75 C 43 72, 38 78, 46 82" strokeWidth="0.8" />
      <path d="M 51 85 C 58 82, 62 88, 55 92" strokeWidth="0.8" />
      <path d="M 50 95 C 43 93, 40 99, 47 102" strokeWidth="0.8" />

      {/* Dots along the inner curve */}
      <circle cx="35" cy="50" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="30" cy="65" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="28" cy="80" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="30" cy="95" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="36" cy="108" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="45" cy="120" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="56" cy="128" r="1.5" fill="currentColor" stroke="none" />

      {/* Small decorative circles */}
      <circle cx="72" cy="25" r="2" strokeWidth="0.8" />
      <circle cx="50" cy="110" r="2.5" strokeWidth="0.8" />

      {/* Tiny accent dots near curl */}
      <circle cx="75" cy="18" r="1" fill="currentColor" stroke="none" />
      <circle cx="78" cy="28" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
