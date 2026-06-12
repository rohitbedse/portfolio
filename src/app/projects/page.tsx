'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, ExternalLink, Star } from 'lucide-react'


const projects = [
  {
    id: 1,
    title: 'Multi-Agent Research System',
    category: 'GenAI',
    emoji: '🤖',
    description:
      'Built a multi-agent LLM system to automate end-to-end research workflows, reducing manual information gathering effort.',
    fullDesc:
      'Designed a LangGraph-based state machine coordinating 4 agents (Search, Reader, Writer, Critic) for structured report generation. Implemented iterative quality control loop with automatic refinement (≤ 7 score trigger, max 2 retries) improving output reliability. Integrated real-time web retrieval using Tavily API and BeautifulSoup.',
    tech: ['LangGraph', 'LLM Orchestration', 'Tavily API', 'BeautifulSoup', 'Streamlit', 'Python'],
    metric: '4 Agents Orchestrated',
    metricColor: 'var(--cyan)',
    impact: 'Automated end-to-end research workflows with iterative quality control',
    github: 'https://github.com/rohitbedse/Multi-agent-research-system-main',
    demo: 'https://github.com/rohitbedse/Multi-agent-research-system-main',
    featured: true,
    stars: 0,
    date: 'Mar 2026 – Apr 2026',
  },
  {
    id: 2,
    title: 'Chat with PDF — Intelligent Document Q&A',
    category: 'RAG',
    emoji: '📄',
    description:
      'Built a RAG-based document intelligence system enabling context-aware question answering over PDFs using LangChain and FAISS.',
    fullDesc:
      'Implemented semantic search pipeline using FAISS and optimized chunking strategies for improved retrieval accuracy. Integrated Google Gemini for generating precise, context-grounded responses from document embeddings. Designed efficient preprocessing pipeline using PyPDF2 for scalable document ingestion.',
    tech: ['Python', 'LangChain', 'FAISS', 'Google Gemini', 'Streamlit', 'PyPDF2'],
    metric: 'RAG + FAISS',
    metricColor: 'var(--purple)',
    impact: 'Context-aware Q&A with semantic search over large documents',
    github: 'https://github.com/rohitbedse/Mini-Project',
    demo: 'https://github.com/rohitbedse/Mini-Project',
    featured: true,
    stars: 0,
    date: 'May 2025 – Jun 2025',
  },
  {
    id: 3,
    title: 'YouTube Sentiment Analysis',
    category: 'NLP',
    emoji: '📺',
    description:
      'Built and evaluated a sentiment classification model (TF-IDF + Logistic Regression) for real-time YouTube comment analysis with a Chrome Extension.',
    fullDesc:
      'Developed preprocessing pipeline handling emojis, spam, and noisy text. Evaluated model using Precision, Recall, and F1-score to ensure statistically meaningful performance. Tracked experiments using MLflow for model comparison and reproducibility.',
    tech: ['Python', 'TF-IDF', 'Logistic Regression', 'MLflow', 'Chrome Extension', 'NLP'],
    metric: 'NLP + MLflow',
    metricColor: 'var(--green)',
    impact: 'Real-time sentiment analysis with experiment tracking',
    github: 'https://github.com/rohitbedse/yt-comment-sentiment-analysis',
    demo: 'https://github.com/rohitbedse/yt-comment-sentiment-analysis',
    featured: true,
    stars: 0,
    date: 'Oct 2025 – Dec 2025',
  },
]

const categories = ['All', 'GenAI', 'RAG', 'NLP']

export default function ProjectsPage() {
  const [selected, setSelected] = useState('All')
  const [expanded, setExpanded] = useState<number | null>(null)

  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected)

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
            <span>🚀</span> Portfolio
          </span>
          <h1 className="hero-title text-5xl md:text-6xl mb-5">
            <span className="text-white">AI/ML </span>
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world projects demonstrating end-to-end AI/ML workflows —
            from RAG systems and multi-agent orchestration to NLP and deployment.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selected === cat
                ? 'text-black'
                : 'glass text-gray-400 hover:text-white border border-white/10'
                }`}
              style={
                selected === cat
                  ? { background: 'linear-gradient(135deg, var(--cyan), var(--purple))' }
                  : {}
              }
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* ══════════ PROJECTS GRID ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`glass rounded-2xl border border-white/08 overflow-hidden group hover:border-white/20 transition-all duration-300 tilt-card flex flex-col ${project.featured ? 'ring-1 ring-cyan-500/20' : ''
                }`}
            >
              {/* Card header */}
              <div
                className="p-6 pb-4"
                style={{
                  background: project.featured
                    ? 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(139,92,246,0.05))'
                    : 'transparent',
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{project.emoji}</span>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="tag-cyan text-xs">Featured</span>
                    )}
                    <span
                      className="mono text-xs px-3 py-1 rounded-lg border"
                      style={{
                        borderColor: `${project.metricColor}30`,
                        color: project.metricColor,
                        background: `${project.metricColor}0d`,
                      }}
                    >
                      {project.metric}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded glass border border-white/10 text-gray-400 mono">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-500 mono">{project.date}</span>
                </div>

                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {expanded === project.id ? project.fullDesc : project.description}
                </p>
              </div>

              {/* Impact */}
              <div className="px-6 py-3 border-t border-white/05">
                <p className="text-xs text-gray-500">
                  <span style={{ color: project.metricColor }}>⬆ Impact: </span>
                  {project.impact}
                </p>
              </div>

              {/* Tags */}
              <div className="px-6 py-4 border-t border-white/05">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag-cyan">{t}</span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="px-6 py-4 border-t border-white/05 mt-auto flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm"
                  style={{ color: 'var(--cyan)' }}
                >
                  <ExternalLink size={14} /> View Project
                </a>
                <button
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                  className="ml-auto text-xs text-gray-500 hover:text-white transition-colors underline underline-offset-2"
                >
                  {expanded === project.id ? 'Less details' : 'More details'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl border border-white/08 p-8 inline-block">
            <p className="text-gray-400 mb-4">
              More projects and code available on my GitHub
            </p>
            <a
              href="https://github.com/rohitbedse"
              target="_blank"
              rel="noopener noreferrer"
              id="projects-github-cta"
            >
              <motion.button
                className="btn-outline flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Github size={18} /> View GitHub Profile
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
