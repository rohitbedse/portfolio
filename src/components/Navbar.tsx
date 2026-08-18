'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)

    // Scroll-spy
    const sections = links.map((l) => l.href.slice(1))
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120) {
          setActiveSection(`#${sections[i]}`)
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollTo = (href: string) => {
    setIsOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="group">
            <motion.span
              className="text-xl font-bold gradient-text cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              RB<span className="text-accent-blue">.</span>
            </motion.span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)}>
                <motion.span
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.href
                      ? 'text-accent-blue'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-accent-blue"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.span>
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} className="text-gray-400" /> : <Menu size={22} className="text-gray-400" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden pb-4"
            >
              <div className="space-y-1 pt-2">
                {links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === link.href
                        ? 'text-accent-blue bg-accent-blue/5'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
