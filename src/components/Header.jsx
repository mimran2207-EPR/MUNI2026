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
        {/* Right side (RTL first) — Council badge + user pill */}
        <div className="flex items-center gap-20">
          {/* Council logo */}
          <Link to="/" aria-label="מועצה אזורית מנשה" className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full bg-white p-2.5 shadow-md">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-xs font-bold text-white">
              מא.<br />מנשה
            </div>
          </Link>

          {/* User pill */}
          <Link
            to="/login"
            className={`flex h-14 items-center gap-2 rounded-full border px-6 py-4 text-lg font-semibold transition ${
              onHero ? 'border-white text-white/90 hover:bg-white/10' : 'border-muni-primary text-muni-primary hover:bg-muni-light'
            }`}
          >
            <ChevronDown size={20} />
            <span>ישראל ישראלי</span>
            <User size={20} />
          </Link>
        </div>

        {/* Left side — services dropdown + muni logo */}
        <div className="flex items-center gap-20">
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
