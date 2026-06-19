import { useParams, Link } from 'react-router-dom';
import {
  Receipt, GraduationCap, HeartHandshake, Building2, FileText, Calendar, Bus, Trees, ShieldCheck
} from 'lucide-react';

const data = {
  arnona: {
    title: 'ארנונה',
    icon: Receipt,
    desc: 'תשלום, הנחות, שינוי מחזיק והודעות חיוב.',
    actions: ['תשלום ארנונה', 'בקשת הנחה', 'שינוי מחזיק', 'אישור על תשלום', 'ערעור על חיוב']
  },
  education: {
    title: 'חינוך',
    icon: GraduationCap,
    desc: 'רישום למוסדות חינוך, חוגים וצהרונים.',
    actions: ['רישום לבית הספר', 'רישום לגנים', 'חוגי תרבות', 'צהרונים', 'הסעות']
  },
  revaha: {
    title: 'רווחה',
    icon: HeartHandshake,
    desc: 'שירותי רווחה ובריאות לכל גילאי המשפחה.',
    actions: ['פניית רווחה', 'אזרחים ותיקים', 'נוער בסיכון', 'מרכז משפחה']
  },
  handasa: {
    title: 'הנדסה',
    icon: Building2,
    desc: 'היתרי בנייה, טאבו ותכנון העירוני.',
    actions: ['בקשת טאבו', 'היתר בנייה', 'תכנית בניין עיר', 'דיווח בנייה לא חוקית']
  },
  forms: {
    title: 'טפסים',
    icon: FileText,
    desc: 'כל הטפסים והאישורים במקום אחד.',
    actions: ['אישור תושב', 'אישור על תשלום', 'בקשת מידע לפי חוק', 'תלונת ציבור']
  },
  events: {
    title: 'אירועים',
    icon: Calendar,
    desc: 'אירועי תרבות, פנאי וקהילה.',
    actions: ['לוח אירועים', 'הזמנת מקום', 'בקשת מקום לאירוע פרטי']
  },
  transport: {
    title: 'תחבורה',
    icon: Bus,
    desc: 'תחבורה ציבורית, חניה ותנועה.',
    actions: ['קווי אוטובוס', 'תו חניה', 'דיווח מפגע תנועה']
  },
  environment: {
    title: 'איכות סביבה',
    icon: Trees,
    desc: 'דיווחי מפגעים, פינוי גזם ומיחזור.',
    actions: ['דיווח מפגע', 'הזמנת פינוי גזם', 'נקודות מיחזור']
  },
  security: {
    title: 'ביטחון',
    icon: ShieldCheck,
    desc: 'מוקד ביטחון, היערכות לחירום ומקלטים.',
    actions: ['מוקד 106', 'מקלטים ציבוריים', 'היערכות לחירום']
  }
};

export default function ServiceCategory() {
  const { slug } = useParams();
  const svc = data[slug];

  if (!svc) {
    return (
      <div className="pt-28 text-center">
        <h1 className="text-2xl font-bold">השירות לא נמצא</h1>
        <Link to="/" className="btn-primary mt-6 inline-flex">חזרה לדף הבית</Link>
      </div>
    );
  }

  const Icon = svc.icon;

  return (
    <div className="bg-muni-bg pt-28">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="card flex items-start gap-4 bg-hero-gradient text-white">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
            <Icon size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{svc.title}</h1>
            <p className="mt-2 text-white/85">{svc.desc}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {svc.actions.map((a) => (
            <div key={a} className="card">
              <h3 className="text-lg font-semibold text-muni-deep">{a}</h3>
              <p className="mt-1 text-sm text-muni-muted">
                לחצו להמשך הפעולה. התהליך מאובטח ומתבצע באתר הרשמי של הרשות.
              </p>
              <button className="btn-primary mt-4">המשך</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
