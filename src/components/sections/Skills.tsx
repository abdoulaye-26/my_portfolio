'use client'

import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiDjango, SiNodedotjs, SiFastapi, SiSpring,
  SiPostgresql, SiMongodb, SiMysql,
  SiDocker, SiGitlab, SiLinux, SiKubernetes, SiNginx, SiGit,
  SiFigma, SiAngular, SiFlutter, SiPrisma, SiLaravel,
} from 'react-icons/si'
import { Brain, Zap, GitBranch, Server, Layout, Database, Cloud, Wrench, Sparkles } from 'lucide-react'
import type { IconComponent } from '@/lib/icon-types'
import { useI18n } from '@/i18n/LanguageProvider'
import type { Dictionary } from '@/locales'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

type SkillLevel = 'advanced' | 'intermediate' | 'learning'

interface Skill {
  /** Tech names are not translated… */
  name: string
  /** …except the few descriptive ones, looked up in t.skills.names. */
  nameKey?: keyof Dictionary['skills']['names']
  icon: IconComponent
  /** Brand colour. `null` = use the text colour (logos that are black/white, e.g. Next.js). */
  color: string | null
  /** Omitted when not self-assessed yet. */
  level?: SkillLevel
}

interface Category {
  id: keyof Dictionary['skills']['categories']
  icon: IconComponent
  skills: Skill[]
}

const categories: Category[] = [
  {
    id: 'frontend',
    icon: Layout,
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB', level: 'advanced' },
      { name: 'Next.js', icon: SiNextdotjs, color: null, level: 'advanced' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 'intermediate' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 'advanced' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4', level: 'advanced' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'Flutter (mobile)', nameKey: 'flutter', icon: SiFlutter, color: '#02569B' },
    ],
  },
  {
    id: 'backend',
    icon: Server,
    skills: [
      { name: 'Django / DRF', icon: SiDjango, color: '#44B78B', level: 'advanced' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 'advanced' },
      { name: 'Express.js', icon: Server, color: null, level: 'advanced' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688', level: 'learning' },
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F', level: 'learning' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    ],
  },
  {
    id: 'databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 'advanced' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 'advanced' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 'advanced' },
      { name: 'Prisma ORM', icon: SiPrisma, color: null },
    ],
  },
  {
    id: 'devops',
    icon: Cloud,
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 'advanced' },
      { name: 'GitLab CI/CD', icon: SiGitlab, color: '#FCA121', level: 'intermediate' },
      { name: 'Linux / VPS', icon: SiLinux, color: null, level: 'intermediate' },
      { name: 'Nginx', icon: SiNginx, color: '#009900', level: 'intermediate' },
      { name: 'ArgoCD', icon: GitBranch, color: '#EF7B4D', level: 'learning' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', level: 'learning' },
    ],
  },
  {
    // Matches the academic CV: "Currently learning ML / DL (PyTorch)" + multi-agent LLM prototype.
    id: 'ai',
    icon: Sparkles,
    skills: [
      { name: 'Machine Learning (PyTorch)', nameKey: 'ml', icon: Brain, color: '#A78BFA', level: 'learning' },
      { name: 'LLM APIs & multi-agent pipelines', nameKey: 'llm', icon: Zap, color: '#F59E0B', level: 'learning' },
    ],
  },
  {
    id: 'tools',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: 'advanced' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 'intermediate' },
    ],
  },
]

// Same hue family for all levels, getting lighter as the level goes down.
const levelStyle: Record<SkillLevel, string> = {
  advanced: 'bg-primary-solid text-white',
  intermediate: 'bg-primary/15 text-primary',
  learning: 'border border-line text-subtle',
}

export default function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeader eyebrow={t.skills.eyebrow} title={t.skills.title} intro={t.skills.intro} />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.id}
              delay={(i % 3) * 0.06}
              className="card p-6 transition-colors duration-300 hover:border-primary/40"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <cat.icon size={17} aria-hidden />
                </span>
                <h3 className="text-base font-semibold">{t.skills.categories[cat.id]}</h3>
              </div>
              <ul className="space-y-3">
                {cat.skills.map(({ name, nameKey, icon: Icon, color, level }) => (
                  <li key={name} className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 shrink-0 text-fg" style={color ? { color } : undefined} aria-hidden />
                      <span className="text-sm text-fg">{nameKey ? t.skills.names[nameKey] : name}</span>
                    </span>
                    {level && (
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${levelStyle[level]}`}>
                        {t.levels[level]}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
