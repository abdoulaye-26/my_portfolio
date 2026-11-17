'use client'

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'

// LazyMotion + `m` components load only the animation features we use
// (domAnimation: animate, exit, hover/tap, in-view) instead of the full `motion` bundle.
// `strict` throws if a full `motion.*` component sneaks back in.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
