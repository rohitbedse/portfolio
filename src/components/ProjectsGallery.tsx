'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  demoUrl?: string
  accent: 'blue' | 'violet' | 'green'
}

const projects: Project[] = [
  {
    title: 'Multi-Agent Research System',
    description:
      'Autonomous multi-agent architecture where specialized AI agents collaborate to research, analyze, and synthesize information from diverse sources. Features intelligent task delegation and result aggregation.',
    techStack: ['Python', 'LangGraph', 'LangChain', 'Google Gemini', 'Tavily API'],
    githubUrl: 'https://github.com/rohitbedse',
    demoUrl: '#',
    accent: 'violet',
  },
  {
    title: 'AI Parallel Processing Pipeline',
    description:
      'High-performance ML system using LangChain orchestration with RunnableParallel for concurrent LLM invocation. Reduced latency by 70% while maintaining output quality through shared context embedding.',
    techStack: ['Python', 'LangChain', 'RunnableParallel', 'Gemini 2.5 Flash', 'Streamlit'],
    githubUrl: 'https://github.com/rohitbedse',
    demoUrl: '#',
    accent: 'blue',
  },
  {
    title: 'Chat with PDF — RAG System',
    description:
      'Retrieval-Augmented Generation system that enables conversational interaction with PDF documents. Vector embeddings for semantic search with context-aware LLM responses.',
    techStack: ['Python', 'LangChain', 'FAISS', 'OpenAI', 'Streamlit', 'PyPDF2'],
    githubUrl: 'https://github.com/rohitbedse',
    accent: 'green',
  },
  {
    title: 'YouTube Sentiment Analysis',
    description:
      'End-to-end NLP pipeline analyzing sentiment from YouTube comments. Features data collection, preprocessing, model training, and an interactive dashboard for visualization.',
    techStack: ['Python', 'NLTK', 'scikit-learn', 'Pandas', 'Streamlit', 'YouTube API'],
    githubUrl: 'https://github.com/rohitbedse',
    accent: 'blue',
  },
  {
    title: 'Linear Regression From Scratch',
    description:
      'Complete implementation of Linear Regression using OLS mathematical principles — from formula derivation to validation against sklearn and gradient descent comparison.',
    techStack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'scikit-learn'],
    githubUrl: 'https://github.com/rohitbedse',
    accent: 'violet',
  },
]

const accentMap = {
  blue: {
    tag: 'bg-accent-blue/10 text-accent-blue',
    border: 'hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]',
  },
  violet: {
    tag: 'bg-accent-violet/10 text-accent-violet',
    border: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
  },
  green: {
    tag: 'bg-accent-green/10 text-accent-green',
    border: 'hover:shadow-[0_0_30px_rgba(6,255,165,0.15)]',
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ProjectsGallery() {
  return (
    <section id="projects" className="section-padding">
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
            Featured Work
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Project <span className="gradient-text">Gallery</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Production-ready ML systems showcasing deep technical understanding.
            No tutorials. No copies. Pure engineering.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, i) => {
            const accent = accentMap[project.accent]
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`gradient-border group transition-all duration-400 ${accent.border}`}
              >
                <div className="p-7 h-full relative z-10 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, j) => (
                      <span
                        key={j}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium ${accent.tag}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-accent-blue transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-accent-violet transition-colors"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/rohitbedse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="px-8 py-3 rounded-xl glass border border-white/10 text-gray-400 font-medium hover:text-accent-blue hover:border-accent-blue/40 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="flex items-center gap-2">
                <Github size={18} />
                View All on GitHub
              </span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
