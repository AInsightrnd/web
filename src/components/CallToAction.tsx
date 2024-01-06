'use client'
// import dynamic from 'next/dynamic'

import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

export function CallToAction() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // return this null to avoid hydration errors
  }

  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get your first actions
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Revolutionizing dental care through cutting-edge AI technology,
            our company offers an advanced diagnosis solution that transforms the landscape of dental healthcare.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <ReactPlayer url='https://youtu.be/6Y7EMllUPQI' light={true} />
          <ReactPlayer url='https://youtu.be/43SKuWEacM4' light={true} />
        </div>
      </Container>
    </section>
  )
}
