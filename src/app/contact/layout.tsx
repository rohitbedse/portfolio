import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Rohit Bedse — Hire a Data Scientist',
  description:
    'Get in touch with Rohit Bedse for entry-level data science roles, ML internships, freelance analytics projects, or research collaboration. Based in Pune, India — open to remote and hybrid opportunities.',
  keywords: [
    'Hire Data Scientist',
    'Contact Rohit Bedse',
    'Data Science Internship',
    'Freelance Data Analyst',
    'ML Engineer Hire',
    'Data Scientist Pune',
    'Remote Data Scientist',
  ],
  openGraph: {
    title: 'Contact Rohit Bedse — Hire a Data Scientist',
    description:
      'Reach out for data science roles, internships, freelance analytics, or research collaboration. Available immediately.',
    url: 'https://rohitbedse.vercel.app/contact',
  },
  twitter: {
    title: 'Contact Rohit Bedse — Data Scientist',
    description:
      'Open to entry-level DS roles, internships, and freelance projects. Based in Pune, India — remote OK.',
  },
  alternates: {
    canonical: 'https://rohitbedse.vercel.app/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
