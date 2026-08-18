import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import ChatBot from '@/components/ChatBot'

export const metadata: Metadata = {
  title: 'Rohit Bedse | ML Engineer & GenAI Builder',
  description:
    'Machine Learning Engineer specializing in multi-agent AI systems, RAG architectures, and LLM orchestration. Building production-grade AI from mathematical foundations.',
  keywords: [
    'Machine Learning',
    'GenAI',
    'LLM',
    'RAG',
    'ML Engineer',
    'AI',
    'Multi-Agent Systems',
    'LangChain',
    'Python',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohitbedse.dev',
    title: 'Rohit Bedse | ML Engineer & GenAI Builder',
    description:
      'Building production-grade AI systems — from mathematical foundations to deployed GenAI pipelines.',
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
        <Navbar />
        <main>{children}</main>
        <ChatBot />
      </body>
    </html>
  )
}
