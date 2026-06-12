import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Rohit Bedse — Hire an AI/ML Engineer',
  description:
    'Get in touch with Rohit Bedse for AI/ML engineering roles, GenAI internships, freelance RAG/LLM projects, or research collaboration. Based in Pune, Maharashtra — open to remote and hybrid opportunities.',
  keywords: [
    'Hire AI ML Engineer',
    'Contact Rohit Bedse',
    'GenAI Developer Hire',
    'AI Internship',
    'Freelance LLM Developer',
    'RAG System Developer',
    'Remote AI Engineer India',
  ],
  openGraph: {
    title: 'Contact Rohit Bedse — Hire an AI/ML Engineer',
    description:
      'Reach out for AI/ML roles, GenAI internships, freelance RAG projects, or research collaboration. Available immediately.',
    url: 'https://rohitbedse.vercel.app/contact',
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
