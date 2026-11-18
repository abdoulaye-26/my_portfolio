'use client'

import { useI18n } from '@/i18n/LanguageProvider'

/** First Tab stop on the page: lets keyboard users jump past the navbar. */
export default function SkipLink() {
  const { t } = useI18n()
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary-solid focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
      {t.ui.skipToContent}
    </a>
  )
}
