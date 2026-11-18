// English dictionary. `typeof en` is the shape every other language must match.
// Markup inside strings: **highlight** and {placeholder} (see components/ui/Rich.tsx).

import type { ProjectId } from '@/content/projects'
import type { ExperienceId } from '@/content/experience'
import type { DegreeId, InterestId, ResearchProjectId } from '@/content/research'
import type {
  CompetitionText, DegreeText, DevOpsText, JobText, ProjectText, ResearchProjectText,
} from './types'

const projectItems: Record<ProjectId, ProjectText> = {
  'reveil-espoir': {
    title: 'REVEIL ESPOIR',
    tagline: 'Website for a non-profit association',
    type: 'Freelance · Non-profit website',
    context: 'Freelance client: non-profit in Yeumbeul Nord, Senegal',
    role: 'Designed, built and deployed the whole site',
    problem:
      'A young association working on education, health and the environment in Yeumbeul Nord needed a website to present its mission and actions.',
    solution:
      'A responsive Next.js website with all content kept in a single data file, so the association’s information can be updated without touching the components. Deployed on Vercel.',
  },
  trubus: {
    title: 'TRUBUS Consortium',
    tagline: 'Showcase website built from the client’s posters',
    type: 'Freelance · Business website',
    context: 'Freelance client: real estate & business services firm in Malika',
    role: 'Sole developer: content structure, design and build',
    problem:
      'The client had no website and could only supply printed posters and business cards, with no standalone photos or written copy.',
    solution:
      'A French-language static website whose content and visuals are taken from the client’s posters, with all text kept in one content file. Exported as static HTML for fast, cheap hosting.',
  },
  senuniversbio: {
    title: 'senuniversbio.com',
    tagline: 'Organic products marketplace, rebuilt from WordPress',
    type: 'Labdevit client · E-commerce',
    context: 'Client project at Labdevit',
    role: 'Full-stack developer on the rebuild',
    problem: 'A Senegalese marketplace for organic and natural products was running on WordPress.',
    solution:
      'Rebuilt the marketplace as a Next.js 14 application with Prisma, PostgreSQL and NextAuth.js for authentication.',
  },
  mimicheparfum: {
    title: 'mimicheparfum.com',
    tagline: 'E-commerce redesign for a French perfume brand',
    type: 'Labdevit client · E-commerce',
    context: 'Client project at Labdevit',
    role: 'Developer on the Labdevit team',
    problem: 'A French perfume e-commerce site needed a redesign.',
    solution: 'Redesigned the store on the same stack as senuniversbio: Next.js, Prisma, PostgreSQL and NextAuth.js.',
  },
  sbb: {
    title: 'Smart Bibliothèque Banlieue',
    tagline: 'BSD Learn: a free digital learning hub for the suburbs of Dakar',
    type: 'Hackathon project · Full-stack (MERN)',
    context: 'Banlieue Smart Days 2025, Banlieue Smart Genius (Yeumbeul)',
    role: 'Developer: frontend and backend',
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
  },
  taskflow: {
    title: 'TaskFlow',
    tagline: 'Kanban-style task management app',
    type: 'Full-stack web application',
    context: 'Independent project',
    role: 'Sole developer: frontend and backend',
    problem: 'Organising tasks across stages needs a clear visual board.',
    solution: 'A Kanban-style task app with an Angular frontend and a Next.js + Prisma + PostgreSQL backend.',
  },
  easyservice: {
    title: 'EasyService',
    tagline: 'Service management platform',
    type: 'Team project · MERN',
    context: 'Team project during the Bakeli (Volkeno) internship',
    role: 'Backend developer; also contributed to the frontend (Redux Toolkit, contact & messaging, reviews)',
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
    githubLabel: 'My commits in the team repository',
  },
  hotel: {
    title: 'Hotel Booking Platform',
    tagline: 'Reservation and room management dashboard',
    type: 'Team project · MERN',
    context: 'Collaborative project during the Bakeli (Volkeno) internship',
    role: 'Frontend developer: built the UI and integrated it with the API',
    problem:
      'Small hotels managing reservations by hand risk overbooking and lose track of room availability.',
    solution: 'A MERN-stack dashboard for room availability, reservations and check-in / check-out.',
    features: [
      'Room availability view',
      'Guest reservation management',
      'Check-in / check-out workflows',
      'REST API built with Express.js',
    ],
  },
  'learn-easy': {
    title: 'Learn Easy',
    tagline: 'E-learning web application',
    type: 'Full-stack web application',
    context: 'Team project',
    role: 'Backend developer',
    problem: 'Learners and teachers need one place to share courses and follow progress.',
    solution: 'An e-learning web application with separate spaces for students, teachers and administrators.',
  },
}

