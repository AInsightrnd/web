'use client'

import { useId } from 'react'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'


export default function cbct() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])
 

  if (!mounted) {
    return null // return this null to avoid hydration errors
  }

  return (
    <section
    id="cbct"
        className="select-none  grid grid-cols-1 lg:grid-cols-4 flex items-start gap-x-8 gap-y-10 px-4 py-24 sm:px-6 sm:py-32 
        lg:max-w-7xl lg:px-8 lg:mx-0 min-h-96 max-h-auto"
        >

<div className="grid lg:grid-cols-1 gap-y-2 sm:grid-cols-1 sm:gap-y-46 lg:gap-x-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-50">
          CBCT 촬영법
          </h1>

            <a href="https://drive.google.com/file/d/1HJybymVa3NxcJDNmirOH0nsu3GBDWF0K/view?usp=sharing"  
            target='_blank' className="text-ainblue-600 lg:mx-0 underline py-2">
            다운로드</a>

        </div>


        <div className="sm:col-span-full lg:col-span-3 gap-4 sm:gap-6 lg:gap-8 flex 
            justify-center place-items-center rounded-lg bg-gray-800 max-w-4xl max-h-auto p-4 aspect-video ">

        <ReactPlayer 
            className="w-full h-full object-cover "
          url='https://youtu.be/ZKjW-JfD0TA' light={true} />

          </div>

  
          </section>  
)

}
