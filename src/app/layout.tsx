import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rohit Bedse | ML Engineer & GenAI Builder',
  description: 'Machine Learning Engineer specializing in GenAI, RAG systems, and LLM orchestration. Building ML systems from mathematical intuition to production.',
  keywords: ['Machine Learning', 'GenAI', 'LLM', 'RAG', 'ML Engineer', 'AI'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohitbedse.dev',
    title: 'Rohit Bedse | ML Engineer & GenAI Builder',
    description: 'Machine Learning Engineer specializing in GenAI, RAG systems, and LLM orchestration.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-dark-bg text-gray-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
