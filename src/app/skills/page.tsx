'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const skillCategories = [
  {
    category: 'Programming & Tools',
    emoji: '🐍',
    color: 'var(--cyan)',
    skills: [
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'SQL', level: 85, icon: '🗄️' },
      { name: 'R', level: 55, icon: '📊' },
      { name: 'Git & GitHub', level: 78, icon: '🔧' },
      { name: 'Bash/CLI', level: 60, icon: '💻' },
      { name: 'Jupyter Notebooks', level: 92, icon: '📓' },
    ],
  },
  {
    category: 'Data Science Libraries',
    emoji: '📦',
    color: 'var(--purple)',
    skills: [
      { name: 'Pandas', level: 92, icon: '🐼' },
      { name: 'NumPy', level: 88, icon: '🔢' },
      { name: 'Scikit-learn', level: 85, icon: '🤖' },
      { name: 'Matplotlib', level: 82, icon: '📈' },
      { name: 'Seaborn', level: 80, icon: '🎨' },
      { name: 'Plotly', level: 75, icon: '📉' },
    ],
  },
  {
    category: 'Machine Learning',
    emoji: '🤖',
    color: 'var(--pink)',
    skills: [
      { name: 'Linear/Logistic Regression', level: 90, icon: '📐' },
      { name: 'Decision Trees / RF', level: 85, icon: '🌳' },
      { name: 'XGBoost / LightGBM', level: 78, icon: '⚡' },
      { name: 'K-Means / DBSCAN', level: 80, icon: '🎯' },
      { name: 'Time Series (ARIMA)', level: 72, icon: '📅' },
      { name: 'Neural Networks (basics)', level: 65, icon: '🧠' },
    ],
  },
  {
    category: 'Statistics & Analytics',
    emoji: '📊',
    color: 'var(--green)',
    skills: [
      { name: 'Hypothesis Testing', level: 82, icon: '🧪' },
      { name: 'A/B Testing', level: 78, icon: '⚖️' },
      { name: 'EDA & Data Cleaning', level: 92, icon: '🔍' },
      { name: 'Feature Engineering', level: 85, icon: '⚙️' },
      { name: 'Probability Theory', level: 75, icon: '🎲' },
      { name: 'Statistical Modeling', level: 78, icon: '📐' },
    ],
  },
  {
    category: 'Visualization & BI',
    emoji: '📈',
    color: 'var(--gold)',
    skills: [
      { name: 'Tableau', level: 80, icon: '📊' },
      { name: 'Power BI', level: 70, icon: '💹' },
      { name: 'Streamlit', level: 78, icon: '🚀' },
      { name: 'Plotly Dash', level: 72, icon: '📉' },
      { name: 'Excel / G-Sheets', level: 88, icon: '📋' },
      { name: 'DataViz Best Practices', level: 85, icon: '✨' },
    ],
  },
  {
    category: 'Cloud & Deployment',
    emoji: '☁️',
    color: 'var(--cyan)',
    skills: [
      { name: 'Google Colab', level: 90, icon: '🎓' },
      { name: 'AWS (S3, SageMaker)', level: 55, icon: '☁️' },
      { name: 'Docker (basics)', level: 50, icon: '🐳' },
      { name: 'FastAPI', level: 65, icon: '⚡' },
      { name: 'MLflow', level: 60, icon: '🔁' },
      { name: 'GitHub Actions', level: 58, icon: '🤖' },
    ],
  },
]

const proficiencyLabels = [
  { range: '0-40', label: 'Learning', color: 'var(--pink)' },
  { range: '40-70', label: 'Familiar', color: 'var(--gold)' },
  { range: '70-85', label: 'Proficient', color: 'var(--purple)' },
  { range: '85-100', label: 'Expert', color: 'var(--cyan)' },
]

