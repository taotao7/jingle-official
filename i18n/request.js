import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'zh'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  console.log('[i18n] incoming locale:', locale);
  const activeLocale = locales.includes(locale) ? locale : defaultLocale;
  console.log('[i18n] active locale:', activeLocale);

  return {
    locale: activeLocale,
    messages: (await import(`../messages/${activeLocale}.json`)).default
  };
});

