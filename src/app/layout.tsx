import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import JsonLd from '@/components/JsonLd'

const SITE_URL = 'https://rohitbedse.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Rohit Bedse | AI/ML Engineer & Generative AI Developer — Portfolio',
    template: '%s | Rohit Bedse',
  },
  description:
    'Rohit Bedse — AI/ML Engineer & Generative AI Developer. Computer Science undergraduate specializing in Generative AI systems, building RAG-based and multi-agent LLM applications with LangChain, LangGraph, FAISS, and Gemini API. Explore AI/ML projects, skills, certifications, blog, and technical insights. Based in Pune, Maharashtra, India.',
  keywords: [
    // Name variations (E-E-A-T signal — most important!)
    'Rohit Bedse',
    'Rohit Bedse portfolio',
    'Rohit Bedse AI',
    'Rohit Bedse ML',
    'Rohit Bedse developer',
    'Rohit Bedse engineer',
    'Rohit Bedse GenAI',
    'Rohit Bedse Pune',
    'Rohit Bedse resume',
    'Rohit Bedse projects',
    // Core skills
    'AI ML Engineer',
    'Generative AI Developer',
    'Machine Learning Engineer',
    'Data Scientist',
    'Full Stack AI Developer',
    // Technologies
    'RAG Systems',
    'LangChain',
    'LangGraph',
    'FAISS',
    'LLM Applications',
    'Gemini API',
    'Multi-Agent Systems',
    'Prompt Engineering',
    // ML/NLP
    'Machine Learning',
    'Natural Language Processing',
    'NLP',
    'Deep Learning',
    'Neural Networks',
    'Scikit-learn',
    'TF-IDF',
    'Word2Vec',
    'BERT',
    'Sentiment Analysis',
    'Text Classification',
    // Languages & Tools
    'Python',
    'SQL',
    'Streamlit',
    'MLflow',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    // General
    'Portfolio',
    'Data Science',
    'AI Portfolio',
    'ML Portfolio',
    'Computer Science',
    'Pune India',
    'Maharashtra',
    'SSVPS Dhule',
    'IBM SkillsBuild',
    'AWS Generative AI',
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
    siteName: 'Rohit Bedse — AI/ML Portfolio',
    title: 'Rohit Bedse | AI/ML Engineer & Generative AI Developer',
    description:
      'Building RAG-based and multi-agent LLM applications. Explore GenAI projects, ML skills, certifications, and technical insights by Rohit Bedse.',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Rohit Bedse — AI/ML Engineer & Generative AI Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Bedse | AI/ML Engineer & Generative AI Developer',
    description:
      'Computer Science undergraduate building RAG systems, multi-agent LLM apps, and NLP solutions. Explore AI/ML projects, skills, and blog.',
    creator: '@rohitbedse',
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: 'technology',
  manifest: '/manifest.json',
  other: {
    'google-site-verification': 'googleefd96824e1cbf141',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#030305" />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6457695281611707"
          crossOrigin="anonymous"
        ></script>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* DNS Prefetch for external resources — faster loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Font preconnect + load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: 'var(--dark)', color: 'var(--text-primary)' }}>
        {/* Google Analytics (GA4) — replace G-B1GM22NV3R with your Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B1GM22NV3R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              analytics_storage: 'granted',
            });
            gtag('config', 'G-B1GM22NV3R', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
