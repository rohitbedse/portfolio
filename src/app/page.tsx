'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroBackground from '@/components/HeroBackground'
import { Download, Github, Linkedin, Mail } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-bg">
      <HeroBackground />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="block gradient-text">Rohit Bedse</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 font-medium tracking-wide">
              ML Engineer &nbsp;·&nbsp; GenAI Builder &nbsp;·&nbsp; LLM Specialist
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I build ML systems from mathematical intuition to production. Specializing in
            <span className="text-neon-cyan font-semibold"> GenAI architecture</span>,
            <span className="text-neon-cyan font-semibold"> RAG systems</span>, and
            <span className="text-neon-cyan font-semibold"> LLM orchestration</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/projects">
              <motion.button
                className="px-10 py-3.5 rounded-lg bg-neon-cyan text-dark-bg font-bold hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </Link>

            <a href="#" download>
              <motion.button
                className="px-10 py-3.5 rounded-lg glass border border-gray-500 text-gray-200 font-semibold hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Resume
              </motion.button>
            </a>

            <Link href="/contact">
              <motion.button
                className="px-10 py-3.5 rounded-lg glass border border-gray-500 text-gray-200 font-semibold hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="p-3.5 rounded-lg glass border border-gray-600 text-gray-400 hover:text-neon-cyan cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.1, borderColor: '#00ffff' }}
              >
                <Github size={24} />
              </motion.div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="p-3.5 rounded-lg glass border border-gray-600 text-gray-400 hover:text-neon-cyan cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.1, borderColor: '#00ffff' }}
              >
                <Linkedin size={24} />
              </motion.div>
            </a>
            <a href="mailto:contact@example.com">
              <motion.div
                className="p-3.5 rounded-lg glass border border-gray-600 text-gray-400 hover:text-neon-cyan cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.1, borderColor: '#00ffff' }}
              >
                <Mail size={24} />
              </motion.div>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20"
          >
            <div className="text-gray-400 text-base">Scroll to explore</div>
            <div className="text-3xl mt-2 text-gray-400">↓</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
