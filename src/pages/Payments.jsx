import { useState } from 'react';
import { CreditCard, ShieldCheck, Receipt } from 'lucide-react';

const bills = [
  { id: 1, label: 'ארנונה - חודש יוני', amount: 487.20 },
  { id: 2, label: 'מים וביוב', amount: 192.50 },
  { id: 3, label: 'היטל שמירה', amount: 65.00 },
  { id: 4, label: 'חוגי ילדים', amount: 240.00 }
];

export default function Payments() {
  const [selected, setSelected] = useState({ 1: true, 2: true, 3: false, 4: false });

  const total = bills.reduce((sum, b) => sum + (selected[b.id] ? b.amount : 0), 0);

  return (
    <div className="bg-muni-bg pt-28">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <h1 className="mb-2 text-3xl font-bold text-muni-deep">תשלומים וגבייה</h1>
        <p className="mb-8 text-muni-muted">בחרו את החיובים לתשלום וסיימו את התהליך באתר מאובטח.</p>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Bills */}
          <div className="card">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-muni-deep">
              <Receipt size={20} /> חיובים פתוחים
            </h2>
            <ul className="space-y-3">
              {bills.map((b) => (
                <li
                  key={b.id}
                  className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                    selected[b.id] ? 'border-muni-primary bg-muni-light' : 'border-gray-100 bg-muni-bg'
                  }`}
                  onClick={() => setSelected((s) => ({ ...s, [b.id]: !s[b.id] }))}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={!!selected[b.id]}
                      onChange={() => {}}
                      className="h-5 w-5 accent-muni-primary"
                    />
                    <span className="font-medium">{b.label}</span>
                  </div>
                  <span className="font-bold text-muni-deep">₪ {b.amount.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Summary */}
          <aside className="card h-fit">
            <h3 className="mb-4 text-lg font-bold text-muni-deep">סיכום תשלום</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span>סה"כ חיובים נבחרים</span><span>₪ {total.toFixed(2)}</span></div>
              <div className="flex justify-between text-muni-muted"><span>עמלות</span><span>₪ 0.00</span></div>
              <hr />
              <div className="flex justify-between text-base font-bold text-muni-deep">
                <span>סה"כ לתשלום</span>
                <span>₪ {total.toFixed(2)}</span>
              </div>
            </div>
            <button disabled={total === 0} className="btn-primary mt-6 w-full">
              <CreditCard size={18} /> לתשלום מאובטח
            </button>
            <p className="mt-3 flex items-center justify-center gap-1 text-xs text-muni-muted">
              <ShieldCheck size={14} /> תשלום בטוח בתקן PCI-DSS
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
