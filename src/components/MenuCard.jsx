import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Card matches Figma:
// - 500px wide, white, rounded-[36px]
// - Header: 70px icon image + 28px blue title
// - Body: list of menu items (some expandable)
export default function MenuCard({ title, iconSrc, items }) {
  return (
    <div className="w-full max-w-[500px] rounded-[36px] bg-white px-4 pb-4 shadow-card">
      <div className="flex h-[102px] items-center justify-between px-6 py-4">
        <div className="h-[70px] w-[70px] shrink-0">
          {iconSrc && <img src={iconSrc} alt="" className="h-full w-full object-contain" />}
        </div>
        <h3 className="text-[28px] font-semibold leading-[30px] text-muni-primary">{title}</h3>
      </div>

      <ul className="flex flex-col px-4">
        {items.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </ul>
    </div>
  );
}

function MenuItem({ label, active, children }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(children) && children.length > 0;

  if (hasChildren) {
    return (
      <li>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-[46px] w-full items-center justify-between py-2 text-right"
        >
          <ChevronDown size={20} className={`text-muni-primary transition ${open ? 'rotate-0' : '-rotate-90'}`} />
          <span className={`text-lg leading-[30px] ${active ? 'font-medium text-muni-primary' : 'text-muni-gray6'}`}>
            {label}
          </span>
        </button>
        {open && (
          <ul className="flex flex-col">
            {children.map((sub, i) => (
              <li
                key={i}
                className="flex h-[42px] cursor-pointer items-center justify-end px-6 py-2 text-right text-base leading-[30px] text-muni-darkgray hover:bg-muni-light"
              >
                {sub}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li className="flex h-[46px] cursor-pointer items-center justify-end py-2 text-right hover:bg-muni-light/50">
      <span className={`text-lg leading-[36px] ${active ? 'font-medium text-muni-primary' : 'text-muni-gray6'}`}>
        {label}
      </span>
    </li>
  );
}
