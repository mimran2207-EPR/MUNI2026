import { Sparkles, Home as HomeIcon, Coins, Lamp, ShoppingBag, Users, Heart } from 'lucide-react';

const products = [
  {
    id: 'local-produce',
    title: 'תוצרת מקומית',
    description: 'מוצרים טריים של חקלאי האזור — מגיעים עד הבית.',
    tags: ['חקלאות', 'מקומי'],
    bg: 'from-amber-100 via-orange-200 to-rose-200',
    icon: Sparkles,
    iconColor: 'text-amber-600'
  },
  {
    id: 'local-business',
    title: 'בתי עסק ברשות',
    description: 'תמיכה בעסקים מקומיים — חנויות, בתי קפה ומסעדות.',
    tags: ['עסקים', 'קהילה'],
    bg: 'from-purple-100 via-indigo-200 to-purple-300',
    icon: HomeIcon,
    iconColor: 'text-indigo-700'
  },
  {
    id: 'deals',
    title: 'מבצעים וחיסכון',
    description: 'קופונים ומבצעים בלעדיים לתושבים — חיסכון בהוצאות.',
    tags: ['מבצעים', 'קופונים'],
    bg: 'from-yellow-100 via-amber-200 to-amber-300',
    icon: Coins,
    iconColor: 'text-amber-700'
  },
  {
    id: 'culture',
    title: 'תרבות ומורשת',
    description: 'כרטיסים לאירועי תרבות, חגיגות וטקסים בקהילה.',
    tags: ['תרבות', 'מורשת'],
    bg: 'from-amber-100 via-yellow-200 to-orange-200',
    icon: Lamp,
    iconColor: 'text-orange-700'
  },
  {
    id: 'daily',
    title: 'קניות יומיומיות',
    description: 'הזמנת מצרכים ומוצרים נצרכים מספקים מקומיים מאומתים.',
    tags: ['קמעונאות', 'משלוחים'],
    bg: 'from-emerald-100 via-green-200 to-emerald-300',
    icon: ShoppingBag,
    iconColor: 'text-emerald-700'
  },
  {
    id: 'classes',
    title: 'חוגים וקייטנות',
    description: 'רישום מקוון לחוגים, קייטנות ופעילויות פנאי לכל הגילאים.',
    tags: ['חינוך', 'פנאי'],
    bg: 'from-sky-100 via-cyan-200 to-blue-300',
    icon: Users,
    iconColor: 'text-sky-700'
  }
];

function ProductCard({ product }) {
  const Icon = product.icon;
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_24px_rgba(2,125,179,0.08)] transition hover:shadow-[0_12px_32px_rgba(2,125,179,0.16)]">
      <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${product.bg}`}>
        <Icon size={88} className={`${product.iconColor} drop-shadow-md`} strokeWidth={1.4} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-xl font-bold text-muni-deep">{product.title}</h3>
        <p className="mb-4 flex-1 text-sm leading-6 text-muni-muted">{product.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {product.tags.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <button className="btn-primary w-full py-2.5 text-sm">המשך לרכישה</button>
      </div>
    </div>
  );
}

function CommunityCard() {
  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-muni-primary to-muni-deep p-8 text-white shadow-[0_12px_40px_rgba(2,125,179,0.25)]">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
          <Heart size={72} className="text-white drop-shadow-lg" strokeWidth={1.5} fill="rgba(255,255,255,0.2)" />
        </div>
        <div className="flex-1 text-center md:text-right">
          <h3 className="mb-2 text-2xl font-bold">תרומה לקהילה</h3>
          <p className="mb-5 text-white/85">
            תמכו בקרנות הצדקה והקהילה של המועצה — כל תרומה עוזרת לתושבים שזקוקים לכך.
          </p>
          <button className="rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-muni-primary transition hover:bg-muni-light">
            המשך לרכישה
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <div className="bg-muni-bg pt-28">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-muni-deep md:text-4xl">רוכשים בקליק</h1>
          <p className="text-muni-muted">חנות התושב הדיגיטלית — מוצרים, שירותים וקופונים, הכל במקום אחד.</p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <CommunityCard />
      </div>
    </div>
  );
}
