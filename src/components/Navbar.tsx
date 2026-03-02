'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, BarChart2 } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/learning', label: 'Learning' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
          ? 'border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
        }`}
      style={scrolled ? { backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', background: 'rgba(255,255,255,0.03)' } : {}}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" id="nav-logo">
            <motion.div
              className="flex items-center gap-2 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                }}
              >
                <BarChart2 size={16} color="#000" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg mono gradient-text-animated font-display">
                RB<span style={{ color: '#a78bfa' }}>.ds</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link, i) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href} id={`nav-link-${link.label.toLowerCase()}`}>
                  <motion.span
                    className="relative px-4 py-2 text-sm font-500 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 cursor-pointer block"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 + 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-dot"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: 'var(--cyan)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.span>
                </Link>
              )
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="/contact" id="nav-cta">
                <span
                  className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold text-black cursor-pointer block rotating-border"
                  style={{ background: 'linear-gradient(135deg, var(--cyan), var(--purple))' }}
                >
                  Let&apos;s Talk
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            id="nav-mobile-toggle"
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>

        {/* Mobile Navigation — slides from right */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-4"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="glass rounded-xl border border-white/10 p-3 mt-2">
                {links.map((link, i) => (
                  <Link key={link.href} href={link.href} id={`mobile-nav-${link.label.toLowerCase()}`}>
                    <motion.div
                      className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer flex items-center justify-between"
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--cyan)' }} />
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

