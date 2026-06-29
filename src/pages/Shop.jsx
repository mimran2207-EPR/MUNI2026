import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const products = [
  {
    id: 'taxes',
    title: 'מיסים, קנסות ואגרות',
    description: 'ארנונה, דוחות חניה, אגרות שילוט.',
    emoji: '🧾',
    bg: 'from-amber-100 via-yellow-200 to-amber-300',
    panelBg: 'from-amber-50 via-white to-yellow-50',
    iconBg: 'from-amber-100 via-yellow-100 to-amber-200',
    options: [
      { id: 'arnona', title: 'תשלום ארנונה', description: 'תשלום שוטף או יתרת חוב בארנונה.', emoji: '🏠' },
      { id: 'parking-fine', title: 'דוחות חניה', description: 'תשלום קנס על דוח חניה.', emoji: '🅿️' },
      { id: 'signage-fee', title: 'אגרת שילוט', description: 'אגרה שנתית על שלט עסק.', emoji: '🪧' },
      { id: 'municipal-fine', title: 'קנסות עירוניים', description: 'תשלום קנס מינהלי לרשות.', emoji: '⚖️' },
      { id: 'gardening-fee', title: 'אגרת פינוי גזם', description: 'הזמנת פינוי גזם וגזם בנייה.', emoji: '🌳' },
      { id: 'sewage', title: 'אגרת ביוב והיטל סלילה', description: 'אגרות תשתית עירונית.', emoji: '🚧' }
    ]
  },
  {
    id: 'education',
    title: 'חינוך, צהרונים וחוגים',
    description: 'תשלומי הורים, הרשמה לגנים, חוגי מתנ"ס וקורסים.',
    emoji: '🎓',
    bg: 'from-sky-100 via-blue-200 to-sky-300',
    panelBg: 'from-sky-50 via-white to-blue-50',
    iconBg: 'from-sky-100 via-blue-100 to-sky-200',
    options: [
      { id: 'parents-pay', title: 'תשלומי הורים — בית ספר', description: 'תשלומים שנתיים יסודי וחט"ב.', emoji: '📚' },
      { id: 'kindergarten', title: 'הרשמה לגני ילדים', description: 'רישום לגני העירייה לשנה החדשה.', emoji: '🧸' },
      { id: 'afternoon', title: 'צהרונים וניצנים', description: 'תשלום חודשי על מסגרת צהרון.', emoji: '🌞' },
      { id: 'summer-camp', title: 'קייטנות קיץ', description: 'רישום לקייטנות עירוניות.', emoji: '🏕️' },
      { id: 'classes', title: 'חוגי מתנ"ס וקורסים', description: 'חוגי ספורט, אומנות ומוזיקה.', emoji: '🎨' },
      { id: 'tutoring', title: 'שיעורי עזר ותגבור', description: 'מסגרות תגבור לימודיות.', emoji: '✏️' }
    ]
  },
  {
    id: 'culture',
    title: 'תרבות, אירועים ופנאי',
    description: 'כרטיסים להופעות, אירועי קיץ ופעילויות עירוניות.',
    emoji: '🎭',
    bg: 'from-rose-100 via-pink-200 to-rose-300',
    panelBg: 'from-rose-50 via-white to-pink-50',
    iconBg: 'from-rose-100 via-pink-100 to-rose-200',
    options: [
      { id: 'shows', title: 'הופעות וקונצרטים', description: 'כרטיסים למופעים במרכז התרבות.', emoji: '🎤' },
      { id: 'summer-events', title: 'אירועי קיץ', description: 'פסטיבלים ואירועים בפארקים.', emoji: '🎆' },
      { id: 'pool', title: 'מנוי לבריכה העירונית', description: 'מנוי שנתי / קיצי / משפחתי.', emoji: '🏊' },
      { id: 'library', title: 'מנוי לספרייה', description: 'דמי חבר שנתיים בספרייה העירונית.', emoji: '📖' },
      { id: 'kids-shows', title: 'הצגות ילדים', description: 'כרטיסים להצגות במהלך החופשות.', emoji: '🎪' },
      { id: 'tours', title: 'סיורים מודרכים', description: 'סיורי מורשת והכרת הסביבה.', emoji: '🚶' }
    ]
  },
  {
    id: 'permits',
    title: 'רישוי עסקים, הנדסה ומכרזים',
    description: 'היתרי בניה, תשלום על חוברות מכרז, רישיונות עסק.',
    emoji: '🏗️',
    bg: 'from-stone-100 via-zinc-200 to-stone-300',
    panelBg: 'from-stone-50 via-white to-zinc-50',
    iconBg: 'from-stone-100 via-zinc-100 to-stone-200',
    options: [
      { id: 'building-permit', title: 'אגרת היתר בנייה', description: 'תשלום אגרה לקבלת היתר בנייה.', emoji: '🏗️' },
      { id: 'tender-book', title: 'רכישת חוברת מכרז', description: 'דמי השתתפות בחוברת מכרז פעיל.', emoji: '📑' },
      { id: 'new-business', title: 'רישיון עסק חדש', description: 'אגרת פתיחת תיק עסק.', emoji: '🏪' },
      { id: 'renew-business', title: 'חידוש רישיון עסק', description: 'אגרת חידוש שנתית לעסק קיים.', emoji: '🔄' },
      { id: 'no-debt', title: 'אישור היעדר חובות', description: 'הפקת אישור לטאבו / מכירה.', emoji: '✅' },
      { id: 'info-file', title: 'תיק מידע להיתר', description: 'הזמנת תיק מידע תכנוני.', emoji: '🗂️' }
    ]
  },
  {
    id: 'resident-shop',
    title: 'חנות ושירותים לתושב',
    description: 'רכישת פחי אשפה, רישיון כלבת/וטרינריה, תווי חניה.',
    emoji: '🛍️',
    bg: 'from-emerald-100 via-green-200 to-emerald-300',
    panelBg: 'from-emerald-50 via-white to-green-50',
    iconBg: 'from-emerald-100 via-green-100 to-emerald-200',
    options: [
      { id: 'trash-bin', title: 'רכישת פח אשפה נוסף', description: 'הזמנת פח 240 / 360 ליטר.', emoji: '🗑️' },
      { id: 'dog-license', title: 'רישיון כלב', description: 'רישוי שנתי לכלב + שבב.', emoji: '🐕' },
      { id: 'vet', title: 'חיסון כלבת ושירותי וטרינריה', description: 'חיסונים, סירוס ועיקור.', emoji: '💉' },
      { id: 'resident-parking', title: 'תו חניה לתושב', description: 'תו חניה לאזור המגורים.', emoji: '🚗' },
      { id: 'community-garden', title: 'מוצרי גינה קהילתית', description: 'רכישת ערכות גינון לקהילה.', emoji: '🌱' },
      { id: 'equipment-loan', title: 'השאלת ציוד לאירועים', description: 'שולחנות, כיסאות וציוד הגברה.', emoji: '🎪' }
    ]
  },
  {
    id: 'religious',
    title: 'שירותי דת וקהילה',
    description: 'רישום נישואין, אגרות מקווה, אגרות קבורה.',
    emoji: '🕊️',
    bg: 'from-violet-100 via-purple-200 to-violet-300',
    panelBg: 'from-violet-50 via-white to-purple-50',
    iconBg: 'from-violet-100 via-purple-100 to-violet-200',
    options: [
      { id: 'marriage', title: 'רישום נישואין', description: 'פתיחת תיק נישואין במועצה הדתית.', emoji: '💍' },
      { id: 'mikveh', title: 'אגרת מקווה', description: 'תשלום עבור שירותי מקווה.', emoji: '💧' },
      { id: 'cemetery', title: 'אגרת קבורה', description: 'הסדרת אגרות הקשורות לקבורה.', emoji: '🕯️' },
      { id: 'kashrut', title: 'תעודות כשרות', description: 'אגרת תעודת כשרות לעסק.', emoji: '🥖' },
      { id: 'synagogue', title: 'תרומה לבית כנסת', description: 'תרומות לבתי כנסת ברשות.', emoji: '🕍' },
      { id: 'bar-mitzva', title: 'בר/בת מצווה ברשות', description: 'מקצים והכנה לבר/בת מצווה.', emoji: '✡️' }
    ]
  },
  {
    id: 'welfare',
    title: 'רווחה ובריאות',
    description: 'תשלומי מרכזי יום, טיפת חלב, ושירותים סוציאליים.',
    emoji: '🤲',
    bg: 'from-red-100 via-rose-200 to-red-300',
    panelBg: 'from-rose-50 via-white to-red-50',
    iconBg: 'from-rose-100 via-red-100 to-rose-200',
    options: [
      { id: 'day-center-elderly', title: 'מרכז יום לקשיש', description: 'השתתפות עצמית חודשית במרכזי יום לקשישים.', emoji: '👴' },
      { id: 'day-center-disability', title: 'מעון יום שיקומי', description: 'תשלום על מסגרת יומית לאנשים עם מוגבלות.', emoji: '♿' },
      { id: 'tipat-halav', title: 'טיפת חלב', description: 'אגרת ביקור וחיסונים לפעוטות.', emoji: '🍼' },
      { id: 'family-counseling', title: 'ייעוץ זוגי ומשפחתי', description: 'השתתפות עצמית בטיפול במרכז המשפחה.', emoji: '💞' },
      { id: 'respite', title: 'נופשונים ושירותי הפוגה', description: 'השתתפות במימון נופשון לבני משפחה מטפלים.', emoji: '🏖️' },
      { id: 'food-aid', title: 'סיוע במזון וחבילות חג', description: 'תרומה והרשמה לחבילות מזון לנזקקים.', emoji: '🥖' },
      { id: 'psychosocial', title: 'טיפול פסיכוסוציאלי', description: 'השתתפות עצמית בטיפול רגשי וקהילתי.', emoji: '🧠' },
      { id: 'youth-at-risk', title: 'נוער בסיכון ומועדוניות', description: 'תשלום על השתתפות במועדוניות ותוכניות התערבות.', emoji: '🧒' }
    ]
  }
];

