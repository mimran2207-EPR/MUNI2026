# MUNI 2026 — המרחב הדיגיטלי של הרשויות המקומיות

![Stack](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwindcss&logoColor=white)
![RTL](https://img.shields.io/badge/RTL-Hebrew-0F3D5C)

האתר הדיגיטלי החדש של **MUNI** — פלטפורמת שירות לתושבי הרשויות המקומיות בישראל.
הפרויקט פותח על-בסיס אפיון Figma של מועצה אזורית מנשה, וניתן להתאמה לכל רשות.

> פותח על-ידי **EPR Systems** (מקבוצת **TSG**) — מובילים את החיבור הדיגיטלי בין הרשות לתושב מעל 20 שנה.

---

## 📋 תוכן עניינים

- [תכונות עיקריות](#-תכונות-עיקריות)
- [טכנולוגיות](#-טכנולוגיות)
- [התקנה והרצה](#-התקנה-והרצה)
- [מבנה הפרויקט](#-מבנה-הפרויקט)
- [עמודים](#-עמודים)
- [פלטת צבעים](#-פלטת-צבעים)
- [רכיבי עיצוב](#-רכיבי-עיצוב)
- [פיתוח עתידי](#-פיתוח-עתידי)
- [מקור עיצוב](#-מקור-עיצוב)

---

## 🚀 תכונות עיקריות

- **RTL מלא** — תמיכה מלאה בעברית עם פונט Heebo
- **רספונסיבי** — מותאם לדסקטופ, טאבלט ונייד
- **רב-עמודי** — Routing מובנה עם React Router
- **אזור אישי** — דשבורד תושב, ניהול נכסים, בקשות והודעות
- **מערכת תשלומים** — בחירת חיובים וסיכום תשלום
- **התחברות בשני שלבים** — תעודת זהות + OTP
- **שרותי רשות** — ארנונה, חינוך, רווחה, הנדסה, ועוד 9 קטגוריות
- **מערכת טפסים** — חיפוש וסינון, מילוי מקוון או הורדה
- **נגישות** — תוויות ARIA, מקלדת, ניגודיות

---

## 🛠 טכנולוגיות

| שכבה | טכנולוגיה |
|------|-----------|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Routing | React Router 6 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Fonts | Heebo + Assistant (Google Fonts) |
| Language | JavaScript (ES Modules) |

---

## ⚙️ התקנה והרצה

דרישות מקדימות: **Node.js ≥ 18**

```bash
# התקנת תלויות
npm install

# הרצת שרת פיתוח (http://localhost:5173)
npm run dev

# בנייה לפרודקשן
npm run build

# תצוגה מקדימה של ה-build
npm run preview
```

---

## 📁 מבנה הפרויקט

```
MUNI2026/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/         # רכיבים משותפים
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── Logo.jsx
│   ├── pages/              # עמודים
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MyAccount.jsx
│   │   ├── Payments.jsx
│   │   ├── Forms.jsx
│   │   ├── ServiceCategory.jsx
│   │   └── NotFound.jsx
│   ├── styles/
│   │   └── index.css       # Tailwind base + רכיבים מותאמים
│   ├── App.jsx             # Routes
│   └── main.jsx            # נקודת כניסה
├── index.html              # HTML + טעינת פונטים + RTL
├── tailwind.config.js      # פלטת צבעי MUNI
├── postcss.config.js
├── vite.config.js
├── package.json
├── CHANGELOG.md            # יומן שינויים
└── README.md
```

---

## 📄 עמודים

| נתיב | תיאור |
|------|-------|
| `/` | דף הבית — Hero, חיפוש, 9 שירותי רשות, 4 כרטיסי דשבורד |
| `/login` | התחברות בשני שלבים (ת.ז + סיסמה → OTP) |
| `/my-account` | אזור אישי — סקירה, נכסים, תשלומים, בקשות, הגדרות |
| `/payments` | תשלומים — בחירת חיובים וסיכום |
| `/forms` | טפסים — חיפוש, סינון לפי קטגוריה |
| `/service/:slug` | דף קטגוריית שירות (arnona, education, revaha, handasa, ועוד) |

---

## 🎨 פלטת צבעים

```css
muni-deep    #0F3D5C   /* כחול כהה — כותרות, רקעים */
muni-dark    #16557A   /* כחול בינוני */
muni-primary #1F87C7   /* כחול ראשי — כפתורים, לינקים */
muni-accent  #2DB6E0   /* טורקיז — הדגשות */
muni-light   #E8F4FA   /* רקעים בהירים */
muni-bg      #F4F8FB   /* רקע כללי */
muni-text    #1A2B3C   /* טקסט ראשי */
muni-muted   #6B7B8A   /* טקסט משני */
```

---

## 🧩 רכיבי עיצוב (Tailwind components)

הקובץ `src/styles/index.css` מגדיר רכיבים שימושיים:

- `.btn-primary` — כפתור ראשי כחול
- `.btn-outline` — כפתור משני עם מסגרת
- `.card` — כרטיס עם hover shadow
- `.input` — שדה קלט
- `.chip` — תווית קטנה
- `.city-silhouette` — צללית עיר ל-footer

---

## 🔮 פיתוח עתידי

- [ ] חיבור ל-API של ה-backend
- [ ] מערכת אימות אמיתית (Auth)
- [ ] שילוב עם פתרון תשלום מאובטח
- [ ] עמודי טפסים נוספים (Tabo, Arnona, Forms הספציפיים)
- [ ] גרסת מובייל מותאמת (לפי DT מול MB ב-Figma)
- [ ] תרגום לערבית
- [ ] PWA — התקנה כאפליקציה
- [ ] Dark mode

---

## 🎨 מקור עיצוב

- **Figma:** [MUNI Design File](https://www.figma.com/design/rqBGkrFa1i04QGwJTjDluE/MUNI)
- האתר ממומש על-בסיס המסכים המרכזיים שב-Figma:
  - `DT HOME - user mode` / `Guest mode`
  - `DT_Log-Ins` — מסכי התחברות
  - `DT_MY Area` — אזור אישי
  - `DT_MAIN` — דף בית ראשי

---

## 📞 צרו קשר

**EPR Systems Ltd.**
דוא"ל: info@eprsys.co.il
[github.com/mimran2207-EPR/MUNI2026](https://github.com/mimran2207-EPR/MUNI2026)

---

© 2026 MUNI · EPR Systems · TSG Group
