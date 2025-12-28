import { routing } from '@/lib/i18n/routing';
import { redirect } from 'next/navigation';

// To handle URLs that are completely broken, 
// like yourdomain.com/random-folder/xyz or yourdomain.com/fr/dashboard (if French isn't supported)
export default function RootNotFound() {
  redirect(`/${routing.defaultLocale}`); // to redirect the lost user back into a valid language
}
