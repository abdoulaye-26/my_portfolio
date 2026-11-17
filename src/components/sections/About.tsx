'use client'

import { useRef } from 'react'
import { m, useInView } from 'framer-motion'
import { Code2, Server, Brain, GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import { profile } from '@/content/profile'

// Every value here can be checked against the CVs.
const stats = [
  { value: '~2 yrs', label: 'Industry experience' },
  { value: 'M2', label: 'M.Sc. Software Engineering' },
  { value: '2', label: 'Bachelor’s degrees' },
  { value: 'FR · EN', label: 'Working languages' },
]

const highlights = [
  { icon: Code2, text: 'End-to-end web development', color: 'text-cyan-400' },
  { icon: Server, text: 'Production DevOps: Docker, CI/CD, GitOps', color: 'text-blue-400' },
  { icon: Brain, text: 'Research focus: AI for Software Engineering & DevOps', color: 'text-violet-400' },
  { icon: GraduationCap, text: 'M.Sc. Software Engineering: M2 in progress', color: 'text-green-400' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: text */}
          <div>
            <p className="section-number text-cyan-400 mb-4">01. ABOUT ME</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              I build it, ship it
              <br />
              <span className="gradient-text">and keep it running.</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m <span className="text-slate-200 font-medium">{profile.name}</span>, a
                full-stack and DevOps developer based in Malika (Dakar), with {profile.experience}.
                I now work as a freelancer, building websites and web applications for
                organisations and businesses: a non-profit, a real estate firm, and e-commerce
                platforms during my time at Labdevit.
              </p>
              <p>
                What sets me apart is that I handle both{' '}
                <span className="text-slate-200">the code and its operation</span>. At Labdevit I
                deployed client applications on VPS servers with Docker, CI/CD pipelines, GitOps
                (ArgoCD) and OpenTelemetry observability, so I think about deployment and
                reliability from day one.
              </p>
              <p>
                In parallel, I&apos;m completing a{' '}
                <span className="text-slate-200">Master&apos;s in Software Engineering</span> at
                UN-CHK and preparing a PhD in Computer Science, focused on applying machine learning
                to make software delivery and operations more reliable.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                >
                  <Icon size={17} className={`shrink-0 ${color}`} />
                  <span className="text-sm text-slate-300">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-slate-500 text-sm">
              <MapPin size={13} />
              <span>{profile.location} · {profile.workMode}</span>
            </div>
          </div>

          {/* Right: photo + stats */}
          <div className="flex flex-col gap-5">
            {/* Profile photo */}
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center lg:justify-start"
            >
              {/* Endless loops are pure CSS (globals.css); hover zoom is a CSS transition */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 anim-float transition-transform duration-300 hover:scale-[1.04]">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 blur-xl anim-glow" />
                <div
                  className="absolute -inset-[3px] rounded-2xl anim-spin-8"
                  style={{ background: 'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)' }}
                />
                <Image
                  src="/profile.jpeg"
                  alt={profile.name}
                  fill
                  sizes="(min-width: 640px) 224px, 192px"
                  className="rounded-2xl object-cover object-top z-10"
                  style={{ maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)' }}
                />
              </div>
            </m.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }, i) => (
                <m.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="card p-5 text-center hover:border-cyan-500/30 transition-colors duration-300"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
                  <div className="text-slate-500 text-xs">{label}</div>
                </m.div>
              ))}

              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="card col-span-2 p-5 flex items-center justify-between gap-4 hover:border-slate-600/50 transition-colors"
              >
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">GitHub Profile</p>
                  <p className="text-slate-200 font-medium text-sm">{profile.githubHandle}</p>
                  <p className="text-xs text-slate-500 mt-1">Personal, academic and team projects</p>
                </div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2 text-sm border border-slate-700 rounded-lg text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                >
                  View →
                </a>
              </m.div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
