// Single source of truth for personal details, links and CV files (language-independent).
// Translatable profile text (headline, location, availability…) lives in src/locales.
// Facts come from the CVs in public/cv/ (Nov 2026) and CLAUDE.md. Do not invent new ones.

import type { Locale } from '@/i18n/config'

export const SITE_URL = 'https://portfolio-next-rust-two.vercel.app'

export const profile = {
  name: 'Abdoulaye Sène',
  email: 'seneabdoulaye124@gmail.com',
  phoneDisplay: '+221 77 114 59 85',
  whatsapp: 'https://wa.me/221771145985',
  github: 'https://github.com/abdoulaye-26',
  githubHandle: '@abdoulaye-26',
  linkedin: 'https://www.linkedin.com/in/abdoulaye-sene-707801203/',
  linkedinHandle: 'in/abdoulaye-sene-707801203',
} as const

export type CvKind = 'professional' | 'academic'

export const cvs: Record<CvKind, Record<Locale, string>> = {
  professional: {
    en: '/cv/abdoulaye-sene-cv-professional-en.pdf',
    fr: '/cv/abdoulaye-sene-cv-professional-fr.pdf',
  },
  academic: {
    en: '/cv/abdoulaye-sene-cv-academic-en.pdf',
    fr: '/cv/abdoulaye-sene-cv-academic-fr.pdf',
  },
}

/** mailto link with a pre-filled subject so each audience lands in a clear thread. */
export function mailto(subject?: string) {
  return subject
    ? `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${profile.email}`
}
