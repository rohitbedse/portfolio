export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rohit Bedse',
    url: 'https://rohitbedse.vercel.app',
    jobTitle: 'Data Scientist',
    description:
      'Entry-level Data Scientist from Pune, India specializing in machine learning, statistical analysis, Python, SQL, and data visualization.',
    sameAs: [
      'https://github.com/rohitbedse',
      'https://linkedin.com/in/rohitbedse',
      'https://twitter.com/rohitbedse',
    ],
    knowsAbout: [
      'Data Science',
      'Machine Learning',
      'Python',
      'SQL',
      'Pandas',
      'Scikit-learn',
      'XGBoost',
      'Data Visualization',
      'Statistical Analysis',
      'Exploratory Data Analysis',
      'Time Series Forecasting',
      'Natural Language Processing',
      'Deep Learning',
      'A/B Testing',
      'Feature Engineering',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Pune',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rohit Bedse Portfolio',
    url: 'https://rohitbedse.vercel.app',
    description:
      'Data Science portfolio showcasing ML projects, technical skills, blog articles, and learning roadmap by Rohit Bedse.',
    author: {
      '@type': 'Person',
      name: 'Rohit Bedse',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
