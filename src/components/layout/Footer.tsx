'use client'

import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { profile, mailto } from '@/content/profile'
import { useI18n } from '@/i18n/LanguageProvider'
import { format } from '@/components/ui/Rich'

export default function Footer() {
  const { t } = useI18n()

  const links = [
    { href: profile.github, label: 'GitHub', icon: FaGithub, external: true },
    { href: profile.linkedin, label: 'LinkedIn', icon: FaLinkedin, external: true },
    { href: profile.whatsapp, label: 'WhatsApp', icon: FaWhatsapp, external: true },
    { href: mailto(), label: t.ui.email, icon: Mail, external: false },
  ]

  return (
    <footer className="border-t border-line bg-surface-alt py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-bold gradient-text">AS</span>
          <span className="text-sm font-medium text-subtle">{profile.name}</span>
        </div>

        <p className="text-center text-sm text-subtle">
          {format(t.footer.credit, { name: profile.name, year: new Date().getFullYear() })}
        </p>

        <div className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="icon-btn"
              aria-label={label}
            >
              <Icon size={18} aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
