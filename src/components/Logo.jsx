// muni logo from Figma — includes "muni" lettering + "הבית הדיגיטלי שלך" subtitle
// Render at native aspect ratio to keep text crisp.
export default function Logo({ variant = 'light', className = '' }) {
  const filter =
    variant === 'light'
      ? undefined
      : 'brightness(0) saturate(100%) invert(36%) sepia(64%) saturate(2580%) hue-rotate(173deg) brightness(94%) contrast(101%)';

  return (
    <img
      src="/logos/muni.svg"
      alt="muni - הבית הדיגיטלי שלך"
      width={133}
      height={69}
      className={className}
      style={{ filter, imageRendering: 'crisp-edges' }}
    />
  );
}
