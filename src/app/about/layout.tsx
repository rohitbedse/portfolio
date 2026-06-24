import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Rohit Bedse — AI/ML Engineer & GenAI Developer from Pune, India',
  description:
    'Learn about Rohit Bedse — Computer Science undergraduate at SSVPS B.S Deore College of Engineering, Dhule. Specializing in Generative AI, RAG systems, multi-agent LLM applications with LangChain, LangGraph, FAISS, and Gemini API. AI/ML Trainee at Edunet Foundation (AICTE & IBM SkillsBuild). Based in Pune, Maharashtra.',
  keywords: [
    'About Rohit Bedse',
    'Rohit Bedse biography',
    'Rohit Bedse education',
    'Rohit Bedse certifications',
    'AI ML Engineer Pune',
    'GenAI Developer India',
    'SSVPS Dhule',
    'Computer Science Student',
    'Edunet Foundation',
    'IBM SkillsBuild',
    'AICTE',
    'Pune Maharashtra',
    'AI ML Trainee',
  ],
  openGraph: {
    title: 'About Rohit Bedse — AI/ML Engineer from Pune, India',
    description:
      'Discover the journey, education, certifications, and career timeline of Rohit Bedse — an AI/ML engineer building GenAI systems with LangChain, RAG, and multi-agent LLMs.',
    url: 'https://rohitbedse.vercel.app/about',
    images: [{ url: 'https://rohitbedse.vercel.app/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
