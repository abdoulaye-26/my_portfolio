'use client'

import { Moon, Sun } from 'lucide-react'
import { useI18n } from '@/i18n/LanguageProvider'
import { THEME_STORAGE_KEY } from '@/lib/theme'

/**
 * Dark / light switch. No React state: the theme lives in the `dark` class on
 * <html> (set before paint by themeInitScript). Both icons are rendered and CSS
 * shows the right one, so server and client HTML always match.
 */
export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { t } = useI18n()

  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light')
    } catch {
      // Storage blocked: the theme still switches, it just won't be remembered.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.ui.toggleTheme}
      title={t.ui.toggleTheme}
      className={`icon-btn border border-line ${className}`}
    >
      <Moon size={16} className="dark:hidden" aria-hidden />
      <Sun size={16} className="hidden dark:block" aria-hidden />
    </button>
  )
}
