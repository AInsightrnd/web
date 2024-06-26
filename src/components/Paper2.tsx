'use client'
// import dynamic from 'next/dynamic'



import { useEffect, useState } from 'react'
import { useId } from 'react'
import Image from 'next/image'
import paper2 from '@/images/paper/paper2.png'

// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

export function Paper2() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // return this null to avoid hydration errors
  }

  return (
    <section
        id="paper2"
        className="mx-4 grid max-w-mx grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32  lg:grid-cols-3 lg:max-w-full"
        >
    
    
    <div className="grid lg:grid-cols-1 gap-y-2 sm:grid-cols-1 sm:gap-y-46 lg:gap-x-4">

    
                <p className=" text-base font-medium text-gray-100 lg:max-w-sm">
                Novel Procedure for Automatic Registration between Cone-Beam Computed Tomography and Intraoral Scan Data Supported with 3D Segmentation
                                </p>
    
    
    
                <a href="https://drive.google.com/file/d/1qYhfbO5V9Nc5XbVg5M8jd33bmdaYqS29/view?usp=sharing" 
                target='_blank' className="text-ainblue-600 lg:mx-0 underline py-2">다운로드</a>
    
            </div>
    
    
            <div className="sm:col-span-full lg:col-span-2 gap-4 sm:gap-6 lg:gap-8 flex justify-center 
            rounded-lg bg-gray-800 max-w-fit max-h-full p-4">
            <div className="overscroll-y-contain overflow-auto aspect-w-2 ">
            <div className="z-10 mx-5 w-full max-w-md ">
    
             <Image
                    className="h-full"
                    src={paper2}
                    alt={""}
                  /></div>
              </div>
    
              </div>
      
              </section>  
)

}