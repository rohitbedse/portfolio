'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Skill {
  name: string
  level: number
  icon: string
}

interface Category {
  title: string
  color: string
  colorClass: string
  skills: Skill[]
}

const categories: Category[] = [
  {
    title: 'ML & AI',
    color: '#00d4ff',
    colorClass: 'text-accent-blue',
    skills: [
      { name: 'Linear Regression', level: 95, icon: '📐' },
      { name: 'Model Evaluation', level: 90, icon: '📊' },
      { name: 'Feature Engineering', level: 88, icon: '⚙️' },
      { name: 'Neural Networks', level: 78, icon: '🧠' },
      { name: 'EDA & Visualization', level: 92, icon: '📈' },
      { name: 'Error Metrics', level: 95, icon: '🎯' },
    ],
  },
  {
    title: 'GenAI & LLMs',
    color: '#8b5cf6',
    colorClass: 'text-accent-violet',
    skills: [
      { name: 'LangChain', level: 88, icon: '🔗' },
      { name: 'LangGraph', level: 78, icon: '🕸️' },
      { name: 'RAG Systems', level: 85, icon: '🔍' },
      { name: 'Prompt Engineering', level: 88, icon: '✨' },
      { name: 'LLM Orchestration', level: 85, icon: '🎼' },
      { name: 'Fine-tuning', level: 70, icon: '🎛️' },
    ],
  },
  {
    title: 'Backend & APIs',
    color: '#06ffa5',
    colorClass: 'text-accent-green',
    skills: [
      { name: 'Python', level: 95, icon: '🐍' },
      { name: 'FastAPI', level: 82, icon: '⚡' },
      { name: 'SQL', level: 85, icon: '🗃️' },
      { name: 'Streamlit', level: 90, icon: '🖥️' },
      { name: 'Pydantic', level: 82, icon: '✅' },
      { name: 'REST APIs', level: 85, icon: '🌐' },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: '#00d4ff',
    colorClass: 'text-accent-blue',
    skills: [
      { name: 'Git', level: 88, icon: '📦' },
      { name: 'Docker', level: 72, icon: '🐳' },
      { name: 'Linux', level: 78, icon: '🐧' },
      { name: 'AWS', level: 68, icon: '☁️' },
    ],
  },
]

function TiltCard({ skill, accentColor }: { skill: Skill; accentColor: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg)')

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`)
  }

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)')
  }

  return (
    <div
      ref={cardRef}
      className="skill-card-3d cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: 'transform 0.15s ease-out' }}
    >
      <div className="gradient-border h-full">
        <div className="p-5 h-full relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xl">{skill.icon}</span>
            <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: accentColor }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            />
          </div>
          <p className="text-[11px] text-gray-600 mt-2 text-right font-medium">{skill.level}%</p>
        </div>
      </div>
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function SkillsUniverse() {
  return (
    <section id="skills" className="section-padding">
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
            Technical Expertise
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Skills <span className="gradient-text">Universe</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hover over cards to interact. Each skill is built from real project experience, not just tutorials.
          </motion.p>
        </motion.div>

        {/* Categories */}
        {categories.map((cat, catIndex) => (
          <div key={catIndex} className="mb-16 last:mb-0">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`text-xl font-bold mb-6 ${cat.colorClass}`}
            >
              {cat.title}
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {cat.skills.map((skill, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <TiltCard skill={skill} accentColor={cat.color} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
