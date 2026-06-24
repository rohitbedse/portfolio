import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rohit Bedse — Technical Skills: GenAI, LangChain, Python, ML, NLP & More',
  description:
    'Rohit Bedse\'s technical skill set across 36+ tools: RAG Systems, LangChain, LangGraph, FAISS, Gemini API, Python, Scikit-learn, TF-IDF, Word2Vec, BERT, Streamlit, MLflow. View interactive proficiency levels in GenAI, ML, NLP, and deployment technologies.',
  keywords: [
    'AI ML Skills',
    'Rohit Bedse skills',
    'Rohit Bedse tech stack',
    'LangChain Developer',
    'RAG Systems',
    'Python Developer',
    'Machine Learning Skills',
    'NLP Skills',
    'GenAI Skills',
    'FAISS',
    'LangGraph',
    'Prompt Engineering',
    'Scikit-learn',
    'Streamlit Developer',
    'MLflow',
    'Data Science Skills',
  ],
  openGraph: {
    title: 'Technical Skills — Rohit Bedse | AI/ML Engineer',
    description:
      '36+ tools across GenAI, ML, NLP, and deployment. Interactive skill constellation and detailed proficiency grid by Rohit Bedse.',
    url: 'https://rohitbedse.vercel.app/skills',
    images: [{ url: 'https://rohitbedse.vercel.app/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/skills',
  },
}

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
