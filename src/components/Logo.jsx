// muni logo from Figma — includes "muni" lettering + "הבית הדיגיטלי שלך" subtitle
// SVG fill is white; for dark text use CSS filter (or apply mix-blend / invert)
export default function Logo({ variant = 'light', className = '' }) {
  const style =
    variant === 'light'
      ? {}
      : {
          // brand-blue version: invert white→black, then colorize via brightness/saturate
          filter:
            'brightness(0) saturate(100%) invert(36%) sepia(64%) saturate(2580%) hue-rotate(173deg) brightness(94%) contrast(101%)'
        };

  return (
    <img
      src="/logos/muni.svg"
      alt="muni - הבית הדיגיטלי שלך"
      className={className}
      style={{ height: 68, width: 'auto', ...style }}
    />
  );
}
