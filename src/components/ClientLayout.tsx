'use client'

import { ReactNode, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import Preloader from '@/components/Preloader'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScroll from '@/components/SmoothScroll'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <CustomCursor />
      <ScrollProgress />
      {!isLoading && (
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Chatbot />
        </SmoothScroll>
      )}
    </>
  )
}
