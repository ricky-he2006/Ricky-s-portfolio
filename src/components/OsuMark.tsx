/**
 * A compact Ohio State "O" badge — a scarlet tile with a bold block O.
 * Fixed scarlet regardless of theme, the way a school mark stays brand-colored.
 * Sized via className (e.g. `size-6`).
 */
export function OsuMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="The Ohio State University"
    >
      <rect width="40" height="40" rx="9" fill="#BE1E2D" />
      <text
        x="20"
        y="21"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Space Grotesk', 'Inter', sans-serif"
        fontWeight="700"
        fontSize="23"
        fill="#ffffff"
      >
        O
      </text>
    </svg>
  );
}
