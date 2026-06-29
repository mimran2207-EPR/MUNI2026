import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getProduct } from '../data/shopProducts';

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

export default function ShopCategory() {
  const { categoryId } = useParams();
  const product = getProduct(categoryId);

  if (!product) {
    return (
      <div className="pt-28 text-center">
        <h1 className="text-2xl font-bold">הקטגוריה לא נמצאה</h1>
        <Link to="/shop" className="btn-primary mt-6 inline-flex">חזרה לחנות</Link>
      </div>
    );
  }

  return (
    <div className="bg-muni-bg pt-28">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <Link
          to="/shop"
          className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-muni-primary transition hover:text-muni-deep"
        >
          <ChevronRight size={18} />
          חזרה לחנות
        </Link>

        <div className={`mb-10 overflow-hidden rounded-3xl bg-gradient-to-br ${product.bg} p-8 md:p-12`}>
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:gap-8 md:text-right">
            <span
              className="select-none text-[120px] leading-none"
              style={{ filter: 'drop-shadow(0 12px 18px rgba(0,0,0,0.25)) drop-shadow(0 4px 6px rgba(0,0,0,0.15))' }}
              role="img"
              aria-label={product.title}
            >
              {product.emoji}
            </span>
            <div>
              <h1 className="text-3xl font-bold text-muni-deep md:text-4xl">{product.title}</h1>
              <p className="mt-3 max-w-2xl text-base text-muni-deep/80">{product.description}</p>
            </div>
          </div>
        </div>

        <div className={`rounded-3xl bg-gradient-to-br ${product.panelBg} p-6 md:p-8`}>
          <h2 className="mb-6 text-2xl font-bold text-muni-deep">אפשרויות תשלום</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {product.options.map((o) => (
              <OptionCard key={o.id} option={o} iconBg={product.iconBg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
