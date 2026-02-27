'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Heart, MapPin, Coffee, BookOpen, Award, Target } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

const timeline = [
  {
    year: '2024',
    title: 'Data Science Bootcamp — Internship',
    org: 'Analytix Solutions',
    desc: 'Completed an intensive 6-month program covering ML pipelines, EDA, and SQL analytics. Deployed a churn prediction model for a retail client.',
    icon: <Briefcase size={18} />,
    color: 'var(--cyan)',
    tags: ['Python', 'ML', 'SQL', 'Deployment'],
  },
  {
    year: '2023',
    title: 'B.Sc. Computer Science with Data Analytics',
    org: 'University of Pune',
    desc: 'Final year project: Built a sentiment analysis system for product reviews using NLP techniques and achieved 89% classification accuracy.',
    icon: <GraduationCap size={18} />,
    color: 'var(--purple)',
    tags: ['NLP', 'NLTK', 'Thesis', 'Research'],
  },
  {
    year: '2022',
    title: 'Machine Learning Specialization',
    org: 'Coursera · Andrew Ng',
    desc: 'Completed 3-course specialization covering supervised, unsupervised, and reinforcement learning fundamentals.',
    icon: <Award size={18} />,
    color: 'var(--green)',
    tags: ['TensorFlow', 'Neural Nets', 'Certificate'],
  },
  {
    year: '2021',
    title: 'Started the Data Science Journey',
    org: 'Self-Directed Learning',
    desc: 'Discovered Python and Kaggle competitions. Completed 50+ datasets exploration challenges. Fell in love with data storytelling.',
    icon: <Target size={18} />,
    color: 'var(--pink)',
    tags: ['Python', 'Kaggle', 'Pandas', 'Basics'],
  },
]

const values = [
  {
    icon: <BookOpen size={22} />,
    title: 'Curious by Nature',
    desc: 'Every dataset has a story. I dig until I find the plot twist.',
    color: 'var(--cyan)',
  },
  {
    icon: <Coffee size={22} />,
    title: 'Builder Mindset',
    desc: 'I don\'t just analyze data — I build tools that make data useful.',
    color: 'var(--purple)',
  },
  {
    icon: <Heart size={22} />,
    title: 'Human-Centered',
    desc: 'Models that make real impact for real people. That\'s the goal.',
    color: 'var(--pink)',
  },
  {
    icon: <Target size={22} />,
    title: 'Impact-Driven',
    desc: 'I measure success not by model accuracy, but by business outcomes.',
    color: 'var(--green)',
  },
]

