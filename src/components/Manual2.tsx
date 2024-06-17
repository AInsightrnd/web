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
        className="select-none max-w-2xl grid grid-cols-1 lg:grid-cols-4 flex items-start gap-x-8 gap-y-10 px-4 py-24 sm:px-6 sm:py-32 
        lg:max-w-7xl sm:max-w-max lg:px-8 lg:mx-0 min-h-96 max-h-auto"
        >

      <div className="grid gap-y-2 sm:col-span-full sm:gap-y-46 lg:gap-x-4 lg:col-span-1 ">
              <h1 className="text-3xl font-bold tracking-tight text-gray-50">
              활용 매뉴얼
              </h1>
    
             <a href="https://drive.google.com/file/d/1XpYe8KHJFciSypnQHhDc5TaJIzYzZD49/view?usp=sharing"  
            target='_blank' className="text-ainblue-600 lg:mx-0 underline py-2">
            다운로드</a>
    
            </div>
    
    
          <div className="sm:col-span-full lg:col-span-3 gap-4 sm:gap-6 lg:gap-8 flex 
             place-items-center justify-center rounded-lg bg-gray-800 max-h-fit p-4  aspect-video">

              <ReactPlayer 
                  className="min-w-auto max-h-auto object-cover  "
                url='https://youtu.be/5bLEwyrJ62E' light={true} />

                  </div>

              </section>  
)

}