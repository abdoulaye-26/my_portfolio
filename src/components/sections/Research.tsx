'use client'

import { useRef } from 'react'
import { m, useInView } from 'framer-motion'
import {
  FlaskConical, GraduationCap, Microscope, Award, Languages, HeartHandshake, FileText, Target,
} from 'lucide-react'
import {
  researchStatement, researchInterests, education, researchProjects,
  certifications, languages, currentlyLearning, community,
} from '@/content/research'
import { cvs } from '@/content/profile'

function SubHeading({ icon: Icon, children }: { icon: typeof FlaskConical; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 text-base font-semibold text-slate-200 mb-5">
      <Icon size={18} className="text-violet-400" aria-hidden />
      {children}
    </h3>
  )
}

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="research" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_20%,rgba(139,92,246,0.07),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <m.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Intro */}
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="section-number text-violet-400 mb-4">04. RESEARCH & EDUCATION</p>
            <h2 className="text-4xl font-bold mb-5">
              Towards a PhD in{' '}
              <span className="gradient-text-ai">AI for Software Engineering</span>
            </h2>
            {researchStatement.map((p) => (
              <p key={p} className="text-slate-400 leading-relaxed mb-3">
                {p}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={cvs.academic.en}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold transition-colors"
              >
                <FileText size={16} aria-hidden />
                Academic CV (EN)
              </a>
              <a
                href={cvs.academic.fr}
                target="_blank"
                rel="noopener noreferrer"
                lang="fr"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 text-sm font-medium transition-colors"
              >
                <FileText size={16} aria-hidden />
                CV académique (FR)
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column: research */}
            <div className="space-y-10">
              <div>
                <SubHeading icon={Target}>Research Interests</SubHeading>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {researchInterests.map((r) => (
                    <li
                      key={r.title}
                      className={`card p-4 text-sm ${
                        r.primary ? 'border-violet-500/40 bg-violet-500/[0.06] text-slate-100' : 'text-slate-300'
                      }`}
                    >
                      {r.title}
                      {r.primary && (
                        <span className="block text-xs text-violet-400 mt-1">Primary interest</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SubHeading icon={Microscope}>Research & Technical Projects</SubHeading>
                <div className="space-y-4">
                  {researchProjects.map((p) => (
                    <article key={p.title} className="card p-5 hover:border-violet-500/30 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h4 className="font-semibold text-slate-200 text-sm">{p.title}</h4>
                        {p.period && <span className="text-xs text-slate-500 shrink-0">{p.period}</span>}
                      </div>
                      <p className="text-xs text-violet-400/80 mb-2">{p.context}</p>
                      <p className="text-sm text-slate-400 leading-relaxed mb-3">{p.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: education & more */}
            <div className="space-y-10">
              <div>
                <SubHeading icon={GraduationCap}>Education</SubHeading>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.degree} className="card p-5 hover:border-violet-500/20 transition-colors">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-semibold text-slate-200 text-sm">{edu.degree}</h4>
                          <p className="text-slate-500 text-xs mt-0.5">{edu.institution}</p>
                          <p className="text-slate-500 text-xs mt-1">{edu.period}</p>
                        </div>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                            edu.status === 'In Progress'
                              ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                              : 'bg-green-500/15 text-green-400 border border-green-500/30'
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      {edu.details.length > 0 && (
                        <ul className="mt-3 space-y-1">
                          {edu.details.map((d) => (
                            <li key={d} className="text-xs text-slate-400 flex items-start gap-2">
                              <span className="text-violet-500 shrink-0" aria-hidden>·</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SubHeading icon={Award}>Certifications & Training</SubHeading>
                <ul className="space-y-2">
                  {certifications.map((c) => (
                    <li key={c.title} className="flex items-start justify-between gap-3 text-sm">
                      <span>
                        <span className="text-slate-200">{c.title}</span>
                        <span className="text-slate-500">, {c.issuer}</span>
                      </span>
                      <span className="text-xs text-slate-500 shrink-0">{c.date}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <SubHeading icon={Languages}>Languages</SubHeading>
                  <ul className="space-y-2 text-sm">
                    {languages.map((l) => (
                      <li key={l.name}>
                        <span className="text-slate-200">{l.name}:</span>{' '}
                        <span className="text-slate-400">{l.level}</span>
                      </li>
                    ))}
                    <li className="pt-2 text-slate-400">
                      <span className="text-slate-200">Currently learning:</span> {currentlyLearning}
                    </li>
                  </ul>
                </div>
                <div>
                  <SubHeading icon={HeartHandshake}>Community</SubHeading>
                  <ul className="space-y-2 text-sm">
                    {community.map((c) => (
                      <li key={c.title}>
                        <span className="text-slate-200">{c.title}:</span>{' '}
                        <span className="text-slate-400">{c.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
