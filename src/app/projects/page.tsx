'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Database, Brain, Zap } from 'lucide-react'

interface ProjectData {
  title: string
  description: string
  problem: string
  solution: string
  techStack: string[]
  challenges: string[]
  learned: string[]
  githubUrl: string
  demoUrl?: string
  icon: React.ReactNode
}

const projects: ProjectData[] = [
  {
    title: 'AI Parallel Processing Pipeline',
    description:
      'High-performance ML system using LangChain orchestration with parallel LLM invocation via RunnableParallel',
    problem:
      'Sequential LLM calls created bottlenecks. Processing multiple queries took 3-4x longer. Needed concurrent execution without losing context.',
    solution:
      'Implemented RunnableParallel architecture to invoke Google Gemini 2.5 Flash for 5-10 queries simultaneously. Reduced latency by 70% while maintaining quality through shared context embedding.',
    techStack: [
      'Python',
      'LangChain',
      'RunnableParallel',
      'Google Gemini 2.5 Flash',
      'Streamlit',
      'python-dotenv',
    ],
    challenges: [
      'Managing state across parallel executions',
      'Handling token limits with large context windows',
      'Synchronizing outputs from async chains',
    ],
    learned: [
      'LLM orchestration patterns',
      'Async execution in ML pipelines',
      'Prompt chaining and context management',
      'Production-grade error handling in distributed systems',
    ],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    icon: <Zap size={32} className="text-neon-cyan" />,
  },
  {
    title: 'Linear Regression From Scratch',
    description:
      'Complete implementation of Linear Regression using OLS mathematical principles with comparative analysis',
    problem:
      'Understanding ML requires understanding math. Most tutorials skip the derivation. How do OLS closed-form solutions compare to gradient descent?',
    solution:
      'Built Linear Regression from mathematical foundations: OLS formula derivation, implementation without sklearn, validation against sklearn, and gradient descent comparison.',
    techStack: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'Matplotlib'],
    challenges: [
      'Numerical stability in matrix inversions',
      'Efficient gradient descent step size selection',
      'Handling edge cases in feature scaling',
    ],
    learned: [
      'Linear algebra fundamentals in ML',
      'Mathematical optimization principles',
      'Numerical computing pitfalls',
      'Why reproducibility matters in ML',
    ],
    githubUrl: 'https://github.com',
    icon: <Brain size={32} className="text-neon-pink" />,
  },
  {
    title: 'EDA & Feature Engineering Pipeline',
    description:
      'Comprehensive data analysis and feature engineering system for production ML models',
    problem:
      'Raw data has missing values, outliers, and suboptimal features. Manual EDA is time-consuming and inconsistent.',
    solution:
      'Built modular pipeline for statistical analysis, outlier detection, feature transformation, and engineered features. Tracked every transformation for reproducibility.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scipy', 'Seaborn'],
    challenges: [
      'Handling mixed data types (categorical + numerical)',
      'Outlier detection without losing important signal',
      'Feature interaction discovery at scale',
    ],
    learned: [
      'Statistical hypothesis testing in feature selection',
      'Dimensionality reduction principles',
      'Data pipeline reproducibility',
    ],
    githubUrl: 'https://github.com',
    icon: <Database size={32} className="text-neon-green" />,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function Projects() {
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production-ready ML systems showcasing deep technical understanding, architectural thinking, and real-world problem solving.
            No tutorials. No copies. Pure engineering.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="glass rounded-xl border border-gray-700 override-hover:border-neon-cyan group-hover:border-neon-cyan transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-dark-card">{project.icon}</div>
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-400">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Problem */}
                    <div>
                      <h4 className="text-lg font-semibold text-neon-cyan mb-3">Problem Statement</h4>
                      <p className="text-gray-400 leading-relaxed">{project.problem}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-lg font-semibold text-neon-pink mb-3">Solution</h4>
                      <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold text-neon-green mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm hover:border-neon-cyan transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Challenges */}
                    <div>
                      <h4 className="text-lg font-semibold text-neon-pink mb-3">Challenges Faced</h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400">
                            <span className="text-neon-cyan mt-1">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What I Learned */}
                    <div>
                      <h4 className="text-lg font-semibold text-neon-green mb-3">What I Learned</h4>
                      <ul className="space-y-2">
                        {project.learned.map((learning, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400">
                            <span className="text-neon-green mt-1">→</span>
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="flex gap-4 p-8 border-t border-gray-700 bg-dark-card">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-gray-700 text-gray-300 hover:text-neon-cyan hover:border-neon-cyan transition-all group/link"
                  >
                    <Github size={18} />
                    <span>GitHub Repository</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-gray-700 text-gray-300 hover:text-neon-pink hover:border-neon-pink transition-all group/link"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-700">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">More projects on GitHub</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            These are my featured projects. Visit my GitHub for additional work, contributions, and ongoing experiments.
          </p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="px-8 py-3 rounded-lg glass border border-neon-cyan text-neon-cyan font-semibold hover:neon-glow transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code size={20} />
              View All on GitHub
            </motion.button>
          </a>
        </motion.div>
      </section>
    </div>
  )
}
