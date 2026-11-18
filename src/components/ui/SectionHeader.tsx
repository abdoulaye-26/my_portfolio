import Reveal from './Reveal'
import Rich from './Rich'

/** Eyebrow + title (+ optional intro). Same look in every section. */
export default function SectionHeader({
  eyebrow,
  title,
  intro,
  align = 'center',
  children,
}: {
  eyebrow: string
  /** Supports **highlight** markup → gradient text. */
  title: string
  intro?: string
  align?: 'center' | 'left'
  children?: React.ReactNode
}) {
  const centered = align === 'center'
  return (
    <Reveal className={`mb-12 sm:mb-16 ${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
        <Rich text={title} strongClassName="gradient-text" />
      </h2>
      {intro && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted">
          <Rich text={intro} strongClassName="font-medium text-fg" />
        </p>
      )}
      {children}
    </Reveal>
  )
}