const jobs: Record<ExperienceId, JobText> = {
  freelance: {
    role: 'Independent Full-Stack Developer',
    period: '2026 – Present',
    location: 'Remote',
    highlights: [
      'TRUBUS Consortium (real estate & business services, Malika): website built from the client’s visual materials (in progress)',
      'REVEIL ESPOIR (non-profit, Yeumbeul Nord): designed, built and deployed the website on Vercel',
    ],
  },
  labdevit: {
    role: 'Full-Stack & DevOps Developer',
    period: 'Dec 2025 – Aug 2026',
    location: 'Dakar, Senegal',
    highlights: [
      'Rebuilt senuniversbio.com (organic products marketplace): WordPress → Next.js 14, Prisma, PostgreSQL, NextAuth.js',
      'Client projects: e-commerce redesign of mimicheparfum.com; guided the Google Play release of the Studpay mobile app',
      'VPS deployments (SSH, Docker) with Portainer, Nginx Proxy Manager, CI/CD pipelines, GitOps (ArgoCD) and observability (OpenTelemetry)',
    ],
  },
  infocom: {
    role: 'Web Development Intern',
    period: 'Apr 2025 – Nov 2025',
    location: 'Dakar, Senegal',
    highlights: [
      'Developed and maintained Django / React web applications',
      'Built API modules and improved performance',
      'Worked alongside frontend and backend teams',
    ],
  },
  bakeli: {
    role: 'Web Development Intern',
    period: 'Dec 2024 – Mar 2025',
    location: 'Online',
    highlights: [
      'Backend developer on EasyService, a team-built service management platform',
      'Collaborative hotel booking platform with React, Node.js and MongoDB',
      'REST API integration',
    ],
  },
  tgi: {
    role: 'IT Maintenance & Web Development Intern',
    period: 'May 2023 – Jul 2023',
    location: 'Dakar, Senegal',
    highlights: ['IT maintenance and technical support', 'Graphic content creation', 'Small web development tasks'],
  },
}

const competitions: CompetitionText[] = [
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
  { title: 'Dakar Innovation Days Hackathon', organizer: 'City of Dakar', period: 'Jul 2024', note: null },
  { title: 'SENGAM Hackathon', organizer: 'SENGAM · GoMyCode, Dakar', period: 'Apr 2024', note: null },
  {
    title: 'Online Hackathon: "YourPast Hunts You" Game',
    organizer: 'Online',
    period: null,
    note: 'Built an interactive web game from scratch during the competition.',
  },
  { title: 'Online Hackathon', organizer: 'Bakeli (Volkeno), Senegal', period: null, note: null },
]

const degrees: Record<DegreeId, DegreeText> = {
  msc: {
    degree: 'M.Sc. in Software Engineering',
    institution: 'Université Numérique Cheikh Hamidou Kane (UN-CHK), Senegal',
    period: '2024 – Present',
    details: [
      'First year (M1) completed; second year (M2) in progress.',
      'Coursework: software engineering, distributed algorithms, service-oriented architectures, IT project management, digital culture.',
    ],
  },
  bscMath: {
    degree: 'Bachelor’s in Applied Mathematics & Computer Science',
    institution: 'UN-CHK, Senegal (online programme)',
    period: '2020 – 2024',
    details: ['Mention Assez Bien.', 'Capstone project: design and development of an e-learning web application.'],
  },
  bscEng: {
    degree: 'Bachelor’s in Computer Engineering',
    institution: 'Université Professionnelle du Sénégal (UNIPRO)',
    period: '2021 – 2023',
    details: [
      'Mention Assez Bien.',
      'Completed on-site, concurrently with the UN-CHK degree.',
      'Capstone project: e-learning web application.',
    ],
  },
  bac: { degree: 'Baccalauréat S2 (Science)', institution: 'CPCATL, Senegal', period: '2020', details: [] },
}

