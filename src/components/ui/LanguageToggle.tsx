'use client'

import { useI18n } from '@/i18n/LanguageProvider'
import { languageNames, locales } from '@/i18n/config'

/**
 * FR | EN segmented switch. Both labels are always rendered at a fixed size,
 * so switching never changes the toggle's width (no layout shift).
 */
export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.ui.language}
      className={`inline-flex items-center rounded-lg border border-line bg-surface p-0.5 text-xs font-semibold ${className}`}
    >
      {locales.map((l) => {
        const active = l === locale
        return (
          <button
            key={l}
            type="button"
            lang={l}
            onClick={() => setLocale(l)}
            aria-pressed={active}
            aria-label={languageNames[l]}
            className={`h-7 w-9 rounded-md uppercase transition-colors ${
              active ? 'bg-primary-solid text-white' : 'text-subtle hover:text-fg'
            }`}
          >
            {l}
          </button>
        )
      })}
    </div>
  )
}
