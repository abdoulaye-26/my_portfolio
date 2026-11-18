'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n/LanguageProvider'
import Rich from '@/components/ui/Rich'

export default function NotFound() {
  const { t } = useI18n()

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
        <Rich text={t.notFound.title} strongClassName="gradient-text" />
      </h1>
      <p className="mb-8 max-w-md text-muted">{t.notFound.text}</p>
      <Link href="/" className="btn-primary px-6 py-3">
        {t.notFound.back}
      </Link>
    </section>
  )
}
