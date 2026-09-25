export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Justin Pennington"
    >
      <rect width="64" height="64" rx="14" fill="#0F2440" />
      <text
        x="32"
        y="43"
        textAnchor="middle"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontSize="30"
        fontWeight="700"
        fill="#FFFFFF"
        letterSpacing="-1"
      >
        JP
      </text>
      <rect x="18" y="49" width="28" height="3" rx="1.5" fill="#EA6726" />
    </svg>
  );
}
