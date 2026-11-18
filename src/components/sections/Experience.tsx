'use client'

import { Briefcase, Trophy, FileText } from 'lucide-react'
import { experiences } from '@/content/experience'
import { cvs } from '@/content/profile'
import { useI18n } from '@/i18n/LanguageProvider'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Experience() {
  const { t, locale } = useI18n()

  return (
    <section id="experience" className="section bg-surface-alt">
      <div className="container-page">
        <SectionHeader eyebrow={t.experience.eyebrow} title={t.experience.title}>
          <a
            href={cvs.professional[locale]}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-6"
          >
            <FileText size={15} aria-hidden />
            {t.experience.downloadCv}
          </a>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr]">
          {/* Work experience: timeline */}
          <div>
            <h3 className="mb-8 flex items-center gap-2 text-lg font-semibold">
              <Briefcase size={18} className="text-primary" aria-hidden />
              {t.experience.workTitle}
            </h3>
            <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
              {experiences.map((exp, i) => {
                const job = t.experience.jobs[exp.id]
                return (
                  <Reveal as="li" key={exp.id} delay={i * 0.05} className="relative">
                    {/* Timeline dot */}
                    <span
                      aria-hidden
                      className="absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full border-2 border-primary bg-bg sm:-left-[39px]"
                    />
                    <div className="card p-5 transition-colors hover:border-primary/40 sm:p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4 className="text-base font-semibold">{exp.company}</h4>
                        <span className="font-mono text-xs text-subtle">{job.period}</span>
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-primary">{job.role}</p>
                      <p className="mb-3 text-xs text-subtle">{job.location}</p>
                      <ul className="mb-4 space-y-1.5">
                        {job.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-muted">
                            <span className="mt-0.5 shrink-0 text-accent" aria-hidden>→</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.stack.map((s) => (
                          <span key={s} className="chip">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </ol>
          </div>

          {/* Competitions */}
          <div>
            <h3 className="mb-8 flex items-center gap-2 text-lg font-semibold">
              <Trophy size={18} className="text-amber-600 dark:text-amber-400" aria-hidden />
              {t.experience.competitionsTitle}
            </h3>
            <ul className="space-y-3">
              {t.experience.competitions.map((h, i) => (
                <Reveal
                  as="li"
                  key={h.title}
                  delay={i * 0.04}
                  className="card p-4 transition-colors hover:border-amber-500/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-semibold">{h.title}</h4>
                      <p className="mt-0.5 text-xs text-amber-800 dark:text-amber-300/90">{h.organizer}</p>
                      {h.note && <p className="mt-1.5 text-xs leading-relaxed text-muted">{h.note}</p>}
                    </div>
                    {h.period && <span className="shrink-0 font-mono text-xs text-subtle">{h.period}</span>}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
