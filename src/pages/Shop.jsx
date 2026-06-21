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
    bg: 'from-red-100 via-rose-200 to-red-300'
  }
];

function ProductCard({ product }) {
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
        <button className="btn-primary w-full py-2.5 text-sm">המשך לרכישה</button>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <div className="bg-muni-bg pt-28">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-3xl font-bold text-muni-deep md:text-4xl">רוכשים בקליק</h1>
          <p className="text-muni-muted">חנות התושב הדיגיטלית — כל התשלומים והרכישות במקום אחד.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
