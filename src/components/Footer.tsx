'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 bg-bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">Rohit Bedse</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              ML Engineer building production-grade AI systems with mathematical foundations.
              Specializing in GenAI, RAG, and LLM orchestration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-gray-500 hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: 'https://github.com/rohitbedse', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-accent-blue hover:border-accent-blue/30 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 flex items-center gap-1">
            © {new Date().getFullYear()} Rohit Bedse. Built with
            <Heart size={12} className="text-accent-violet" />
            and lots of coffee.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg glass text-gray-500 hover:text-accent-blue hover:border-accent-blue/30 flex items-center justify-center transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
