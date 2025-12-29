import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { notFound } from 'next/navigation';

export const routing = defineRouting({
  locales: ['en', 'zh-TW', 'ja', 'de'], // all locales that are supported
  defaultLocale: 'en', // Used when no locale matches
  localeDetection: false, // next-intl will check Cookies and Browser headers
});

export type Locale = (typeof routing.locales)[number];

// Validates the locale and triggers 404 if invalid.
export function validateLocale(locale: string | undefined): asserts locale is Locale {
  if (!locale || !routing.locales.includes(locale as Locale)) {
    notFound();
  }
}

// for navigation to keep the locale in the URL
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);