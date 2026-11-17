'use client'

import { useId, useRef, useState } from 'react'
import { m, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown, ChevronUp, ArrowRight, UserRound } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects, type Project, type ProjectStatus } from '@/content/projects'
import { profile } from '@/content/profile'

const statusStyle: Record<ProjectStatus, string> = {
  'Live': 'bg-green-500/15 text-green-400 border-green-500/30',
  'In Progress': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const panelId = useId()

  return (
    <m.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      className="card overflow-hidden hover:border-slate-600/50 transition-all duration-300 flex flex-col"
    >
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              {project.status && (
                <span className={`text-xs px-2 py-0.5 rounded-full border ${statusStyle[project.status]}`}>
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-slate-400 text-sm">{project.tagline}</p>
            <p className="text-slate-500 text-xs mt-0.5 font-mono">{project.type}</p>
          </div>
          <div className="flex gap-1.5 shrink-0 ml-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-white transition-colors"
                aria-label={`${project.title}: ${project.githubLabel ?? 'GitHub repository'}`}
                title={project.githubLabel ?? 'GitHub repository'}
              >
                <FaGithub size={17} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-cyan-400 transition-colors"
                aria-label={`${project.title}: live site`}
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>

        {/* Role: what recruiters and clients look for first */}
        <div className="mb-4 flex items-start gap-2 rounded-lg bg-white/[0.03] border border-white/[0.07] px-3 py-2">
          <UserRound size={15} className="text-cyan-400 mt-0.5 shrink-0" />
          <div className="text-sm">
            <span className="text-slate-500">My role: </span>
            <span className="text-slate-200">{project.role}</span>
            <p className="text-xs text-slate-500 mt-0.5">{project.context}</p>
          </div>
        </div>

        {/* Problem */}
        <div className="mb-4">
          <p className="text-xs font-mono text-cyan-500 uppercase tracking-wider mb-1.5">Problem</p>
          <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
        </div>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech.name}
              className="text-xs px-2 py-1 rounded-md font-mono"
              style={{
                backgroundColor: `${tech.color}15`,
                color: tech.color,
                border: `1px solid ${tech.color}30`,
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
          >
            {open ? 'Hide' : 'View'} case study
            {open ? <ChevronUp size={15} aria-hidden /> : <ChevronDown size={15} aria-hidden />}
          </button>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Visit live site
              <ExternalLink size={14} aria-hidden />
            </a>
          )}
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
              <div className="mt-4 pt-4 border-t border-[#1E1E2E] space-y-4">
                <div>
                  <p className="text-xs font-mono text-green-500 uppercase tracking-wider mb-1.5">Solution</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
                </div>
                {project.features && (
                  <div>
                    <p className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1.5">Key Features</p>
                    <ul className="space-y-1.5">
                      {project.features.map((f) => (
                        <li key={f} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-cyan-600 mt-0.5 shrink-0" aria-hidden>→</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.challenges && (
                  <div>
                    <p className="text-xs font-mono text-orange-400 uppercase tracking-wider mb-1.5">Technical Challenges</p>
                    <ul className="space-y-1.5">
                      {project.challenges.map((c) => (
                        <li key={c} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-orange-500 mt-0.5 shrink-0" aria-hidden>⚡</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.outcome && (
                  <div>
                    <p className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-1.5">Outcome</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{project.outcome}</p>
                  </div>
                )}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-number text-cyan-400 mb-4">02. FEATURED PROJECTS</p>
          <h2 className="text-4xl font-bold mb-4">
            Work I&apos;ve{' '}
            <span className="gradient-text">built & shipped</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Freelance sites, client projects from my time at Labdevit, and team projects. Each card
            states my exact role. Open <span className="text-slate-300">View case study</span> for
            the details.
          </p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">More projects and experiments on GitHub.</p>
          <m.a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 rounded-xl transition-all duration-200 text-sm font-medium"
          >
            <FaGithub size={18} />
            See all my projects on GitHub
            <ArrowRight size={15} />
          </m.a>
        </m.div>
      </div>
    </section>
  )
}
