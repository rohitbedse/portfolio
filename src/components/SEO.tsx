'use client'

import Head from 'next/head'

export default function SEO() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rohit Bedse',
    url: 'https://rohitbedse.dev',
    jobTitle: 'AI Engineer & Data Scientist',
    description: 'AI Engineer specializing in Multi-Agent Systems, RAG architectures, and Generative AI.',
    sameAs: [
      'https://github.com/rohitbedse',
      'https://linkedin.com/in/rohitbedse',
    ],
    knowsAbout: [
      'Machine Learning',
      'Generative AI',
      'RAG',
      'LLM Orchestration',
      'LangGraph',
      'Python',
      'Data Science',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
