'use client'
// import dynamic from 'next/dynamic'



import { useEffect, useState } from 'react'
import { useId } from 'react'
import Image from 'next/image'
import certificate from '../../../images/paper/certificate.jpg'
import { Container } from '../../../components/Container'


export default function history() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 

  return (
    <>

        <section
          id="certification"
          className="select-none  grid grid-cols-1 lg:grid-cols-4 flex items-start gap-x-8 gap-y-10 px-4 py-24 sm:px-6 sm:py-32 
          lg:max-w-7xl lg:px-8 lg:mx-0 min-h-96 max-h-auto"
          >
      
      <div className="grid lg:grid-cols-1 gap-y-2 sm:grid-cols-1 sm:gap-y-46 lg:gap-x-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-50">
            특허
            </h1>
          <p className="text-gray-200 lg:max-w-sm  break-keep">
              자연 두부 위치에서 촬영된 3차원 CBCT 영상에서 기계 학습 기반 치아교정 진단을 위한 두부 계측 파라미터 도출방법
            </p>
          </div>
        
        
          <div className="sm:col-span-full lg:col-span-3 gap-4 sm:gap-6 lg:gap-8 flex 
            justify-center place-items-center rounded-lg bg-gray-800 max-w-4xl max-h-auto p-4 aspect-video ">
          <div className="overscroll-y-contain overflow-auto aspect-w-2 ">
          <div className="z-10 mx-5 w-full max-w-md ">

            <Image
              className="h-full"
              src={certificate}
              alt={""}
            />
          </div>
          </div>
          </div>      
        </section>

    </>
)

}