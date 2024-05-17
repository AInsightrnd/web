import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="flex flex-col ">
      <Header />
      <main className="relative bg-ainbg-secondary">{children}</main>

      <Footer />
      </div>
    </>
  )
}
