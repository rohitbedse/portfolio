'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, Target, Lightbulb, Cpu, TrendingUp } from 'lucide-react'

interface Project {
  title: string
  description: string
  problem: string
  solution: string
  technicalDetails: string[]
  results: string[]
  techStack: string[]
  githubUrl: string
  demoUrl?: string
  accent: 'blue' | 'violet' | 'green'
}

const projects: Project[] = [
  {
    title: 'Multi-Agent Research System',
    description:
      'Autonomous multi-agent architecture where specialized AI agents collaborate to research, analyze, and synthesize information from diverse sources.',
    problem: 'Traditional RAG systems often struggle with complex, multi-step research tasks that require synthesis across multiple contradictory or complementary sources.',
    solution: 'Implemented a graph-based agentic workflow using LangGraph, where a "Supervisor" agent delegates tasks to "Researcher" and "Analyst" agents, utilizing a reflection loop to validate findings before final synthesis.',
    technicalDetails: [
      'Stateful graph orchestration with LangGraph for complex agent cycles',
      'Dynamic task delegation based on LLM-determined routing',
      'Multi-source retrieval using Tavily API and custom scrapers',
      'Cross-agent memory sharing via a shared state object',
    ],
    results: [
      'Capable of performing deep-dive research on open-ended queries',
      'Reduced synthesis hallucinations through an automated verification loop',
      'Supports autonomous recursive research paths',
    ],
    techStack: ['Python', 'LangGraph', 'LangChain', 'Google Gemini', 'Tavily API'],
    githubUrl: 'https://github.com/rohitbedse',
    demoUrl: '#',
    accent: 'violet',
  },
  {
    title: 'AI Parallel Processing Pipeline',
    description:
      'High-performance ML system using LangChain orchestration with RunnableParallel for concurrent LLM invocation.',
    problem: 'Sequential LLM calls in complex pipelines create linear latency bottlenecks, making real-time AI applications sluggish.',
    solution: 'Architected a parallel execution layer using RunnableParallel to invoke multiple LLM chains concurrently, aggregating results via a final synthesis chain.',
    technicalDetails: [
      'Implementation of LangChain RunnableParallel for concurrent task execution',
      'Asynchronous I/O handling to prevent event-loop blocking',
      'Context-sharing across parallel branches using a centralized prompt template',
      'Output aggregation logic to ensure consistency across concurrent responses',
    ],
    results: [
      'Significantly reduced end-to-end pipeline latency',
      'Increased throughput for batch processing of complex queries',
      'Maintained high consistency in output quality compared to sequential processing',
    ],
    techStack: ['Python', 'LangChain', 'RunnableParallel', 'Gemini 2.5 Flash', 'Streamlit'],
    githubUrl: 'https://github.com/rohitbedse',
    demoUrl: '#',
    accent: 'blue',
  },
  {
    title: 'Chat with PDF — RAG System',
    description:
      'Retrieval-Augmented Generation system that enables conversational interaction with PDF documents.',
    problem: 'Standard LLMs suffer from limited context windows and hallucinations when querying large, specific technical documents.',
    solution: 'Built a complete RAG pipeline: PDF parsing → recursive character splitting → vector embedding (FAISS) → semantic retrieval → context-aware generation.',
    technicalDetails: [
      'Recursive character text splitting for optimal chunking and context preservation',
      'FAISS vector store for high-speed similarity search in high-dimensional space',
      'Prompt engineering with few-shot examples to ensure grounded responses',
      'Custom PDF preprocessing pipeline to handle complex layouts',
    ],
    results: [
      'Achieved high precision in retrieving specific technical facts from large documents',
      'Eliminated common hallucinations by strictly grounding responses in retrieved context',
      'Responsive interaction for real-time querying',
    ],
    techStack: ['Python', 'LangChain', 'FAISS', 'OpenAI', 'Streamlit', 'PyPDF2'],
    githubUrl: 'https://github.com/rohitbedse',
    accent: 'green',
  },
  {
    title: 'YouTube Sentiment Analysis',
    description:
      'End-to-end NLP pipeline analyzing sentiment from YouTube comments.',
    problem: 'Manual analysis of thousands of user comments is impossible, and generic sentiment tools often miss domain-specific nuances in social media text.',
    solution: 'Developed a custom NLP pipeline featuring text normalization, VADER sentiment analysis, and an interactive dashboard for real-time insight extraction.',
    technicalDetails: [
      'Automated data extraction using YouTube Data API v3',
      'Preprocessing pipeline for emojis, slang, and social media noise',
      'Sentiment scoring using VADER and scikit-learn classifiers',
      'Interactive visualization layer built with Streamlit and Plotly',
    ],
    results: [
      'Processed large volumes of comments per video with high accuracy',
      'Identified key emotional drivers in user feedback through keyword extraction',
      'Reduced sentiment analysis time from hours to seconds',
    ],
    techStack: ['Python', 'NLTK', 'scikit-learn', 'Pandas', 'Streamlit', 'YouTube API'],
    githubUrl: 'https://github.com/rohitbedse',
    accent: 'blue',
  },
  {
    title: 'Linear Regression From Scratch',
    description:
      'Complete implementation of Linear Regression using OLS mathematical principles.',
    problem: 'Over-reliance on black-box libraries leads to a lack of understanding of model failure modes and optimization limits.',
    solution: 'Implemented the Ordinary Least Squares (OLS) method from first principles, validating results against industry-standard libraries.',
    technicalDetails: [
      'Matrix-based implementation of the normal equation for analytical solutions',
      'Iterative gradient descent implementation for large-scale optimization',
      'Custom implementation of MSE and R-squared metrics',
      'Comparative analysis of convergence rates between analytical and iterative methods',
    ],
    results: [
      'Achieved identical coefficients to scikit-learn within floating-point precision',
      'Demonstrated deep understanding of cost function optimization',
      'Validated mathematical foundations of linear models',
    ],
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
          className="grid grid-cols-1 md:grid-cols-cols-2 lg:grid-cols-3 gap-6"
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
                className={`gradient-border group cursor-pointer transition-all duration-400 ${accent.border}`}
                onClick={() => setSelectedProject(project)}
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

                  {/* Quick Links */}
                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-accent-blue transition-colors"
                      aria-label={\`\${project.title} GitHub\`}
                    >
                      <Github size={16} />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-accent-violet transition-colors"
                        aria-label={\`\${project.title} Live Demo\`}
                      >
                        <ExternalLink size={16} />
                        <span className="hidden sm:inline">Demo</span>
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-bg-deep/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="p-8 sm:p-12">
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                  <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-48 flex flex-col gap-3 justify-center">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
                    >
                      <Github size={18} /> Code
                    </a>
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-violet text-bg-deep font-bold transition-all"
                      >
                        <ExternalLink size={18} /> Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                        <Target size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">The Problem</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{selectedProject.problem}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent-violet/10 flex items-center justify-center text-accent-violet">
                        <Lightbulb size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">The Solution</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{selectedProject.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent-green/10 flex items-center justify-center text-accent-green">
                        <Cpu size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Technical Details</h4>
                        <ul className="space-y-2">
                          {selectedProject.technicalDetails.map((detail, i) => (
                            <li key={i} className="text-gray-500 text-sm flex gap-2">
                              <span className="text-accent-green">•</span> {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Results</h4>
                        <ul className="space-y-2">
                          {selectedProject.results.map((res, i) => (
                            <li key={i} className="text-gray-500 text-sm flex gap-2">
                              <span className="text-accent-blue">•</span> {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