const researchProjects: Record<ResearchProjectId, ResearchProjectText> = {
  gitops: {
    title: 'GitOps & Observability in Production',
    context: 'Labdevit (industry context)',
    period: '2025 – 2026',
    description:
      'Deployed client applications with CI/CD, GitOps (ArgoCD) and OpenTelemetry tracing: the operational setting that motivates my interest in ML-driven DevOps.',
  },
  multiAgent: {
    title: 'Multi-Agent Writing Assistant (prototype)',
    context: 'Personal project',
    period: null,
    description:
      'Designed a sequential multi-agent LLM pipeline for drafting professional posts; explored agent orchestration patterns.',
  },
  k8s: {
    title: 'Kubernetes Deployment Lab',
    context: 'Self-directed',
    period: 'In progress',
    description:
      'Documented project to deploy a full-stack application on Kubernetes, progressing towards GitOps (ArgoCD) and monitoring.',
  },
  evoting: {
    title: 'Blockchain E-Voting',
    context: 'Hackathon, BAM (Bold African Movement)',
    period: '2024',
    description: 'Team prototype of a blockchain-based electronic voting application.',
  },
}

const interests: Record<InterestId, string> = {
  aiSe: 'AI for Software Engineering & DevOps',
  iot: 'Machine-learning-based IoT security',
  efficientMl: 'Resource-efficient ML systems',
  distributed: 'Distributed & cloud-native systems',
}

const devopsItems: Record<'docker' | 'gitlab' | 'linux' | 'nginx' | 'argocd' | 'k8s', DevOpsText> = {
  docker: {
    name: 'Docker & Containerization',
    description:
      'Containerizing applications with multi-stage Dockerfiles, Docker Compose for full-stack local environments, and image optimization for lean production images.',
    practices: ['Multi-stage builds', 'Compose stacks', 'Volume management', 'Network isolation'],
  },
  gitlab: {
    name: 'GitLab CI/CD Pipelines',
    description:
      'Building automated pipelines that go from code push to production deployment — with stages for linting, testing, building Docker images, and deploying to servers.',
    practices: ['.gitlab-ci.yml', 'Pipeline stages', 'Environment secrets', 'Artifact registry'],
  },
  linux: {
    name: 'Linux & VPS Management',
    description:
      'Server provisioning from scratch, SSH hardening, systemd service management, log monitoring, and applying security best practices for production servers.',
    practices: ['Server hardening', 'systemd services', 'Log analysis', 'UFW firewall'],
  },
  nginx: {
    name: 'Nginx — Reverse Proxy & TLS',
    description:
      'Configuring Nginx as a reverse proxy for containerized apps, SSL/TLS termination with Let’s Encrypt, and serving static assets at scale.',
    practices: ['Reverse proxy config', 'SSL termination', 'Static file serving', 'Rate limiting'],
  },
  argocd: {
    name: 'ArgoCD — GitOps',
    description:
      'Implementing GitOps workflows where Git is the single source of truth for infrastructure and application state — automated sync from repository to cluster.',
    practices: ['Application manifests', 'Auto-sync policies', 'Health checks', 'Rollback'],
  },
  k8s: {
    name: 'Kubernetes Orchestration',
    description:
      'Container orchestration for deploying, scaling, and managing stateless and stateful applications across a production-grade cluster.',
    practices: ['Deployments & Pods', 'Services & Ingress', 'ConfigMaps', 'Namespaces'],
  },
}

