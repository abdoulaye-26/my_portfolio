'use client'

import { m } from 'framer-motion'
import { ArrowRight, MapPin, FileText, Briefcase, GraduationCap, Rocket, Mail } from 'lucide-react'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import type { LucideIcon } from 'lucide-react'
import { profile, cvs } from '@/content/profile'
import { useI18n } from '@/i18n/LanguageProvider'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/locales'
import Rich from '@/components/ui/Rich'
import Reveal from '@/components/ui/Reveal'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

interface Path {
  id: keyof Dictionary['hero']['paths']
  icon: LucideIcon
  /** CV links follow the current language; in-page anchors don't. */
  primaryHref: string | ((locale: Locale) => string)
  external?: boolean
  secondaryHref: string
}

// One entry point per audience (see CLAUDE.md: clients, recruiters, academic committees).
const paths: Path[] = [
  { id: 'clients', icon: Rocket, primaryHref: '#contact', secondaryHref: '#projects' },
  {
    id: 'recruiters',
    icon: Briefcase,
    primaryHref: (l) => cvs.professional[l],
    external: true,
    secondaryHref: '#experience',
  },
  {
    id: 'phd',
    icon: GraduationCap,
    primaryHref: (l) => cvs.academic[l],
    external: true,
    secondaryHref: '#research',
  },
]

const socials = [
  { href: profile.github, label: 'GitHub', icon: FaGithub },
  { href: profile.linkedin, label: 'LinkedIn', icon: FaLinkedin },
]

export default function Hero() {
  const { t, locale } = useI18n()

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background: soft brand glow + faint grid, both purely decorative */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgb(var(--primary)/0.14),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5] [mask-image:linear-gradient(to_bottom,black,transparent_75%)] bg-[linear-gradient(rgb(var(--line))_1px,transparent_1px),linear-gradient(90deg,rgb(var(--line))_1px,transparent_1px)] bg-[size:64px_64px]"
      />

      <div className="container-page relative">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16"
        >
          {/* Text */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <m.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-800 dark:text-emerald-300 sm:text-sm">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {t.profile.availability}
              </span>
            </m.div>

            <m.p variants={item} className="mb-3 text-base text-muted sm:text-lg">
              {t.hero.greeting} <span className="font-semibold text-fg">{profile.name}</span>
              <span className="text-subtle"> · </span>
              <span className="font-medium text-primary">{t.profile.headline}</span>
            </m.p>

            <m.h1
              variants={item}
              className="mb-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
            >
              {t.hero.titleLine1}
              <br />
              <span className="gradient-text">{t.hero.titleLine2}</span>
            </m.h1>

            <m.p
              variants={item}
              className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
            >
              <Rich text={t.hero.intro} strongClassName="font-medium text-fg" />
            </m.p>

            {/* Main calls to action */}
            <m.div
              variants={item}
              className="mb-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
            >
              <a href="#projects" className="btn-primary px-6 py-3">
                {t.hero.ctaProjects}
                <ArrowRight size={16} aria-hidden />
              </a>
              <a href="#contact" className="btn-secondary px-6 py-3">
                <Mail size={16} aria-hidden />
                {t.hero.ctaContact}
              </a>
              <div className="flex items-center justify-center gap-1 sm:ml-2">
                {socials.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="icon-btn h-11 w-11"
                  >
                    <Icon size={20} aria-hidden />
                  </a>
                ))}
              </div>
            </m.div>

            <m.p
              variants={item}
              className="flex items-start justify-center gap-1.5 text-sm text-subtle lg:justify-start"
            >
              <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden />
              <span>
                {t.profile.location} · {t.profile.workMode}
              </span>
            </m.p>
          </div>

          {/* Photo */}
          <m.div variants={item} className="order-1 flex justify-center lg:order-2">
            {/* Endless loops are pure CSS (globals.css): GPU-only, no JS per frame */}
            <div className="anim-float relative h-32 w-32 sm:h-40 sm:w-40 lg:h-72 lg:w-72">
              <div
                aria-hidden
                className="anim-glow absolute -inset-4 rounded-full bg-gradient-to-br from-primary to-accent opacity-40 blur-2xl"
              />
              <div
                aria-hidden
                className="anim-spin-8 absolute -inset-[3px] rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgb(var(--primary)), rgb(var(--accent)), rgb(var(--primary)))',
                }}
              />
              <div aria-hidden className="absolute inset-0 rounded-full bg-bg" />
              <Image
                src="/profile.jpeg"
                alt={profile.name}
                fill
                sizes="(min-width: 1024px) 288px, (min-width: 640px) 160px, 128px"
                className="z-10 rounded-full object-cover object-top p-1"
                priority
              />
            </div>
          </m.div>
        </m.div>

        {/* Audience paths */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <p className="eyebrow mb-5 text-center">{t.hero.audiencesTitle}</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {paths.map((p, i) => {
              const text = t.hero.paths[p.id]
              const href = typeof p.primaryHref === 'function' ? p.primaryHref(locale) : p.primaryHref
              return (
                <Reveal
                  key={p.id}
                  delay={i * 0.08}
                  className="card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
                >
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <p.icon size={17} aria-hidden />
                    </span>
                    <span className="eyebrow">{text.eyebrow}</span>
                  </div>
                  <h2 className="mb-2 text-lg font-semibold">{text.title}</h2>
                  <p className="mb-6 text-sm leading-relaxed text-muted">{text.text}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a
                      href={href}
                      {...(p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="btn-primary px-4 py-2"
                    >
                      {p.external ? <FileText size={15} aria-hidden /> : null}
                      {text.primary}
                      {!p.external ? <ArrowRight size={15} aria-hidden /> : null}
                    </a>
                    <a
                      href={p.secondaryHref}
                      className="text-sm font-medium text-muted underline-offset-4 hover:text-primary hover:underline"
                    >
                      {text.secondary}
                    </a>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
