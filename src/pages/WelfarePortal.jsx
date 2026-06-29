import { HandHeart, ClipboardCheck } from 'lucide-react';

const FILE_OPENING_URL = 'https://t.eprmuni.co.il/#/fileOpening';

const options = [
  {
    id: 'new-case',
    title: 'פתיחת תיק רווחה חדש',
    description: 'פתיחת תיק חדש במחלקת הרווחה — לפנייה ראשונה לקבלת שירות.',
    Icon: HandHeart,
    bg: 'from-sky-100 via-cyan-200 to-teal-300',
    iconBg: 'bg-white/85 text-muni-primary',
    cta: 'לפתיחת תיק חדש'
  },
  {
    id: 'existing-case',
    title: 'פתיחת תיק רווחה קיים',
    description: 'המשך טיפול בתיק רווחה פעיל — עדכון פרטים, צירוף מסמכים והתכתבות.',
    Icon: ClipboardCheck,
    bg: 'from-emerald-100 via-teal-200 to-cyan-300',
    iconBg: 'bg-white/85 text-muni-primary',
    cta: 'למעבר לתיק הקיים'
  }
];

function OptionCard({ option }) {
  const { title, description, Icon, bg, iconBg, cta } = option;
  return (
    <a
      href={FILE_OPENING_URL}
      className="group flex flex-col overflow-hidden rounded-[36px] bg-white shadow-[0_8px_24px_rgba(2,125,179,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(2,125,179,0.18)]"
    >
      <div className={`relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br ${bg}`}>
        <div
          className={`flex h-32 w-32 items-center justify-center rounded-3xl ${iconBg} shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition duration-500 group-hover:scale-110`}
        >
          <Icon size={64} strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-8 text-right">
        <h3 className="mb-3 text-2xl font-bold text-muni-deep">{title}</h3>
        <p className="mb-6 flex-1 text-base leading-7 text-muni-muted">{description}</p>
        <span className="btn-primary inline-flex w-full items-center justify-center py-3 text-base">
          {cta}
        </span>
      </div>
    </a>
  );
}

export default function WelfarePortal() {
  return (
    <>
      <section className="hero-bg relative overflow-hidden pt-[120px]">
        <div className="wave wave-a" aria-hidden />
        <div className="wave wave-b" aria-hidden />

        <div className="relative mx-auto mt-12 max-w-[760px] px-6 pb-24 text-center">
          <h1 className="text-[36px] font-medium leading-[44px] tracking-[-0.72px] text-white">
            פורטל הרווחה
          </h1>
          <p className="mx-auto mt-4 max-w-[600px] text-[18px] leading-7 text-white/90">
            המרחב הדיגיטלי למטופלי מחלקת הרווחה — פתיחת תיק וניהול הטיפול במקום אחד.
          </p>
        </div>
      </section>

      <section className="bg-muni-bg">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-muni-deep md:text-3xl">איך נוכל לעזור?</h2>
            <p className="mt-2 text-muni-muted">בחרו את האפשרות המתאימה לכם</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {options.map((o) => (
              <OptionCard key={o.id} option={o} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
