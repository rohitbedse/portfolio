import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Science Blog — EDA, ML, Statistics & Python Tutorials',
  description:
    'Read practical data science articles by Rohit Bedse: EDA frameworks, feature engineering techniques, A/B testing guides, time series analysis with ARIMA, SQL patterns for data scientists, clustering methods, and data visualization principles.',
  keywords: [
    'Data Science Blog',
    'Machine Learning Tutorials',
    'EDA Guide',
    'Feature Engineering',
    'A/B Testing Statistics',
    'ARIMA Time Series',
    'SQL for Data Scientists',
    'Python Data Science',
    'K-Means Clustering',
    'Data Visualization',
  ],
  openGraph: {
    title: 'Data Science Blog by Rohit Bedse',
    description:
      'Practical articles on EDA, ML techniques, statistics, and Python tutorials. Clear explanations with code examples.',
    url: 'https://rohitbedse.vercel.app/blog',
  },
  twitter: {
    title: 'Data Science Blog — Rohit Bedse',
    description:
      'Applied data science articles covering EDA, ML, statistics, and career advice for aspiring data scientists.',
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
