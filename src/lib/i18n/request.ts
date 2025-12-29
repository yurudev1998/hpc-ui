import { getRequestConfig } from 'next-intl/server';
import { validateLocale, Locale } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  validateLocale(locale);

  return {
    locale: locale as Locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});