import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Rohit Bedse — Hire an AI/ML Engineer & GenAI Developer',
  description:
    'Get in touch with Rohit Bedse for AI/ML engineering roles, GenAI internships, freelance RAG/LLM projects, or research collaboration. Specializing in LangChain, LangGraph, FAISS, and Gemini API. Based in Pune, Maharashtra — open to remote, hybrid, and on-site opportunities.',
  keywords: [
    'Hire AI ML Engineer',
    'Contact Rohit Bedse',
    'Rohit Bedse hire',
    'Rohit Bedse contact',
    'GenAI Developer Hire',
    'AI Internship',
    'Freelance LLM Developer',
    'RAG System Developer',
    'Remote AI Engineer India',
    'AI ML Engineer Pune',
    'LangChain Developer Hire',
  ],
  openGraph: {
    title: 'Contact Rohit Bedse — Hire an AI/ML Engineer & GenAI Developer',
    description:
      'Reach out to Rohit Bedse for AI/ML roles, GenAI internships, freelance RAG projects, or research collaboration. Available immediately.',
    url: 'https://rohitbedse.vercel.app/contact',
    images: [{ url: 'https://rohitbedse.vercel.app/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
