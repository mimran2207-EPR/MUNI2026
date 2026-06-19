import { useState } from 'react';
import { Search, FileText, Download } from 'lucide-react';

const formsList = [
  { name: 'אישור תושב', cat: 'אישורים' },
  { name: 'אישור על תשלום ארנונה', cat: 'אישורים' },
  { name: 'בקשת הנחה בארנונה', cat: 'ארנונה' },
  { name: 'טופס שינוי מחזיק', cat: 'ארנונה' },
  { name: 'בקשת טאבו', cat: 'הנדסה' },
  { name: 'דיווח מפגע', cat: 'איכות סביבה' },
  { name: 'רישום לחוגים', cat: 'חינוך' },
  { name: 'בקשה לפטור מתשלום שילוט', cat: 'גבייה' }
];

const categories = ['הכל', ...new Set(formsList.map((f) => f.cat))];

export default function Forms() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('הכל');

  const filtered = formsList.filter(
    (f) => (cat === 'הכל' || f.cat === cat) && f.name.includes(q.trim())
  );

  return (
    <div className="bg-muni-bg pt-28">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <h1 className="mb-2 text-3xl font-bold text-muni-deep">טפסים ואישורים</h1>
        <p className="mb-8 text-muni-muted">כל הטפסים, הבקשות והאישורים במקום אחד.</p>

        <div className="mb-6 card flex items-center gap-3">
          <Search className="text-muni-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="חיפוש טופס..."
            className="flex-1 bg-transparent outline-none"
          />
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                cat === c ? 'bg-muni-primary text-white' : 'bg-white text-muni-text hover:bg-muni-light'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((f) => (
            <div key={f.name} className="card flex flex-col">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muni-light text-muni-primary">
                  <FileText size={20} />
                </div>
                <span className="chip">{f.cat}</span>
              </div>
              <h3 className="mb-4 flex-1 text-base font-semibold text-muni-deep">{f.name}</h3>
              <div className="flex gap-2">
                <button className="btn-primary flex-1 py-2 text-sm">מילוי מקוון</button>
                <button className="btn-outline py-2" aria-label="הורדה">
                  <Download size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="card text-center text-muni-muted">לא נמצאו טפסים מתאימים</div>
        )}
      </div>
    </div>
  );
}
