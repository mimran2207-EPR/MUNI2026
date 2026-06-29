import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { products } from '../data/shopProducts';

function ProductCard({ product }) {
  return (
    <Link
      to={`/shop/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_24px_rgba(2,125,179,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(2,125,179,0.18)]"
    >
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
        <span className="btn-primary inline-flex w-full items-center justify-center gap-2 py-2.5 text-sm">
          פירוט אפשרויות תשלום
          <ChevronLeft size={18} />
        </span>
      </div>
    </Link>
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
