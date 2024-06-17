import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="bg-ainbg-primary flex-grow">{children}</main>

        <Footer />
      </div>
    </>
  )
}
