import { useRef } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import MenuCard from '../components/MenuCard';

const services = [
  { label: 'רוכשים בקליק', src: '/icons/clickpay.svg' },
  { label: 'שילוט', src: '/icons/signage.svg' },
  { label: 'רווחה', src: '/icons/welfare.svg' },
  { label: 'הנדסה', src: '/icons/engineering.svg' },
  { label: 'חניה', src: '/icons/parking.svg' },
  { label: 'פיקוח', src: '/icons/supervision.svg' },
  { label: 'חוגים', src: '/icons/classes.svg' },
  { label: 'חינוך', src: '/icons/education.svg', href: 'https://departmentof.choreshchana.workers.dev/' },
  { label: 'טפסים דיגיטליים', src: '/icons/digital-forms.svg', href: 'https://epr-digital-public.pages.dev/' },
  { label: 'ארנונה', src: '/icons/arnona.svg' }
];

export default function Home() {
  const iconsRef = useRef(null);
  const scroll = (dir) => iconsRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });

  return (
    <>
      {/* HERO — real Figma silk background + animated turquoise wave overlays */}
      <section className="hero-bg relative overflow-hidden pt-[120px]">
        <div className="wave wave-a" aria-hidden />
        <div className="wave wave-b" aria-hidden />

        <div className="relative mx-auto mt-12 max-w-[700px] px-6 text-center">
          <h1 className="text-[36px] font-medium leading-[42px] tracking-[-0.72px] text-white">
            שלום ישראל, הגעת למרחב הדיגיטלי של
            <br />
            מועצה אזורית מנשה
          </h1>
        </div>

        {/* Search bar — sits at the bottom edge of the hero */}
        <div className="relative mx-auto mb-[-36px] mt-12 w-full max-w-[848px] px-6">
          <div className="flex h-[72px] items-center justify-between gap-4 rounded-full bg-white px-8 shadow-search">
            <Search size={24} className="shrink-0 text-muni-primary" />
            <input
              type="text"
              placeholder="פתיחת תיק, תשלום שובר, הנכס שלי..."
              className="flex-1 bg-transparent text-right text-[20px] text-muni-darkgray outline-none placeholder:text-muni-tertiary"
            />
          </div>
        </div>
        <div className="h-12" />

        {/* Bottom wave divider — 4 overlapping SVG paths flowing on X-axis.
            viewBox is 2880 wide, with the first 1440 mirrored in the second
            1440, so translateX(-50%) loops seamlessly. */}
        <div className="hero-waves" aria-hidden>
          {/* Layer 1 — softest, slowest, lightest turquoise (period 720, 4 cycles) */}
          <svg className="wave-layer-1" viewBox="0 0 2880 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#83DFE8"
              d="M0,70 Q180,20 360,70 T720,70 T1080,70 T1440,70 T1800,70 T2160,70 T2520,70 T2880,70 L2880,140 L0,140 Z"
            />
          </svg>
          {/* Layer 2 — mint accent (period 480, 6 cycles) */}
          <svg className="wave-layer-2" viewBox="0 0 2880 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#5CEBBE"
              d="M0,85 Q120,40 240,85 T480,85 T720,85 T960,85 T1200,85 T1440,85 T1680,85 T1920,85 T2160,85 T2400,85 T2640,85 T2880,85 L2880,140 L0,140 Z"
            />
          </svg>
          {/* Layer 3 — deeper teal mid (period 360, 8 cycles) */}
          <svg className="wave-layer-3" viewBox="0 0 2880 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#27B7C9"
              d="M0,100 Q90,65 180,100 T360,100 T540,100 T720,100 T900,100 T1080,100 T1260,100 T1440,100 T1620,100 T1800,100 T1980,100 T2160,100 T2340,100 T2520,100 T2700,100 T2880,100 L2880,140 L0,140 Z"
            />
          </svg>
          {/* Layer 4 — top white wave that hands off to the white icons row (period 288, 10 cycles) */}
          <svg className="wave-layer-4" viewBox="0 0 2880 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFFFFF"
              d="M0,118 Q72,95 144,118 T288,118 T432,118 T576,118 T720,118 T864,118 T1008,118 T1152,118 T1296,118 T1440,118 T1584,118 T1728,118 T1872,118 T2016,118 T2160,118 T2304,118 T2448,118 T2592,118 T2736,118 T2880,118 L2880,140 L0,140 Z"
            />
          </svg>
        </div>
      </section>

      {/* ICONS row — on clean white below the hero */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-6 py-16">
          <button
            onClick={() => scroll(1)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muni-primary transition hover:bg-muni-light"
            aria-label="הקודם"
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>

          <div
            ref={iconsRef}
            className="no-scrollbar flex flex-1 items-start justify-start gap-6 overflow-x-auto scroll-smooth md:justify-center"
          >
            {services.map((s) => {
              const inner = (
                <>
                  <div className="flex h-[100px] w-[100px] items-center justify-center transition group-hover:-translate-y-1">
                    <img src={s.src} alt={s.label} className="h-full w-full object-contain" />
                  </div>
                  <span className="text-[20px] leading-6 text-muni-primary">{s.label}</span>
                </>
              );
              const cls = 'group flex w-[140px] shrink-0 flex-col items-center gap-1 transition';
              return s.href ? (
                <a key={s.label} href={s.href} className={cls}>{inner}</a>
              ) : (
                <button key={s.label} className={cls}>{inner}</button>
              );
            })}
          </div>

          <button
            onClick={() => scroll(-1)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muni-primary transition hover:bg-muni-light"
            aria-label="הבא"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* CARDS — 2x2 grid */}
      <section className="cards-bg relative">
        <div className="mx-auto grid max-w-[1140px] gap-x-16 gap-y-16 px-6 py-12 md:grid-cols-2 md:justify-items-center">
          <MenuCard
            title="האזור האישי שלי"
            iconSrc="/icons/card-personal.svg"
            items={[
              { label: 'פרטים אישיים' },
              { label: 'עדכון פרטים' },
              { label: 'התשלומים שלי' },
              { label: 'הגדרות החשבון שלי' },
              { label: 'הנכס שלי', active: true, children: ['פרטי הנכס שלי', 'כתובת הנכס', 'שם הפעולה'] },
              { label: 'הסדר תשלום' },
              { label: 'תעריפי ארנונה' }
            ]}
          />
          <MenuCard
            title="פעולות מהירות"
            iconSrc="/icons/card-actions.svg"
            items={[
              { label: 'רוכשים בקליק' },
              { label: 'הרשמה לחוגים' },
              { label: 'חינוך', active: true, children: ['רישום גני ילדים', 'רישום קייטנות', 'הצגת שיבוץ'] },
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
            iconSrc="/icons/card-payments.svg"
            items={[
              { label: 'תשלום יתרת חוב' },
              { label: 'תשלום שובר' },
              { label: 'בקשה לאישור בטאבו' },
              { label: 'תשלום מזדמן' },
              { label: 'ספק של הרשות' },
              { label: 'הנדסה', active: true, children: ['תיק מידע להיתר', 'אישור היעדר חובות', 'דף מידע תכנוני', 'חידוש היעדר חובות'] },
              { label: 'אישור על גובה תשלומים' }
            ]}
          />
          <MenuCard
            title="אישורים וטפסים"
            iconSrc="/icons/card-forms.svg"
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
