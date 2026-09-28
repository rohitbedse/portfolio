'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const roles = [
  'Building Multi-Agent AI Systems',
  'RAG Architect & LLM Specialist',
  'Machine Learning Engineer',
  'GenAI Production Builder',
]

const socials = [
  { Icon: Github, href: 'https://github.com/rohitbedse', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/rohitbedse', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-5 pt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-7">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full surface text-sm text-ink-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Open to AI Engineering & Research roles
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-5 tracking-tight text-ink-primary"
        >
          Rohit Bedse
        </motion.h1>

        <motion.div variants={itemVariants} className="h-9 mb-7 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-xl sm:text-2xl text-accent font-medium"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p variants={itemVariants} className="text-base sm:text-lg text-ink-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          ML Engineer building production-grade AI systems — from mathematical foundations
          to deployed GenAI pipelines. Focused on LLM orchestration, autonomous agent
          frameworks, and advanced RAG architectures.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button onClick={scrollToProjects} className="btn-primary">
            View Projects
          </button>
          <button onClick={scrollToContact} className="btn-secondary">
            Get in Touch
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-14">
          {socials.map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={label}>
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 text-ink-tertiary"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
