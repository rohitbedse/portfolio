'use client'

import { ReactNode } from 'react'

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <div style={{ overflowX: 'hidden', scrollBehavior: 'smooth' }}>
      {children}
    </div>
  )
}
