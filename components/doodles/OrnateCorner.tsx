interface OrnateCornerProps {
  className?: string;
}

export function OrnateCorner({ className }: OrnateCornerProps) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Outer corner angle */}
      <path d="M 4 30 L 4 4 L 30 4" strokeWidth="1.5" />
      {/* Inner corner angle */}
      <path d="M 8 24 L 8 8 L 24 8" strokeWidth="0.8" />
      {/* Corner floral flourish */}
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M 12 14 C 12 20, 18 24, 22 24" strokeWidth="0.8" />
      <path d="M 14 12 C 20 12, 24 18, 24 22" strokeWidth="0.8" />
      <circle cx="22" cy="24" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="24" cy="22" r="1.5" fill="currentColor" stroke="none" />
      {/* Delicate leaf curves */}
      <path d="M 4 18 C 10 18, 14 14, 14 8" strokeWidth="0.8" />
      <circle cx="4" cy="4" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

