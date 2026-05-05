import React from 'react'
import ServicesHero from '../module/services/ServicesHero'
import ServicesWeProvide from '../module/services/ServicesWeProvide'
import PriceTable from '../module/services/PriceTable'
import OurMissionStats from '../module/services/OurMissionStats'
import OurStory from '../module/services/OurStory'

const page = () => {
  return (
    <div>
      <ServicesHero/>
      <ServicesWeProvide/>
      <PriceTable/>
      <OurMissionStats/>
      <OurStory/>
    </div>
  )
}

export default page
