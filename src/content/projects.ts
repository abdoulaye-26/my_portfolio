// Featured projects. Client work comes first.
// Live links and screenshots of client sites are added only with the owner's OK (see CLAUDE.md).

export type ProjectStatus = 'Live' | 'In Progress'

export interface StackItem {
  name: string
  color: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  type: string
  /** Who it was for / the setting: freelance, employer, team, school. */
  context: string
  /** What I personally did. */
  role: string
  status?: ProjectStatus
  tags: string[]
  gradient: string
  problem: string
  solution: string
  features?: string[]
  stack: StackItem[]
  challenges?: string[]
  outcome?: string
  github?: string
  githubLabel?: string
  demo?: string
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
    title: 'REVEIL ESPOIR',
    tagline: 'Website for a non-profit association',
    type: 'Freelance · Non-profit website',
    context: 'Freelance client: non-profit in Yeumbeul Nord, Senegal',
    role: 'Designed, built and deployed the whole site',
    status: 'Live',
    tags: ['Non-profit', 'Freelance', 'Next.js'],
    gradient: 'from-green-600 to-emerald-500',
    problem:
      'A young association working on education, health and the environment in Yeumbeul Nord needed a website to present its mission and actions.',
    solution:
      'A responsive Next.js website with all content kept in a single data file, so the association’s information can be updated without touching the components. Deployed on Vercel.',
    stack: [NEXT, TS, TAILWIND, { name: 'Vercel', color: '#E2E8F0' }],
    demo: 'https://reveil-espoir.vercel.app',
  },
  {
    id: 'trubus',
    title: 'TRUBUS Consortium',
    tagline: 'Showcase website built from the client’s posters',
    type: 'Freelance · Business website',
    context: 'Freelance client: real estate & business services firm in Malika',
    role: 'Sole developer: content structure, design and build',
    status: 'In Progress',
    tags: ['Real estate', 'Freelance', 'Static site'],
    gradient: 'from-amber-600 to-orange-500',
    problem:
      'The client had no website and could only supply printed posters and business cards, with no standalone photos or written copy.',
    solution:
      'A French-language static website whose content and visuals are taken from the client’s posters, with all text kept in one content file. Exported as static HTML for fast, cheap hosting.',
    stack: [{ name: 'Next.js (static export)', color: '#E2E8F0' }, TS, TAILWIND],
    demo: 'https://trubus-consortium.vercel.app',
  },
  {
    id: 'senuniversbio',
    title: 'senuniversbio.com',
    tagline: 'Organic products marketplace, rebuilt from WordPress',
    type: 'Labdevit client · E-commerce',
    context: 'Client project at Labdevit',
    role: 'Full-stack developer on the rebuild',
    tags: ['E-commerce', 'Migration', 'Full-stack'],
    gradient: 'from-lime-600 to-green-600',
    problem:
      'A Senegalese marketplace for organic and natural products was running on WordPress.',
    solution:
      'Rebuilt the marketplace as a Next.js 14 application with Prisma, PostgreSQL and NextAuth.js for authentication.',
    stack: [{ name: 'Next.js 14', color: '#E2E8F0' }, PRISMA, POSTGRES, NEXTAUTH],
    demo: 'https://senuniversbio.com',
  },
  {
    id: 'mimicheparfum',
    title: 'mimicheparfum.com',
    tagline: 'E-commerce redesign for a French perfume brand',
    type: 'Labdevit client · E-commerce',
    context: 'Client project at Labdevit',
    role: 'Developer on the Labdevit team',
    tags: ['E-commerce', 'Redesign'],
    gradient: 'from-pink-600 to-rose-500',
    problem: 'A French perfume e-commerce site needed a redesign.',
    solution: 'Redesigned the store on the same stack as senuniversbio: Next.js, Prisma, PostgreSQL and NextAuth.js.',
    stack: [NEXT, PRISMA, POSTGRES, NEXTAUTH],
    demo: 'https://mimicheparfum.com',
  },
  {
    id: 'sbb',
    title: 'Smart Bibliothèque Banlieue',
    tagline: 'BSD Learn: a free digital learning hub for the suburbs of Dakar',
    type: 'Hackathon project · Full-stack (MERN)',
    context: 'Banlieue Smart Days 2025, Banlieue Smart Genius (Yeumbeul)',
    role: 'Developer: frontend and backend',
    tags: ['Education', 'Hackathon', 'Social impact'],
    gradient: 'from-yellow-600 to-amber-500',
    problem:
      'Young people in Senegal’s suburbs struggle to find learning resources, trainings, information on schools and job offers: the information is scattered, often costly, and rarely adapted to the local context.',
    solution:
      'A centralised web platform bringing together a digital library, a catalogue of online trainings, a directory of Senegalese schools and job offers, with personalised recommendations.',
    features: [
      'Digital library of articles, tutorials and free PDF books, with search across external APIs',
      'Catalogue of online trainings filtered by level, with enrolment tracking',
      'Directory of schools and training centres in Senegal',
      'Job offers with an integrated application flow',
      'JWT authentication; Express API with request validation (Joi), Helmet and structured logging (pino)',
    ],
    stack: [REACT, NODE, { name: 'Express 5', color: '#9CA3AF' }, MONGO, { name: 'JWT', color: '#F472B6' }],
    github: 'https://github.com/abdoulaye-96/SmartBibliothequeBanlieue',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    tagline: 'Kanban-style task management app',
    type: 'Full-stack web application',
    context: 'Independent project',
    role: 'Sole developer: frontend and backend',
    tags: ['Productivity', 'Angular', 'Full-stack'],
    gradient: 'from-cyan-600 to-blue-600',
    problem: 'Organising tasks across stages needs a clear visual board.',
    solution: 'A Kanban-style task app with an Angular frontend and a Next.js + Prisma + PostgreSQL backend.',
    stack: [{ name: 'Angular', color: '#DD0031' }, NEXT, PRISMA, POSTGRES],
    // TODO(GitHub): add `github` link once the repository is public.
  },
  {
    id: 'easyservice',
    title: 'EasyService',
    tagline: 'Service management platform',
    type: 'Team project · MERN',
    context: 'Team project during the Bakeli (Volkeno) internship',
    role: 'Backend developer; also contributed to the frontend (Redux Toolkit, contact & messaging, reviews)',
    tags: ['Service Management', 'Node.js', 'MongoDB'],
    gradient: 'from-orange-600 to-amber-600',
    problem:
      'A company needed one system to organise its service delivery: planning, billing and client follow-up, with a modular design open to integrations.',
    solution:
      'A MERN-stack platform where providers list services, manage incoming requests and track job status from a dashboard.',
    features: [
      'Service listing and categorisation',
      'Client request submission and tracking',
      'Provider dashboard with job pipeline',
      'Status management (pending, in progress, completed)',
      'REST API with Express.js and MongoDB',
    ],
    stack: [NODE, EXPRESS, MONGO, REACT],
    // My commits live on team branches that were never merged into `main`,
    // so this link filters the team repo down to my own commits.
    github: 'https://github.com/Fatmata-Dev/EasyService-frontend/commits/Fadiaba/?author=abdoulaye-96',
    githubLabel: 'My commits in the team repository',
  },
  {
    id: 'hotel',
    title: 'Hotel Booking Platform',
    tagline: 'Reservation and room management dashboard',
    type: 'Team project · MERN',
    context: 'Collaborative project during the Bakeli (Volkeno) internship',
    role: 'Frontend developer: built the UI and integrated it with the API',
    tags: ['Hospitality', 'React', 'Node.js', 'MongoDB'],
    gradient: 'from-teal-600 to-cyan-600',
    problem:
      'Small hotels managing reservations by hand risk overbooking and lose track of room availability.',
    solution:
      'A MERN-stack dashboard for room availability, reservations and check-in / check-out.',
    features: [
      'Room availability view',
      'Guest reservation management',
      'Check-in / check-out workflows',
      'REST API built with Express.js',
    ],
    stack: [REACT, NODE, EXPRESS, MONGO],
    github: 'https://github.com/abdoulaye-96/gestionHotel',
  },
  {
    id: 'learn-easy',
    title: 'Learn Easy',
    tagline: 'E-learning web application',
    type: 'Full-stack web application',
    context: 'Team project',
    role: 'Backend developer',
    tags: ['Education', 'E-learning'],
    gradient: 'from-violet-600 to-indigo-600',
    problem: 'Learners and teachers need one place to share courses and follow progress.',
    solution: 'An e-learning web application with separate spaces for students, teachers and administrators.',
    // Repo languages: Python + HTML (Django with server-rendered templates)
    stack: [{ name: 'Django', color: '#44B78B' }, { name: 'Python', color: '#FFD43B' }, { name: 'HTML templates', color: '#E34F26' }],
    github: 'https://github.com/abdoulaye-96/learn-easy',
  },
]
