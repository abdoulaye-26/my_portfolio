'use client'

import { useRef } from 'react'
import { m, useInView } from 'framer-motion'
import { Briefcase, Trophy, FileText } from 'lucide-react'
import { experiences, competitions } from '@/content/experience'
import { cvs } from '@/content/profile'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-28 relative bg-[#0D0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <p className="section-number text-cyan-400 mb-4">03. EXPERIENCE</p>
            <h2 className="text-4xl font-bold mb-4">
              Where I&apos;ve <span className="gradient-text">worked</span>
            </h2>
            <a
              href={cvs.professional.en}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FileText size={15} aria-hidden />
              Download the professional CV (PDF)
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12">
            {/* Work Experience */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-200 mb-8">
                <Briefcase size={18} className="text-cyan-400" aria-hidden />
                Work Experience
              </h3>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-[#1E1E2E]" aria-hidden />
                <ol className="space-y-7">
                  {experiences.map((exp, i) => (
                    <m.li
                      key={exp.company}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative flex gap-4 list-none"
                    >
                      <div className="relative z-10 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                        <Briefcase size={14} className="text-cyan-400" aria-hidden />
                      </div>
                      <div className="flex-1 card p-5 hover:border-cyan-500/20 transition-colors">
                        <h4 className="font-semibold text-slate-200 text-sm">{exp.company}</h4>
                        <p className="text-cyan-400 text-sm mt-0.5">{exp.role}</p>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-1 mb-3">
                          <span>{exp.period}</span>
                          <span aria-hidden>·</span>
                          <span>{exp.location}</span>
                        </div>
                        <ul className="space-y-1.5 mb-3">
                          {exp.highlights.map((h) => (
                            <li key={h} className="text-xs text-slate-400 flex items-start gap-2">
                              <span className="text-cyan-700 mt-0.5 shrink-0" aria-hidden>→</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.stack.map((s) => (
                            <span
                              key={s}
                              className="text-xs px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-500 border border-white/[0.07]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </m.li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Competitions */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-200 mb-8">
                <Trophy size={18} className="text-yellow-500" aria-hidden />
                Hackathons, Competitions & Bootcamps
              </h3>
              <div className="space-y-3">
                {competitions.map((h, i) => (
                  <m.div
                    key={h.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="card p-4 hover:border-yellow-500/20 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-slate-200 text-sm">{h.title}</h4>
                        <p className="text-yellow-500/70 text-xs mt-0.5">{h.organizer}</p>
                        {h.note && (
                          <p className="text-slate-500 text-xs mt-1 leading-relaxed">{h.note}</p>
                        )}
                      </div>
                      {h.period && <span className="text-slate-500 text-xs shrink-0">{h.period}</span>}
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
