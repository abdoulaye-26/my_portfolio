// Work experience and competitions. Dates and titles follow the CVs (Nov 2026),
// which match the dates in CLAUDE.md.

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Freelance',
    role: 'Independent Full-Stack Developer',
    period: '2026 – Present',
    location: 'Remote',
    highlights: [
      'TRUBUS Consortium (real estate & business services, Malika): website built from the client’s visual materials (in progress)',
      'REVEIL ESPOIR (non-profit, Yeumbeul Nord): designed, built and deployed the website on Vercel',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    company: 'Labdevit',
    role: 'Full-Stack & DevOps Developer',
    period: 'Dec 2025 – Aug 2026',
    location: 'Dakar, Senegal',
    highlights: [
      'Rebuilt senuniversbio.com (organic products marketplace): WordPress → Next.js 14, Prisma, PostgreSQL, NextAuth.js',
      'Client projects: e-commerce redesign of mimicheparfum.com; guided the Google Play release of the Studpay mobile app',
      'VPS deployments (SSH, Docker) with Portainer, Nginx Proxy Manager, CI/CD pipelines, GitOps (ArgoCD) and observability (OpenTelemetry)',
    ],
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Docker', 'ArgoCD', 'OpenTelemetry'],
  },
  {
    company: 'Infocom Services Group',
    role: 'Web Development Intern',
    period: 'Apr 2025 – Nov 2025',
    location: 'Dakar, Senegal',
    highlights: [
      'Developed and maintained Django / React web applications',
      'Built API modules and improved performance',
      'Worked alongside frontend and backend teams',
    ],
    stack: ['Django', 'React', 'REST APIs'],
  },
  {
    company: 'Bakeli (Volkeno)',
    role: 'Web Development Intern',
    period: 'Dec 2024 – Mar 2025',
    location: 'Online',
    highlights: [
      'Backend developer on EasyService, a team-built service management platform',
      'Collaborative hotel booking platform with React, Node.js and MongoDB',
      'REST API integration',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    company: 'Tout en Génie Informatique (TGI)',
    role: 'IT Maintenance & Web Development Intern',
    period: 'May 2023 – Jul 2023',
    location: 'Dakar, Senegal',
    highlights: [
      'IT maintenance and technical support',
      'Graphic content creation',
      'Small web development tasks',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]

export interface Competition {
  title: string
  organizer: string
  period: string | null
  note: string | null
}

export const competitions: Competition[] = [
  {
    title: 'Banlieue Smart Days',
    organizer: 'Banlieue Smart Genius · Yeumbeul',
    period: '2025',
    note: 'Innovation contest: built Smart Bibliothèque Banlieue (BSD Learn), a digital learning hub. Competing again in 2026.',
  },
  {
    title: 'Blockchain Hackathon: E-Voting System',
    organizer: 'Bold African Movement (BAM)',
    period: 'Oct 2024',
    note: 'Team prototype of a blockchain-based electronic voting application.',
  },
  {
    title: 'Dakar Innovation Days Hackathon',
    organizer: 'City of Dakar',
    period: 'Jul 2024',
    note: null,
  },
  {
    title: 'SENGAM Hackathon',
    organizer: 'SENGAM · GoMyCode, Dakar',
    period: 'Apr 2024',
    note: null,
  },
  {
    title: 'Online Hackathon: "YourPast Hunts You" Game',
    organizer: 'Online',
    period: null,
    note: 'Built an interactive web game from scratch during the competition.',
  },
  {
    title: 'Online Hackathon',
    organizer: 'Bakeli (Volkeno), Senegal',
    period: null,
    note: null,
  },
]