export const en = {
  meta: {
    title: 'Abdoulaye Sène | Full-Stack & DevOps Developer',
    description:
      'Full-stack & DevOps developer in Dakar, Senegal, with about 2 years of industry experience. Open to freelance projects, full-time roles and fully funded PhD positions in AI for Software Engineering & DevOps.',
    shareDescription:
      'Websites and web apps from code to production. Open to freelance, full-time and PhD opportunities.',
    ogTagline: 'Websites & web apps, from code to production',
    ogFooter: 'Freelance · Full-time · PhD 2027–2028 · Malika, Dakar',
  },

  profile: {
    headline: 'Full-Stack & DevOps Developer',
    location: 'Malika, Dakar, Senegal',
    availability: 'Open to freelance projects, full-time roles and PhD positions',
    workMode: 'In Senegal or internationally · on-site or remote',
  },

  ui: {
    language: 'Language',
    toggleMenu: 'Toggle menu',
    backToTop: 'Back to top',
    email: 'Email',
    toggleTheme: 'Switch between light and dark theme',
    skipToContent: 'Skip to content',
    colon: ':',
  },

  nav: {
    links: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      research: 'Research',
      skills: 'Skills',
      devops: 'DevOps',
      contact: 'Contact',
    },
    hireMe: 'Hire Me',
  },

  hero: {
    greeting: 'Hi, I’m',
    titleLine1: 'I build web apps',
    titleLine2: 'and ship them to production.',
    ctaProjects: 'View my projects',
    ctaContact: 'Contact me',
    audiencesTitle: 'Where would you like to start?',
    intro:
      'I design, build and deploy fast, reliable web applications with **Next.js / React**, **Django, Node.js & Spring Boot**, shipped with **Docker, CI/CD & GitOps**.',
    paths: {
      clients: {
        eyebrow: 'For Clients',
        title: 'Need a website or web app?',
        text: 'Business sites, e-commerce, custom web apps, WordPress → Next.js migration, deployment and maintenance.',
        primary: 'Hire me',
        secondary: 'See my work',
      },
      recruiters: {
        eyebrow: 'For Recruiters',
        title: 'Hiring a developer?',
        text: 'About 2 years of industry experience in full-stack development and DevOps. Full-time, remote or on-site.',
        primary: 'Professional CV',
        secondary: 'Experience',
      },
      phd: {
        eyebrow: 'For PhD committees',
        title: 'Prospective PhD student',
        text: 'M.Sc. Software Engineering (M2). Research interest: AI for Software Engineering & DevOps. PhD start 2027–2028.',
        primary: 'Academic CV',
        secondary: 'Research',
      },
    },
  },

  about: {
    eyebrow: '01. ABOUT ME',
    title: 'I build it, ship it **and keep it running.**',
    paragraphs: [
      'I’m **{name}**, a full-stack and DevOps developer based in Malika (Dakar), with about 2 years of industry experience. I now work as a freelancer, building websites and web applications for organisations and businesses: a non-profit, a real estate firm, and e-commerce platforms during my time at Labdevit.',
      'What sets me apart is that I handle both **the code and its operation**. At Labdevit I deployed client applications on VPS servers with Docker, CI/CD pipelines, GitOps (ArgoCD) and OpenTelemetry observability, so I think about deployment and reliability from day one.',
      'In parallel, I’m completing a **Master’s in Software Engineering** at UN-CHK and preparing a PhD in Computer Science, focused on applying machine learning to make software delivery and operations more reliable.',
    ],
    highlights: {
      web: 'End-to-end web development',
      devops: 'Production DevOps: Docker, CI/CD, GitOps',
      research: 'Research focus: AI for Software Engineering & DevOps',
      degree: 'M.Sc. Software Engineering: M2 in progress',
    },
    stats: {
      experience: { value: '~2 yrs', label: 'Industry experience' },
      master: { value: 'M2', label: 'M.Sc. Software Engineering' },
      bachelors: { value: '2', label: 'Bachelor’s degrees' },
      languages: { value: 'FR · EN', label: 'Working languages' },
    },
    github: {
      title: 'GitHub Profile',
      text: 'Personal, academic and team projects',
      cta: 'View',
    },
  },

  projects: {
    eyebrow: '02. FEATURED PROJECTS',
    title: 'Work I’ve **built & shipped**',
    intro:
      'Freelance sites, client projects from my time at Labdevit, and team projects. Each card states my exact role. Open **View case study** for the details.',
    status: { live: 'Live', inProgress: 'In Progress' },
    myRole: 'My role:',
    problem: 'Problem',
    solution: 'Solution',
    features: 'Key Features',
    challenges: 'Technical Challenges',
    outcome: 'Outcome',
    showCaseStudy: 'View case study',
    hideCaseStudy: 'Hide case study',
    visitSite: 'Visit live site',
    liveSiteLabel: '{title}: live site',
    githubRepo: 'GitHub repository',
    moreOnGithub: 'More projects and experiments on GitHub.',
    allOnGithub: 'See all my projects on GitHub',
    items: projectItems,
  },

  experience: {
    eyebrow: '03. EXPERIENCE',
    title: 'Where I’ve **worked**',
    downloadCv: 'Download the professional CV (PDF)',
    workTitle: 'Work Experience',
    competitionsTitle: 'Hackathons & Competitions',
    jobs,
    competitions,
  },

  research: {
    eyebrow: '04. RESEARCH & EDUCATION',
    title: 'Towards a PhD in **AI for Software Engineering**',
    statement: [
      'Hands-on work on CI/CD pipelines, GitOps, containerised deployments and production observability has shaped my research goal: applying machine learning to make software delivery and operations more reliable and efficient, with particular attention to resource-constrained environments such as those common in Africa.',
      'I am seeking a fully funded PhD in Computer Science starting in 2027–2028.',
    ],
    cvPrimary: 'Academic CV (EN)',
    cvOther: 'French version (FR)',
    interestsTitle: 'Research Interests',
    primaryInterest: 'Primary interest',
    interests,
    projectsTitle: 'Research & Technical Projects',
    projects: researchProjects,
    educationTitle: 'Education',
    status: { inProgress: 'In Progress', completed: 'Completed' },
    degrees,
    certificationsTitle: 'Certifications & Training',
    certifications: [
      { title: 'Networking Essentials', issuer: 'Cisco Networking Academy, via Force-N / UN-CHK', date: 'Feb 2023' },
      { title: 'Open Science 101', issuer: 'NASA (online)', date: '2026' },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'French', level: 'Fluent' },
      { name: 'English', level: 'Upper-intermediate (B2); IELTS Academic in preparation' },
    ],
    currentlyLearning: 'Currently learning:',
    communityTitle: 'Community',
    community: [
      { title: 'Speak Easy English', text: 'Member of a project offering free English classes in Senegal.' },
      { title: 'REVEIL ESPOIR', text: 'Built and deployed the website of this non-profit in Yeumbeul Nord.' },
    ],
  },

  skills: {
    eyebrow: '05. TECHNICAL EXPERTISE',
    title: 'Full-spectrum **technical stack**',
    intro: 'From UI components to Kubernetes manifests — built for end-to-end product delivery.',
    categories: {
      frontend: 'Frontend & Mobile',
      backend: 'Backend & APIs',
      databases: 'Databases',
      devops: 'DevOps & Infra',
      ai: 'AI & Research (learning)',
      tools: 'Tools & Design',
    },
    names: {
      flutter: 'Flutter (mobile)',
      ml: 'Machine Learning (PyTorch)',
      llm: 'LLM APIs & multi-agent pipelines',
    },
  },

  levels: {
    advanced: 'Advanced',
    proficient: 'Proficient',
    intermediate: 'Intermediate',
    learning: 'Learning',
  },

  devops: {
    eyebrow: '06. DEVOPS & INFRASTRUCTURE',
    title: 'Code is just the beginning. **I also ship it.**',
    intro:
      'Beyond writing code, I understand what it takes to deploy, maintain, and scale applications in production. DevOps isn’t a separate job: it’s part of how I build.',
    pipeline: {
      code: 'Code',
      lint: 'Lint & Test',
      build: 'Build Image',
      container: 'Container',
      deploy: 'Deploy',
      monitor: 'Monitor',
    },
    items: devopsItems,
  },

  contact: {
    eyebrow: '07. GET IN TOUCH',
    title: 'Let’s **work together**',
    intro:
      'Open to freelance projects, full-time roles and fully funded PhD positions, in Senegal or internationally, on-site or remote. Pick what fits and send me an email.',
    intents: {
      project: { label: 'Start a project', subject: 'Project inquiry' },
      job: { label: 'Job opportunity', subject: 'Job opportunity' },
      phd: { label: 'PhD / research position', subject: 'PhD / research position' },
    },
    copyEmail: 'Copy email address',
    copied: 'Email copied to clipboard.',
    copyFailed: 'Couldn’t copy automatically. Please select the address above.',
    servicesTitle: 'What I can do for your business',
    services: [
      'Business websites & e-commerce (Next.js)',
      'Custom web applications',
      'REST API design',
      'WordPress → Next.js migration',
      'Deployment, Docker & CI/CD',
      'Maintenance & optimisation',
    ],
    cvTitle: 'Download my CV',
    cvs: {
      professional: { label: 'Professional CV', audience: 'Freelance clients & recruiters' },
      academic: { label: 'Academic CV', audience: 'PhD admissions & scholarship committees' },
    },
  },

  footer: {
    credit: 'Designed & built by {name} · {year}',
  },

  notFound: {
    title: 'This page **doesn’t exist**',
    text: 'The page you’re looking for was moved, deleted, or never existed.',
    back: 'Back to home',
  },
}

export type Dictionary = typeof en
