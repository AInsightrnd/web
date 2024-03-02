import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import Image from 'next/image'
import patentImage from '@/images/company/patent.png'
import treatiseImage from '@/images/company/treatise.png'
import bookImage from '@/images/company/book.png'

export function Docs() {

  return (
    <section
      id="docs"
      className="relative overflow-hidden bg-ainbg-primary py-20 sm:py-28"
    >
      {/* <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div> */}
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-50 sm:text-4xl">
            매뉴얼/논문
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
