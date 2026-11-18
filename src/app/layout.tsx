import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MotionProvider from '@/components/providers/MotionProvider'
import { LanguageProvider } from '@/i18n/LanguageProvider'
import { defaultLocale, localeInitScript } from '@/i18n/config'
import { themeInitScript } from '@/lib/theme'
import SkipLink from '@/components/ui/SkipLink'
import { dictionaries } from '@/locales'
import { SITE_URL, profile } from '@/content/profile'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Headings: Space Grotesk (geometric, technical character). Body: Inter (very readable).
// next/font self-hosts them: no request to Google at runtime, no layout shift.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

// Server-rendered metadata is in the default language (French).
// LanguageProvider updates <title> and the description in the browser when the visitor switches.
const meta = dictionaries[defaultLocale].meta

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: meta.title,
  description: meta.description,
  keywords: [
    'Full-Stack Developer',
    'DevOps',
    'Freelance web developer Senegal',
    'Développeur web Dakar',
    'Développeur freelance Sénégal',
    'Next.js',
    'React',
    'Django',
    'Spring Boot',
    'Docker',
    'Kubernetes',
    'ArgoCD',
    'AI for Software Engineering',
    'PhD Computer Science',
    'Abdoulaye Sène',
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: meta.title,
    description: meta.shareDescription,
    url: SITE_URL,
    siteName: profile.name,
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.shareDescription,
  },
  robots: { index: true, follow: true },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: SITE_URL,
  jobTitle: 'Full-Stack & DevOps Developer',
  address: { '@type': 'PostalAddress', addressLocality: 'Malika, Dakar', addressCountry: 'SN' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Université Numérique Cheikh Hamidou Kane (UN-CHK)' },
    { '@type': 'CollegeOrUniversity', name: 'Université Professionnelle du Sénégal (UNIPRO)' },
  ],
  knowsAbout: ['Full-stack web development', 'DevOps', 'GitOps', 'AI for Software Engineering'],
  knowsLanguage: ['fr', 'en'],
  sameAs: [profile.github, profile.linkedin],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The inline scripts change `lang` and classes (theme, i18n-pending) before
    // React hydrates: the warning about that one element is expected, so it is silenced.
    <html
      lang={defaultLocale}
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `${themeInitScript};${localeInitScript}` }} />
      </head>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          <MotionProvider>
            <SkipLink />
            <Navbar />
            <main id="content">{children}</main>
            <Footer />
          </MotionProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
