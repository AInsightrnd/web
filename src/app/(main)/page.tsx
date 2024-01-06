import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { AboutCompany } from '../../components/AboutCompany'
import { Awarded } from '../../components/Awarded'

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <AboutCompany />
      <Awarded />
      <SecondaryFeatures />
      <PrimaryFeatures />

      <Reviews />
      <Pricing />
      <Faqs />
    </>
  )
}
