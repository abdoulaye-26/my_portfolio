'use client'

import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useI18n } from '@/i18n/LanguageProvider'
import LanguageToggle from '@/components/ui/LanguageToggle'
import ThemeToggle from '@/components/ui/ThemeToggle'
import type { Dictionary } from '@/locales'

const navLinks: { id: keyof Dictionary['nav']['links']; href: string }[] = [
  { id: 'about', href: '#about' },
  { id: 'projects', href: '#projects' },
  { id: 'experience', href: '#experience' },
  { id: 'research', href: '#research' },
  { id: 'skills', href: '#skills' },
  { id: 'devops', href: '#devops' },
  { id: 'contact', href: '#contact' },
]

export default function Navbar() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || mobileOpen

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#" className="font-display text-lg font-bold" aria-label={t.ui.backToTop}>
          <span className="gradient-text">AS</span>
          <span className="text-accent">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-fg/5 hover:text-fg"
            >
              {t.nav.links[link.id]}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-2 px-4 py-2">
            {t.nav.hireMe}
          </a>
          {/* Toggles sit last, at the right edge: changing language never moves them */}
          <div className="ml-3 flex items-center gap-2 border-l border-line pl-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile & tablet: both switches stay visible next to the menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="icon-btn"
            aria-label={t.ui.toggleMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-bg lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-muted transition-colors hover:bg-fg/5 hover:text-fg"
                >
                  {t.nav.links[link.id]}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between px-3">
                <span className="text-sm text-subtle">{t.ui.language}</span>
                <LanguageToggle />
              </div>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-3">
                {t.nav.hireMe}
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
