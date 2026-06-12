import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI/ML Projects — Multi-Agent Systems, RAG, NLP & More',
  description:
    'Explore Rohit Bedse\'s AI/ML projects: Multi-Agent Research System (LangGraph), Chat with PDF RAG system (LangChain + FAISS + Gemini), and YouTube Sentiment Analysis (TF-IDF + MLflow). Real-world GenAI applications with source code.',
  keywords: [
    'AI ML Projects',
    'Multi-Agent Research System',
    'RAG System',
    'LangGraph Project',
    'LangChain FAISS',
    'YouTube Sentiment Analysis',
    'GenAI Projects',
    'NLP Projects',
    'Python ML Projects',
  ],
  openGraph: {
    title: 'AI/ML Projects by Rohit Bedse',
    description:
      'Real-world GenAI projects: Multi-Agent LLM System, RAG Document Q&A, and YouTube Sentiment Analysis with source code.',
    url: 'https://rohitbedse.vercel.app/projects',
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/projects',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
