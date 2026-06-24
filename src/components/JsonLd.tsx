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
    image: 'https://rohitbedse.vercel.app/og-image.png',
    sameAs: [
      'https://github.com/rohitbedse',
      'https://linkedin.com/in/rohitbedse',
      'https://instagram.com/rohitbedse_',
      'https://x.com/rohitbedse',
    ],
    knowsAbout: [
      'Generative AI',
      'Large Language Models',
      'RAG Systems',
      'Retrieval Augmented Generation',
      'LangChain',
      'LangGraph',
      'FAISS',
      'Machine Learning',
      'Natural Language Processing',
      'Deep Learning',
      'Neural Networks',
      'Python',
      'SQL',
      'Prompt Engineering',
      'Scikit-learn',
      'Streamlit',
      'MLflow',
      'Word Embeddings',
      'TF-IDF',
      'Word2Vec',
      'BERT',
      'Sentiment Analysis',
      'Multi-Agent Systems',
      'Gemini API',
      'Data Science',
      'Data Analysis',
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
    name: 'Rohit Bedse — AI/ML Portfolio',
    url: 'https://rohitbedse.vercel.app',
    description:
      'AI/ML portfolio showcasing GenAI projects, RAG systems, multi-agent LLM applications, technical skills, certifications, and learning roadmap by Rohit Bedse.',
    author: {
      '@type': 'Person',
      name: 'Rohit Bedse',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://rohitbedse.vercel.app/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Rohit Bedse Portfolio',
    url: 'https://rohitbedse.vercel.app',
    mainEntity: {
      '@type': 'Person',
      name: 'Rohit Bedse',
      url: 'https://rohitbedse.vercel.app',
    },
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rohitbedse.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://rohitbedse.vercel.app/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Projects',
        item: 'https://rohitbedse.vercel.app/projects',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Skills',
        item: 'https://rohitbedse.vercel.app/skills',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Blog',
        item: 'https://rohitbedse.vercel.app/blog',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Learning',
        item: 'https://rohitbedse.vercel.app/learning',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Contact',
        item: 'https://rohitbedse.vercel.app/contact',
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
