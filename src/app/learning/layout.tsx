import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rohit Bedse — AI/ML Learning Roadmap & GenAI Journey',
  description:
    'Follow Rohit Bedse\'s AI/ML learning path: from Python fundamentals and SQL analytics through supervised ML, NLP, and word embeddings to Generative AI with LangChain, LangGraph, and RAG systems. Track real-time progress across 6 learning phases. A transparent view into becoming an AI/ML engineer.',
  keywords: [
    'AI ML Learning Roadmap',
    'Rohit Bedse learning',
    'GenAI Learning Path',
    'How to Learn AI',
    'LangChain Learning',
    'Machine Learning Roadmap',
    'NLP Learning Path',
    'RAG Systems Tutorial',
    'AI ML Career Path',
    'Python Learning',
    'Data Science Roadmap',
  ],
  openGraph: {
    title: 'AI/ML Learning Roadmap by Rohit Bedse — 6-Phase Journey',
    description:
      'A structured, transparent view of Rohit Bedse\'s AI/ML learning journey with real-time progress tracking across 6 phases from Python to GenAI.',
    url: 'https://rohitbedse.vercel.app/learning',
    images: [{ url: 'https://rohitbedse.vercel.app/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/learning',
  },
}

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
