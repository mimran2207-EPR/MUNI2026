import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bell, ChevronDown, LogIn, User } from 'lucide-react';
import Logo from './Logo';

const nav = [
  { to: '/', label: 'דף הבית' },
  { to: '/service/arnona', label: 'ארנונה' },
  { to: '/service/education', label: 'חינוך' },
  { to: '/service/handasa', label: 'הנדסה' },
  { to: '/service/revaha', label: 'רווחה' },
  { to: '/forms', label: 'טפסים ואישורים' }
];

export default function Header({ transparent = false }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const variant = transparent && isHome ? 'light' : 'dark';

  return (
    <header
      className={`absolute inset-x-0 top-0 z-30 ${
        transparent && isHome ? 'text-white' : 'bg-white text-muni-text shadow-sm'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo variant={variant} />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:opacity-80 ${
                  isActive ? 'opacity-100 underline underline-offset-8' : 'opacity-90'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full p-2 transition hover:bg-white/10" aria-label="התראות">
            <Bell size={20} />
          </button>
          <Link
            to="/login"
            className={`hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition md:inline-flex ${
              variant === 'light'
                ? 'bg-white/15 text-white hover:bg-white/25'
                : 'bg-muni-primary text-white hover:bg-muni-dark'
            }`}
          >
            <LogIn size={16} />
            כניסה לאזור האישי
          </Link>
          <button className="hidden items-center gap-1 text-sm md:flex" aria-label="בחירת רשות">
            <span>מועצה אזורית מנשה</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
