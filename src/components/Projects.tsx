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
}

const projects: Project[] = [
  {
    title: 'Multi-Agent Research System',
    description:
      'Autonomous multi-agent architecture where specialized AI agents collaborate to research, analyze, and synthesize information from diverse sources.',
    problem: 'Traditional RAG systems often struggle with complex, multi-step research tasks that require synthesis across multiple contradictory or complementary sources.',
    solution: 'Implemented a graph-based agentic workflow using LangGraph, where a "Supervisor" agent delegates tasks to "Researcher" and "Analyst" agents, using a reflection loop to validate findings before final synthesis.',
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
  },
  {
    title: 'Chat with PDF — RAG System',
    description: 'Retrieval-Augmented Generation system that enables conversational interaction with PDF documents.',
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
  },
  {
    title: 'YouTube Sentiment Analysis',
    description: 'End-to-end NLP pipeline analyzing sentiment from YouTube comments.',
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
  },
  {
    title: 'Linear Regression From Scratch',
    description: 'Complete implementation of Linear Regression using OLS mathematical principles.',
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
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="eyebrow mb-3">
            Featured Work
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-5 text-ink-primary">
            Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-ink-secondary max-w-2xl mx-auto text-lg">
            Production-ready ML systems showcasing deep technical understanding. No tutorials, no copies.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="card p-6 cursor-pointer flex flex-col"
              onClick={() => setSelected(project)}
            >
              <h3 className="text-lg font-semibold text-ink-primary mb-2.5">{project.title}</h3>
              <p className="text-ink-secondary text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent-dim accent-text">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-white/[0.06]">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-sm text-ink-tertiary hover:text-accent transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm text-ink-tertiary hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <a href="https://github.com/rohitbedse" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Github size={18} /> View All on GitHub
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-bg/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl surface"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 icon-btn"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="p-7 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary mb-3 pr-10">{selected.title}</h2>
                <p className="text-ink-secondary leading-relaxed mb-5">{selected.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selected.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-ink-secondary">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mb-9">
                  <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1">
                    <Github size={16} /> Code
                  </a>
                  {selected.demoUrl && (
                    <a href={selected.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-7">
                    <div className="flex gap-3">
                      <div className="w-9 h-9 shrink-0 rounded-lg bg-accent-dim flex items-center justify-center accent-text">
                        <Target size={18} />
                      </div>
                      <div>
                        <h4 className="text-ink-primary font-semibold mb-1.5 text-sm">The Problem</h4>
                        <p className="text-ink-secondary text-sm leading-relaxed">{selected.problem}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-9 h-9 shrink-0 rounded-lg bg-accent-dim flex items-center justify-center accent-text">
                        <Lightbulb size={18} />
                      </div>
                      <div>
                        <h4 className="text-ink-primary font-semibold mb-1.5 text-sm">The Solution</h4>
                        <p className="text-ink-secondary text-sm leading-relaxed">{selected.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-7">
                    <div className="flex gap-3">
                      <div className="w-9 h-9 shrink-0 rounded-lg bg-accent-dim flex items-center justify-center accent-text">
                        <Cpu size={18} />
                      </div>
                      <div>
                        <h4 className="text-ink-primary font-semibold mb-1.5 text-sm">Technical Details</h4>
                        <ul className="space-y-1.5">
                          {selected.technicalDetails.map((detail, i) => (
                            <li key={i} className="text-ink-secondary text-sm flex gap-2">
                              <span className="accent-text">•</span> {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-9 h-9 shrink-0 rounded-lg bg-accent-dim flex items-center justify-center accent-text">
                        <TrendingUp size={18} />
                      </div>
                      <div>
                        <h4 className="text-ink-primary font-semibold mb-1.5 text-sm">Results</h4>
                        <ul className="space-y-1.5">
                          {selected.results.map((res, i) => (
                            <li key={i} className="text-ink-secondary text-sm flex gap-2">
                              <span className="accent-text">•</span> {res}
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
