import { redirect } from 'next/navigation';
import { routing } from '@/lib/i18n/routing';

export default function GlobalNotFound() {
  // If the path doesn't match a valid locale, send them to the default locale
  // This effectively "re-enters" your localized [locale] layout logic.
  redirect(`/${routing.defaultLocale}/profile`);
}