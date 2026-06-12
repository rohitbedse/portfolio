import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Rohit Bedse — Data Scientist from Pune, India',
  description:
    'Learn about Rohit Bedse\'s journey from Excel to end-to-end ML pipelines. Education at University of Pune, career timeline, values, and skills of an aspiring data scientist specializing in Python, SQL, and machine learning.',
  keywords: [
    'About Rohit Bedse',
    'Data Scientist Pune',
    'ML Engineer Bio',
    'Data Science Journey',
    'University of Pune',
    'Machine Learning Career',
    'Entry Level Data Scientist India',
  ],
  openGraph: {
    title: 'About Rohit Bedse — Data Scientist from Pune, India',
    description:
      'Discover the journey, values, and career timeline of Rohit Bedse — an entry-level Data Scientist passionate about ML and statistical analysis.',
    url: 'https://rohitbedse.vercel.app/about',
  },
  twitter: {
    title: 'About Rohit Bedse — Data Scientist from Pune',
    description:
      'Learn about Rohit Bedse\'s data science journey, education, and values.',
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
