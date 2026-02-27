import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export const metadata: Metadata = {
  title: 'Rohit Bedse | Data Science Portfolio',
  description: 'Entry-level Data Scientist passionate about machine learning, statistical analysis, data visualization, and transforming raw data into actionable insights.',
  keywords: ['Data Science', 'Machine Learning', 'Python', 'SQL', 'Data Analysis', 'EDA', 'Entry Level', 'Portfolio'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohitbedse.dev',
    title: 'Rohit Bedse | Data Science Portfolio',
    description: 'Entry-level Data Scientist specializing in ML, statistical analysis, and data visualization.',
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
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: 'var(--dark)', color: 'var(--text-primary)' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
