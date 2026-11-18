'use client'

import { useState } from 'react'
import { Mail, MapPin, Copy, CheckCircle2, FileText, Rocket, Briefcase, GraduationCap, Check } from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { profile, cvs, mailto, type CvKind } from '@/content/profile'
import { useI18n } from '@/i18n/LanguageProvider'
import { languageNames, locales } from '@/i18n/config'
import type { Dictionary } from '@/locales'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

// Pre-filled email subjects (translated) so each audience lands in a clear thread.
const intents: { id: keyof Dictionary['contact']['intents']; icon: typeof Rocket }[] = [
  { id: 'project', icon: Rocket },
  { id: 'job', icon: Briefcase },
  { id: 'phd', icon: GraduationCap },
]

const channels = [
  { icon: FaWhatsapp, label: 'WhatsApp', sub: profile.phoneDisplay, href: profile.whatsapp },
  { icon: FaLinkedin, label: 'LinkedIn', sub: profile.linkedinHandle, href: profile.linkedin },
  { icon: FaGithub, label: 'GitHub', sub: profile.githubHandle, href: profile.github },
]

const cvKinds: CvKind[] = ['professional', 'academic']

type CopyState = 'idle' | 'copied' | 'failed'

export default function Contact() {
  const { t, locale } = useI18n()
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
    <section id="contact" className="section overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgb(var(--primary)/0.1),transparent)]"
      />

      <div className="container-page relative max-w-5xl">
        <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro} />

        <Reveal className="text-center">
          {/* Intent buttons */}
          <div className="mb-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {intents.map(({ id, icon: Icon }) => (
              <a key={id} href={mailto(t.contact.intents[id].subject)} className="btn-secondary px-5 py-3">
                <Icon size={16} className="text-primary" aria-hidden />
                {t.contact.intents[id].label}
              </a>
            ))}
          </div>

          {/* Email */}
          <div className="mb-8">
            <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2">
              <a href={mailto()} className="btn-primary min-w-0 px-6 py-4">
                <Mail size={19} aria-hidden />
                <span className="break-all font-mono text-sm sm:text-base">{profile.email}</span>
              </a>
              <button
                type="button"
                onClick={copy}
                className="icon-btn h-[52px] w-[52px] rounded-xl border border-line bg-surface"
                aria-label={t.contact.copyEmail}
                title={t.contact.copyEmail}
              >
                {copyState === 'copied' ? (
                  <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400" aria-hidden />
                ) : (
                  <Copy size={18} aria-hidden />
                )}
              </button>
            </div>
            {/* Always mounted so screen readers announce changes */}
            <p className="mt-2 min-h-[1rem] text-xs" role="status" aria-live="polite">
              {copyState === 'copied' && (
                <span className="text-emerald-700 dark:text-emerald-400">{t.contact.copied}</span>
              )}
              {copyState === 'failed' && (
                <span className="text-amber-700 dark:text-amber-400">{t.contact.copyFailed}</span>
              )}
            </p>
          </div>

          {/* Other channels */}
          <div className="mb-14 flex flex-wrap items-center justify-center gap-3">
            {channels.map(({ icon: Icon, label, sub, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-3 px-5 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40"
              >
                <Icon size={18} className="text-fg" aria-hidden />
                <span>
                  <span className="block text-sm font-medium text-fg">{label}</span>
                  <span className="block text-xs text-subtle">{sub}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Services + CVs */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal className="card p-6">
            <h3 className="mb-4 text-lg font-semibold">{t.contact.servicesTitle}</h3>
            <ul className="space-y-2">
              {t.contact.services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-muted">
                  <Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="card p-6">
            <h3 className="mb-4 text-lg font-semibold">{t.contact.cvTitle}</h3>
            <div className="space-y-5">
              {cvKinds.map((kind) => (
                <div key={kind}>
                  <p className="text-sm font-medium text-fg">{t.contact.cvs[kind].label}</p>
                  <p className="mb-2 text-xs text-subtle">{t.contact.cvs[kind].audience}</p>
                  <div className="flex flex-wrap gap-2">
                    {/* Current language first */}
                    {[locale, ...locales.filter((l) => l !== locale)].map((l) => (
                      <a
                        key={l}
                        href={cvs[kind][l]}
                        target="_blank"
                        rel="noopener noreferrer"
                        hrefLang={l}
                        lang={l}
                        className="btn-secondary px-3 py-1.5 font-medium"
                      >
                        <FileText size={14} aria-hidden /> {languageNames[l]}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <p className="mt-10 flex items-start justify-center gap-1.5 text-center text-sm text-subtle">
          <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden />
          <span>
            {t.profile.location} · {t.profile.workMode}
          </span>
        </p>
      </div>
    </section>
  )
}
