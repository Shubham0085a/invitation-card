interface SwastikProps {
  className?: string;
}

export function Swastik({ className }: SwastikProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Vertical line */}
      <line x1="50" y1="20" x2="50" y2="80" />
      {/* Horizontal line */}
      <line x1="20" y1="50" x2="80" y2="50" />

      {/* Top arm - goes right */}
      <line x1="50" y1="20" x2="65" y2="20" />
      {/* Right arm - goes down */}
      <line x1="80" y1="50" x2="80" y2="65" />
      {/* Bottom arm - goes left */}
      <line x1="50" y1="80" x2="35" y2="80" />
      {/* Left arm - goes up */}
      <line x1="20" y1="50" x2="20" y2="35" />

      {/* Corner dots (auspicious) */}
      <circle cx="36" cy="36" r="2" fill="currentColor" stroke="none" />
      <circle cx="64" cy="36" r="2" fill="currentColor" stroke="none" />
      <circle cx="64" cy="64" r="2" fill="currentColor" stroke="none" />
      <circle cx="36" cy="64" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
