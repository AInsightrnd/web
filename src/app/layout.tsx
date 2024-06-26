import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { ProviderWrapper } from '../components/ProviderWrapper'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - AInsight',
    default: 'AInsight - AI dental solution software',
  },
  description:
    'By revolutionizing the clinical process by significantly shortening the time required for orthodontic assessments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased scrollbar-hide', inter.variable)}
    >
      <body className="flex h-full flex-col">
        <ProviderWrapper>
          <div className="flex min-h-full flex-col">{children}</div>
        </ProviderWrapper>
      </body>
    </html>
  )
}
