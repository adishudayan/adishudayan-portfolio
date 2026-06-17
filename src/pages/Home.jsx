import React from 'react'
import Hero from '../components/Hero/Hero'
import AgencyIntro from '../components/AgencyIntro/AgencyIntro'
import Services from '../components/Services/Services'
import WorkSection from '../components/WorkSection/WorkSection'
import Cultura from '../components/Cultura/Cultura'

export default function Home() {
  return (
    <>
      <Hero />
      <AgencyIntro />
      <Services />
      <WorkSection />
      <Cultura />
    </>
  )
}
