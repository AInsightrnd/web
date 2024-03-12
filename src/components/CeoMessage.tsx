import { useId } from 'react'
import { Container } from '@/components/Container'
import Image from 'next/image'
import ceoImage from '@/images/ceo-message/profile.png'

export function CeoMessage() {
  return (
    <section
      id="ceo-message"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32 bg-ainbg-primary"
    >
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-50">
            We are changing the way people smile
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Ainsight is an artificial intelligence orthodontic correction program designed to make data,
            based on information accessible to everyone,
            easily understandable for both professionals and the general public.
            With image interpretation times reduced to less than 10 seconds,
            we are revolutionizing the clinical process by significantly shortening the time required for orthodontic assessments.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="relative mt-12 mx-auto grid max-w-2xl lg:max-w-none lg:pt-6 lg:col-span-6 lg:row-span-2 xl:col-span-7">
            <p className="text-gray-200">
              Hello,<br />
              This is Jang Hoon Ahn, the CEO of AInsightCorporation.
              I am delighted to have the opportunity to introduce our company to you.
              Our company provides dental and medical software to clinicians. <br />
              In particular, we offer a program that automatically analyzes two-dimensional x-ray, three-dimensional CBCT images,
              and intraoral scan data that orthodontists and dental practitioners commonly take when treating orthodontic patients.<br />
              Manually analyzing two-dimensional cephalograms, three-dimensional CBCT images, or intraoral scan data requires
              a significant amount of time and effort.<br />
              Therefore, by utilizing artificial intelligence-based programs, we can automatically analyze these data,
              enabling efficient diagnosis and treatment planning for orthodontic patients in a short period of time
              We are also developing an automatic teeth alignment program that considers roots and skeletal structures,
              which can be used for orthodontic treatment simulations or the production of clear aligners.<br /><br />
              Additionally, we plan to provide automated three-dimensional simulation programs and surgical guides for orthognathic surgery.<br />
              Furthermore, we are also planning the development of technology for automated diagnosis for implant surgery. Voice charting is another
              item in our AI software lineup which we believe could be helpful for general doctors, not only for dentists.
              As a dentist and orthodontic specialist myself, I understand the challenges and hard work that you face in clinical practice.
              At our company, we continuously develop excellent dental and medical software to alleviate your hard work even just a little.<br /><br />
              I sincerely wish you and your families good luck and good health.<br />
              Thank you
            </p>
          </div>
          <div className="relative z-10 mx-auto mt-12 max-w-3xl lg:col-span-6 lg:max-w-lg xl:col-span-5 xl:max-w-md">
            <Image
              className="h-auto"
              src={ceoImage}
              alt={""}
            />
            <h3 className="mt-6 font-medium text-gray-200 text-center">
              Ahn Jang-hoon, CEO
            </h3>
          </div>
        </div>

      </Container>
    </section>
  )
}
