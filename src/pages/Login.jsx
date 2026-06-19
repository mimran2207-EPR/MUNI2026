import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck, KeyRound, User } from 'lucide-react';

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
    if (val && idx < 5) document.getElementById(`otp-${idx + 1}`)?.focus();
  };

  const otpComplete = otp.every((d) => d);

  return (
    <div className="hero-bg min-h-screen pt-[120px]">
      <div className="mx-auto max-w-md px-6 pb-20 pt-12">
        {step === 'credentials' && (
          <form onSubmit={submit} className="rounded-[36px] bg-white p-10 shadow-card">
            <h1 className="mb-3 text-center text-[28px] font-semibold leading-[34px] text-muni-primary">
              ברוכים הבאים למרחב הדיגיטלי
              <br />
              של הרשות שלכם
            </h1>
            <p className="mb-8 text-center text-sm text-muni-gray6">
              לאימות פרטייך באמצעות המערכת להזדהות לאומית
            </p>

            <label className="mb-1 block text-sm font-medium text-muni-darkgray">
              מספר זהות בן 9 ספרות <span className="text-muni-gray6">(כולל ספרת ביקורת)</span>
            </label>
            <div className="relative mb-4">
              <input
                type="tel"
                maxLength={9}
                value={id}
                onChange={(e) => setId(e.target.value.replace(/\D/g, ''))}
                placeholder="מספר תעודת זהות/דרכון"
                className="input pl-10 text-center tracking-widest"
              />
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muni-gray6" />
            </div>

            <label className="mb-1 block text-sm font-medium text-muni-darkgray">סיסמה</label>
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
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muni-gray6"
                aria-label="הצג סיסמה"
              >
                {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="mt-2 text-left">
              <a href="#" className="text-sm font-medium text-muni-primary">שכחתי סיסמה</a>
            </div>

            <button type="submit" disabled={!valid} className="btn-primary mt-8 w-full">
              <ShieldCheck size={18} />
              כניסה
            </button>

            <p className="mt-6 text-center text-sm text-muni-gray6">
              עדיין לא רשומים? <a href="#" className="font-medium text-muni-primary">לחצו כאן</a>
              {' '}לכניסה ללא הזדהות
            </p>
            <a href="#" className="mt-3 block text-center text-sm font-medium text-muni-primary">
              לכניסה מהירה עם שם משתמש וסיסמה
            </a>
          </form>
        )}

        {step === 'otp' && (
          <div className="rounded-[36px] bg-white p-10 shadow-card">
            <p className="text-center text-sm text-muni-gray6">קוד האימות נשלח למספר</p>
            <p className="text-center text-xl font-bold tracking-wider text-muni-darkgray">
              05X-XXX{id.slice(-4) || '3425'}
            </p>
            <h2 className="mb-8 mt-6 text-center text-[24px] font-semibold text-muni-primary">מה הקוד שקיבלת?</h2>

            <div className="mb-4 flex justify-center gap-2" dir="ltr">
              {otp.map((d, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  value={d}
                  onChange={(e) => handleOtp(i, e.target.value)}
                  maxLength={1}
                  inputMode="numeric"
                  className="h-12 w-12 rounded-lg border border-gray-200 text-center text-xl font-semibold outline-none transition focus:border-muni-primary focus:ring-2 focus:ring-muni-secondary/30"
                />
              ))}
            </div>

            <p className="mb-6 flex items-center justify-center gap-1 text-center text-sm text-muni-gray6">
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

            <p className="mt-4 text-center text-sm text-muni-gray6">
              לא קיבלתם קוד? <a href="#" className="font-medium text-muni-primary">לחצו לשליחה חוזרת</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
