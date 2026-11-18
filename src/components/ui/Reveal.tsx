'use client'

import { m } from 'framer-motion'

/**
 * Fade-up when the element scrolls into view (once). Vertical offset only, so it
 * can never push content sideways. MotionConfig reducedMotion="user" (in
 * MotionProvider) turns the movement off for people who ask their OS for less motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  const Comp = m[as]
  return (
    <Comp
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  )
}
