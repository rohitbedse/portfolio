'use client'

import { motion } from 'framer-motion'
import { BookOpen, Code, Database, Brain, GitBranch, Zap } from 'lucide-react'

const journey = [
  {
    phase: 'Foundation',
    year: '2023',
    description: 'Started with Python fundamentals and data structures. Built first projects with Streamlit.',
    icon: Code,
  },
  {
    phase: 'ML Deep Dive',
    year: '2024',
    description:
      'Understood Linear Regression from OLS mathematical principles. Compared analytical solutions with sklearn and gradient descent.',
    icon: Database,
  },
  {
    phase: 'Model Mastery',
    year: '2024',
    description:
      'Built expertise in error metrics, model evaluation, feature engineering, and EDA. Developed reproducible ML pipelines.',
    icon: Brain,
  },
  {
    phase: 'GenAI Era',
    year: '2025',
    description:
      'Transitioned to LLM orchestration. Learning LangChain, LangGraph, RAG systems, and prompt engineering.',
    icon: Zap,
  },
]

const mindset = [
  {
    title: 'Mathematical Foundation',
    description: 'I don\'t just use libraries—I understand the math. Every algorithm, from OLS to gradient descent, rooted in first principles.',
    icon: BookOpen,
  },
  {
    title: 'Pipeline Thinking',
    description: 'I design modular, scalable ML systems. Think in terms of data flow, orchestration, and production-grade architecture.',
    icon: GitBranch,
  },
  {
    title: 'Reproducibility First',
    description: 'Every experiment is logged, every model is versioned, every pipeline is documented. No black boxes.',
    icon: Database,
  },
  {
    title: 'Engineering Mindset',
    description:
      'Production > Notebooks. Clean code > Copy-paste. Testing > Assumptions. Building products, not just models.',
    icon: Code,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function About() {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            I&apos;m a final-year Data Science student building ML systems with mathematical intuition and engineering discipline. 
            Preparing for ML internships with a focus on GenAI and LLM systems.
          </motion.p>
        </motion.div>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-700">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          My Learning Journey
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {journey.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="glass rounded-lg p-6 border border-gray-700 hover:border-neon-cyan transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan group-hover:neon-glow transition-all">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{item.phase}</h3>
                      <p className="text-neon-cyan text-sm font-semibold mb-3">{item.year}</p>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Engineering Mindset */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-700">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Engineering Mindset
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {mindset.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="glass rounded-lg p-8 border border-gray-700 hover:border-neon-pink transition-all duration-300 h-full group-hover:neon-glow-pink">
                  <Icon size={40} className="text-neon-pink mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-700">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: '15+', label: 'ML Projects Built' },
            { number: '5+', label: 'Technologies Mastered' },
            { number: '100%', label: 'Commitment to Math' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
