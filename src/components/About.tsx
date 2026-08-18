'use client'

import { motion } from 'framer-motion'
import { Play, BookOpen, Zap, Code, Brain, GitBranch } from 'lucide-react'

const journey = [
  {
    icon: Code,
    title: 'Foundation',
    description:
      'Started with Python fundamentals and data structures. Built first projects with Streamlit, establishing a strong engineering base.',
  },
  {
    icon: Brain,
    title: 'ML Deep Dive',
    description:
      'Understood Linear Regression from OLS mathematical principles. Compared analytical solutions with sklearn and gradient descent.',
  },
  {
    icon: GitBranch,
    title: 'Model Mastery',
    description:
      'Built expertise in error metrics, model evaluation, feature engineering, and EDA. Developed reproducible ML pipelines.',
  },
  {
    icon: Zap,
    title: 'GenAI Era',
    description:
      'Transitioned to LLM orchestration — LangChain, LangGraph, RAG systems, multi-agent architectures, and prompt engineering.',
  },
]

const stats = [
  { value: '15+', label: 'ML Projects Built' },
  { value: '5+', label: 'Technologies Mastered' },
  { value: '100%', label: 'Math-First Approach' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.p variants={itemVariants} className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-3">
            My Journey
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Final-year Data Science student building ML systems with mathematical intuition
            and engineering discipline. Preparing for ML roles with a focus on GenAI and LLM systems.
          </motion.p>
        </motion.div>

        {/* Journey + Featured Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Journey cards */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {journey.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="gradient-border group"
                  whileHover={{ y: -4 }}
                >
                  <div className="p-6 h-full relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors">
                      <Icon size={20} className="text-accent-blue" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Featured Content Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="gradient-border group"
            whileHover={{ y: -4 }}
          >
            <div className="p-8 h-full relative z-10 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={18} className="text-accent-violet" />
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-violet">
                  Featured Content
                </span>
              </div>

              {/* Video placeholder */}
              <div className="relative aspect-video rounded-lg bg-bg-card border border-white/5 mb-6 overflow-hidden group/play cursor-pointer flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-violet/10" />
                <motion.div
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play size={24} className="text-white ml-1" />
                </motion.div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-accent-violet/20 text-accent-violet uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 text-white">
                The Future of Python in AI
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                An upcoming video essay discussing Python&apos;s evolving role in the AI ecosystem —
                why it dominates and where it&apos;s heading.
              </p>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-600">
                <span>Video Essay</span>
                <span>•</span>
                <span>YouTube</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="text-center py-8 rounded-2xl glass"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
