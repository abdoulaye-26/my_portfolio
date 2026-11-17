import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MotionProvider from '@/components/providers/MotionProvider'
import { SITE_URL, profile } from '@/content/profile'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Abdoulaye Sène | Full-Stack & DevOps Developer',
  description:
    'Full-stack & DevOps developer in Dakar, Senegal, with about 2 years of industry experience. Open to freelance projects, full-time roles and fully funded PhD positions in AI for Software Engineering & DevOps.',
  keywords: [
    'Full-Stack Developer',
    'DevOps',
    'Freelance web developer Senegal',
    'Développeur web Dakar',
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
  authors: [{ name: 'Abdoulaye Sène' }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Abdoulaye Sène | Full-Stack & DevOps Developer',
    description: 'Websites and web apps from code to production. Open to freelance, full-time and PhD opportunities.',
    url: SITE_URL,
    siteName: 'Abdoulaye Sène',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdoulaye Sène | Full-Stack & DevOps Developer',
    description: 'Websites and web apps from code to production. Open to freelance, full-time and PhD opportunities.',
  },
  robots: { index: true, follow: true },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdoulaye Sène',
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#0B0B0F] text-slate-100 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
