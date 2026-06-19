export default function Logo({ variant = 'light', className = '' }) {
  const color = variant === 'light' ? '#fff' : '#027DB3';
  return (
    <svg viewBox="0 0 135 72" className={className} style={{ height: 56, width: 'auto' }}>
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Rubik, sans-serif"
        fontWeight="800"
        fontSize="58"
        fill={color}
        letterSpacing="-2"
      >
        muni
      </text>
      <circle cx="118" cy="58" r="6" fill="#5CEBBE" />
    </svg>
  );
}
