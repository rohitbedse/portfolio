import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learning Roadmap — AI/ML & GenAI Journey',
  description:
    'Follow Rohit Bedse\'s AI/ML learning path: from Python fundamentals and SQL analytics through supervised ML, NLP, and word embeddings to Generative AI with LangChain, LangGraph, and RAG systems. Track real-time progress across 6 learning phases.',
  keywords: [
    'AI ML Learning Roadmap',
    'GenAI Learning Path',
    'How to Learn AI',
    'LangChain Learning',
    'Machine Learning Roadmap',
    'NLP Learning Path',
    'RAG Systems Tutorial',
  ],
  openGraph: {
    title: 'AI/ML Learning Roadmap — Rohit Bedse',
    description:
      'A structured, transparent view of an AI/ML learning journey with real-time progress tracking across 6 phases.',
    url: 'https://rohitbedse.vercel.app/learning',
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/learning',
  },
}

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
