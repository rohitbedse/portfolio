import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Science Projects — Churn Prediction, Forecasting & More',
  description:
    'Explore Rohit Bedse\'s data science portfolio: Customer Churn Prediction (94.7% accuracy), Sales Forecasting with ARIMA, Market Segmentation with K-Means, Netflix EDA, A/B Testing Framework, and House Price Regression.',
  keywords: [
    'Data Science Projects',
    'Machine Learning Projects',
    'Customer Churn Prediction',
    'Sales Forecasting ARIMA',
    'Market Segmentation K-Means',
    'Python ML Projects',
    'Portfolio Projects',
    'Kaggle',
    'Scikit-learn Projects',
    'XGBoost Projects',
  ],
  openGraph: {
    title: 'Data Science Projects by Rohit Bedse',
    description:
      'Real-world ML projects: Churn Prediction (94.7% ACC), Sales Forecasting, Market Segmentation, and more. End-to-end data science workflows.',
    url: 'https://rohitbedse.vercel.app/projects',
  },
  twitter: {
    title: 'Data Science Projects — Rohit Bedse',
    description:
      'Explore ML projects including churn prediction, time-series forecasting, clustering, and EDA case studies.',
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/projects',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
