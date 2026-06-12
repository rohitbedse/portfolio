import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Rohit Bedse — AI/ML Engineer from Pune, India',
  description:
    'Learn about Rohit Bedse — Computer Science undergraduate at SSVPS B.S Deore College of Engineering, Dhule. Specializing in Generative AI, RAG systems, multi-agent LLM applications. AI/ML Trainee at Edunet Foundation (AICTE & IBM SkillsBuild).',
  keywords: [
    'About Rohit Bedse',
    'AI ML Engineer Pune',
    'GenAI Developer',
    'SSVPS Dhule',
    'Computer Science Student',
    'Edunet Foundation',
    'IBM SkillsBuild',
  ],
  openGraph: {
    title: 'About Rohit Bedse — AI/ML Engineer from Pune, India',
    description:
      'Discover the journey, education, certifications, and career timeline of Rohit Bedse — an AI/ML engineer building GenAI systems.',
    url: 'https://rohitbedse.vercel.app/about',
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
