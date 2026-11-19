// Featured projects: the language-independent data (links, stack, colours).
// All readable text (title, role, problem…) lives in src/locales/{en,fr}.ts under `projects.items`.
// Client work comes first.
// Live links and screenshots of client sites are added only with the owner's OK (see CLAUDE.md).

export type ProjectStatus = 'live' | 'inProgress'

export type ProjectId =
  | 'reveil-espoir'
  | 'trubus'
  | 'senuniversbio'
  | 'mimicheparfum'
  | 'sbb'
  | 'taskflow'
  | 'easyservice'
  | 'hotel'
  | 'learn-easy'

export interface StackItem {
  name: string
  color: string
}

export interface Project {
  id: ProjectId
  status?: ProjectStatus
  tags: string[]
  gradient: string
  stack: StackItem[]
  github?: string
  demo?: string
  /**
   * Optional screenshot in /public (e.g. '/projects/reveil-espoir.webp', ~1200×675).
   * When absent, the card shows a generated cover (gradient + title): no image file needed.
   */
  image?: string
}

const NEXT = { name: 'Next.js', color: '#E2E8F0' }
const TS = { name: 'TypeScript', color: '#3178C6' }
const TAILWIND = { name: 'Tailwind CSS', color: '#06B6D4' }
const PRISMA = { name: 'Prisma', color: '#5A67D8' }
const POSTGRES = { name: 'PostgreSQL', color: '#336791' }
const NEXTAUTH = { name: 'NextAuth.js', color: '#A78BFA' }
const REACT = { name: 'React', color: '#61DAFB' }
const NODE = { name: 'Node.js', color: '#339933' }
const EXPRESS = { name: 'Express.js', color: '#9CA3AF' }
const MONGO = { name: 'MongoDB', color: '#47A248' }

export const projects: Project[] = [
  {
    id: 'reveil-espoir',
    status: 'live',
    tags: ['Non-profit', 'Freelance', 'Next.js'],
    gradient: 'from-green-600 to-emerald-500',
    stack: [NEXT, TS, TAILWIND, { name: 'Vercel', color: '#E2E8F0' }],
    demo: 'https://reveil-espoir.vercel.app',
  },
  {
    id: 'trubus',
    status: 'inProgress',
    tags: ['Real estate', 'Freelance', 'Static site'],
    gradient: 'from-amber-600 to-orange-500',
    stack: [{ name: 'Next.js (static export)', color: '#E2E8F0' }, TS, TAILWIND],
    demo: 'https://trubus-consortium.vercel.app',
  },
  {
    id: 'senuniversbio',
    tags: ['E-commerce', 'Migration', 'Full-stack'],
    gradient: 'from-lime-600 to-green-600',
    stack: [{ name: 'Next.js 14', color: '#E2E8F0' }, PRISMA, POSTGRES, NEXTAUTH],
    demo: 'https://senuniversbio.com',
  },
  {
    id: 'mimicheparfum',
    tags: ['E-commerce', 'Redesign'],
    gradient: 'from-pink-600 to-rose-500',
    stack: [NEXT, PRISMA, POSTGRES, NEXTAUTH],
    demo: 'https://mimicheparfum.com',
  },
  {
    id: 'sbb',
    tags: ['Education', 'Hackathon', 'Social impact'],
    gradient: 'from-yellow-600 to-amber-500',
    stack: [REACT, NODE, { name: 'Express 5', color: '#9CA3AF' }, MONGO, { name: 'JWT', color: '#F472B6' }],
    github: 'https://github.com/abdoulaye-26/SmartBibliothequeBanlieue',
  },
  {
    id: 'taskflow',
    tags: ['Productivity', 'Angular', 'Full-stack'],
    gradient: 'from-cyan-600 to-blue-600',
    stack: [{ name: 'Angular', color: '#DD0031' }, NEXT, PRISMA, POSTGRES],
    // TODO(GitHub): add `github` link once the repository is public.
  },
  {
    id: 'easyservice',
    tags: ['Service Management', 'Node.js', 'MongoDB'],
    gradient: 'from-orange-600 to-amber-600',
    stack: [NODE, EXPRESS, MONGO, REACT],
    // My commits live on team branches that were never merged into `main`,
    // so this link filters the team repo down to my own commits.
    github: 'https://github.com/Fatmata-Dev/EasyService-frontend/commits/Fadiaba/?author=abdoulaye-26',
  },
  {
    id: 'hotel',
    tags: ['Hospitality', 'React', 'Node.js', 'MongoDB'],
    gradient: 'from-teal-600 to-cyan-600',
    stack: [REACT, NODE, EXPRESS, MONGO],
    github: 'https://github.com/abdoulaye-26/gestionHotel',
  },
  {
    id: 'learn-easy',
    tags: ['Education', 'E-learning'],
    gradient: 'from-violet-600 to-indigo-600',
    // Repo languages: Python + HTML (Django with server-rendered templates)
    stack: [{ name: 'Django', color: '#44B78B' }, { name: 'Python', color: '#FFD43B' }, { name: 'HTML templates', color: '#E34F26' }],
    github: 'https://github.com/abdoulaye-26/learn-easy',
  },
]
