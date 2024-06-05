'use client'

import { useId } from 'react'
import Image from 'next/image'
import historys from '../../../images/company/history.png'

export default function history() {
 

  return (
    <section
    id="history"
    className="mx-4 grid max-w-mx grid-cols-1 items-start gap-x-2 gap-y-10 px-4 py-24 sm:px-6 sm:py-32  lg:grid-cols-4 lg:max-w-full"
  >

<div className="grid lg:grid-cols-1 gap-y-2 sm:grid-cols-1 sm:gap-y-40 lg:gap-x-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-50">
          연혁
          </h1>
        </div>

        <div className="sm:col-span-full lg:col-span-3 gap-4 sm:gap-6 lg:gap-8 flex justify-center rounded-lg bg-gray-800 max-w-4xl ">
            <div className="overscroll-y-contain aspect-w-2 p-4  lg:col-span-3 ">
            <div className="z-10 mx-5 md:mx-8">
             <Image
                    className="h-150%"
                    src={historys}
                    alt={""}
                  /></div>
              </div>
              </div>

  
          </section>  
)

}
