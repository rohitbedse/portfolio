'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Skill {
  name: string
  description: string
  level: number
}

const skillCategories = [
  {
    title: 'Machine Learning',
    color: 'neon-cyan',
    skills: [
      { name: 'Linear Regression', description: 'OLS & Gradient Descent', level: 95 },
      { name: 'Multiple Regression', description: 'Feature Scaling & Engineering', level: 90 },
      { name: 'Error Metrics', description: 'MSE, MAE, R², RMSE', level: 95 },
      { name: 'Model Evaluation', description: 'Cross-Validation, Hyperparameter Tuning', level: 85 },
      { name: 'Feature Engineering', description: 'Selection, Transformation, Encoding', level: 85 },
      { name: 'EDA', description: 'Exploratory Data Analysis & Visualization', level: 90 },
    ],
  },
  {
    title: 'Deep Learning',
    color: 'neon-pink',
    skills: [
      { name: 'Neural Networks', description: 'Architectures & Forward Pass', level: 75 },
      { name: 'Backpropagation', description: 'Conceptual Understanding', level: 80 },
      { name: 'Activation Functions', description: 'ReLU, Sigmoid, Tanh', level: 75 },
    ],
  },
  {
    title: 'GenAI & LLM',
    color: 'neon-green',
    skills: [
      { name: 'LangChain', description: 'Chain & Prompt Building', level: 85 },
      { name: 'LangGraph', description: 'Agentic Workflows', level: 75 },
      { name: 'RAG Systems', description: 'Retrieval Augmented Generation', level: 80 },
      { name: 'Prompt Engineering', description: 'Optimization & Design', level: 85 },
      { name: 'LLM Orchestration', description: 'RunnableParallel, Sequential', level: 85 },
      { name: 'Fine-tuning', description: 'Learning Path in Progress', level: 70 },
    ],
  },
  {
    title: 'Tools & Frameworks',
    color: 'neon-cyan',
    skills: [
      { name: 'Python', description: 'Core Language', level: 95 },
      { name: 'SQL', description: 'Data Queries & Optimization', level: 85 },
      { name: 'Streamlit', description: 'Web App Development', level: 90 },
      { name: 'FastAPI', description: 'API Building', level: 80 },
      { name: 'Git', description: 'Version Control & Collaboration', level: 85 },
      { name: 'Pydantic', description: 'Data Validation', level: 80 },
    ],
  },
]

interface SkillCardProps {
  skill: Skill
  color: string
}

const SkillCard = ({ skill, color }: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="h-full cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className={`relative w-full h-full rounded-lg glass border border-gray-700 p-6 transition-all duration-300 hover:border-${color}`}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          borderColor: isFlipped ? `var(--color-${color})` : '#374151',
        }}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Front */}
        <div
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <h4 className={`text-xl font-semibold mb-4 text-${color}`}>{skill.name}</h4>
          <div className="mb-4">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r from-${color} to-white`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm">{skill.description}</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-lg glass border border-gray-700 p-6 flex items-center justify-center`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <p className="text-center text-gray-300">
            Proficiency: <span className={`text-${color} font-semibold`}>{skill.level}%</span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
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
    transition: { duration: 0.6 },
  },
}

export default function Skills() {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive view of my skills across Machine Learning, Deep Learning, GenAI, and Modern Tools.
            Click cards to flip and see proficiency levels.
          </motion.p>
        </motion.div>
      </section>

      {/* Skill Categories */}
      {skillCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-700"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-12 gradient-text`}
          >
            {category.title}
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {category.skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="h-48">
                <SkillCard skill={skill} color={category.color} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      ))}

      {/* Learning Path */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-700">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          My Growth Trajectory
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { skill: 'ML Fundamentals', status: '✓ Mastered', color: 'neon-cyan' },
            { skill: 'Deep Learning Basics', status: '→ Currently Learning', color: 'neon-pink' },
            { skill: 'NLP & Transformers', status: '→ Next Phase', color: 'neon-green' },
            { skill: 'Fine-tuning LLMs', status: '🎯 Focus Area', color: 'neon-cyan' },
            { skill: 'Multimodal AI', status: '→ On Radar', color: 'neon-pink' },
            { skill: 'LLM Deployment', status: '→ Future Goal', color: 'neon-green' },
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="glass rounded-lg p-6 border border-gray-700 flex items-center justify-between hover:border-gray-500 transition-all">
                <span className="text-lg font-semibold">{item.skill}</span>
                <span className={`text-${item.color} font-semibold`}>{item.status}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
