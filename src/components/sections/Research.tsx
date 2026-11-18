'use client'

import {
  FlaskConical, GraduationCap, Microscope, Award, Languages, HeartHandshake, FileText, Target,
} from 'lucide-react'
import { researchInterests, education, researchProjects, currentlyLearning } from '@/content/research'
import { cvs } from '@/content/profile'
import { useI18n } from '@/i18n/LanguageProvider'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

function SubHeading({ icon: Icon, children }: { icon: typeof FlaskConical; children: React.ReactNode }) {
  return (
    <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
      <Icon size={18} className="text-primary" aria-hidden />
      {children}
    </h3>
  )
}

export default function Research() {
  const { t, locale } = useI18n()
  const r = t.research
  const otherLocale = locale === 'fr' ? 'en' : 'fr'

  return (
    <section id="research" className="section">
      <div className="container-page">
        <SectionHeader eyebrow={r.eyebrow} title={r.title}>
          <div className="mt-4 space-y-3 leading-relaxed text-muted">
            {r.statement.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={cvs.academic[locale]} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <FileText size={16} aria-hidden />
              {r.cvPrimary}
            </a>
            <a
              href={cvs.academic[otherLocale]}
              target="_blank"
              rel="noopener noreferrer"
              hrefLang={otherLocale}
              className="btn-secondary"
            >
              <FileText size={16} aria-hidden />
              {r.cvOther}
            </a>
          </div>
        </SectionHeader>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left column: research */}
          <div className="space-y-12">
            <div>
              <SubHeading icon={Target}>{r.interestsTitle}</SubHeading>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {researchInterests.map((i, idx) => (
                  <Reveal
                    as="li"
                    key={i.id}
                    delay={idx * 0.05}
                    className={`card p-4 text-sm ${
                      i.primary ? 'border-primary/40 bg-primary/5 font-medium text-fg' : 'text-muted'
                    }`}
                  >
                    {r.interests[i.id]}
                    {i.primary && (
                      <span className="mt-1 block text-xs font-normal text-primary">{r.primaryInterest}</span>
                    )}
                  </Reveal>
                ))}
              </ul>
            </div>

            <div>
              <SubHeading icon={Microscope}>{r.projectsTitle}</SubHeading>
              <div className="space-y-4">
                {researchProjects.map(({ id, stack }, idx) => {
                  const p = r.projects[id]
                  return (
                    <Reveal
                      as="article"
                      key={id}
                      delay={idx * 0.05}
                      className="card p-5 transition-colors hover:border-primary/40"
                    >
                      <div className="mb-1 flex items-start justify-between gap-3">
                        <h4 className="text-sm font-semibold">{p.title}</h4>
                        {p.period && <span className="shrink-0 font-mono text-xs text-subtle">{p.period}</span>}
                      </div>
                      <p className="mb-2 text-xs font-medium text-primary">{p.context}</p>
                      <p className="mb-3 text-sm leading-relaxed text-muted">{p.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {stack.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right column: education & more */}
          <div className="space-y-12">
            <div>
              <SubHeading icon={GraduationCap}>{r.educationTitle}</SubHeading>
              <div className="space-y-4">
                {education.map(({ id, status }, idx) => {
                  const edu = r.degrees[id]
                  return (
                    <Reveal key={id} delay={idx * 0.05} className="card p-5 transition-colors hover:border-primary/40">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-semibold">{edu.degree}</h4>
                          <p className="mt-0.5 text-xs text-subtle">{edu.institution}</p>
                          <p className="mt-1 font-mono text-xs text-subtle">{edu.period}</p>
                        </div>
                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                            status === 'inProgress'
                              ? 'bg-primary/10 text-primary'
                              : 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300'
                          }`}
                        >
                          {r.status[status]}
                        </span>
                      </div>
                      {edu.details.length > 0 && (
                        <ul className="mt-3 space-y-1">
                          {edu.details.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-xs text-muted">
                              <span className="shrink-0 text-accent" aria-hidden>·</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </Reveal>
                  )
                })}
              </div>
            </div>

            <Reveal>
              <SubHeading icon={Award}>{r.certificationsTitle}</SubHeading>
              <ul className="space-y-2">
                {r.certifications.map((c) => (
                  <li key={c.title} className="flex items-start justify-between gap-3 text-sm">
                    <span>
                      <span className="font-medium text-fg">{c.title}</span>
                      <span className="text-subtle">, {c.issuer}</span>
                    </span>
                    <span className="shrink-0 font-mono text-xs text-subtle">{c.date}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <SubHeading icon={Languages}>{r.languagesTitle}</SubHeading>
                <ul className="space-y-2 text-sm">
                  {r.languages.map((l) => (
                    <li key={l.name}>
                      <span className="font-medium text-fg">{l.name}{t.ui.colon}</span>{' '}
                      <span className="text-muted">{l.level}</span>
                    </li>
                  ))}
                  <li className="pt-2 text-muted">
                    <span className="font-medium text-fg">{r.currentlyLearning}</span> {currentlyLearning}
                  </li>
                </ul>
              </div>
              <div>
                <SubHeading icon={HeartHandshake}>{r.communityTitle}</SubHeading>
                <ul className="space-y-2 text-sm">
                  {r.community.map((c) => (
                    <li key={c.title}>
                      <span className="font-medium text-fg">{c.title}{t.ui.colon}</span>{' '}
                      <span className="text-muted">{c.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
