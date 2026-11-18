// Research & education: the language-independent data. All text (taken from the
// academic CVs, Nov 2026) lives in src/locales/{en,fr}.ts under `research`.
// No publications are listed on purpose: add them only when they exist.

export type InterestId = 'aiSe' | 'iot' | 'efficientMl' | 'distributed'
export type DegreeId = 'msc' | 'bscMath' | 'bscEng' | 'bac'
export type ResearchProjectId = 'gitops' | 'multiAgent' | 'k8s' | 'evoting'
export type DegreeStatus = 'inProgress' | 'completed'

export const researchInterests: { id: InterestId; primary: boolean }[] = [
  { id: 'aiSe', primary: true },
  { id: 'iot', primary: false },
  { id: 'efficientMl', primary: false },
  { id: 'distributed', primary: false },
]

export const education: { id: DegreeId; status: DegreeStatus }[] = [
  { id: 'msc', status: 'inProgress' },
  { id: 'bscMath', status: 'completed' },
  { id: 'bscEng', status: 'completed' },
  { id: 'bac', status: 'completed' },
]

export const researchProjects: { id: ResearchProjectId; stack: string[] }[] = [
  { id: 'gitops', stack: ['CI/CD', 'ArgoCD', 'OpenTelemetry', 'Docker'] },
  { id: 'multiAgent', stack: ['Python', 'Anthropic API', 'Next.js'] },
  { id: 'k8s', stack: ['Kubernetes (Minikube)', 'Docker', 'WSL2'] },
  { id: 'evoting', stack: ['Blockchain'] },
]

export const currentlyLearning = 'Machine learning / deep learning (PyTorch)'
