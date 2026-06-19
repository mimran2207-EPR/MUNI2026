import { useState } from 'react';
import { User, Home, CreditCard, Bell, Settings, FileText, LogOut, Building, Mail, Phone } from 'lucide-react';

const menu = [
  { key: 'overview', label: 'סקירה כללית', icon: Home },
  { key: 'properties', label: 'הנכסים שלי', icon: Building },
  { key: 'payments', label: 'תשלומים', icon: CreditCard },
  { key: 'forms', label: 'הבקשות שלי', icon: FileText },
  { key: 'notifications', label: 'הודעות', icon: Bell },
  { key: 'settings', label: 'הגדרות חשבון', icon: Settings }
];

export default function MyAccount() {
  const [active, setActive] = useState('overview');

  return (
    <div className="bg-muni-bg pt-28">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Welcome banner */}
        <div className="mb-8 flex items-center gap-4 rounded-2xl bg-hero-gradient p-6 text-white">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-bold">
            י
          </div>
          <div>
            <h1 className="text-2xl font-bold">שלום, ישראל ישראלי</h1>
            <p className="text-sm text-white/80">ברוך שובך למרחב האישי שלך</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="card h-fit p-3">
            <nav className="space-y-1">
              {menu.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-right text-sm font-medium transition ${
                    active === item.key
                      ? 'bg-muni-light text-muni-deep'
                      : 'text-muni-muted hover:bg-muni-bg'
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
              <hr className="my-3 border-gray-100" />
              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-right text-sm font-medium text-red-500 hover:bg-red-50">
                <LogOut size={18} />
                התנתקות
              </button>
            </nav>
          </aside>

          {/* Content */}
          <section className="space-y-6">
            {active === 'overview' && <Overview />}
            {active === 'properties' && <Properties />}
            {active === 'payments' && <PaymentsList />}
            {active === 'forms' && <FormsList />}
            {active === 'notifications' && <Notifications />}
            {active === 'settings' && <AccountSettings />}
          </section>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, sub }) {
  return (
    <div className="card">
      <div className="text-sm text-muni-muted">{label}</div>
      <div className="mt-1 text-2xl font-bold text-muni-deep">{value}</div>
      {sub && <div className="mt-1 text-xs text-muni-muted">{sub}</div>}
    </div>
  );
}

function Overview() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="יתרת חוב נוכחית" value="₪ 984.70" sub="כולל חיובים פתוחים" />
        <Stat label="נכסים רשומים" value="2" sub="דירה + חנייה" />
        <Stat label="בקשות פעילות" value="3" sub="ממתינות לטיפול" />
      </div>

      <div className="card">
        <h3 className="mb-4 text-lg font-bold text-muni-deep">פעילות אחרונה</h3>
        <ul className="space-y-3">
          {[
            { t: 'תשלום ארנונה - חודש ינואר', d: 'לפני 3 ימים', a: '₪ 487.20' },
            { t: 'בקשה לאישור תושב הוגשה', d: 'לפני שבוע', a: 'בטיפול' },
            { t: 'עדכון פרטי כרטיס אשראי', d: 'לפני שבועיים', a: 'הושלם' }
          ].map((item, i) => (
            <li key={i} className="flex items-center justify-between rounded-lg bg-muni-bg p-4">
              <div>
                <div className="font-medium">{item.t}</div>
                <div className="text-xs text-muni-muted">{item.d}</div>
              </div>
              <span className="text-sm font-semibold text-muni-deep">{item.a}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function Properties() {
  return (
    <div className="card">
      <h3 className="mb-4 text-lg font-bold text-muni-deep">הנכסים שלי</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { addr: 'הזית 14, פרדס חנה', type: 'דירה', size: '92 מ"ר' },
          { addr: 'הזית 14, חניה', type: 'חנייה', size: '14 מ"ר' }
        ].map((p, i) => (
          <div key={i} className="rounded-xl border border-gray-100 p-4">
            <div className="flex items-center gap-3">
              <Building className="text-muni-primary" />
              <div>
                <div className="font-semibold">{p.addr}</div>
                <div className="text-xs text-muni-muted">{p.type} · {p.size}</div>
              </div>
            </div>
            <button className="btn-outline mt-4 w-full">לפרטי הנכס</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentsList() {
  return (
    <div className="card">
      <h3 className="mb-4 text-lg font-bold text-muni-deep">היסטוריית תשלומים</h3>
      <table className="w-full text-right text-sm">
        <thead className="border-b text-muni-muted">
          <tr>
            <th className="py-2 font-medium">תאריך</th>
            <th className="py-2 font-medium">סוג</th>
            <th className="py-2 font-medium">סכום</th>
            <th className="py-2 font-medium">סטטוס</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['01.06.2026', 'ארנונה', '₪ 487.20', 'שולם'],
            ['15.05.2026', 'מים וביוב', '₪ 192.50', 'שולם'],
            ['10.05.2026', 'חוגי ילדים', '₪ 240.00', 'שולם']
          ].map((row, i) => (
            <tr key={i} className="border-b last:border-0">
              {row.map((c, j) => (
                <td key={j} className="py-3">
                  {j === 3 ? <span className="chip">{c}</span> : c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FormsList() {
  return (
    <div className="card">
      <h3 className="mb-4 text-lg font-bold text-muni-deep">הבקשות שלי</h3>
      <ul className="space-y-3">
        {['אישור תושב', 'הנחה בארנונה', 'שינוי מחזיק'].map((t) => (
          <li key={t} className="flex items-center justify-between rounded-lg bg-muni-bg p-4">
            <span>{t}</span>
            <span className="chip">בטיפול</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Notifications() {
  return (
    <div className="card">
      <h3 className="mb-4 text-lg font-bold text-muni-deep">הודעות</h3>
      <ul className="space-y-3">
        {[
          { t: 'עדכון מועד תשלום ארנונה', d: '20.06.2026' },
          { t: 'אישור בקשה מס׳ 12384', d: '15.06.2026' }
        ].map((n, i) => (
          <li key={i} className="rounded-lg border border-gray-100 p-4">
            <div className="font-medium">{n.t}</div>
            <div className="text-xs text-muni-muted">{n.d}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AccountSettings() {
  return (
    <div className="card">
      <h3 className="mb-4 text-lg font-bold text-muni-deep">הגדרות חשבון</h3>
      <div className="space-y-4">
        <SettingRow icon={User} label="שם מלא" value="ישראל ישראלי" />
        <SettingRow icon={Mail} label="דוא״ל" value="israeli@example.com" />
        <SettingRow icon={Phone} label="טלפון נייד" value="050-1234567" />
      </div>
    </div>
  );
}

function SettingRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-muni-bg p-4">
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-muni-primary" />
        <div>
          <div className="text-xs text-muni-muted">{label}</div>
          <div className="font-medium">{value}</div>
        </div>
      </div>
      <button className="text-sm font-medium text-muni-primary">עריכה</button>
    </div>
  );
}
