import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: {
    default: 'Rohit Bedse | AI Engineer & Data Scientist',
    template: '%s | Rohit Bedse',
  },
  description:
    'Rohit Bedse is an AI Engineer and Data Scientist specializing in Multi-Agent Systems, RAG architectures, and Generative AI. Building production-grade ML systems from mathematical foundations.',
  keywords: [
    'Rohit Bedse',
    'AI Engineer',
    'Data Scientist',
    'Machine Learning Engineer',
    'Generative AI',
    'RAG',
    'Multi-Agent Systems',
    'LLM Orchestration',
    'LangGraph',
    'LangChain',
  ],
  authors: [{ name: 'Rohit Bedse', url: 'https://rohitbedse.dev' }],
  creator: 'Rohit Bedse',
  metadataBase: new URL('https://rohitbedse.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohitbedse.dev',
    title: 'Rohit Bedse | AI Engineer & Data Scientist',
    description: 'Building production-grade AI systems — from mathematical foundations to deployed GenAI pipelines.',
    siteName: 'Rohit Bedse Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rohit Bedse - AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Bedse | AI Engineer & Data Scientist',
    description: 'Building production-grade AI systems — from mathematical foundations to deployed GenAI pipelines.',
    creator: '@rohitbedse',
    images: ['/og-image.png'],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rohit Bedse',
  url: 'https://rohitbedse.dev',
  jobTitle: 'AI Engineer & Data Scientist',
  description: 'AI Engineer specializing in Multi-Agent Systems, RAG architectures, and Generative AI.',
  sameAs: ['https://github.com/rohitbedse', 'https://linkedin.com/in/rohitbedse'],
  knowsAbout: [
    'Machine Learning',
    'Generative AI',
    'RAG',
    'LLM Orchestration',
    'LangGraph',
    'Python',
    'Data Science',
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={spaceGrotesk.variable}>
      <body className="bg-bg text-ink-secondary antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
