'use client'

import { Fragment } from 'react'
import { SiDocker, SiGitlab, SiLinux, SiKubernetes, SiNginx } from 'react-icons/si'
import { Terminal, GitBranch, Package, Server, Cpu, Code2, ChevronRight } from 'lucide-react'
import type { IconComponent } from '@/lib/icon-types'
import { useI18n } from '@/i18n/LanguageProvider'
import type { Dictionary } from '@/locales'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

type Level = 'proficient' | 'intermediate' | 'learning'
type ItemId = keyof Dictionary['devops']['items']

// Name, description and practices of each item live in src/locales (t.devops.items).
const devopsItems: { id: ItemId; icon: IconComponent; color: string | null; level: Level }[] = [
  { id: 'docker', icon: SiDocker, color: '#2496ED', level: 'proficient' },
  { id: 'gitlab', icon: SiGitlab, color: '#FCA121', level: 'proficient' },
  { id: 'linux', icon: SiLinux, color: null, level: 'intermediate' },
  { id: 'nginx', icon: SiNginx, color: '#009900', level: 'intermediate' },
  { id: 'argocd', icon: GitBranch, color: '#EF7B4D', level: 'learning' },
  { id: 'k8s', icon: SiKubernetes, color: '#326CE5', level: 'learning' },
]

const levelStyle: Record<Level, string> = {
  proficient: 'bg-primary-solid text-white',
  intermediate: 'bg-primary/15 text-primary',
  learning: 'border border-line text-subtle',
}

const pipelineSteps: { id: keyof Dictionary['devops']['pipeline']; icon: IconComponent }[] = [
  { id: 'code', icon: Code2 },
  { id: 'lint', icon: Terminal },
  { id: 'build', icon: Package },
  { id: 'container', icon: SiDocker },
  { id: 'deploy', icon: Server },
  { id: 'monitor', icon: Cpu },
]

export default function DevOps() {
  const { t } = useI18n()

  return (
    <section id="devops" className="section bg-surface-alt">
      <div className="container-page">
        <SectionHeader eyebrow={t.devops.eyebrow} title={t.devops.title} intro={t.devops.intro} />

        {/* Pipeline visual */}
        <Reveal className="mb-14">
          <ol className="flex flex-wrap items-start justify-center gap-y-4">
            {pipelineSteps.map(({ id, icon: Icon }, i) => (
              <Fragment key={id}>
                <li className="flex w-[76px] flex-col items-center gap-2 text-center sm:w-[92px]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface text-primary shadow-card">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs text-subtle">{t.devops.pipeline[id]}</span>
                </li>
                {i < pipelineSteps.length - 1 && (
                  <li aria-hidden className="mt-3.5 hidden text-line sm:block">
                    <ChevronRight size={18} />
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {devopsItems.map((item, i) => {
            const Icon = item.icon
            const text = t.devops.items[item.id]
            return (
              <Reveal
                key={item.id}
                delay={(i % 3) * 0.06}
                className="card flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
              >
                <div className="mb-4 flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fg/5">
                      <Icon className="h-5 w-5 text-fg" style={item.color ? { color: item.color } : undefined} aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold leading-snug">{text.name}</h3>
                  </div>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${levelStyle[item.level]}`}>
                    {t.levels[item.level]}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted">{text.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {text.practices.map((p) => (
                    <span key={p} className="chip">
                      {p}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
