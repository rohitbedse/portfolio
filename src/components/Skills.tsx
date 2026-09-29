'use client'

import SpotlightCard from '@/components/fx/SpotlightCard'
import { motion } from 'framer-motion'

const categories = [
  {
    title: 'ML & AI',
    skills: ['Linear Regression', 'Model Evaluation', 'Feature Engineering', 'Neural Networks', 'EDA & Visualization', 'Error Metrics'],
  },
  {
    title: 'GenAI & LLMs',
    skills: ['LangChain', 'LangGraph', 'RAG Systems', 'Prompt Engineering', 'LLM Orchestration', 'Fine-tuning'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Python', 'FastAPI', 'SQL', 'Streamlit', 'Pydantic', 'REST APIs'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Linux', 'AWS'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const marqueeItems = categories.flatMap((c) => c.skills)

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 dot-texture pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="eyebrow mb-3">
            Technical Expertise
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-5 text-ink-primary">
            Skills
          </motion.h2>
          <motion.p variants={itemVariants} className="text-ink-secondary max-w-2xl mx-auto text-lg">
            Built from real project experience across the AI stack — not just tutorials.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {categories.map((cat, i) => (
            <SpotlightCard key={i} variants={itemVariants} className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-tertiary mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-ink-secondary transition-all duration-200 hover:-translate-y-0.5 hover:text-ink-primary hover:border-accent/50 hover:bg-accent-dim"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </motion.div>
      </div>

      <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee gap-4">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mr-4 text-2xl md:text-4xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.18)] hover:[-webkit-text-stroke:1px_#6c8cff] transition-all whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
