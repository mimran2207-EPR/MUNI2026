export default function Logo({ variant = 'light', className = '' }) {
  const color = variant === 'light' ? '#fff' : '#0F3D5C';
  const dot = variant === 'light' ? '#2DB6E0' : '#1F87C7';
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span style={{ color }} className="text-3xl font-extrabold tracking-tight">muni</span>
      <span style={{ background: dot }} className="block h-2 w-2 rounded-full" />
    </div>
  );
}
