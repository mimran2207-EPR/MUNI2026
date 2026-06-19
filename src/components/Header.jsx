import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, User } from 'lucide-react';
import Logo from './Logo';

export default function Header({ transparent = false }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const onHero = transparent && isHome;

  return (
    <header
      className={`absolute inset-x-0 top-0 z-30 h-[120px] ${onHero ? 'text-white' : 'border-b border-gray-100 bg-white text-muni-darkgray'}`}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-20">
        {/* Right side (RTL: appears first) — Council + user pill */}
        <div className="flex items-center gap-20">
          <Link
            to="/"
            aria-label="מועצה אזורית מנשה"
            className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full bg-white p-2.5 shadow-md"
          >
            <img src="/logos/council.png" alt="מועצה אזורית מנשה" className="h-full w-full object-contain" />
          </Link>

          {/* User pill — visual order: [person] [name] [chevron-down] */}
          <Link
            to="/login"
            className={`flex h-14 items-center gap-3 rounded-full border-2 px-6 text-lg font-semibold transition ${
              onHero ? 'border-white text-white hover:bg-white/10' : 'border-muni-primary text-muni-primary hover:bg-muni-light'
            }`}
          >
            <User size={20} />
            <span>ישראל ישראלי</span>
            <ChevronDown size={20} />
          </Link>
        </div>

        {/* Left side — services link + muni logo */}
        <div className="flex items-center gap-16">
          <button className="flex items-center gap-2 text-lg">
            <ChevronDown size={16} />
            <span>כל השירותים הדיגיטליים</span>
          </button>
          <Link to="/" className="block">
            <Logo variant={onHero ? 'light' : 'dark'} />
          </Link>
        </div>
      </div>
    </header>
  );
}
