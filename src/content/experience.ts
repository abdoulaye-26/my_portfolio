// Work experience: the language-independent data. Roles, dates and bullet points
// live in src/locales/{en,fr}.ts under `experience.jobs`; they follow the CVs (Nov 2026),
// which match the dates in CLAUDE.md. Competitions are entirely text: see `experience.competitions`.

export type ExperienceId = 'freelance' | 'labdevit' | 'infocom' | 'bakeli' | 'tgi'

export interface Experience {
  id: ExperienceId
  company: string
  stack: string[]
}

export const experiences: Experience[] = [
  { id: 'freelance', company: 'Freelance', stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'] },
  {
    id: 'labdevit',
    company: 'Labdevit',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Docker', 'ArgoCD', 'OpenTelemetry'],
  },
  { id: 'infocom', company: 'Infocom Services Group', stack: ['Django', 'React', 'REST APIs'] },
  { id: 'bakeli', company: 'Bakeli (Volkeno)', stack: ['React', 'Node.js', 'Express.js', 'MongoDB'] },
  { id: 'tgi', company: 'Tout en Génie Informatique (TGI)', stack: ['HTML', 'CSS', 'JavaScript'] },
]
