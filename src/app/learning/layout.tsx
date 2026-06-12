import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learning Roadmap — Data Science Journey & Progress',
  description:
    'Follow Rohit Bedse\'s transparent data science learning path: from Python fundamentals and SQL analytics through supervised ML and deep learning to MLOps and Generative AI. Track real-time progress across 6 learning phases.',
  keywords: [
    'Data Science Learning Roadmap',
    'Machine Learning Learning Path',
    'How to Learn Data Science',
    'Data Science Career Path',
    'Python Learning Journey',
    'ML Roadmap 2026',
    'Deep Learning Roadmap',
    'MLOps Learning',
  ],
  openGraph: {
    title: 'Data Science Learning Roadmap — Rohit Bedse',
    description:
      'A structured, transparent view of a data science learning journey with real-time progress tracking across 6 phases.',
    url: 'https://rohitbedse.vercel.app/learning',
  },
  twitter: {
    title: 'DS Learning Roadmap — Rohit Bedse',
    description:
      'From Python basics to Generative AI — follow the transparent data science learning path with progress tracking.',
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/learning',
  },
}

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
