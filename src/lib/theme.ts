export type Theme = 'light' | 'dark'
export const THEME_STORAGE_KEY = 'theme'

/**
 * Runs in <head> before the first paint (see layout.tsx), so the page never
 * flashes the wrong theme: saved choice → otherwise the OS setting.
 */
export const themeInitScript = `(function(){try{
var t=null;try{t=localStorage.getItem('${THEME_STORAGE_KEY}')}catch(e){}
if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
if(t==='dark')document.documentElement.classList.add('dark');
}catch(e){}})()`
