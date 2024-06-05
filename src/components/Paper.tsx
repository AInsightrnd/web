'use client'
// import dynamic from 'next/dynamic'



import { useEffect, useState } from 'react'
import { useId } from 'react'
import Image from 'next/image'
import paper1 from '../images/paper/paper01.png'

// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

export function Paper() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // return this null to avoid hydration errors
  }

  return (
    <>
    <section
        id="paper"
        className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-3 lg:max-w-max"
      >
    
      <div className="grid lg:grid-cols-1 gap-y-2 sm:grid-cols-1 sm:gap-y-46 lg:gap-x-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-50">
              논문
              </h1>
    
                <p className=" text-base font-medium text-gray-100">
                Automated Analysis of Three-dimensional CBCT Images Taken in Natural Head Position That Combines Facial Pro
                </p>
    
    
    
              <a href="https://drive.google.com/file/d/15rY7fvbR66waFg9acxJvroFkX3KsOeD1/view?usp=sharing"  
              target='_blank' className="text-ainblue-600 lg:mx-0 underline py-2">
                다운로드</a>
    
            </div>
    
    
            <div className="sm:col-span-full lg:col-span-2 gap-4 sm:gap-6 lg:gap-8 flex justify-center rounded-lg bg-gray-800 ">
            <div className="overscroll-y-contain overflow-auto aspect-w-2 ">
            <div className="z-10 mx-5 w-full max-w-md ">
    
             <Image
                    className="h-full"
                    src={paper1}
                    alt={""}
                  /></div>
              </div>
    
              </div>
      
              </section>  
              </>
            )
          }