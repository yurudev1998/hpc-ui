import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'zh-TW', 'ja', 'de'], // all locales that are supported
  defaultLocale: 'en', // Used when no locale matches
  localeDetection: false, // next-intl will check Cookies and Browser headers
});

// for navigation to keep the locale in the URL
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);