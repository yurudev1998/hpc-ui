import createMiddleware from 'next-intl/middleware';
import { routing } from '@/lib/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Matcher ignoring admin, api, static files, etc.
  matcher: [
    '/', 
    '/(de|en|ja|zh-TW)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};