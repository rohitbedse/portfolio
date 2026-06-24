import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI/ML Blog by Rohit Bedse — GenAI, RAG, NLP & Python Tutorials',
  description:
    'Read practical AI/ML articles by Rohit Bedse: RAG system architecture, LangChain tutorials, NLP techniques, feature engineering, prompt engineering, multi-agent LLM systems, and Python data science guides. Fresh technical content updated regularly.',
  keywords: [
    'AI ML Blog',
    'Rohit Bedse blog',
    'RAG System Tutorial',
    'LangChain Guide',
    'NLP Tutorial',
    'GenAI Blog',
    'Python Data Science',
    'Machine Learning Articles',
    'Prompt Engineering',
    'LangGraph Tutorial',
    'FAISS Tutorial',
    'Gemini API Guide',
    'Multi-Agent LLM Blog',
  ],
  openGraph: {
    title: 'AI/ML Blog by Rohit Bedse — Technical Articles & Tutorials',
    description:
      'Practical articles on GenAI, RAG systems, NLP, ML techniques, and Python tutorials. Clear explanations with code examples by Rohit Bedse.',
    url: 'https://rohitbedse.vercel.app/blog',
    images: [{ url: 'https://rohitbedse.vercel.app/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
