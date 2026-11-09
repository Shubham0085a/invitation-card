interface DiyaProps {
  className?: string;
}

export function Diya({ className }: DiyaProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Flame outer */}
      <path
        d="M 50 20 
           C 44 30, 40 40, 42 48 
           C 44 54, 48 56, 50 56 
           C 52 56, 56 54, 58 48 
           C 60 40, 56 30, 50 20"
        strokeWidth="1.2"
      />

      {/* Flame inner */}
      <path
        d="M 50 30 
           C 47 36, 46 42, 47 47 
           C 48 50, 50 51, 50 51 
           C 50 51, 52 50, 53 47 
           C 54 42, 53 36, 50 30"
        strokeWidth="0.8"
      />

      {/* Flame glow lines */}
      <path d="M 38 35 C 36 34, 34 35, 33 37" strokeWidth="0.6" />
      <path d="M 62 35 C 64 34, 66 35, 67 37" strokeWidth="0.6" />
      <path d="M 36 42 C 34 42, 32 43, 31 45" strokeWidth="0.6" />
      <path d="M 64 42 C 66 42, 68 43, 69 45" strokeWidth="0.6" />

      {/* Wick base */}
      <line x1="50" y1="56" x2="50" y2="62" strokeWidth="1" />

      {/* Diya bowl - oil lamp */}
      <path
        d="M 28 68 
           C 25 62, 35 58, 50 58 
           C 65 58, 75 62, 72 68"
        strokeWidth="1.3"
      />

      {/* Diya body - wider bowl */}
      <path
        d="M 28 68 
           C 22 72, 20 80, 24 86 
           C 28 92, 38 96, 50 96 
           C 62 96, 72 92, 76 86 
           C 80 80, 78 72, 72 68"
        strokeWidth="1.4"
      />

      {/* Diya base / stand */}
      <path
        d="M 38 96 
           C 36 100, 34 104, 36 106 
           C 40 110, 60 110, 64 106 
           C 66 104, 64 100, 62 96"
        strokeWidth="1.3"
      />

      {/* Base bottom */}
      <path
        d="M 36 106 C 36 108, 40 112, 50 112 C 60 112, 64 108, 64 106"
        strokeWidth="1"
      />

      {/* Oil level in diya */}
      <path
        d="M 32 72 C 38 70, 50 69, 62 70 C 68 71, 70 72, 68 72"
        strokeWidth="0.6"
      />

      {/* Decorative dots on diya body */}
      <circle cx="38" cy="82" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="50" cy="84" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="62" cy="82" r="1.2" fill="currentColor" stroke="none" />

      {/* Decorative line on diya */}
      <path
        d="M 30 78 C 36 76, 50 75, 64 76 C 68 77, 70 78, 70 78"
        strokeWidth="0.7"
      />
    </svg>
  );
}
