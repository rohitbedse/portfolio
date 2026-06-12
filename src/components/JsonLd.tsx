export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rohit Bedse',
    url: 'https://rohitbedse.vercel.app',
    jobTitle: 'AI/ML Engineer & Generative AI Developer',
    description:
      'Computer Science undergraduate specializing in Generative AI systems, building RAG-based and multi-agent LLM applications. Strong foundation in machine learning, NLP, and scalable deployment.',
    email: 'rbedse81@gmail.com',
    telephone: '+918698533040',
    sameAs: [
      'https://github.com/rohitbedse',
      'https://linkedin.com/in/rohitbedse',
    ],
    knowsAbout: [
      'Generative AI',
      'Large Language Models',
      'RAG Systems',
      'LangChain',
      'LangGraph',
      'FAISS',
      'Machine Learning',
      'Natural Language Processing',
      'Python',
      'SQL',
      'Prompt Engineering',
      'Scikit-learn',
      'Streamlit',
      'MLflow',
      'Word Embeddings',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'SSVPS B.S Deore College of Engineering, Dhule',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Artificial Intelligence Fundamentals',
        credentialCategory: 'Certificate',
        recognizedBy: { '@type': 'Organization', name: 'IBM' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AWS Educate Introduction to Generative AI',
        credentialCategory: 'Certificate',
        recognizedBy: { '@type': 'Organization', name: 'Amazon Web Services' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Machine Learning and Deep Learning',
        credentialCategory: 'Certificate',
        recognizedBy: { '@type': 'Organization', name: 'IBM' },
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rohit Bedse Portfolio',
    url: 'https://rohitbedse.vercel.app',
    description:
      'AI/ML portfolio showcasing GenAI projects, RAG systems, multi-agent LLM applications, technical skills, and learning roadmap by Rohit Bedse.',
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
