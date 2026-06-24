import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI/ML Projects by Rohit Bedse — Multi-Agent Systems, RAG, NLP & More',
  description:
    'Explore Rohit Bedse\'s AI/ML projects: Multi-Agent Research System (LangGraph), Chat with PDF RAG system (LangChain + FAISS + Gemini), YouTube Sentiment Analysis (TF-IDF + MLflow), and more. Real-world GenAI applications with source code on GitHub.',
  keywords: [
    'AI ML Projects',
    'Rohit Bedse projects',
    'Multi-Agent Research System',
    'RAG System',
    'LangGraph Project',
    'LangChain FAISS',
    'YouTube Sentiment Analysis',
    'GenAI Projects',
    'NLP Projects',
    'Python ML Projects',
    'Chat with PDF',
    'Gemini API Project',
    'Open Source AI Projects',
  ],
  openGraph: {
    title: 'AI/ML Projects by Rohit Bedse — GenAI Applications with Source Code',
    description:
      'Real-world GenAI projects: Multi-Agent LLM System, RAG Document Q&A, and YouTube Sentiment Analysis with source code by Rohit Bedse.',
    url: 'https://rohitbedse.vercel.app/projects',
    images: [{ url: 'https://rohitbedse.vercel.app/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/projects',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
