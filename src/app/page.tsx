import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

// Below-the-fold sections are split into their own chunks.
const Experience = dynamic(() => import('@/components/sections/Experience'))
const Research = dynamic(() => import('@/components/sections/Research'))
const Skills = dynamic(() => import('@/components/sections/Skills'))
const DevOps = dynamic(() => import('@/components/sections/DevOps'))

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Research />
      <Skills />
      <DevOps />
      <Contact />
    </>
  )
}
