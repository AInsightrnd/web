'use client'
// import dynamic from 'next/dynamic'



import { useEffect, useState } from 'react'
import { useId } from 'react'
import Image from 'next/image'
import paper3 from '@/images/paper/paper3.png'

// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

export function Paper3() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // return this null to avoid hydration errors
  }

  return (
    <section
        id="paper3"
        className="mx-4 grid max-w-mx grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32  lg:grid-cols-3 lg:max-w-full"
        >
    
    
    <div className="grid lg:grid-cols-1 gap-y-2 sm:grid-cols-1 sm:gap-y-46 lg:gap-x-4">

    
                <p className=" text-base font-medium text-gray-100 lg:max-w-sm">
                Assessment of anterior-posterior jaw relationships in Korean adults using the nasion true vertical plane in cone-beam computed tomography images  
                                              </p>
    

                <a href="https://drive.google.com/file/d/1WdgGV3YfW23rTh4dURIOrsXmzFuVCBi6/view?usp=sharing"  target='_blank' className="text-ainblue-600 lg:mx-0 underline py-2">
                다운로드</a>
    
            </div>
    
    
            <div className="sm:col-span-full lg:col-span-2 gap-4 sm:gap-6 lg:gap-8 flex justify-center 
            rounded-lg bg-gray-800 max-w-fit max-h-full p-4">
            <div className="overscroll-y-contain overflow-auto aspect-w-2 ">
            <div className="z-10 mx-5 w-full max-w-md ">
    
             <Image
                    className="h-full"
                    src={paper3}
                    alt={""}
                  /></div>
              </div>
    
              </div>
      
              </section>  
)

}