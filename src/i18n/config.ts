export const locales = ['fr', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'fr'
export const LOCALE_STORAGE_KEY = 'locale'

/** Each language written in its own language: identical whatever the UI language is. */
export const languageNames: Record<Locale, string> = { fr: 'Français', en: 'English' }

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value)
}

/**
 * Runs in <head> before the page is painted (see layout.tsx).
 * 1. Picks the language: saved choice → browser language (fr* → FR, anything else → EN).
 * 2. Writes it to <html lang>, where LanguageProvider reads it after hydration.
 * 3. If it differs from the server-rendered French, hides the page for the few ms
 *    React needs to swap the text, so visitors never see the wrong language flash.
 *    A timeout un-hides the page even if JavaScript fails later on.
 */
export const localeInitScript = `(function(){try{
var d=document.documentElement,l=null;
try{l=localStorage.getItem('${LOCALE_STORAGE_KEY}')}catch(e){}
if(l!=='fr'&&l!=='en'){l=((navigator.language||'').toLowerCase().indexOf('fr')===0)?'fr':'en'}
d.lang=l;
if(l!=='${defaultLocale}'){d.classList.add('i18n-pending');setTimeout(function(){d.classList.remove('i18n-pending')},1500)}
}catch(e){}})()`
