import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI/ML Blog — GenAI, RAG, NLP & Python Tutorials',
  description:
    'Read practical AI/ML articles by Rohit Bedse: RAG system architecture, LangChain tutorials, NLP techniques, feature engineering, prompt engineering, and Python data science guides.',
  keywords: [
    'AI ML Blog',
    'RAG System Tutorial',
    'LangChain Guide',
    'NLP Tutorial',
    'GenAI Blog',
    'Python Data Science',
    'Machine Learning Articles',
    'Prompt Engineering',
  ],
  openGraph: {
    title: 'AI/ML Blog by Rohit Bedse',
    description:
      'Practical articles on GenAI, RAG systems, NLP, ML techniques, and Python tutorials. Clear explanations with code examples.',
    url: 'https://rohitbedse.vercel.app/blog',
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
