'use client'

import { motion } from 'framer-motion'
import { Code, Brain, GitBranch, Zap, MapPin, GraduationCap, Briefcase, Clock } from 'lucide-react'

const journey = [
  {
    icon: Code,
    title: 'Engineering Foundations',
    description:
      'Mastering high-performance Python and scalable data pipelines, with a focus on maintainable software architecture for ML workloads.',
  },
  {
    icon: Brain,
    title: 'Mathematical Rigor',
    description:
      'Deep grounding in the foundations of ML — from deriving OLS mathematically to implementing custom gradient descent optimizers.',
  },
  {
    icon: GitBranch,
    title: 'Systemic ML',
    description:
      'Reproducible ML pipelines with rigorous model evaluation, advanced feature engineering, and structured exploratory analysis.',
  },
  {
    icon: Zap,
    title: 'AI Orchestration',
    description:
      'Architecting production GenAI systems: LangGraph multi-agent frameworks, hybrid RAG strategies, and LLM optimization.',
  },
]

const facts = [
  { icon: Briefcase, label: 'Focus', value: 'AI Engineering & GenAI' },
  { icon: GraduationCap, label: 'Approach', value: 'Math-first, production-ready' },
  { icon: MapPin, label: 'Based in', value: 'India' },
  { icon: Clock, label: 'Availability', value: 'Open to collaborations' },
]

const stats = [
  { value: '15+', label: 'Production AI Systems' },
  { value: 'End-to-End', label: 'AI Lifecycle Expertise' },
  { value: 'Math-First', label: 'Architecture Approach' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="eyebrow mb-3">
            My Journey
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-5 text-ink-primary">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="text-ink-secondary max-w-2xl mx-auto text-lg">
            AI Engineer & Data Scientist building production ML systems with mathematical intuition
            and engineering discipline — at the intersection of GenAI, RAG, and agentic workflows.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
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
                <motion.div key={i} variants={itemVariants} className="card p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent-dim flex items-center justify-center mb-4">
                    <Icon size={20} className="accent-text" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-ink-primary">{item.title}</h3>
                  <p className="text-ink-secondary text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="card p-6 flex flex-col"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-tertiary mb-5">
              Quick Facts
            </h3>
            <div className="space-y-5 flex-grow">
              {facts.map((fact, i) => {
                const Icon = fact.icon
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 shrink-0 rounded-md bg-accent-dim flex items-center justify-center">
                      <Icon size={15} className="accent-text" />
                    </div>
                    <div>
                      <p className="text-xs text-ink-tertiary">{fact.label}</p>
                      <p className="text-sm text-ink-primary font-medium">{fact.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="text-center py-7 rounded-2xl surface">
              <div className="text-3xl md:text-4xl font-bold accent-text mb-1.5">{stat.value}</div>
              <p className="text-ink-secondary text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
