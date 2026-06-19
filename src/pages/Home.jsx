import { useRef } from 'react';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Megaphone,
  HeartHandshake,
  Building2,
  Car,
  ShieldCheck,
  Music,
  GraduationCap,
  Receipt,
  User,
  Wallet,
  Zap,
  FileCheck
} from 'lucide-react';
import MenuCard from '../components/MenuCard';

const services = [
  { label: 'רוכשים בקליק', icon: ShoppingCart },
  { label: 'שילוט', icon: Megaphone },
  { label: 'רווחה', icon: HeartHandshake },
  { label: 'הנדסה', icon: Building2 },
  { label: 'חניה', icon: Car },
  { label: 'פיקוח', icon: ShieldCheck },
  { label: 'חוגים', icon: Music },
  { label: 'חינוך', icon: GraduationCap },
  { label: 'ארנונה', icon: Receipt }
];

export default function Home() {
  const iconsRef = useRef(null);

  const scroll = (dir) => {
    if (!iconsRef.current) return;
    iconsRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO */}
      <section className="hero-bg relative pb-32 pt-[120px]">
        {/* Title centered */}
        <div className="mx-auto mt-12 max-w-[564px] px-6 text-center">
          <h1 className="text-[36px] font-medium leading-[42px] tracking-[-0.72px] text-white">
            שלום ישראל, הגעת למרחב הדיגיטלי של
            <br />
            מועצה אזורית מנשה
          </h1>
        </div>

        {/* Search bar */}
        <div className="relative mx-auto mt-12 w-full max-w-[848px] px-6">
          <div className="flex h-[72px] items-center justify-between gap-4 rounded-full bg-white px-8 shadow-search">
            <Search size={24} className="shrink-0 text-muni-primary" />
            <input
              type="text"
              placeholder="פתיחת תיק, תשלום שובר, הנכס שלי..."
              className="flex-1 bg-transparent text-right text-[20px] text-muni-darkgray outline-none placeholder:text-muni-tertiary"
            />
          </div>
        </div>
      </section>

      {/* ICONS row — overlapping hero/cards section */}
      <section className="-mt-12 relative z-10">
        <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-6 py-12">
          <button
            onClick={() => scroll(1)}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-muni-primary shadow-md transition hover:bg-muni-light"
            aria-label="הקודם"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={iconsRef}
            className="no-scrollbar flex flex-1 items-start justify-start gap-4 overflow-x-auto scroll-smooth md:justify-center"
          >
            {services.map((s) => (
              <button
                key={s.label}
                className="group flex w-[150px] shrink-0 flex-col items-center gap-2"
              >
                <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white shadow-md transition group-hover:-translate-y-1 group-hover:shadow-lg">
                  <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-gradient-to-br from-muni-secondary to-muni-accent">
                    <s.icon size={42} strokeWidth={1.4} className="text-muni-primary" />
                  </div>
                </div>
                <span className="text-[20px] leading-6 text-muni-primary">{s.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll(-1)}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-muni-primary shadow-md transition hover:bg-muni-light"
            aria-label="הבא"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      </section>

      {/* CARDS — 2x2 grid */}
      <section className="cards-bg relative">
        <div className="mx-auto grid max-w-[1140px] gap-x-16 gap-y-16 px-6 py-12 md:grid-cols-2 md:justify-items-center">
          <MenuCard
            title="האזור האישי שלי"
            icon={User}
            items={[
              { label: 'פרטים אישיים' },
              { label: 'עדכון פרטים' },
              { label: 'התשלומים שלי' },
              { label: 'הגדרות החשבון שלי' },
              {
                label: 'הנכס שלי',
                active: true,
                children: ['פרטי הנכס שלי', 'כתובת הנכס', 'שם הפעולה']
              },
              { label: 'הסדר תשלום' },
              { label: 'תעריפי ארנונה' }
            ]}
          />

          <MenuCard
            title="פעולות מהירות"
            icon={Zap}
            items={[
              { label: 'רוכשים בקליק' },
              { label: 'הרשמה לחוגים' },
              {
                label: 'חינוך',
                active: true,
                children: ['רישום גני ילדים', 'רישום קייטנות', 'הצגת שיבוץ']
              },
              { label: 'ויתור סודיות' },
              { label: 'שליחת שובר למייל' },
              { label: 'בקשה כללית' },
              { label: 'השתתפות עצמית' },
              { label: 'הצהרת מספר נפשות' },
              { label: 'עדכון הוראת קבע בתשלום אשראי' }
            ]}
          />

          <MenuCard
            title="תשלומים וגבייה"
            icon={Wallet}
            items={[
              { label: 'תשלום יתרת חוב' },
              { label: 'תשלום שובר' },
              { label: 'בקשה לאישור בטאבו' },
              { label: 'תשלום מזדמן' },
              { label: 'ספק של הרשות' },
              {
                label: 'הנדסה',
                active: true,
                children: ['תיק מידע להיתר', 'אישור היעדר חובות', 'דף מידע תכנוני', 'חידוש היעדר חובות']
              },
              { label: 'אישור על גובה תשלומים' }
            ]}
          />

          <MenuCard
            title="אישורים וטפסים"
            icon={FileCheck}
            items={[
              { label: 'בקשת הנחה לארנונה' },
              { label: 'הפקת אישור תושב' },
              { label: 'אישור תושב לרשות המיסים' },
              { label: 'פתיחת תיק' },
              { label: 'החלפת משלמים' },
              { label: 'חניה' },
              { label: 'חידוש אישור לטאבו' },
              { label: 'הנחות ארנונה' },
              { label: 'רישום ספק חדש' }
            ]}
          />
        </div>
      </section>

      {/* ABOUT section */}
      <section className="mx-auto max-w-[900px] px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold text-muni-primary">מאחורי החיבור בין העיר לרשות</h2>
        <p className="mx-auto mt-6 max-w-[760px] text-base leading-[1.9] text-muni-darkgray">
          מאחורי המרחב הדיגיטלי החדשני של muni עומדת <span className="font-semibold">EPR מערכות בע"מ</span>, מקבוצת <span className="font-semibold">TSG</span>.
          החברה מובילה עם ניסיון של למעלה מ-20 שנה באספקת פתרונות טכנולוגיים מקיפים לרשויות מקומיות בישראל,
          וגאה להוביל את השינוי לעבר תקשורת דיגיטלית מהירה ויעילה בין התושב לרשות,
          תוך מתן כלים מתקדמים לניהול ושירות אפקטיבי לשני הצדדים. פיתחנו את muni במיוחד עבורכם,
          תושבי הרשויות המקומיות ועובדי הרשות. אנו מחויבים לספק חוויית שימוש פשוטה, מהירה ונעימה.
        </p>
        <button className="btn-primary mt-10">קראו עוד עלינו</button>
      </section>
    </>
  );
}
