import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import ChatBot from '@/components/ChatBot'
import SEO from '@/components/SEO'

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
    'AI Engineering',
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-deep text-gray-200 antialiased">
        <SEO />
        <Navbar />
        <main>{children}</main>
        <ChatBot />
      </body>
    </html>
  )
}
