import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import Image from 'next/image'
import patentImage from '@/images/company/patent.png'
import treatiseImage from '@/images/company/treatise.png'
import bookImage from '@/images/company/book.png'

export function Awarded() {

  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      {/* <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div> */}
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Key achievements
          </h2>
        </div>
        <div className="mt-12 space-x-8 flex justify-center">
          <Image
            className="w-1/4"
            src={patentImage}
            alt={""}
          />
          <Image
            className="w-1/4"
            src={treatiseImage}
            alt={""}
          />
          <Image
            className="w-1/4"
            src={bookImage}
            alt={""}
          />
        </div>
      </Container>
    </section>
  )
}
