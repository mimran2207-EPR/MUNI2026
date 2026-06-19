import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="bg-muni-bg pt-32 text-center">
      <div className="mx-auto max-w-md px-6 py-20">
        <div className="text-8xl font-extrabold text-muni-primary">404</div>
        <h1 className="mt-4 text-2xl font-bold text-muni-deep">העמוד לא נמצא</h1>
        <p className="mt-2 text-muni-muted">העמוד אותו חיפשתם אינו קיים או הוסר.</p>
        <Link to="/" className="btn-primary mt-8 inline-flex">חזרה לדף הבית</Link>
      </div>
    </div>
  );
}
