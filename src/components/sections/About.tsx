'use client'

import { Code2, Server, Brain, GraduationCap, MapPin, ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { profile } from '@/content/profile'
import { useI18n } from '@/i18n/LanguageProvider'
import type { Dictionary } from '@/locales'
import Rich from '@/components/ui/Rich'
import Reveal from '@/components/ui/Reveal'

// Every value here can be checked against the CVs (text in src/locales).
const statIds: (keyof Dictionary['about']['stats'])[] = ['experience', 'master', 'bachelors', 'languages']

const highlights: { id: keyof Dictionary['about']['highlights']; icon: typeof Code2 }[] = [
  { id: 'web', icon: Code2 },
  { id: 'devops', icon: Server },
  { id: 'research', icon: Brain },
  { id: 'degree', icon: GraduationCap },
]

export default function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="section bg-surface-alt">
      <div className="container-page grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        {/* Left: text */}
        <div>
          <Reveal>
            <p className="eyebrow mb-3">{t.about.eyebrow}</p>
            <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
              <Rich text={t.about.title} strongClassName="gradient-text" />
            </h2>
          </Reveal>
          <Reveal delay={0.05} className="space-y-4 leading-relaxed text-muted">
            {t.about.paragraphs.map((p) => (
              <p key={p}>
                <Rich text={p} vars={{ name: profile.name }} strongClassName="font-medium text-fg" />
              </p>
            ))}
          </Reveal>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map(({ id, icon: Icon }, i) => (
              <Reveal
                as="li"
                key={id}
                delay={i * 0.05}
                className="flex items-center gap-3 rounded-xl border border-line bg-surface p-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={16} aria-hidden />
                </span>
                <span className="text-sm text-fg">{t.about.highlights[id]}</span>
              </Reveal>
            ))}
          </ul>

          <p className="mt-6 flex items-start gap-2 text-sm text-subtle">
            <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden />
            <span>
              {t.profile.location} · {t.profile.workMode}
            </span>
          </p>
        </div>

        {/* Right: stats + GitHub */}
        <div className="grid grid-cols-2 gap-4">
          {statIds.map((id, i) => {
            const { value, label } = t.about.stats[id]
            return (
              <Reveal
                key={id}
                delay={0.08 + i * 0.06}
                className="card p-5 text-center transition-colors duration-300 hover:border-primary/40 sm:p-6"
              >
                <div className="mb-1 font-display text-3xl font-bold gradient-text sm:text-4xl">{value}</div>
                <div className="text-xs text-subtle sm:text-sm">{label}</div>
              </Reveal>
            )
          })}

          <Reveal delay={0.35} className="col-span-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex items-center justify-between gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fg/5 text-fg">
                  <FaGithub size={20} aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-subtle">{t.about.github.title}</span>
                  <span className="block text-sm font-medium text-fg">{profile.githubHandle}</span>
                  <span className="block text-xs text-subtle">{t.about.github.text}</span>
                </span>
              </span>
              <span className="flex items-center gap-1 text-sm font-medium text-primary">
                {t.about.github.cta}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
