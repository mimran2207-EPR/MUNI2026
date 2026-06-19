import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-muni-light">
      {/* Watermark "muni" + city silhouette */}
      <div className="muni-watermark city-silhouette pointer-events-none h-[260px]" aria-hidden />

      <div className="mx-auto max-w-[1440px] px-20 pb-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 text-sm text-muni-gray6">
              המרחב הדיגיטלי החדשני של הרשויות המקומיות. שירות מהיר, פשוט וזמין 24/7.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-muni-primary">שירותים</h4>
            <ul className="space-y-2 text-sm text-muni-gray6">
              <li><a href="#" className="hover:text-muni-primary">ארנונה</a></li>
              <li><a href="#" className="hover:text-muni-primary">חינוך</a></li>
              <li><a href="#" className="hover:text-muni-primary">רווחה</a></li>
              <li><a href="#" className="hover:text-muni-primary">הנדסה</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-muni-primary">מידע</h4>
            <ul className="space-y-2 text-sm text-muni-gray6">
              <li><a href="#" className="hover:text-muni-primary">תנאי שימוש</a></li>
              <li><a href="#" className="hover:text-muni-primary">מדיניות פרטיות</a></li>
              <li><a href="#" className="hover:text-muni-primary">נגישות</a></li>
              <li><a href="#" className="hover:text-muni-primary">צור קשר</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-muni-primary">פותח על-ידי</h4>
            <div className="flex items-center gap-3 text-sm text-muni-gray6">
              <span className="rounded bg-white px-3 py-1.5 font-bold text-muni-primary shadow-sm">EPR</span>
              <span className="text-xs">|</span>
              <span className="rounded bg-white px-3 py-1.5 font-bold text-muni-primary shadow-sm">TSG</span>
            </div>
            <p className="mt-4 text-xs text-muni-gray6">© {new Date().getFullYear()} muni · כל הזכויות שמורות</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
