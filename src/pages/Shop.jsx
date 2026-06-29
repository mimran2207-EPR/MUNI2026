import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const products = [
  {
    id: 'taxes',
    title: 'מיסים, קנסות ואגרות',
    description: 'ארנונה, דוחות חניה, אגרות שילוט.',
    emoji: '🧾',
    bg: 'from-amber-100 via-yellow-200 to-amber-300'
  },
  {
    id: 'education',
    title: 'חינוך, צהרונים וחוגים',
    description: 'תשלומי הורים, הרשמה לגנים, חוגי מתנ"ס וקורסים.',
    emoji: '🎓',
    bg: 'from-sky-100 via-blue-200 to-sky-300'
  },
  {
    id: 'culture',
    title: 'תרבות, אירועים ופנאי',
    description: 'כרטיסים להופעות, אירועי קיץ ופעילויות עירוניות.',
    emoji: '🎭',
    bg: 'from-rose-100 via-pink-200 to-rose-300'
  },
  {
    id: 'permits',
    title: 'רישוי עסקים, הנדסה ומכרזים',
    description: 'היתרי בניה, תשלום על חוברות מכרז, רישיונות עסק.',
    emoji: '🏗️',
    bg: 'from-stone-100 via-zinc-200 to-stone-300'
  },
  {
    id: 'resident-shop',
    title: 'חנות ושירותים לתושב',
    description: 'רכישת פחי אשפה, רישיון כלבת/וטרינריה, תווי חניה.',
    emoji: '🛍️',
    bg: 'from-emerald-100 via-green-200 to-emerald-300'
  },
  {
    id: 'religious',
    title: 'שירותי דת וקהילה',
    description: 'רישום נישואין, אגרות מקווה, אגרות קבורה.',
    emoji: '🕊️',
    bg: 'from-violet-100 via-purple-200 to-violet-300'
  },
  {
    id: 'welfare',
    title: 'רווחה ובריאות',
    description: 'תשלומי מרכזי יום, טיפת חלב, ושירותים סוציאליים.',
    emoji: '🤲',
    bg: 'from-red-100 via-rose-200 to-red-300',
    expandable: true
  }
];

const welfarePayments = [
  {
    id: 'day-center-elderly',
    title: 'מרכז יום לקשיש',
    description: 'השתתפות עצמית חודשית במרכזי יום לקשישים.',
    emoji: '👴'
  },
  {
    id: 'day-center-disability',
    title: 'מעון יום שיקומי',
    description: 'תשלום על מסגרת יומית לאנשים עם מוגבלות.',
    emoji: '♿'
  },
  {
    id: 'tipat-halav',
    title: 'טיפת חלב',
    description: 'אגרת ביקור וחיסונים לפעוטות.',
    emoji: '🍼'
  },
  {
    id: 'family-counseling',
    title: 'ייעוץ זוגי ומשפחתי',
    description: 'השתתפות עצמית בטיפול במרכז המשפחה.',
    emoji: '💞'
  },
  {
    id: 'respite',
    title: 'נופשונים ושירותי הפוגה',
    description: 'השתתפות במימון נופשון לבני משפחה מטפלים.',
    emoji: '🏖️'
  },
  {
    id: 'food-aid',
    title: 'סיוע במזון וחבילות חג',
    description: 'תרומה והרשמה לחבילות מזון לנזקקים.',
    emoji: '🥖'
  },
  {
    id: 'psychosocial',
    title: 'טיפול פסיכוסוציאלי',
    description: 'השתתפות עצמית בטיפול רגשי וקהילתי.',
    emoji: '🧠'
  },
  {
    id: 'youth-at-risk',
    title: 'נוער בסיכון ומועדוניות',
    description: 'תשלום על השתתפות במועדוניות ותוכניות התערבות.',
    emoji: '🧒'
  }
];

function ProductCard({ product, isExpanded, onToggle }) {
  const expandable = product.expandable;
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_24px_rgba(2,125,179,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(2,125,179,0.18)]">
      <div className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${product.bg}`}>
        <span
          className="select-none text-[120px] leading-none transition duration-500 group-hover:scale-110"
          style={{ filter: 'drop-shadow(0 12px 18px rgba(0,0,0,0.25)) drop-shadow(0 4px 6px rgba(0,0,0,0.15))' }}
          role="img"
          aria-label={product.title}
        >
          {product.emoji}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-muni-deep">{product.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-6 text-muni-muted">{product.description}</p>
        {expandable ? (
          <button
            onClick={onToggle}
            className="btn-primary inline-flex w-full items-center justify-center gap-2 py-2.5 text-sm"
            aria-expanded={isExpanded}
            aria-controls="welfare-payments-panel"
          >
            {isExpanded ? 'סגירת אפשרויות' : 'פירוט תשלומי רווחה'}
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        ) : (
          <button className="btn-primary w-full py-2.5 text-sm">המשך לרכישה</button>
        )}
      </div>
    </div>
  );
}

function WelfareOptionCard({ option }) {
  return (
    <button
      type="button"
      className="group flex items-center gap-4 rounded-2xl bg-white p-5 text-right shadow-[0_4px_12px_rgba(2,125,179,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(2,125,179,0.14)]"
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 via-red-100 to-rose-200 text-4xl transition duration-500 group-hover:scale-110">
        {option.emoji}
      </div>
      <div className="flex-1">
        <h4 className="text-base font-bold text-muni-deep">{option.title}</h4>
        <p className="mt-1 text-xs leading-5 text-muni-muted">{option.description}</p>
      </div>
      <span className="shrink-0 rounded-full bg-muni-light px-3 py-1 text-xs font-semibold text-muni-primary">
        לתשלום
      </span>
    </button>
  );
}

export default function Shop() {
  const [welfareOpen, setWelfareOpen] = useState(false);

  return (
    <div className="bg-muni-bg pt-28">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-3xl font-bold text-muni-deep md:text-4xl">רוכשים בקליק</h1>
          <p className="text-muni-muted">חנות התושב הדיגיטלית — כל התשלומים והרכישות במקום אחד.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              isExpanded={p.id === 'welfare' && welfareOpen}
              onToggle={() => setWelfareOpen((v) => !v)}
            />
          ))}
        </div>

        <div
          id="welfare-payments-panel"
          className={`grid transition-all duration-500 ease-in-out ${
            welfareOpen ? 'mt-8 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
          aria-hidden={!welfareOpen}
        >
          <div className="overflow-hidden">
            <div className="rounded-3xl bg-gradient-to-br from-rose-50 via-white to-red-50 p-8 shadow-[0_8px_24px_rgba(2,125,179,0.06)]">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-3xl">🤲</span>
                <div>
                  <h2 className="text-2xl font-bold text-muni-deep">תשלומי רווחה ובריאות</h2>
                  <p className="text-sm text-muni-muted">בחרו את שירות הרווחה שברצונכם לשלם עבורו.</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {welfarePayments.map((o) => (
                  <WelfareOptionCard key={o.id} option={o} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
