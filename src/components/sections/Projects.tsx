'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { m, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown, ArrowRight, UserRound } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects, type Project, type ProjectStatus } from '@/content/projects'
import { profile } from '@/content/profile'
import { useI18n } from '@/i18n/LanguageProvider'
import { format } from '@/components/ui/Rich'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const statusStyle: Record<ProjectStatus, string> = {
  live: 'bg-emerald-500 text-white',
  inProgress: 'bg-amber-400 text-amber-950',
}

/** Cover: the real screenshot if there is one, otherwise a generated gradient cover. */
function ProjectCover({ project, title }: { project: Project; title: string }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
      {project.image ? (
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-[1.04]`}
        >
          {/* Decorative grid + soft light, so each cover feels designed, not empty */}
          <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/35 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-5">
            <span className="font-display text-2xl font-bold leading-tight text-white drop-shadow-sm sm:text-3xl">
              {title}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useI18n()
  const text = t.projects.items[project.id]
  const githubLabel = text.githubLabel ?? t.projects.githubRepo
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <Reveal
      as="article"
      delay={(index % 2) * 0.08}
      className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
    >
      <div className="relative">
        <ProjectCover project={project} title={text.title} />
        {project.status && (
          <span
            className={`absolute left-4 top-4 rounded-full px-2.5 py-1 text-xs font-semibold shadow-card ${statusStyle[project.status]}`}
          >
            {t.projects.status[project.status]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{text.title}</h3>
        <p className="mt-1 text-sm text-muted">{text.tagline}</p>
        <p className="mt-0.5 font-mono text-xs text-subtle">{text.type}</p>

        {/* Role: what recruiters and clients look for first */}
        <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/5 px-3 py-2.5">
          <UserRound size={15} className="mt-0.5 shrink-0 text-primary" aria-hidden />
          <div className="text-sm">
            <span className="text-subtle">{t.projects.myRole} </span>
            <span className="font-medium text-fg">{text.role}</span>
            <p className="mt-0.5 text-xs text-subtle">{text.context}</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="eyebrow mb-1.5">{t.projects.problem}</p>
          <p className="text-sm leading-relaxed text-muted">{text.problem}</p>
        </div>

        {/* Tech-stack badges: a small dot in the technology's brand colour */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech.name} className="chip gap-1.5 font-mono text-fg/80">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: tech.color }} aria-hidden />
              {tech.name}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={format(t.projects.liveSiteLabel, { title: text.title })}
              className="btn-primary px-4 py-2"
            >
              {t.projects.visitSite}
              <ExternalLink size={14} aria-hidden />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${text.title}: ${githubLabel}`}
              title={githubLabel}
              className="btn-secondary px-4 py-2"
            >
              <FaGithub size={15} aria-hidden />
              GitHub
            </a>
          )}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={panelId}
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            {open ? t.projects.hideCaseStudy : t.projects.showCaseStudy}
            <ChevronDown
              size={15}
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              aria-hidden
            />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <m.div
              id={panelId}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4 border-t border-line pt-4">
                <div>
                  <p className="eyebrow mb-1.5">{t.projects.solution}</p>
                  <p className="text-sm leading-relaxed text-muted">{text.solution}</p>
                </div>
                {text.features && (
                  <div>
                    <p className="eyebrow mb-1.5">{t.projects.features}</p>
                    <ul className="space-y-1.5">
                      {text.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted">
                          <span className="mt-0.5 shrink-0 text-accent" aria-hidden>→</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {text.challenges && (
                  <div>
                    <p className="eyebrow mb-1.5">{t.projects.challenges}</p>
                    <ul className="space-y-1.5">
                      {text.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-muted">
                          <span className="mt-0.5 shrink-0 text-accent" aria-hidden>→</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {text.outcome && (
                  <div>
                    <p className="eyebrow mb-1.5">{t.projects.outcome}</p>
                    <p className="text-sm leading-relaxed text-muted">{text.outcome}</p>
                  </div>
                )}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const { t } = useI18n()

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionHeader eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro} />

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="mb-4 text-sm text-subtle">{t.projects.moreOnGithub}</p>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-3">
            <FaGithub size={18} aria-hidden />
            {t.projects.allOnGithub}
            <ArrowRight size={15} aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
