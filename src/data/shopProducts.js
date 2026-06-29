export const products = [
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

export function getProduct(id) {
  return products.find((p) => p.id === id);
}
