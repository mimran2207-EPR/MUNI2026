// Circular service icon used in the hero icons row
// Matches the Figma "Main Icons" — 100x100 round shape with soft gradient
export default function ServiceIcon({ label, icon: Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex w-[150px] shrink-0 flex-col items-center gap-1 rounded-3xl py-2 outline-none transition"
    >
      <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white shadow-md transition group-hover:-translate-y-1 group-hover:shadow-lg">
        <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-gradient-to-br from-muni-secondary to-muni-accent">
          <Icon size={42} strokeWidth={1.4} className="text-muni-primary" />
        </div>
      </div>
      <span className="text-xl text-muni-primary">{label}</span>
    </button>
  );
}
