import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const transparent = location.pathname === '/';

  return (
    <div className="flex min-h-full flex-col">
      <Header transparent={transparent} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
