import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import JsonLd from '@/components/JsonLd'

const SITE_URL = 'https://rohitbedse.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Rohit Bedse | AI/ML Engineer & Generative AI Developer',
    template: '%s | Rohit Bedse',
  },
  description:
    'Portfolio of Rohit Bedse — Computer Science undergraduate specializing in Generative AI systems. Building RAG-based and multi-agent LLM applications with LangChain, LangGraph, FAISS, and Gemini API. Explore AI/ML projects, skills, and technical insights.',
  keywords: [
    'Rohit Bedse',
    'AI ML Engineer',
    'Generative AI Developer',
    'RAG Systems',
    'LangChain',
    'LangGraph',
    'FAISS',
    'LLM Applications',
    'Machine Learning',
    'NLP',
    'Python',
    'SQL',
    'Portfolio',
    'Multi-Agent Systems',
    'Gemini API',
    'Prompt Engineering',
    'Data Science',
    'Pune India',
  ],
  authors: [{ name: 'Rohit Bedse', url: SITE_URL }],
  creator: 'Rohit Bedse',
  publisher: 'Rohit Bedse',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Rohit Bedse Portfolio',
    title: 'Rohit Bedse | AI/ML Engineer & Generative AI Developer',
    description:
      'Building RAG-based and multi-agent LLM applications. Explore GenAI projects, ML skills, and technical insights.',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Rohit Bedse — AI/ML Engineer & GenAI Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Bedse | AI/ML Engineer & Generative AI Developer',
    description:
      'Computer Science undergraduate building RAG systems, multi-agent LLM apps, and NLP solutions. Explore projects and skills.',
    creator: '@rohitbedse',
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: 'technology',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#030305" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6457695281611707"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: 'var(--dark)', color: 'var(--text-primary)' }}>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
