import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Skills — Python, ML, SQL, Data Visualization & More',
  description:
    'Rohit Bedse\'s technical skill set across 36+ tools: Python, Pandas, Scikit-learn, XGBoost, SQL, Tableau, Power BI, Streamlit, TensorFlow, and more. View proficiency levels in programming, ML, statistics, visualization, and cloud deployment.',
  keywords: [
    'Data Science Skills',
    'Python Developer',
    'Machine Learning Skills',
    'SQL Expert',
    'Pandas',
    'Scikit-learn',
    'XGBoost',
    'Tableau',
    'Power BI',
    'Data Visualization',
    'Technical Skills Portfolio',
  ],
  openGraph: {
    title: 'Technical Skills — Rohit Bedse',
    description:
      '36+ tools across Python, ML, SQL, data viz, and cloud. Interactive skill constellation and detailed proficiency grid.',
    url: 'https://rohitbedse.vercel.app/skills',
  },
  twitter: {
    title: 'Technical Skills — Rohit Bedse',
    description:
      'Explore proficiency levels across Python, ML, SQL, data visualization, and cloud deployment tools.',
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/skills',
  },
}

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
