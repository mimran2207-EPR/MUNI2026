import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import MenuCard from '../components/MenuCard';

const services = [
  { label: 'שילוט', src: '/icons/signage.svg' },
  { label: 'רווחה', src: '/icons/welfare.svg' },
  { label: 'הנדסה', src: '/icons/engineering.svg' },
  { label: 'פיקוח וחניה', src: '/icons/parking-enforcement.svg', href: 'https://lolaportal.com/dashboard/75/' },
  { label: 'רוכשים בקליק', src: '/icons/mobile-pay.svg', to: '/shop' },
  { label: 'פורטל ילדים', src: '/icons/education.svg', href: 'https://departmentof.choreshchana.workers.dev/' },
  { label: 'פורטל ספקים', src: '/icons/suppliers-portal.svg', href: 'https://eprvendorst.eprmuni.co.il/login?muniCode=2' },
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
            className="no-scrollbar flex flex-1 items-start justify-start gap-6 overflow-x-auto scroll-smooth"
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
              if (s.to) return <Link key={s.label} to={s.to} className={cls}>{inner}</Link>;
              if (s.href) return <a key={s.label} href={s.href} className={cls}>{inner}</a>;
              return <button key={s.label} className={cls}>{inner}</button>;
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
              { label: 'פרטים אישיים', to: '/my-account' },
              { label: 'עדכון פרטים', to: '/my-account' },
              { label: 'התשלומים שלי', to: '/my-account' },
              { label: 'הגדרות החשבון שלי', to: '/my-account' },
              { label: 'הנכס שלי', active: true, children: ['פרטי הנכס שלי', 'כתובת הנכס', 'שם הפעולה'] },
              { label: 'הסדר תשלום', to: '/my-account' },
              { label: 'תעריפי ארנונה', to: '/my-account' }
            ]}
          />
          <MenuCard
            title="פעולות מהירות"
            iconSrc="/icons/card-actions.svg"
            items={[
              { label: 'רוכשים בקליק', to: '/shop' },
              { label: 'הרשמה לחוגים', to: '/forms' },
              { label: 'חינוך', active: true, children: ['רישום גני ילדים', 'רישום קייטנות', 'הצגת שיבוץ'] },
              { label: 'ויתור סודיות', to: '/forms' },
              { label: 'שליחת שובר למייל', to: '/payments' },
              { label: 'בקשה כללית', to: '/forms' },
              { label: 'השתתפות עצמית', to: '/payments' },
              { label: 'הצהרת מספר נפשות', to: '/forms' },
              { label: 'עדכון הוראת קבע בתשלום אשראי', to: '/payments' }
            ]}
          />
          <MenuCard
            title="תשלומים וגבייה"
            iconSrc="/icons/card-payments.svg"
            items={[
              { label: 'תשלום יתרת חוב', to: '/payments' },
              { label: 'תשלום שובר', to: '/payments' },
              { label: 'בקשה לאישור בטאבו', to: '/payments' },
              { label: 'תשלום מזדמן', to: '/payments' },
              { label: 'ספק של הרשות', to: '/payments' },
              { label: 'הנדסה', active: true, children: ['תיק מידע להיתר', 'אישור היעדר חובות', 'דף מידע תכנוני', 'חידוש היעדר חובות'] },
              { label: 'אישור על גובה תשלומים', to: '/payments' }
            ]}
          />
          <MenuCard
            title="אישורים וטפסים"
            iconSrc="/icons/card-forms.svg"
            items={[
              { label: 'בקשת הנחה לארנונה', to: '/forms' },
              { label: 'הפקת אישור תושב', to: '/forms' },
              { label: 'אישור תושב לרשות המיסים', to: '/forms' },
              { label: 'פתיחת תיק', to: '/forms' },
              { label: 'החלפת משלמים', to: '/forms' },
              { label: 'חניה', to: '/forms' },
              { label: 'חידוש אישור לטאבו', to: '/forms' },
              { label: 'הנחות ארנונה', to: '/forms' },
              { label: 'רישום ספק חדש', to: '/forms' }
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
