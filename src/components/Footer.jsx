import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-24 bg-muni-deep text-white">
      <div className="city-silhouette h-32" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm text-white/70">
              המרחב הדיגיטלי החדשני של הרשויות המקומיות. שירות מהיר, פשוט וזמין 24/7.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">שירותים</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">ארנונה</a></li>
              <li><a href="#" className="hover:text-white">חינוך</a></li>
              <li><a href="#" className="hover:text-white">רווחה</a></li>
              <li><a href="#" className="hover:text-white">הנדסה</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">מידע</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">תנאי שימוש</a></li>
              <li><a href="#" className="hover:text-white">מדיניות פרטיות</a></li>
              <li><a href="#" className="hover:text-white">נגישות</a></li>
              <li><a href="#" className="hover:text-white">צור קשר</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">יצירת קשר</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Phone size={14} /> 9001*</li>
              <li className="flex items-center gap-2"><Mail size={14} /> info@muni.co.il</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> כל הרשויות בישראל</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="Instagram"><Instagram size={16} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} MUNI. כל הזכויות שמורות.</div>
          <div className="flex items-center gap-4">
            <span>פותח על-ידי</span>
            <span className="font-semibold text-white">EPR Systems</span>
            <span className="opacity-50">|</span>
            <span className="font-semibold text-white">TSG Group</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
