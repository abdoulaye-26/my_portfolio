import { Fragment } from 'react'

/**
 * Renders a translation string with light markup, so translators never touch JSX:
 *   **text**  → highlighted span (class set by the caller)
 *   {name}    → replaced by vars.name
 * Same convention as the CV sources (cv.yaml).
 */
export default function Rich({
  text,
  vars,
  strongClassName = 'font-medium text-fg',
}: {
  text: string
  vars?: Record<string, string | number>
  strongClassName?: string
}) {
  const filled = vars ? text.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? `{${k}}`)) : text
  const parts = filled.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={strongClassName}>
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}

/** Plain-string version of the same placeholder rule, for attributes (aria-label, title). */
export function format(text: string, vars: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? `{${k}}`))
}
