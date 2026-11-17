'use client'

import { m } from 'framer-motion'
import { ArrowRight, MapPin, FileText, Briefcase, GraduationCap, Rocket } from 'lucide-react'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import type { LucideIcon } from 'lucide-react'
import { profile, cvs } from '@/content/profile'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

interface Path {
  icon: LucideIcon
  audience: string
  title: string
  text: string
  primary: { label: string; href: string; external?: boolean }
  secondary: { label: string; href: string }
  accent: string
}

// One entry point per audience (see CLAUDE.md: clients, recruiters, academic committees).
const paths: Path[] = [
  {
    icon: Rocket,
    audience: 'Clients',
    title: 'Need a website or web app?',
    text: 'Business sites, e-commerce, custom web apps, WordPress → Next.js migration, deployment and maintenance.',
    primary: { label: 'Hire me', href: '#contact' },
    secondary: { label: 'See my work', href: '#projects' },
    accent: 'text-cyan-400 border-cyan-500/25 hover:border-cyan-500/50',
  },
  {
    icon: Briefcase,
    audience: 'Recruiters',
    title: 'Hiring a developer?',
    text: 'About 2 years of industry experience in full-stack development and DevOps. Full-time, remote or on-site.',
    primary: { label: 'Professional CV', href: cvs.professional.en, external: true },
    secondary: { label: 'Experience', href: '#experience' },
    accent: 'text-blue-400 border-blue-500/25 hover:border-blue-500/50',
  },
  {
    icon: GraduationCap,
    audience: 'PhD committees',
    title: 'Prospective PhD student',
    text: 'M.Sc. Software Engineering (M2). Research interest: AI for Software Engineering & DevOps. PhD start 2027–2028.',
    primary: { label: 'Academic CV', href: cvs.academic.en, external: true },
    secondary: { label: 'Research', href: '#research' },
    accent: 'text-violet-400 border-violet-500/25 hover:border-violet-500/50',
  },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.07),transparent)]" />
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,30,46,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,46,0.5)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Profile photo */}
        <m.div variants={item} className="mb-6 flex justify-center">
          {/* Endless loops are pure CSS (globals.css): GPU-only, no JS per frame */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 anim-float">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 blur-xl anim-glow" />
            <div
              className="absolute -inset-[3px] rounded-full anim-spin-6"
              style={{ background: 'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)' }}
            />
            <div className="absolute inset-[2px] rounded-full bg-[#0B0B0F]" />
            <Image
              src="/profile.jpeg"
              alt={profile.name}
              fill
              sizes="(min-width: 640px) 112px, 96px"
              className="rounded-full object-cover object-top z-10"
              priority
            />
          </div>
        </m.div>

        {/* Availability */}
        <m.div variants={item} className="mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 bg-green-500/10 text-green-400">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {profile.availability}
          </span>
        </m.div>

        {/* Name + headline */}
        <m.p variants={item} className="text-slate-400 text-lg mb-3">
          Hi, I&apos;m <span className="text-slate-100 font-semibold">{profile.name}</span>
        </m.p>
        <m.h1
          variants={item}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          <span className="text-slate-100">Full-stack & DevOps developer</span>
          <br />
          <span className="gradient-text">from code to production</span>
        </m.h1>

        <m.p
          variants={item}
          className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          I design, build and deploy fast, reliable web applications with{' '}
          <span className="text-cyan-400 font-medium">Next.js / React</span>,{' '}
          <span className="text-cyan-400 font-medium">Django, Node.js & Spring Boot</span>, shipped
          with <span className="text-cyan-400 font-medium">Docker, CI/CD & GitOps</span>.
        </m.p>

        <m.p
          variants={item}
          className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-10"
        >
          <MapPin size={13} aria-hidden />
          <span>
            {profile.location} · {profile.workMode}
          </span>
        </m.p>

        {/* Audience paths */}
        <m.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-10">
          {paths.map((p) => (
            <div
              key={p.audience}
              className={`card p-5 flex flex-col transition-colors duration-200 ${p.accent}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <p.icon size={16} aria-hidden />
                <span className="text-xs font-mono uppercase tracking-wider">For {p.audience}</span>
              </div>
              <h2 className="text-slate-100 font-semibold mb-1.5">{p.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{p.text}</p>
              <div className="mt-auto flex flex-wrap items-center gap-3">
                <a
                  href={p.primary.href}
                  {...(p.primary.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-semibold transition-colors"
                >
                  {p.primary.external ? <FileText size={15} aria-hidden /> : null}
                  {p.primary.label}
                  {!p.primary.external ? <ArrowRight size={15} aria-hidden /> : null}
                </a>
                <a
                  href={p.secondary.href}
                  className="text-sm text-slate-400 hover:text-white underline-offset-4 hover:underline"
                >
                  {p.secondary.label}
                </a>
              </div>
            </div>
          ))}
        </m.div>

        {/* Social */}
        <m.div variants={item} className="flex items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </m.div>
      </m.div>
    </section>
  )
}