function ProductCard({ product, isExpanded, onToggle }) {
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
        <button
          onClick={onToggle}
          className="btn-primary inline-flex w-full items-center justify-center gap-2 py-2.5 text-sm"
          aria-expanded={isExpanded}
          aria-controls="shop-options-panel"
        >
          {isExpanded ? 'סגירת אפשרויות' : 'פירוט אפשרויות תשלום'}
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </div>
  );
}

function OptionCard({ option, iconBg }) {
  return (
    <button
      type="button"
      className="group flex items-center gap-4 rounded-2xl bg-white p-5 text-right shadow-[0_4px_12px_rgba(2,125,179,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(2,125,179,0.14)]"
    >
      <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${iconBg} text-4xl transition duration-500 group-hover:scale-110`}>
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
  const [openId, setOpenId] = useState(null);
  const openProduct = products.find((p) => p.id === openId);

  const toggle = (id) => setOpenId((curr) => (curr === id ? null : id));

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
              isExpanded={openId === p.id}
              onToggle={() => toggle(p.id)}
            />
          ))}
        </div>

        <div
          id="shop-options-panel"
          className={`grid transition-all duration-500 ease-in-out ${
            openProduct ? 'mt-8 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
          aria-hidden={!openProduct}
        >
          <div className="overflow-hidden">
            {openProduct && (
              <div className={`rounded-3xl bg-gradient-to-br ${openProduct.panelBg} p-8 shadow-[0_8px_24px_rgba(2,125,179,0.06)]`}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-3xl">{openProduct.emoji}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-muni-deep">{openProduct.title}</h2>
                    <p className="text-sm text-muni-muted">בחרו את השירות שברצונכם לשלם עבורו.</p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {openProduct.options.map((o) => (
                    <OptionCard key={o.id} option={o} iconBg={openProduct.iconBg} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
