/** Cal.com booking page for the free introductory session. Opens in a new tab. */
export const BOOKING_URL = 'https://cal.com/lili-mesemuhelye/exkluziv-csoportos';

/** Applied to every outbound CTA so the landing page stays open behind it. */
export const EXTERNAL_LINK_ATTRS = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

/**
 * Navigation, shared by the desktop bar and the mobile menu so the two cannot
 * drift.
 */
export const NAV_LINKS = [{ label: 'Csomagok', href: '#csomagok' }] as const;

export const NAV_CTA = {
  label: 'Kipróbálom Díjmentesen!',
  href: BOOKING_URL,
} as const;

/** Legal pages, linked from the footer. */
export const LEGAL_LINKS = [
  { label: 'ÁSZF', href: '/aszf' },
  { label: 'Adatvédelmi Tájékoztató', href: '/adatvedelem' },
  {
    label: 'Felelősségkizáró és Egészségügyi Nyilatkozat',
    href: '/nyilatkozat',
  },
] as const;

/** Impresszum line, kept in step with the ÁSZF and the Adatvédelmi Tájékoztató. */
export const BUSINESS_NAME = 'Török Viktória Lili E.V.';
