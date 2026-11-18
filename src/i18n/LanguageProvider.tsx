'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { defaultLocale, isLocale, LOCALE_STORAGE_KEY, type Locale } from './config'
import { dictionaries, type Dictionary } from '@/locales'

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  /** The dictionary of the current language: `t.hero.title`, fully typed. */
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // `null` until we know the visitor's language. The server and the first client
  // render both use French, so hydration always matches the HTML.
  const [chosen, setChosen] = useState<Locale | null>(null)
  const locale = chosen ?? defaultLocale

  // 1. After hydration, adopt the language the inline <head> script resolved.
  useEffect(() => {
    const fromHtml = document.documentElement.lang
    setChosen(isLocale(fromHtml) ? fromHtml : defaultLocale)
  }, [])

  // 2. Every time the language is known or changes: sync the document.
  useEffect(() => {
    if (chosen === null) return
    const html = document.documentElement
    html.lang = chosen
    document.title = dictionaries[chosen].meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', dictionaries[chosen].meta.description)
    html.classList.remove('i18n-pending')
  }, [chosen])

  const setLocale = useCallback((next: Locale) => {
    setChosen(next)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      // Private mode or blocked storage: the choice just won't be remembered.
    }
  }, [])

  const value = useMemo(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used inside <LanguageProvider>')
  return ctx
}
