// Research & education content, taken from the academic CV (CV_PhD, Nov 2026).
// No publications are listed on purpose: add them here only when they exist.

export const researchStatement = [
  'Hands-on work on CI/CD pipelines, GitOps, containerised deployments and production observability has shaped my research goal: applying machine learning to make software delivery and operations more reliable and efficient, with particular attention to resource-constrained environments such as those common in Africa.',
  'I am seeking a fully funded PhD in Computer Science starting in 2027–2028.',
]

export const researchInterests = [
  { title: 'AI for Software Engineering & DevOps', primary: true },
  { title: 'Machine-learning-based IoT security', primary: false },
  { title: 'Resource-efficient ML systems', primary: false },
  { title: 'Distributed & cloud-native systems', primary: false },
]

export interface Degree {
  degree: string
  institution: string
  period: string
  status: 'In Progress' | 'Completed'
  details: string[]
}

export const education: Degree[] = [
  {
    degree: 'M.Sc. in Software Engineering',
    institution: 'Université Numérique Cheikh Hamidou Kane (UN-CHK), Senegal',
    period: '2024 – Present',
    status: 'In Progress',
    details: [
      'First year (M1) completed; second year (M2) in progress.',
      'Coursework: software engineering, distributed algorithms, service-oriented architectures, IT project management, digital culture.',
    ],
  },
  {
    degree: 'Bachelor’s in Applied Mathematics & Computer Science',
    institution: 'UN-CHK, Senegal (online programme)',
    period: '2020 – 2024',
    status: 'Completed',
    details: [
      'Mention Assez Bien.',
      'Capstone project: design and development of an e-learning web application.',
    ],
  },
  {
    degree: 'Bachelor’s in Computer Engineering',
    institution: 'Université Professionnelle du Sénégal (UNIPRO)',
    period: '2021 – 2023',
    status: 'Completed',
    details: [
      'Mention Assez Bien.',
      'Completed on-site, concurrently with the UN-CHK degree.',
      'Capstone project: e-learning web application.',
    ],
  },
  {
    degree: 'Baccalauréat S2 (Science)',
    institution: 'CPCATL, Senegal',
    period: '2020',
    status: 'Completed',
    details: [],
  },
]

export const researchProjects = [
  {
    title: 'GitOps & Observability in Production',
    context: 'Labdevit (industry context)',
    period: '2025 – 2026',
    stack: ['CI/CD', 'ArgoCD', 'OpenTelemetry', 'Docker'],
    description:
      'Deployed client applications with CI/CD, GitOps (ArgoCD) and OpenTelemetry tracing: the operational setting that motivates my interest in ML-driven DevOps.',
  },
  {
    title: 'Multi-Agent Writing Assistant (prototype)',
    context: 'Personal project',
    period: null,
    stack: ['Python', 'Anthropic API', 'Next.js'],
    description:
      'Designed a sequential multi-agent LLM pipeline for drafting professional posts; explored agent orchestration patterns.',
  },
  {
    title: 'Kubernetes Deployment Lab',
    context: 'Self-directed',
    period: 'In progress',
    stack: ['Kubernetes (Minikube)', 'Docker', 'WSL2'],
    description:
      'Documented project to deploy a full-stack application on Kubernetes, progressing towards GitOps (ArgoCD) and monitoring.',
  },
  {
    title: 'Blockchain E-Voting',
    context: 'Hackathon, BAM (Bold African Movement)',
    period: '2024',
    stack: ['Blockchain'],
    description: 'Team prototype of a blockchain-based electronic voting application.',
  },
]

export const certifications = [
  { title: 'Networking Essentials', issuer: 'Cisco Networking Academy, via Force-N / UN-CHK', date: 'Feb 2023' },
  { title: 'Open Science 101', issuer: 'NASA (online)', date: '2026' },
]

export const languages = [
  { name: 'French', level: 'Fluent' },
  { name: 'English', level: 'Upper-intermediate (B2); IELTS Academic in preparation' },
]

export const currentlyLearning = 'Machine learning / deep learning (PyTorch)'

export const community = [
  { title: 'Speak Easy English', text: 'Member of a project offering free English classes in Senegal.' },
  { title: 'REVEIL ESPOIR', text: 'Built and deployed the website of this non-profit in Yeumbeul Nord.' },
]
