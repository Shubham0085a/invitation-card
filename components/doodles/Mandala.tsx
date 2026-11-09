interface MandalaProps {
  className?: string;
}

// Fixed-precision helper to prevent SSR/client floating point hydration mismatch
const f = (n: number) => n.toFixed(2);

export function Mandala({ className }: MandalaProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Center dot */}
      <circle cx="100" cy="100" r="2" fill="currentColor" stroke="none" />

      {/* Inner circle */}
      <circle cx="100" cy="100" r="8" />

      {/* Second ring */}
      <circle cx="100" cy="100" r="18" />

      {/* Inner petals (8) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = f(100 + 18 * Math.cos(angle));
        const y1 = f(100 + 18 * Math.sin(angle));
        const x2 = f(100 + 34 * Math.cos(angle));
        const y2 = f(100 + 34 * Math.sin(angle));
        const cx1 = f(100 + 28 * Math.cos(angle - 0.3));
        const cy1 = f(100 + 28 * Math.sin(angle - 0.3));
        const cx2 = f(100 + 28 * Math.cos(angle + 0.3));
        const cy2 = f(100 + 28 * Math.sin(angle + 0.3));
        return (
          <g key={`inner-petal-${i}`}>
            <path
              d={`M ${x1} ${y1} Q ${cx1} ${cy1} ${x2} ${y2} Q ${cx2} ${cy2} ${x1} ${y1}`}
            />
          </g>
        );
      })}

      {/* Middle ring */}
      <circle cx="100" cy="100" r="38" />

      {/* Dots on middle ring (16) */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const cx = f(100 + 38 * Math.cos(angle));
        const cy = f(100 + 38 * Math.sin(angle));
        return (
          <circle
            key={`mid-dot-${i}`}
            cx={cx}
            cy={cy}
            r="1.5"
            fill="currentColor"
            stroke="none"
          />
        );
      })}

      {/* Outer petals (12) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = f(100 + 40 * Math.cos(angle));
        const y1 = f(100 + 40 * Math.sin(angle));
        const x2 = f(100 + 62 * Math.cos(angle));
        const y2 = f(100 + 62 * Math.sin(angle));
        const cx1 = f(100 + 54 * Math.cos(angle - 0.22));
        const cy1 = f(100 + 54 * Math.sin(angle - 0.22));
        const cx2 = f(100 + 54 * Math.cos(angle + 0.22));
        const cy2 = f(100 + 54 * Math.sin(angle + 0.22));
        return (
          <path
            key={`outer-petal-${i}`}
            d={`M ${x1} ${y1} Q ${cx1} ${cy1} ${x2} ${y2} Q ${cx2} ${cy2} ${x1} ${y1}`}
          />
        );
      })}

      {/* Outer ring */}
      <circle cx="100" cy="100" r="66" />

      {/* Scalloped edge arcs (24) */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle1 = (i * 15 * Math.PI) / 180;
        const angle2 = ((i + 1) * 15 * Math.PI) / 180;
        const x1 = f(100 + 66 * Math.cos(angle1));
        const y1 = f(100 + 66 * Math.sin(angle1));
        const x2 = f(100 + 66 * Math.cos(angle2));
        const y2 = f(100 + 66 * Math.sin(angle2));
        const midAngle = ((i + 0.5) * 15 * Math.PI) / 180;
        const cx1 = f(100 + 76 * Math.cos(midAngle));
        const cy1 = f(100 + 76 * Math.sin(midAngle));
        return (
          <path
            key={`scallop-${i}`}
            d={`M ${x1} ${y1} Q ${cx1} ${cy1} ${x2} ${y2}`}
          />
        );
      })}

      {/* Outermost decorative dots (24) */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = ((i + 0.5) * 15 * Math.PI) / 180;
        const cx = f(100 + 80 * Math.cos(angle));
        const cy = f(100 + 80 * Math.sin(angle));
        return (
          <circle
            key={`outer-dot-${i}`}
            cx={cx}
            cy={cy}
            r="1"
            fill="currentColor"
            stroke="none"
          />
        );
      })}

      {/* Fine outer ring */}
      <circle cx="100" cy="100" r="85" strokeWidth="0.6" />

      {/* Teardrop accents between outer petals (12) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = ((i * 30 + 15) * Math.PI) / 180;
        const bx = f(100 + 44 * Math.cos(angle));
        const by = f(100 + 44 * Math.sin(angle));
        const tx = f(100 + 56 * Math.cos(angle));
        const ty = f(100 + 56 * Math.sin(angle));
        const cl = f(100 + 52 * Math.cos(angle - 0.12));
        const cyl = f(100 + 52 * Math.sin(angle - 0.12));
        const cr = f(100 + 52 * Math.cos(angle + 0.12));
        const cyr = f(100 + 52 * Math.sin(angle + 0.12));
        return (
          <path
            key={`teardrop-${i}`}
            d={`M ${bx} ${by} Q ${cl} ${cyl} ${tx} ${ty} Q ${cr} ${cyr} ${bx} ${by}`}
            strokeWidth="0.8"
          />
        );
      })}
    </svg>
  );
}
