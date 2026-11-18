import type { Config } from 'tailwindcss'

// Colours are CSS variables (see globals.css) holding "R G B" channels, so that
// one class like `text-muted` works in both themes and opacity modifiers
// (`bg-primary/10`) still work.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  // `dark` class on <html>, set before paint by the inline script in layout.tsx
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Project cover gradients (from-…/to-… classes) are written in the content files
    './src/content/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        bg: token('bg'), // page background
        surface: token('surface'), // cards
        'surface-alt': token('surface-alt'), // alternate section background
        line: token('line'), // borders and dividers
        fg: token('fg'), // headings and strong text
        muted: token('muted'), // body text
        subtle: token('subtle'), // secondary text (still ≥ 4.5:1 contrast)
        primary: token('primary'), // brand blue (same family as the CVs)
        'primary-solid': token('primary-solid'), // filled buttons (white text on it)
        accent: token('accent'), // cyan accent
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgb(var(--shadow) / 0.06), 0 8px 24px -12px rgb(var(--shadow) / 0.18)',
        lift: '0 2px 4px rgb(var(--shadow) / 0.08), 0 20px 40px -16px rgb(var(--shadow) / 0.35)',
      },
    },
  },
  plugins: [],
}

export default config
