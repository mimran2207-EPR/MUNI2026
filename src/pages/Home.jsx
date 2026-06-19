import { Link } from 'react-router-dom';
import {
  Search,
  GraduationCap,
  HeartHandshake,
  Building2,
  Receipt,
  FileText,
  Calendar,
  Bus,
  Trees,
  ShieldCheck,
  ArrowLeft,
  CreditCard,
  ClipboardList,
  Bell,
  User,
  Home as HomeIcon
} from 'lucide-react';

const services = [
  { icon: Receipt, label: 'ארנונה', slug: 'arnona' },
  { icon: GraduationCap, label: 'חינוך', slug: 'education' },
  { icon: HeartHandshake, label: 'רווחה', slug: 'revaha' },
  { icon: Building2, label: 'הנדסה', slug: 'handasa' },
  { icon: FileText, label: 'טפסים', slug: 'forms' },
  { icon: Calendar, label: 'אירועים', slug: 'events' },
  { icon: Bus, label: 'תחבורה', slug: 'transport' },
  { icon: Trees, label: 'איכ"ס', slug: 'environment' },
  { icon: ShieldCheck, label: 'ביטחון', slug: 'security' }
];

const personalActions = [
  { icon: HomeIcon, label: 'הנכסים שלי' },
  { icon: CreditCard, label: 'יתרת חוב' },
  { icon: ClipboardList, label: 'הבקשות שלי' },
  { icon: Bell, label: 'הודעות אישיות' }
];

const quickActions = [
  { icon: Receipt, label: 'תשלום ארנונה' },
  { icon: FileText, label: 'הזמנת תושב' },
  { icon: Building2, label: 'בקשת טאבו' },
  { icon: GraduationCap, label: 'רישום לחוגים' },
  { icon: HeartHandshake, label: 'דיווח מפגע' },
  { icon: ClipboardList, label: 'אישור על תשלום' }
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pb-24 pt-28 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-muni-accent/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            שלום ישראל, הגעת למרחב הדיגיטלי של
            <br />
            <span className="text-muni-accent">מועצה אזורית מנשה</span>
          </h1>

          {/* Search bar */}
          <div className="mx-auto mt-10 flex max-w-2xl items-center gap-2 rounded-2xl bg-white p-2 shadow-card">
            <Search size={20} className="mr-3 text-muni-muted" />
            <input
              type="text"
              placeholder="איך אפשר לעזור? חפשו שירות, טופס או מידע..."
              className="flex-1 bg-transparent text-base text-muni-text outline-none placeholder:text-muni-muted"
            />
            <button className="rounded-xl bg-muni-primary px-6 py-3 font-medium text-white transition hover:bg-muni-dark">
              חיפוש
            </button>
          </div>
        </div>
      </section>

      {/* Service icons */}
      <section className="relative -mt-12 mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-white p-6 shadow-card md:p-10">
          <div className="grid grid-cols-3 gap-4 md:grid-cols-9">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/service/${s.slug}`}
                className="group flex flex-col items-center gap-3 rounded-2xl p-3 transition hover:bg-muni-light"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muni-light text-muni-primary transition group-hover:bg-muni-primary group-hover:text-white">
                  <s.icon size={28} strokeWidth={1.6} />
                </div>
                <span className="text-sm font-medium text-muni-text">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main grid: personal area + quick actions */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <DashboardCard title="האזור האישי שלי" icon={User} link="/my-account">
            <div className="grid grid-cols-2 gap-3">
              {personalActions.map((a) => (
                <button key={a.label} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-muni-bg p-4 text-right transition hover:border-muni-primary hover:bg-muni-light">
                  <a.icon size={20} className="text-muni-primary" />
                  <span className="text-sm font-medium">{a.label}</span>
                </button>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard title="פעולות מהירות" icon={ArrowLeft} link="/forms">
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((a) => (
                <button key={a.label} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-muni-bg p-4 text-right transition hover:border-muni-primary hover:bg-muni-light">
                  <a.icon size={20} className="text-muni-primary" />
                  <span className="text-sm font-medium">{a.label}</span>
                </button>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard title="תשלומים וגבייה" icon={CreditCard} link="/payments">
            <ul className="space-y-3">
              <PaymentRow label="ארנונה - חודש נוכחי" amount="₪ 487.20" />
              <PaymentRow label="מים וביוב" amount="₪ 192.50" />
              <PaymentRow label="היטל שמירה" amount="₪ 65.00" />
              <PaymentRow label="חוגי ילדים" amount="₪ 240.00" />
            </ul>
            <Link to="/payments" className="btn-primary mt-4 w-full">
              לתשלום מאובטח
            </Link>
          </DashboardCard>

          <DashboardCard title="אישורים וטפסים" icon={ClipboardList} link="/forms">
            <ul className="space-y-3">
              <FormRow label="אישור תושב" />
              <FormRow label="אישור על תשלום ארנונה" />
              <FormRow label="טופס שינוי מחזיק" />
              <FormRow label="בקשת הנחה בארנונה" />
              <FormRow label="טופס דיווח מפגע" />
            </ul>
          </DashboardCard>
        </div>
      </section>

      {/* About section */}
      <section className="mx-auto mt-20 max-w-5xl px-6 text-center">
        <h2 className="text-2xl font-bold text-muni-deep md:text-3xl">מאחורי החיבור בין העיר לרשות</h2>
        <p className="mx-auto mt-4 max-w-3xl text-muni-muted">
          מאחורי המרחב הדיגיטלי החדשני של MUNI עומדת EPR מערכות בע"מ, מקבוצת TSG.
          החברה מובילה עם ניסיון של למעלה מ-20 שנה באספקת פתרונות טכנולוגיים מקיפים לרשויות מקומיות בישראל,
          וגאה להוביל את השינוי לעבר תקשורת דיגיטלית מהירה ויעילה בין התושב לרשות, תוך מתן כלים מתקדמים לניהול ושירות אפקטיבי לשני הצדדים.
        </p>
        <button className="btn-primary mt-8">קראו עוד עלינו</button>
      </section>
    </>
  );
}

function DashboardCard({ title, icon: Icon, link, children }) {
  return (
    <div className="card">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muni-light text-muni-primary">
            <Icon size={20} />
          </div>
          <h3 className="text-lg font-bold text-muni-deep">{title}</h3>
        </div>
        {link && (
          <Link to={link} className="text-sm font-medium text-muni-primary hover:text-muni-dark">
            לצפייה בכל הפרטים ←
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}

function PaymentRow({ label, amount }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-muni-bg px-4 py-3">
      <span className="text-sm">{label}</span>
      <span className="font-semibold text-muni-deep">{amount}</span>
    </li>
  );
}

function FormRow({ label }) {
  return (
    <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition hover:border-muni-primary hover:bg-muni-light">
      <span className="text-sm">{label}</span>
      <ArrowLeft size={16} className="text-muni-muted" />
    </li>
  );
}
