'use client'
// import dynamic from 'next/dynamic'



import { useEffect, useState } from 'react'
import { useId } from 'react'
import ReactPlayer from 'react-player'

// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

export function Manual2() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // return this null to avoid hydration errors
  }

  return (
    <section
        id="Manual2"
        className="mx-4 grid max-w-mx grid-cols-1 items-start gap-x-8 
        gap-y-16 px-4 py-24 sm:px-6 sm:py-32  lg:grid-cols-4 lg:max-w-full min-h-96 max-h-screen"
        >

      <div className="grid lg:grid-cols-1 gap-y-2 sm:grid-cols-1 sm:gap-y-46 lg:gap-x-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-50">
              활용 매뉴얼
              </h1>
    
             <a href="https://drive.google.com/file/d/1XpYe8KHJFciSypnQHhDc5TaJIzYzZD49/view?usp=sharing"  
            target='_blank' className="text-ainblue-600 lg:mx-0 underline py-2">
            다운로드</a>
    
            </div>
    
    
            <div className="sm:col-span-full lg:col-span-3 gap-4 sm:gap-6 lg:gap-8 flex 
            justify-center place-items-center rounded-lg bg-gray-800 max-w-4xl max-h-auto p-4 aspect-video ">

              <ReactPlayer 
                  className="w-full h-full object-cover "
                url='https://youtu.be/5bLEwyrJ62E' light={true} />

                </div>
                    
              </section>  
)

}