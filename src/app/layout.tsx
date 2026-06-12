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
    default: 'Rohit Bedse | Data Scientist & ML Engineer Portfolio',
    template: '%s | Rohit Bedse',
  },
  description:
    'Portfolio of Rohit Bedse — entry-level Data Scientist from Pune, India specializing in machine learning, statistical analysis, Python, SQL, and data visualization. Explore ML projects, case studies, and technical blog posts.',
  keywords: [
    'Rohit Bedse',
    'Data Scientist',
    'Machine Learning',
    'Python',
    'SQL',
    'Data Analysis',
    'EDA',
    'Portfolio',
    'Entry Level Data Scientist',
    'ML Engineer',
    'Pune India',
    'Scikit-learn',
    'XGBoost',
    'Data Visualization',
    'Pandas',
    'Data Science Portfolio',
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
    title: 'Rohit Bedse | Data Scientist & ML Engineer Portfolio',
    description:
      'Entry-level Data Scientist specializing in ML, statistical analysis, and data visualization. Explore projects, skills, and insights.',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Rohit Bedse — Data Scientist Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Bedse | Data Scientist & ML Engineer Portfolio',
    description:
      'Entry-level Data Scientist from Pune, India. Explore ML projects, data analysis case studies, and technical insights.',
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
