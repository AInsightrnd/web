'use client'
// import dynamic from 'next/dynamic'



import { useEffect, useState } from 'react'
import { useId } from 'react'
import { Container } from '../../../components/Container'


// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

export default function Contactus() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 

  return (
    <>
      <Container className="overflow-hidden mx-auto">
        <section
            id="contactus"
            className="mx-auto max-w-2xl items-start content-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-3 lg:max-w-max"
          >
        

                  <h1 className="text-3xl font-bold tracking-tight text-gray-50 text-center">
                  Contact
                  </h1>
        
                    <div className="mt-6 text-base font-medium text-gray-100 mt-4 ">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <div className="text-sm font-bold leading-6">TEL</div>
            <div className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">02-2677-3579</div>

            <div className="text-sm font-bold leading-6 mt-2">FAX</div>
            <div className="mt-1 text-sm leading-6 sm:col-span-2 mt-2">02-6455-3549</div>

            <div className="text-sm font-bold leading-6 mt-2">Mobile</div>
            <div className="mt-1 text-sm leading-6 sm:col-span-2 mt-2">010-7490-3579</div>

            <div className="text-sm font-bold leading-6 mt-2">Email</div>
            <div className="mt-1 text-sm leading-6 sm:col-span-2 mt-2">admin@ainsightortho.com</div>

            <div className="text-sm font-bold leading-6 mt-2">Kakao</div>
            <div className="mt-1 text-sm leading-6 sm:col-span-2 mt-2">          
                <a href="https://pf.kakao.com/_wMxgxiG" target='_blank' className="text-gray-200 lg:mx-0 underline ">
                바로가기 </a></div>
          </div> </div>
        

          
        </section>
      </Container>
    </>
)

}