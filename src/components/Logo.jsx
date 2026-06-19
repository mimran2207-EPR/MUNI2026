// muni logo — wordmark from Figma + Hebrew subtitle rendered as real HTML text (RTL)
export default function Logo({ variant = 'light', className = '' }) {
  const isLight = variant === 'light';
  const color = isLight ? '#fff' : '#027DB3';
  const wordmarkFilter = isLight
    ? undefined
    : 'brightness(0) saturate(100%) invert(36%) sepia(64%) saturate(2580%) hue-rotate(173deg) brightness(94%) contrast(101%)';

  return (
    <div className={`inline-flex flex-col items-center leading-none ${className}`}>
      <img
        src="/logos/muni-wordmark.svg"
        alt="muni"
        width={120}
        height={40}
        style={{ filter: wordmarkFilter, display: 'block' }}
      />
      <span
        dir="rtl"
        lang="he"
        className="mt-1 text-[13px] font-medium tracking-wide"
        style={{ color }}
      >
        הבית הדיגיטלי שלך
      </span>
    </div>
  );
}
