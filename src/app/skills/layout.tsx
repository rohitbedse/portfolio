import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Skills — GenAI, LangChain, Python, ML, NLP & More',
  description:
    'Rohit Bedse\'s technical skill set across 36+ tools: RAG Systems, LangChain, LangGraph, FAISS, Gemini API, Python, Scikit-learn, TF-IDF, Word2Vec, BERT, Streamlit, MLflow. View proficiency levels in GenAI, ML, NLP, and deployment.',
  keywords: [
    'AI ML Skills',
    'LangChain Developer',
    'RAG Systems',
    'Python Developer',
    'Machine Learning Skills',
    'NLP Skills',
    'GenAI Skills',
    'FAISS',
    'LangGraph',
    'Prompt Engineering',
  ],
  openGraph: {
    title: 'Technical Skills — Rohit Bedse',
    description:
      '36+ tools across GenAI, ML, NLP, and deployment. Interactive skill constellation and detailed proficiency grid.',
    url: 'https://rohitbedse.vercel.app/skills',
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/skills',
  },
}

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
