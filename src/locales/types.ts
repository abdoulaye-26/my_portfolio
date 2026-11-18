// Shapes shared by both dictionaries. Records keyed by the ids in src/content/*
// make TypeScript fail the build if a project/job/degree is missing in one language.

export interface ProjectText {
  title: string
  tagline: string
  type: string
  /** Who it was for / the setting: freelance, employer, team, school. */
  context: string
  /** What I personally did. */
  role: string
  problem: string
  solution: string
  features?: string[]
  challenges?: string[]
  outcome?: string
  githubLabel?: string
}

export interface JobText {
  role: string
  period: string
  location: string
  highlights: string[]
}

export interface CompetitionText {
  title: string
  organizer: string
  period: string | null
  note: string | null
}

export interface DegreeText {
  degree: string
  institution: string
  period: string
  details: string[]
}

export interface ResearchProjectText {
  title: string
  context: string
  period: string | null
  description: string
}

export interface DevOpsText {
  name: string
  description: string
  practices: string[]
}
