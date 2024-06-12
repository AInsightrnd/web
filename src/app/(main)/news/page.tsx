'use client'

import { useId } from 'react'


export default function about() {
 

  return (
    <section
    id="news"
    className="select-none mx-4 grid max-w-mx grid-cols-1 items-start gap-x-8 gap-y-10 px-4 py-24 sm:px-6 sm:py-32  lg:grid-cols-4 lg:max-w-full"
  >

  <div className="grid lg:grid-cols-1 gap-y-2 sm:grid-cols-1 sm:gap-y-40 lg:gap-x-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-50">
          소식
          </h1>
        </div>


        <div className="sm:col-span-full lg:col-span-3 gap-4 sm:gap-6 lg:gap-8 flex justify-center rounded-lg bg-gray-800 max-w-4xl ">
        <div className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
        <div className="overscroll-y-contain overflow-auto aspect-w-2 p-6  lg:col-span-3 aspect-video">
          <p className="text-gray-200 break-keep">
      
      
          </p>
        </div>
        </div>
          </div>

  
          </section>  
)

}
