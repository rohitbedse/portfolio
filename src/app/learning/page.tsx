'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Clock, ArrowRight, Lightbulb, BookOpen, Zap } from 'lucide-react'

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

const roadmap = [
  {
    phase: 'Phase 1 · Foundation',
    status: 'completed' as const,
    title: 'Python & Data Fundamentals',
    description: 'Core Python programming, data structures, and foundational statistical concepts.',
    topics: ['Python OOP', 'NumPy Arrays', 'Pandas DataFrames', 'Probability Basics', 'Descriptive Statistics', 'Matplotlib'],
    progress: 100,
    color: 'var(--green)',
    emoji: '✅',
  },
  {
    phase: 'Phase 2 · Analytics',
    status: 'completed' as const,
    title: 'SQL & Exploratory Analysis',
    description: 'SQL mastery for data retrieval and transformation, and EDA workflows.',
    topics: ['SQL Joins & CTEs', 'Window Functions', 'EDA Frameworks', 'Data Cleaning', 'Seaborn Viz', 'Outlier Detection'],
    progress: 100,
    color: 'var(--green)',
    emoji: '✅',
  },
  {
    phase: 'Phase 3 · Machine Learning',
    status: 'completed' as const,
    title: 'Supervised Learning Mastery',
    description: 'Classical ML algorithms from regression to boosting with real project application.',
    topics: ['Linear & Logistic Regression', 'Decision Trees', 'Random Forest', 'XGBoost/LightGBM', 'Cross-Validation', 'Hyperparameter Tuning'],
    progress: 100,
    color: 'var(--green)',
    emoji: '✅',
  },
  {
    phase: 'Phase 4 · In Progress',
    status: 'in-progress' as const,
    title: 'Deep Learning & NLP Basics',
    description: 'Neural networks, backpropagation, and text processing fundamentals.',
    topics: ['ANN Architecture', 'PyTorch Basics', 'CNN Intro', 'NLP Preprocessing', 'Embeddings', 'Transformers (Intro)'],
    progress: 55,
    color: 'var(--cyan)',
    emoji: '🔄',
  },
  {
    phase: 'Phase 5 · Next Up',
    status: 'upcoming' as const,
    title: 'MLOps & Deployment',
    description: 'Taking models to production — FastAPI, Docker, monitoring, and CI/CD.',
    topics: ['FastAPI Model Serving', 'Docker Containers', 'MLflow Tracking', 'AWS SageMaker', 'Model Monitoring', 'CI/CD Pipelines'],
    progress: 0,
    color: 'var(--purple)',
    emoji: '🔮',
  },
  {
    phase: 'Phase 6 · Future',
    status: 'upcoming' as const,
    title: 'Generative AI & LLMs',
    description: 'RAG systems, fine-tuning, and building AI-powered data science tools.',
    topics: ['LangChain', 'RAG Pipelines', 'Prompt Engineering', 'Vector DBs', 'Fine-tuning', 'LLM Evaluation'],
    progress: 0,
    color: 'var(--pink)',
    emoji: '🚀',
  },
]

const stats = [
  { label: 'Phases Completed', value: '3', color: 'var(--green)' },
  { label: 'Currently Active', value: '1', color: 'var(--cyan)' },
  { label: 'Upcoming Phases', value: '2', color: 'var(--purple)' },
  { label: 'Total Progress', value: '62%', color: 'var(--pink)' },
]

const principles = [
  {
    icon: <Zap size={20} />,
    title: 'Build First, Then Study',
    desc: 'Every concept I learn immediately turns into a project. Theory without practice is just theory.',
    color: 'var(--cyan)',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Understand the Math',
    desc: 'No black boxes. I derive and understand the math behind every algorithm I use.',
    color: 'var(--purple)',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Write, Teach, Share',
    desc: 'Writing and teaching solidify understanding. I document everything I learn on my blog.',
    color: 'var(--gold)',
  },
  {
    icon: <ArrowRight size={20} />,
    title: 'Production Mindset',
    desc: 'I learn not just to understand, but to deploy systems that work in the real world.',
    color: 'var(--green)',
  },
]

