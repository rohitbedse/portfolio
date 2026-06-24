'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, BarChart2, Heart, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/learning', label: 'Learning' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      className="border-t border-white/08 mt-20"
      style={{ background: 'var(--dark-2)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" id="footer-logo">
              <motion.div
                className="flex items-center gap-2 cursor-pointer mb-4 w-fit"
                whileHover={{ scale: 1.04 }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, var(--cyan), var(--purple))' }}
                >
                  <BarChart2 size={16} color="#000" strokeWidth={2.5} />
                </div>
                <span className="font-bold text-lg mono" style={{ color: 'var(--cyan)' }}>
                  Rohit<span style={{ color: '#a78bfa' }}>.ai</span>
                </span>
              </motion.div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-5">
              AI/ML Engineer & GenAI Developer building RAG-based and multi-agent LLM systems.
              Passionate about generative AI, NLP, and scalable deployment.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Github size={18} />, href: 'https://github.com/rohitbedse', id: 'footer-github', color: 'var(--cyan)', label: 'Rohit Bedse on GitHub' },
                { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/rohitbedse', id: 'footer-linkedin', color: 'var(--purple)', label: 'Rohit Bedse on LinkedIn' },
                { icon: <Instagram size={18} />, href: 'https://instagram.com/rohitbedse_', id: 'footer-instagram', color: 'var(--pink)', label: 'Rohit Bedse on Instagram' },
                { icon: <Twitter size={18} />, href: 'https://x.com/rohitbedse', id: 'footer-twitter', color: 'var(--cyan)', label: 'Rohit Bedse on Twitter/X' },
                { icon: <Mail size={18} />, href: 'mailto:rbedse81@gmail.com', id: 'footer-email', color: 'var(--pink)', label: 'Email Rohit Bedse' },
              ].map((s) => (
                <motion.a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer me' : undefined}
                  aria-label={s.label}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 border border-white/10 hover:border-white/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2, color: s.color }}
                  whileTap={{ scale: 0.9 }}
                  style={{ display: 'flex' }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} id={`footer-nav-${l.label.toLowerCase()}`}>
                    <motion.span
                      className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer block py-0.5"
                      whileHover={{ x: 4 }}
                    >
                      {l.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {['Python', 'LangChain', 'LangGraph', 'FAISS', 'Gemini API', 'Scikit-learn', 'Streamlit', 'MLflow'].map((t) => (
                <span key={t} className="tag-cyan">{t}</span>
              ))}
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: 'var(--green)' }}
                />
                <span className="text-xs text-gray-400">Available for opportunities</span>
              </div>
              <div className="text-xs text-gray-500 mono">Pune, Maharashtra · Remote OK</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t border-white/08 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <motion.p
            className="text-sm text-gray-500 flex items-center gap-1.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2026 Rohit Bedse · Built with{' '}
            <Heart size={12} style={{ color: 'var(--pink)' }} fill="var(--pink)" />
            {' '}using Next.js & Framer Motion
          </motion.p>

          <motion.button
            id="footer-scroll-top"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
            whileHover={{ y: -1 }}
          >
            Back to top
            <div
              className="w-8 h-8 glass rounded-lg border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all"
            >
              <ArrowUp size={14} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