function getColor(level: number) {
  if (level >= 85) return 'var(--cyan)'
  if (level >= 70) return 'var(--purple)'
  if (level >= 40) return 'var(--gold)'
  return 'var(--pink)'
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? skillCategories.filter(c => c.category === activeCategory)
    : skillCategories

  return (
    <div className="min-h-screen pt-20" style={{ background: 'var(--dark)' }}>

      {/* ══════════ HEADER ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge mx-auto mb-6">
            <span>⚡</span> Technical Arsenal
          </span>
          <h1 className="hero-title text-5xl md:text-6xl mb-5">
            <span className="text-white">My </span>
            <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated overview of my technical toolkit — from data wrangling to model deployment.
            Built through hands-on projects and continuous learning.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {proficiencyLabels.map((l) => (
            <div key={l.label} className="flex items-center gap-2 glass px-4 py-2 rounded-lg border border-white/08">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: l.color }}
              />
              <span className="text-xs text-gray-400">
                <span className="mono">{l.range}%</span> — {l.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${!activeCategory
              ? 'text-black'
              : 'glass text-gray-400 hover:text-white border border-white/10'
              }`}
            style={
              !activeCategory
                ? { background: 'linear-gradient(135deg, var(--cyan), var(--purple))' }
                : {}
            }
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category === activeCategory ? null : cat.category)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeCategory === cat.category
                ? 'text-black'
                : 'glass text-gray-400 hover:text-white border border-white/10'
                }`}
              style={
                activeCategory === cat.category
                  ? { background: `linear-gradient(135deg, ${cat.color}, ${cat.color}99)` }
                  : {}
              }
            >
              {cat.emoji} {cat.category.split(' ')[0]}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ══════════ SKILL GRIDS ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          className="space-y-12"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {filtered.map((cat) => (
            <motion.div
              key={cat.category}
              variants={itemVariants}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.emoji}</span>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: cat.color }}
                >
                  {cat.category}
                </h2>
                <div
                  className="flex-1 h-px"
                  style={{ background: `linear-gradient(90deg, ${cat.color}40, transparent)` }}
                />
              </div>

              {/* Skill Cards Grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cat.skills.map((skill, si) => {
                  const barColor = getColor(skill.level)
                  return (
                    <motion.div
                      key={skill.name}
                      className="glass rounded-xl border border-white/08 p-5 group hover:border-white/20 transition-all tilt-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="font-semibold text-white text-sm">{skill.name}</span>
                        </div>
                        <span
                          className="mono text-xs font-bold"
                          style={{ color: barColor }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div
                        className="h-1.5 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.07)' }}
                      >
                        <motion.div
                          className="h-full rounded-full relative overflow-hidden"
                          style={{ background: `linear-gradient(90deg, ${barColor}, ${barColor}80)` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: si * 0.05 + 0.2, ease: 'easeOut' }}
                        >
                          <div
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                              animation: 'shimmer 2s ease-in-out infinite',
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════ TOP TOOLS SHOWCASE ══════════ */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.03) 50%, transparent)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-10">
              My Daily <span className="gradient-text">Toolkit</span>
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { name: 'Python', emoji: '🐍', color: '#3b82f6' },
                { name: 'Pandas', emoji: '🐼', color: '#8b5cf6' },
                { name: 'Scikit-learn', emoji: '🤖', color: '#ec4899' },
                { name: 'SQL', emoji: '🗄️', color: '#06b6d4' },
                { name: 'Jupyter', emoji: '📓', color: '#f59e0b' },
                { name: 'Tableau', emoji: '📊', color: '#10b981' },
                { name: 'Git', emoji: '🔧', color: '#f97316' },
                { name: 'NumPy', emoji: '🔢', color: '#6366f1' },
                { name: 'Matplotlib', emoji: '📈', color: '#14b8a6' },
                { name: 'Seaborn', emoji: '🎨', color: '#a855f7' },
                { name: 'XGBoost', emoji: '⚡', color: '#ef4444' },
                { name: 'Streamlit', emoji: '🚀', color: '#00d4ff' },
              ].map((tool) => (
                <motion.div
                  key={tool.name}
                  className="glass px-5 py-3 rounded-xl border border-white/10 flex items-center gap-2 cursor-default"
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ borderColor: `${tool.color}40` }}
                >
                  <span className="text-xl">{tool.emoji}</span>
                  <span className="font-semibold text-sm" style={{ color: tool.color }}>
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
