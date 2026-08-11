/** Cal.com booking page for the free introductory session. Opens in a new tab. */
export const BOOKING_URL = 'https://cal.com/lili-mesemuhelye/mesezes';

/** Applied to every outbound CTA so the landing page stays open behind it. */
export const EXTERNAL_LINK_ATTRS = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

/**
 * Navigation, shared by the desktop bar and the mobile menu so the two cannot
 * drift. "Zseb-Menedék mesetár" is the second page from the design export and has
 * no destination yet.
 */
export const NAV_LINKS = [
  { label: 'Csomagok', href: '#csomagok' },
  { label: 'Zseb-Menedék mesetár', href: '#' },
] as const;

export const NAV_CTA = {
  label: 'Kipróbálom Díjmentesen!',
  href: BOOKING_URL,
} as const;
