import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProviderWrapper } from './ProviderWrapper'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProviderWrapper>
        <div className="flex flex-col h-screen justify-between">
          <Header />
          <main className="bg-ainbg-primary flex-grow">{children}</main>

          <Footer />
        </div>
      </ProviderWrapper>
    </>
  )
}
