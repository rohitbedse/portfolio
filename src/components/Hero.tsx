'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import NeuralCanvas from './NeuralCanvas'

const titles = [
  'Building Multi-Agent AI Systems',
  'RAG Architect & LLM Specialist',
  'Machine Learning Engineer',
  'GenAI Production Builder',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const type = useCallback(() => {
    const full = titles[titleIndex]

    if (!isDeleting) {
      setCurrentTitle(full.substring(0, charIndex + 1))
      setCharIndex((prev) => prev + 1)

      if (charIndex + 1 === full.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      setCurrentTitle(full.substring(0, charIndex - 1))
      setCharIndex((prev) => prev - 1)

      if (charIndex - 1 === 0) {
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % titles.length)
      }
    }
  }, [charIndex, isDeleting, titleIndex])

  useEffect(() => {
    const speed = isDeleting ? 30 : 60
    const timer = setTimeout(type, speed)
    return () => clearTimeout(timer)
  }, [type, isDeleting])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openChatbot = () => {
    // Dispatch custom event to open the chatbot
    window.dispatchEvent(new CustomEvent('open-chatbot'))
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural network background */}
      <NeuralCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent-blue font-medium">
            <Sparkles size={14} />
            Open for AI Engineering & Research Collaborations
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="gradient-text">Rohit Bedse</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div variants={itemVariants} className="h-12 sm:h-14 mb-8 flex items-center justify-center">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-medium">
            <span>{currentTitle}</span>
            <span className="typing-cursor" />
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          ML Engineer building production-grade AI systems — from mathematical foundations
          to deployed GenAI pipelines. Specializing in{' '}
          <span className="text-accent-blue">LLM orchestration</span>,{' '}
          <span className="text-accent-blue">Autonomous Agent Frameworks</span>, and{' '}
          <span className="text-accent-blue">Advanced RAG architectures</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.button
            onClick={scrollToProjects}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-violet text-bg-deep font-bold text-base hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label="View Projects"
          >
            View Projects
          </motion.button>

          <motion.button
            onClick={openChatbot}
            className="px-8 py-3.5 rounded-xl glass border border-accent-violet/40 text-accent-violet font-semibold text-base hover:border-accent-violet hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Chat with My AI"
          >
            <span className="flex items-center justify-center gap-2">
              <Sparkles size={18} />
              Chat with My AI
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 text-gray-600"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-sm tracking-wider uppercase">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
