'use client'

import { useRef, useState } from 'react'
import { m, useInView } from 'framer-motion'
import { Mail, MapPin, Copy, CheckCircle2, FileText, Rocket, Briefcase, GraduationCap, Check } from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { profile, cvs, mailto, services } from '@/content/profile'

// Pre-filled email subjects so each audience lands in a clear thread.
const intents = [
  { icon: Rocket, label: 'Start a project', subject: 'Project inquiry', className: 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10' },
  { icon: Briefcase, label: 'Job opportunity', subject: 'Job opportunity', className: 'border-blue-500/30 text-blue-300 hover:bg-blue-500/10' },
  { icon: GraduationCap, label: 'PhD / research position', subject: 'PhD / research position', className: 'border-violet-500/30 text-violet-300 hover:bg-violet-500/10' },
]

type CopyState = 'idle' | 'copied' | 'failed'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copyState, setCopyState] = useState<CopyState>('idle')

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyState('copied')
    } catch {
      // Clipboard can be blocked (permissions, insecure context, old browsers).
      setCopyState('failed')
    }
    setTimeout(() => setCopyState('idle'), 4000)
  }

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(34,211,238,0.06),transparent)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <m.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center">
            <p className="section-number text-cyan-400 mb-4">07. GET IN TOUCH</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Let&apos;s <span className="gradient-text">work together</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Open to freelance projects, full-time roles and fully funded PhD positions, in Senegal
              or internationally, on-site or remote. Pick what fits and send me an email.
            </p>

            {/* Intent buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 mb-10">
              {intents.map(({ icon: Icon, label, subject, className }) => (
                <a
                  key={label}
                  href={mailto(subject)}
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-colors ${className}`}
                >
                  <Icon size={16} aria-hidden />
                  {label}
                </a>
              ))}
            </div>

            {/* Email */}
            <div className="mb-8">
              <div className="inline-flex flex-wrap items-center justify-center gap-2">
                <a
                  href={mailto()}
                  className="inline-flex items-center gap-3 px-6 py-4 bg-cyan-500/[0.08] border border-cyan-500/30 rounded-2xl text-cyan-400 hover:bg-cyan-500/[0.14] hover:border-cyan-500/50 transition-all duration-200"
                >
                  <Mail size={19} aria-hidden />
                  <span className="font-mono text-sm sm:text-base break-all">{profile.email}</span>
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="p-4 rounded-2xl border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                  aria-label="Copy email address"
                >
                  {copyState === 'copied' ? (
                    <CheckCircle2 size={18} className="text-green-400" aria-hidden />
                  ) : (
                    <Copy size={18} aria-hidden />
                  )}
                </button>
              </div>
              {/* Always mounted so screen readers announce changes */}
              <p className="text-xs mt-2 min-h-[1rem]" role="status" aria-live="polite">
                {copyState === 'copied' && <span className="text-green-400">Email copied to clipboard.</span>}
                {copyState === 'failed' && (
                  <span className="text-amber-400">Couldn&apos;t copy automatically. Please select the address above.</span>
                )}
              </p>
            </div>

            {/* Other channels */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              {[
                { icon: FaWhatsapp, label: 'WhatsApp', sub: profile.phoneDisplay, href: profile.whatsapp, hover: 'hover:border-green-500/40 hover:text-green-400' },
                { icon: FaLinkedin, label: 'LinkedIn', sub: 'in/abdoulaye-sene-707801203', href: profile.linkedin, hover: 'hover:border-blue-500/40 hover:text-blue-400' },
                { icon: FaGithub, label: 'GitHub', sub: profile.githubHandle, href: profile.github, hover: 'hover:border-slate-500/50 hover:text-white' },
              ].map(({ icon: Icon, label, sub, href, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 px-5 py-3 card text-slate-400 text-sm transition-all duration-200 ${hover}`}
                >
                  <Icon size={17} aria-hidden />
                  <span className="text-left">
                    <span className="block font-medium">{label}</span>
                    <span className="block text-xs text-slate-500">{sub}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services + CVs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="card p-6">
              <h3 className="font-semibold text-slate-200 mb-4">What I can do for your business</h3>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-slate-400">
                    <Check size={15} className="text-cyan-400 mt-0.5 shrink-0" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-slate-200 mb-4">Download my CV</h3>
              <div className="space-y-5">
                {Object.values(cvs).map((cv) => (
                  <div key={cv.label}>
                    <p className="text-sm text-slate-200">{cv.label}</p>
                    <p className="text-xs text-slate-500 mb-2">{cv.audience}</p>
                    <div className="flex gap-2">
                      <a
                        href={cv.en}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                      >
                        <FileText size={14} aria-hidden /> English
                      </a>
                      <a
                        href={cv.fr}
                        target="_blank"
                        rel="noopener noreferrer"
                        lang="fr"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                      >
                        <FileText size={14} aria-hidden /> Français
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-1.5 text-slate-500 text-sm">
            <MapPin size={13} aria-hidden />
            <span>{profile.location} · {profile.workMode}</span>
          </div>
        </m.div>
      </div>
    </section>
  )
}
