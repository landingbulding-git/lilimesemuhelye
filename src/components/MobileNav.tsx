import { useEffect, useRef, useState } from 'react';
import { EXTERNAL_LINK_ATTRS, NAV_CTA, NAV_LINKS } from '../data/site';

const PANEL_ID = 'mobile-nav-panel';

/**
 * Mobile-only navigation. Hydrated with `client:media` so the desktop bar — which
 * is plain markup — never pays for this JS.
 *
 * The panel is absolutely positioned against the sticky <header>, so it drops
 * below the bar without pushing the page down.
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Escape closes the menu and hands focus back to the button that opened it.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={PANEL_ID}
        aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 flex cursor-pointer items-center justify-center border-0 bg-transparent p-2 text-slate md:hidden"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {open ? (
            <>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </>
          ) : (
            <>
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </>
          )}
        </svg>
      </button>

      <div
        id={PANEL_ID}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-hairline bg-cream px-[4vw] pt-2 pb-6 md:hidden"
      >
        <ul className="m-0 flex list-none flex-col gap-1 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[17px] text-slate no-underline hover:text-slate hover:opacity-70"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={NAV_CTA.href}
              {...EXTERNAL_LINK_ATTRS}
              onClick={() => setOpen(false)}
              className="btn-apricot block px-[24px] py-[12px] text-center text-[15px] font-semibold"
            >
              {NAV_CTA.label}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
