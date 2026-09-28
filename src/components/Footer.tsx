'use client'

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

const socials = [
  { Icon: Github, href: 'https://github.com/rohitbedse', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/rohitbedse', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
]

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-ink-tertiary">
          © {new Date().getFullYear()} Rohit Bedse. All rights reserved.
        </p>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-3 py-1.5 text-sm text-ink-secondary hover:text-ink-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={label}>
              <Icon size={16} />
            </a>
          ))}
          <button onClick={scrollToTop} className="icon-btn" aria-label="Scroll to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