export default function LearningPage() {
  return (
    <div className="min-h-screen pt-20" style={{ background: 'var(--dark)' }}>

      {/* ══════════ HEADER ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge mx-auto mb-6">
            <span>🗺️</span> Learning Roadmap
          </span>
          <h1 className="hero-title text-5xl md:text-6xl mb-5">
            <span className="text-white">My DS </span>
            <span className="gradient-text">Learning Path</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A structured, transparent view of my data science journey — what I&apos;ve mastered,
            what I&apos;m currently learning, and where I&apos;m heading next.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-xl border border-white/08 p-4 text-center"
            >
              <div className="stat-number text-3xl mb-1" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="text-xs text-gray-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ══════════ TIMELINE ROADMAP ══════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-9 top-0 bottom-0 w-0.5"
            style={{
              background: 'linear-gradient(180deg, var(--green), var(--cyan), var(--purple), var(--pink))',
            }}
          />

          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {roadmap.map((phase, i) => (
              <motion.div key={i} variants={itemVariants} className="relative flex gap-8">

                {/* Icon dot */}
                <div
                  className="flex-shrink-0 w-[72px] flex justify-center mt-5"
                  aria-hidden="true"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center z-10 relative text-lg font-bold"
                    style={{
                      background: `${phase.color}20`,
                      border: `2px solid ${phase.color}`,
                    }}
                  >
                    <span>{phase.emoji}</span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className="flex-1 glass rounded-2xl border border-white/08 p-7 hover:border-white/18 transition-all duration-300"
                  style={{
                    background:
                      phase.status === 'in-progress'
                        ? `linear-gradient(135deg, ${phase.color}08, transparent)`
                        : undefined,
                  }}
                >
                  {/* Badge + title row */}
                  <div className="flex flex-wrap gap-2 items-center mb-2">
                    <span
                      className="mono text-xs font-bold px-3 py-1 rounded-lg border"
                      style={{
                        borderColor: `${phase.color}30`,
                        color: phase.color,
                        background: `${phase.color}0d`,
                      }}
                    >
                      {phase.phase}
                    </span>
                    {phase.status === 'completed' && (
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--green)' }}>
                        <CheckCircle2 size={13} /> Completed
                      </span>
                    )}
                    {phase.status === 'in-progress' && (
                      <span className="flex items-center gap-1 text-xs animate-pulse" style={{ color: 'var(--cyan)' }}>
                        <Circle size={13} /> In Progress
                      </span>
                    )}
                    {phase.status === 'upcoming' && (
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--purple)' }}>
                        <Clock size={13} /> Upcoming
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-gray-400 text-sm mb-5">{phase.description}</p>

                  {/* Progress bar */}
                  <div className="mb-5">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-gray-500">Progress</span>
                      <span className="mono font-bold" style={{ color: phase.color }}>
                        {phase.progress}%
                      </span>
                    </div>
                    <div
                      className="h-2 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.07)' }}
                    >
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: `linear-gradient(90deg, ${phase.color}, ${phase.color}70)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${phase.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                            animation: 'shimmer 2s ease-in-out infinite',
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {phase.topics.map((topic) => (
                      <motion.div
                        key={topic}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/07 text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all cursor-default"
                        whileHover={{ x: 2 }}
                      >
                        {phase.status === 'completed' && (
                          <CheckCircle2 size={11} style={{ color: 'var(--green)', flexShrink: 0 }} />
                        )}
                        {phase.status === 'in-progress' && (
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: 'var(--cyan)' }}
                          />
                        )}
                        {phase.status === 'upcoming' && (
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-30"
                            style={{ background: 'var(--purple)' }}
                          />
                        )}
                        <span className="line-clamp-1">{topic}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ PRINCIPLES ══════════ */}
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
            <h2 className="text-3xl font-bold text-white">
              Learning <span className="gradient-text">Principles</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {principles.map((p) => (
              <motion.div
                key={p.title}
                className="glass rounded-2xl border border-white/08 p-6 tilt-card hover:border-white/20 transition-all"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              >
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  style={{
                    background: `${p.color}15`,
                    border: `1px solid ${p.color}30`,
                    color: p.color,
                  }}
                >
                  {p.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ RESOURCES ══════════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Key <span className="gradient-text">Resources</span> I Recommend
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {[
              { name: 'Hands-On ML (Aurélien Géron)', type: 'Book', emoji: '📚', color: 'var(--cyan)' },
              { name: 'StatQuest with Josh Starmer', type: 'YouTube', emoji: '📺', color: 'var(--purple)' },
              { name: 'Kaggle Learn', type: 'Platform', emoji: '🏆', color: 'var(--gold)' },
              { name: 'Andrew Ng ML Specialization', type: 'Course', emoji: '🎓', color: 'var(--pink)' },
              { name: 'Towards Data Science', type: 'Blog', emoji: '✍️', color: 'var(--green)' },
              { name: 'FastAI Practical DL Course', type: 'Course', emoji: '⚡', color: 'var(--cyan)' },
            ].map((r) => (
              <motion.div
                key={r.name}
                className="glass rounded-xl border border-white/08 p-5 flex items-center gap-4 hover:border-white/20 transition-all cursor-default"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ x: 4 }}
              >
                <span className="text-2xl">{r.emoji}</span>
                <div>
                  <div className="font-semibold text-white text-sm">{r.name}</div>
                  <div
                    className="text-xs mono"
                    style={{ color: r.color }}
                  >
                    {r.type}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
