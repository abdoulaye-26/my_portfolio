// Single source of truth for personal details, links and CV files.
// Facts come from the CVs in public/cv/ (Nov 2026) and CLAUDE.md. Do not invent new ones.

export const SITE_URL = 'https://portfolio-next-rust-two.vercel.app'

export const profile = {
  name: 'Abdoulaye Sène',
  headline: 'Full-Stack & DevOps Developer',
  location: 'Malika, Dakar, Senegal',
  // Both CVs: "about 2 years of industry experience"
  experience: 'about 2 years of industry experience',
  availability: 'Open to freelance projects, full-time roles and PhD positions',
  workMode: 'In Senegal or internationally · on-site or remote',
  email: 'seneabdoulaye124@gmail.com',
  phoneDisplay: '+221 77 114 59 85',
  whatsapp: 'https://wa.me/221771145985',
  github: 'https://github.com/abdoulaye-96',
  githubHandle: '@abdoulaye-96',
  linkedin: 'https://www.linkedin.com/in/abdoulaye-sene-707801203/',
} as const

export type CvKind = 'professional' | 'academic'

export const cvs: Record<CvKind, { label: string; audience: string; en: string; fr: string }> = {
  professional: {
    label: 'Professional CV',
    audience: 'Freelance clients & recruiters',
    en: '/cv/abdoulaye-sene-cv-professional-en.pdf',
    fr: '/cv/abdoulaye-sene-cv-professional-fr.pdf',
  },
  academic: {
    label: 'Academic CV',
    audience: 'PhD admissions & scholarship committees',
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

// Freelance CV, "Services" block
export const services = [
  'Business websites & e-commerce (Next.js)',
  'Custom web applications',
  'REST API design',
  'WordPress → Next.js migration',
  'Deployment, Docker & CI/CD',
  'Maintenance & optimisation',
]
