import Link from 'next/link'


import { Logo } from '@/components/Logo'
import { ImageLogo } from './ImageLogo'

export function AuthLayout({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-full overflow-hidden pt-16 sm:py-2">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <Link href="/" aria-label="Home">
          {/* <Logo className="mx-auto h-10 w-auto" /> */}
          <ImageLogo className='mx-auto mt-4 h-10 w-auto' />
        </Link>
        <div className="relative mt-12 sm:mt-16">

          <h1 className="text-center text-2xl font-medium tracking-tight text-gray-800">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 text-center font-medium text-lg text-gray-500">{subtitle}</p>
          )}
        </div>
        <div className="-mx-4 mt-8 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-sm sm:p-14">
          {children}
        </div>
      </div>
      
    </main>
  )
}
