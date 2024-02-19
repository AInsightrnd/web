import { Welcome } from '@/components/Welcome'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { ServiceMaterials } from '@/components/ServiceMaterials'
import { AboutCompany } from '../../components/AboutCompany'
import { Awarded } from '../../components/Awarded'

export default function Home() {

  // // let's make a function that receive the specific element_id as string and scroll into that element_id
  // const scrolltoHash = function (element_id: string) {
  //   const element = document.getElementById(element_id)
  //   element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  // }


  // return (
  //   <div>

  //     {/* attach that function with onClick event to an clickable element */}
  //     <div onClick={() => scrolltoHash('contact')}>
  //       <span>Click me to Scroll</span>
  //     </div>

  //     {/* ...imagine lot of sections/code here */}


  //     <section id="contact">
  //       {/* this is the section we want to scroll it could be any element not just limited to section but must have an unique ID. */}
  //     </section>

      
      
  //     {/* ...imagine lot of sections/code here */}

  //   </div>
  // )


  return (
    <>
      <Hero />
      
      <Services />
      <ServiceMaterials />

      <Welcome />

      <AboutCompany />
      <Awarded />
    </>
  )
}
