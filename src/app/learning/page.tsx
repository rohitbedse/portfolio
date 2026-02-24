'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react'

interface LearningPhase {
  phase: string
  status: 'completed' | 'in-progress' | 'upcoming'
  description: string
  icon: React.ReactNode
  topics: string[]
  progress: number
}

const learningRoadmap: LearningPhase[] = [
  {
    phase: 'ML Foundations',
    status: 'completed',
    description: 'Core concepts and mathematical understanding',
    icon: <CheckCircle2 className="text-neon-green" size={40} />,
    topics: [
      'Linear Algebra Basics',
      'Calculus & Optimization',
      'Probability & Statistics',
      'Python for ML',
    ],
    progress: 100,
  },
  {
    phase: 'Supervised Learning',
    status: 'completed',
    description: 'Regression and classification masterclass',
    icon: <CheckCircle2 className="text-neon-green" size={40} />,
    topics: [
      'Linear Regression (OLS)',
      'Logistic Regression',
      'Decision Trees',
      'Ensemble Methods',
      'Model Evaluation',
    ],
    progress: 100,
  },
  {
    phase: 'Deep Learning Fundamentals',
    status: 'in-progress',
    description: 'Neural networks and backpropagation',
    icon: <Circle className="text-neon-cyan animate-pulse" size={40} />,
    topics: [
      'Neural Network Architecture',
      'Backpropagation',
      'Activation Functions',
      'Optimization Algorithms',
      'Regularization Techniques',
    ],
    progress: 60,
  },
  {
    phase: 'Natural Language Processing',
    status: 'in-progress',
    description: 'Text processing and transformer models',
    icon: <Circle className="text-neon-cyan animate-pulse" size={40} />,
    topics: [
      'Tokenization & Embeddings',
      'Transformers Architecture',
      'BERT, GPT Models',
      'Fine-tuning Techniques',
      'Language Model Evaluation',
    ],
    progress: 45,
  },
  {
    phase: 'Generative AI & LLMs',
    status: 'in-progress',
    description: 'Building production LLM systems',
    icon: <Circle className="text-neon-cyan animate-pulse" size={40} />,
    topics: [
      'LangChain Framework',
      'Prompt Engineering',
      'RAG Systems',
      'Vector Databases',
      'LLM Orchestration',
    ],
    progress: 70,
  },
  {
    phase: 'LLM Fine-tuning & Deployment',
    status: 'upcoming',
    description: 'Customization and production deployment',
    icon: <ArrowRight className="text-neon-pink" size={40} />,
    topics: [
      'LoRA & QLoRA',
      'Instruction Tuning',
      'RLHF Principles',
      'Model Quantization',
      'Docker & Production',
    ],
    progress: 0,
  },
  {
    phase: 'Multimodal AI',
    status: 'upcoming',
    description: 'Vision + Language integration',
    icon: <ArrowRight className="text-neon-pink" size={40} />,
    topics: [
      'Vision Transformers',
      'Multimodal Models',
      'Image-Text Understanding',
      'Multimodal Embeddings',
      'Integration Patterns',
    ],
    progress: 0,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export default function Learning() {
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
            Learning <span className="gradient-text">Roadmap</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            My structured journey from ML fundamentals to production GenAI systems. Each phase builds
            upon the previous, creating a solid foundation for advanced work.
          </motion.p>
        </motion.div>
      </section>

      {/* Roadmap Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {learningRoadmap.map((phase, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="glass rounded-xl border border-gray-700 hover:border-gray-500 transition-all p-8 overflow-hidden">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 mt-1">{phase.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                      {phase.phase}
                      <span
                        className={`text-sm px-3 py-1 rounded-full font-semibold ${
                          phase.status === 'completed'
                            ? 'bg-neon-green/20 text-neon-green'
                            : phase.status === 'in-progress'
                              ? 'bg-neon-cyan/20 text-neon-cyan'
                              : 'bg-neon-pink/20 text-neon-pink'
                        }`}
                      >
                        {phase.status === 'completed'
                          ? '✓ Done'
                          : phase.status === 'in-progress'
                            ? '→ Learning'
                            : '→ Next'}
                      </span>
                    </h3>
                    <p className="text-gray-400 mb-4">{phase.description}</p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Progress</span>
                        <span className="text-sm font-semibold text-neon-cyan">{phase.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-neon-cyan to-neon-pink"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${phase.progress}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>

                    {/* Topics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                      {phase.topics.map((topic, topicIndex) => (
                        <motion.div
                          key={topicIndex}
                          className="px-3 py-2 rounded-lg bg-dark-card border border-gray-700 text-sm font-medium text-gray-300 hover:border-gray-500 transition-all text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          {topic}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-700">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              label: 'Completed Phases',
              value: '2',
              color: 'neon-green',
            },
            {
              label: 'Currently Learning',
              value: '3',
              color: 'neon-cyan',
            },
            {
              label: 'Upcoming Phase',
              value: '2',
              color: 'neon-pink',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-lg border border-gray-700 p-8 text-center group hover:border-gray-500 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-5xl font-bold gradient-text mb-4`}>{stat.value}</div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Key Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-700">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Learning Principles
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Build, Don\'t Just Study',
              description: 'Every concept learned is immediately applied to build projects.',
            },
            {
              title: 'Understand the Math',
              description: 'No black boxes. From OLS to backpropagation, I understand why algorithms work.',
            },
            {
              title: 'Production First',
              description: 'Learn not just to understand but to deploy systems that work in real world.',
            },
            {
              title: 'Document & Share',
              description: 'Teaching others solidifies understanding. Every project is documented.',
            },
          ].map((principle, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-lg border border-gray-700 p-6 hover:border-gray-500 transition-all group"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-neon-cyan">{principle.title}</h3>
              <p className="text-gray-400">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