export default function AboutPage() {
  return (
    <div
      className="min-h-screen pt-20"
      style={{ background: 'var(--dark)' }}
    >
      {/* ══════════ HERO ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left — Text */}
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="section-badge">
                <span>👤</span> About Me
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="hero-title text-5xl md:text-6xl mb-6"
            >
              <span className="text-white">Data Scientist</span>
              <br />
              <span className="gradient-text">in the Making</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed mb-6">
              Hey there! I&apos;m <strong style={{ color: 'var(--cyan)' }}>Rohit Bedse</strong>,
              an entry-level Data Scientist from Pune, India. My passion lies at the intersection
              of statistics, code, and business impact.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed mb-8">
              I started with Excel formulas and curiosity. Today I build end-to-end ML pipelines,
              craft insightful dashboards, and communicate data stories clearly to non-technical
              stakeholders. I believe the best data scientist is also a great communicator.
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-400 mb-2">
              <MapPin size={16} style={{ color: 'var(--cyan)' }} />
              <span>Pune, Maharashtra, India</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-400">
              <span style={{ color: 'var(--green)' }}>●</span>
              <span>Open to remote / hybrid opportunities</span>
            </motion.div>
          </div>

          {/* Right — 3D Avatar Card */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* 3D glowing card */}
              <div
                className="glass rounded-3xl border border-white/12 p-10 text-center relative overflow-hidden"
                style={{ width: 320 }}
              >
                {/* Background blob */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.4) 0%, transparent 70%)',
                  }}
                />

                {/* Avatar circle */}
                <div
                  className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center relative"
                  style={{
                    background: 'linear-gradient(135deg, var(--cyan), var(--purple), var(--pink))',
                    padding: '3px',
                  }}
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center text-4xl"
                    style={{ background: 'var(--dark-3)' }}
                  >
                    🧑‍💻
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">Rohit Bedse</h3>
                <p className="text-sm mono mb-6" style={{ color: 'var(--cyan)' }}>
                  Data Scientist · ML Engineer
                </p>

                <div className="space-y-3 text-left">
                  {[
                    { label: 'Python', pct: 90, color: 'var(--cyan)' },
                    { label: 'Machine Learning', pct: 80, color: 'var(--purple)' },
                    { label: 'SQL', pct: 85, color: 'var(--green)' },
                    { label: 'Data Viz', pct: 88, color: 'var(--pink)' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">{s.label}</span>
                        <span className="mono" style={{ color: s.color }}>{s.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}80)` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${s.pct}%` }}
                          transition={{ duration: 1.2, delay: 0.6 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orbiting badge */}
              <motion.div
                className="absolute -top-3 -right-3 glass rounded-full w-14 h-14 flex items-center justify-center text-xl border border-white/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: 'center center' }}
              >
                📊
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-3 glass rounded-full w-12 h-12 flex items-center justify-center text-xl border border-white/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                🤖
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════ VALUES ══════════ */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(139,92,246,0.03) 50%, transparent)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge mx-auto mb-4"><span>💡</span> My Values</div>
            <h2 className="text-4xl font-bold text-white">
              What Drives <span className="gradient-text">My Work</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                className="glass rounded-2xl border border-white/08 p-6 tilt-card group hover:border-white/20 transition-all"
                variants={itemVariants}
              >
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  style={{
                    background: `${v.color}15`,
                    border: `1px solid ${v.color}30`,
                    color: v.color,
                  }}
                >
                  {v.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ TIMELINE ══════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge mx-auto mb-4"><span>🗓️</span> Timeline</div>
            <h2 className="text-4xl font-bold text-white">
              My <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(180deg, var(--cyan), var(--purple), var(--pink))' }}
            />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6 relative pl-20"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-5 top-4 w-6 h-6 rounded-full flex items-center justify-center z-10"
                    style={{
                      background: `${item.color}20`,
                      border: `2px solid ${item.color}`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div className="glass rounded-2xl border border-white/08 p-6 flex-1 hover:border-white/18 transition-all group">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <div>
                        <span
                          className="mono text-xs font-bold"
                          style={{ color: item.color }}
                        >
                          {item.year}
                        </span>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.org}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="mono text-xs px-3 py-1 rounded-lg border"
                          style={{
                            borderColor: `${item.color}30`,
                            color: item.color,
                            background: `${item.color}0d`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FUN FACTS ══════════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass rounded-3xl border border-white/08 p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Fun Facts <span className="gradient-text">About Me</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { emoji: '☕', fact: '3 cups of chai to debug 1 model', color: 'var(--gold)' },
                { emoji: '🏆', fact: 'Top 15% in my first Kaggle competition', color: 'var(--cyan)' },
                { emoji: '📚', fact: 'Read 2 ML papers every weekend', color: 'var(--purple)' },
                { emoji: '🌍', fact: 'Speak: English, Hindi, Marathi', color: 'var(--green)' },
                { emoji: '🧮', fact: 'Still do mental math before using numpy', color: 'var(--pink)' },
                { emoji: '🎯', fact: 'Goal: publish an applied ML research paper', color: 'var(--cyan)' },
              ].map((f) => (
                <motion.div
                  key={f.fact}
                  className="flex items-start gap-3 group cursor-default"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-2xl">{f.emoji}</span>
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ color: 'rgba(200,200,200,0.7)' }}>
                    {f.fact}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
