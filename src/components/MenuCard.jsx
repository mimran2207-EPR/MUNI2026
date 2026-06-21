import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

// Card matches Figma 222.jpg (Hebrew RTL):
//  - Title on the RIGHT, icon on the LEFT (header)
//  - Menu items text on the RIGHT, expand chevron on the LEFT
// Note: in RTL flexbox, justify-end = LEFT, justify-start = RIGHT.
export default function MenuCard({ title, iconSrc, items }) {
  return (
    <div className="w-full max-w-[500px] rounded-[36px] bg-white px-4 pb-4 shadow-card">
      {/* Header: justify-between → first (title) at RTL start = RIGHT, second (icon) = LEFT */}
      <div className="flex h-[102px] items-center justify-between px-6 py-4">
        <h3 className="text-[28px] font-semibold leading-[30px] text-muni-primary">{title}</h3>
        <div className="h-[70px] w-[70px] shrink-0">
          {iconSrc && <img src={iconSrc} alt="" className="h-full w-full object-contain" />}
        </div>
      </div>

      <ul className="flex flex-col px-4">
        {items.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </ul>
    </div>
  );
}

function MenuItem({ label, active, children, to }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(children) && children.length > 0;

  if (to) {
    return (
      <li>
        <Link
          to={to}
          className="block cursor-pointer px-4 py-2 text-right hover:bg-muni-light/50"
        >
          <span className={`text-lg leading-[36px] ${active ? 'font-medium text-muni-primary' : 'text-muni-gray6'}`}>
            {label}
          </span>
        </Link>
      </li>
    );
  }

  if (hasChildren) {
    return (
      <li>
        {/* justify-between → text (first) at start = RIGHT, chevron (last) at end = LEFT */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-[46px] w-full items-center justify-between px-4 py-2"
        >
          <span className={`text-lg leading-[30px] ${active ? 'font-medium text-muni-primary' : 'text-muni-gray6'}`}>
            {label}
          </span>
          <ChevronLeft
            size={20}
            className={`shrink-0 text-muni-primary transition ${open ? '-rotate-90' : ''}`}
          />
        </button>
        {open && (
          <ul className="flex flex-col">
            {children.map((sub, i) => (
              <li
                key={i}
                className="cursor-pointer px-6 py-2 text-right text-base leading-[30px] text-muni-darkgray hover:bg-muni-light"
              >
                {sub}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  // Simple item: pure block element with text-right (no flex needed for single child)
  return (
    <li className="cursor-pointer px-4 py-2 text-right hover:bg-muni-light/50">
      <span className={`text-lg leading-[36px] ${active ? 'font-medium text-muni-primary' : 'text-muni-gray6'}`}>
        {label}
      </span>
    </li>
  );
}
