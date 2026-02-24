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

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
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
            <h1 className="text-6xl md:text-7xl font-bold mb-2">
              <span className="block text-white">Rohit Bedse</span>
            </h1>
            <h2 className="text-2xl md:text-3xl gradient-text font-semibold">
              Machine Learning Engineer | GenAI Builder | Future LLM Specialist
            </h2>
          </motion.div>

          {/* Subtitle with typewriter effect */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I build ML systems from mathematical intuition to production. Specializing in
            <span className="text-neon-cyan font-semibold"> GenAI architecture</span>,
            <span className="text-neon-pink font-semibold"> RAG systems</span>, and
            <span className="text-neon-green font-semibold"> LLM orchestration</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/projects">
              <motion.button
                className="px-8 py-3 rounded-lg glass border border-neon-cyan text-neon-cyan font-semibold hover:neon-glow transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </Link>

            <a href="#" download>
              <motion.button
                className="px-8 py-3 rounded-lg glass border border-neon-pink text-neon-pink font-semibold hover:neon-glow-pink transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 0, 110, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Resume
              </motion.button>
            </a>

            <Link href="/contact">
              <motion.button
                className="px-8 py-3 rounded-lg glass border border-neon-green text-neon-green font-semibold hover:neon-glow transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)' }}
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
                className="p-3 rounded-lg glass border border-gray-700 text-gray-400 hover:text-neon-cyan cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.1, borderColor: '#00ffff' }}
              >
                <Github size={24} />
              </motion.div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="p-3 rounded-lg glass border border-gray-700 text-gray-400 hover:text-neon-pink cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.1, borderColor: '#ff006e' }}
              >
                <Linkedin size={24} />
              </motion.div>
            </a>
            <a href="mailto:contact@example.com">
              <motion.div
                className="p-3 rounded-lg glass border border-gray-700 text-gray-400 hover:text-neon-green cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.1, borderColor: '#00ff41' }}
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
            <div className="text-gray-500 text-sm">Scroll to explore</div>
            <div className="text-2xl mt-2">↓</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
