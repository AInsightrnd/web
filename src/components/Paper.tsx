'use client'
// import dynamic from 'next/dynamic'



import { useEffect, useState } from 'react'
import { useId } from 'react'
import Image from 'next/image'


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
        className="  grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 py-24 sm:px-6 sm:py-32 sm:mx-auto 
        lg:max-w-7xl lg:px-8 lg:grid-cols-4 lg:mx-0 "
      >
      <div className="grid lg:grid-cols-1 gap-y-2 sm:grid-cols-1 sm:gap-y-46 lg:gap-x-4 items-start">
              <h1 className="text-3xl font-bold tracking-tight text-gray-50">
              논문
              </h1>

            </div>
    
  
        <div className="sm:col-span-full lg:col-span-3 gap-4 sm:gap-6 lg:gap-8 overscroll-y-contain overflow-auto max-h-[calc(theme('dvh.1')*0.6]">
            <div class="flex justify-center max-w-4xl gap-y-2 flex grid cols-1 justify-items-start rounded-lg bg-gray-800">       
         
                 <Button 
                     variant="dls"
                     color= "gray" 
                     href="https://drive.google.com/file/d/15rY7fvbR66waFg9acxJvroFkX3KsOeD1/view?usp=sharing"
                     target='_blank' 
                     >
                     <span className="ml-0">
                        Automated Analysis of Three-dimensional CBCT Images Taken in Natural Head Position That Combines Facial Pro
                     </span>
                     <p className="mt-2 px-2 text-sm text-gray-400 leading-snug "> 
                     2021, 8, PREPRINT (Version 1) available at Research Square
                     </p>
                  </Button>
                </div>

                <div class="flex justify-center max-w-4xl gap-y-2 flex grid cols-1 justify-items-start rounded-lg bg-gray-800 mt-5">       
                 <Button 
                     variant="dls"
                     color= "gray" 
                     href="https://drive.google.com/file/d/1qYhfbO5V9Nc5XbVg5M8jd33bmdaYqS29/view?usp=sharing"
                     target='_blank' 
                     >
                     <span className="ml-0"> Novel Procedure for Automatic Registration between Cone-Beam Computed Tomography and Intraoral Scan Data Supported with 3D Segmentation
                     </span>
                     <p className="mt-2 px-2 text-sm text-gray-400 leading-snug "> 
                     Bioengineering 2023, 10, 1326.
                     </p>
                  </Button>
                </div>

                <div class="flex justify-center max-w-4xl gap-y-2 flex grid col-span-1 justify-items-start rounded-lg bg-gray-800 mt-5">       
                 <Button 
                     variant="dls"
                     color= "gray" 
                     href="https://drive.google.com/file/d/1Dt4CHRJsi2FiX5EaPqUTvXADg-MoxX1_/view?usp=sharing"
                     target='_blank' 
                     >
                     <span className="ml-0"> Assessment of anterior-posterior jaw relationships in Korean adults using the nasion true vertical plane in cone-beam computed tomography images  
                     </span>
                     <p className="mt-2 px-2 text-sm text-gray-400 leading-snug "> 
                     Korean J Orthod 2016;46(3):163-170
                     </p>
                  </Button>
                </div>

                <div class="flex justify-center max-w-4xl gap-y-2 flex grid col-span-1 justify-items-start rounded-lg bg-gray-800 mt-5">       
                 <Button 
                     variant="dls"
                     color= "gray" 
                     href="https://drive.google.com/file/d/1O4QIkLAqLBBqZY-rs-8arNq5Zn5PhoYx/view?usp=sharing"
                     target='_blank' 
                     >
                     <span className="ml-0">
                     Automated analysis of three-dimensional CBCT images taken in natural head position that combines facial profile processing and multiple deep-learning models
                     </span>
                     <p className="mt-2 px-2 text-sm text-gray-400 leading-snug "> 
                     Computer Methods and Programs in Biomedicine, Volume 226, 2022, 107123
                     </p>
                  </Button>
                </div>

                <div class="flex justify-center max-w-4xl gap-y-2 flex grid col-span-1 justify-items-start rounded-lg bg-gray-800 mt-5">       
                 <Button 
                     variant="dls"
                     color= "gray" 
                     href="https://drive.google.com/file/d/1dTEw5MuNXlQcSf31lQXs4T8yt3pNklo7/view?usp=sharing"
                     target='_blank' 
                     >
                     <span className="ml-0">
                     Normative Upper Incisor Inclination Relative to the True Horizontal Plane (THP) on Cone-beam Computed Tomography (CBCT) Images in Korean Adults
                     </span>
                     <p className="mt-2 px-2 text-sm text-gray-400 leading-snug "> 
                     Korean J Lingual Orthod 2016;5(1):10-17
                     </p>
                  </Button>
                </div>

                <div class="flex justify-items-start max-w-4xl gap-y-2 flex grid col-span-1  rounded-lg bg-gray-800 mt-5">       
                 <Button 
                     variant="dls"
                     color= "gray" 
                     href="https://drive.google.com/file/d/1lSaeR4wKkTCF_qowBDHKrbS7Dm4ietLI/view?usp=sharing"
                     target='_blank' 
                     >
                     <span className="ml-0">
                     Correction of Lip Protrusion with Lingual Brackets and Palatal Anchorage
                     </span>
                     <p className="mt-2 px-2 text-sm text-gray-400 leading-snug "> 
                     J Clin Orthod. 2013 Oct;47(10):614-23.
                     </p>
                  </Button>
                </div>

                <div class="flex justify-items-start max-w-4xl gap-y-2 flex grid col-span-1  rounded-lg bg-gray-800 mt-5">       
                 <Button 
                     variant="dls"
                     color= "gray" 
                     href="https://drive.google.com/file/d/1PAHHOKyFqqpyimmDo4KLbyQrI26V1kLW/view?usp=sharing"
                     target='_blank' 
                     >
                     <span className="ml-0">
                     Orthognathic Surgical Planning Using Nasion True Vertical and True Horizontal Lines
                     </span>
                     <p className="mt-2 px-2 text-sm text-gray-400 leading-snug "> 
                     J Clin Orthod. 2012 Jul;46(7):407-15.
                     </p>
                  </Button>
                </div>

                <div class="flex justify-center max-w-4xl gap-y-2 flex grid col-span-1 justify-items-start rounded-lg bg-gray-800 mt-5">       
                 <Button 
                     variant="dls"
                     color= "gray" 
                     href="https://drive.google.com/file/d/1hrV1A7d6b9kw4SKHTOtkDnkQrdxcJ0_A/view?usp=sharing"
                     target='_blank' 
                     >
                     <span className="ml-0">
                     Assessment of antero-posterior skeletal relationships in adult Korean patients in the natural head position and centric relation
                     </span>
                     <p className="mt-2 px-2 text-sm text-gray-400 leading-snug "> 
                     Korean J Orthod.  2010;40(6):421-431
                     </p>
                  </Button>
                </div>

              </div>


              </section>  
              </>
            )
          }