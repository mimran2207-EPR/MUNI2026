import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck, KeyRound } from 'lucide-react';
import Logo from '../components/Logo';

export default function Login() {
  const navigate = useNavigate();
  const [step, setStep] = useState('credentials');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const valid = id.length === 9 && password.length >= 4;

  const submit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setStep('otp');
  };

  const handleOtp = (idx, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) {
      document.getElementById(`otp-${idx + 1}`)?.focus();
    }
  };

  const otpComplete = otp.every((d) => d);

  return (
    <div className="relative min-h-screen bg-hero-gradient pt-24">
      <div className="mx-auto max-w-md px-6 pb-20">
        <div className="mb-6 text-center">
          <Logo variant="light" className="mx-auto" />
        </div>

        {step === 'credentials' && (
          <form onSubmit={submit} className="rounded-3xl bg-white p-8 shadow-card">
            <h1 className="mb-2 text-center text-2xl font-bold text-muni-deep">
              ברוכים הבאים למרחב הדיגיטלי
              <br />
              של הרשות שלכם
            </h1>
            <p className="mb-8 text-center text-sm text-muni-muted">
              לאימות פרטייך באמצעות המערכת להזדהות לאומית
            </p>

            <label className="mb-1 block text-sm font-medium text-muni-text">
              מספר זהות בן 9 ספרות <span className="text-muni-muted">(כולל ספרת ביקורת)</span>
            </label>
            <input
              type="tel"
              maxLength={9}
              value={id}
              onChange={(e) => setId(e.target.value.replace(/\D/g, ''))}
              placeholder="מספר תעודת זהות/דרכון"
              className="input mb-4 tracking-widest text-center"
            />

            <label className="mb-1 block text-sm font-medium text-muni-text">סיסמה</label>
            <div className="relative">
              <input
                type={showPwd ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input pl-10"
              />
              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muni-muted"
                aria-label="הצג סיסמה"
              >
                {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="mt-2 text-left">
              <a href="#" className="text-sm font-medium text-muni-primary">שכחתי סיסמה</a>
            </div>

            <button
              type="submit"
              disabled={!valid}
              className="btn-primary mt-8 w-full"
            >
              <ShieldCheck size={18} />
              כניסה
            </button>

            <p className="mt-6 text-center text-sm text-muni-muted">
              עדיין לא רשומים? <a href="#" className="font-medium text-muni-primary">לחצו כאן</a>
              {' '}לכניסה ללא הזדהות
            </p>
            <a href="#" className="mt-3 block text-center text-sm font-medium text-muni-primary">
              לכניסה מהירה עם שם משתמש וסיסמה
            </a>
          </form>
        )}

        {step === 'otp' && (
          <div className="rounded-3xl bg-white p-8 shadow-card">
            <p className="text-center text-sm text-muni-muted">קוד האימות נשלח למספר</p>
            <p className="text-center text-lg font-bold tracking-wider text-muni-text">
              05X-XXX{id.slice(-4) || '3425'}
            </p>
            <h2 className="mt-6 mb-8 text-center text-xl font-bold text-muni-deep">מה הקוד שקיבלת?</h2>

            <div className="mb-4 flex justify-center gap-2" dir="ltr">
              {otp.map((d, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  value={d}
                  onChange={(e) => handleOtp(i, e.target.value)}
                  maxLength={1}
                  inputMode="numeric"
                  className="h-12 w-12 rounded-lg border border-gray-200 text-center text-xl font-semibold outline-none transition focus:border-muni-primary focus:ring-2 focus:ring-muni-accent/20"
                />
              ))}
            </div>

            <p className="mb-6 flex items-center justify-center gap-1 text-center text-sm text-muni-muted">
              <KeyRound size={14} /> הקוד תקף ל-5 דקות
            </p>

            <button
              disabled={!otpComplete}
              onClick={() => navigate('/my-account')}
              className="btn-primary w-full"
            >
              המשך למרחב הדיגיטלי של הרשות
              <ShieldCheck size={18} />
            </button>

            <p className="mt-4 text-center text-sm text-muni-muted">
              לא קיבלתם קוד? <a href="#" className="font-medium text-muni-primary">לחצו לשליחה חוזרת</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
