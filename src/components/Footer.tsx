'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-dark-bg border-t border-gray-700 mt-20">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 gradient-text">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              ML Engineer building systems from mathematical intuition to production. Specializing in GenAI and LLM orchestration.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/about" className="hover:text-neon-cyan transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-neon-cyan transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/skills" className="hover:text-neon-cyan transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-neon-cyan transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p variants={itemVariants} className="text-sm text-gray-500">
            © 2026 Rohit Bedse. All rights reserved.
          </motion.p>

          <motion.button
            variants={itemVariants}
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-lg glass border border-gray-700 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  )
}
