import React from 'react'
import ServicesHero from '../module/services/ServicesHero'
import ServicesWeProvide from '../module/services/ServicesWeProvide'
import PriceTable from '../module/services/PriceTable'

const page = () => {
  return (
    <div>
      <ServicesHero/>
      <ServicesWeProvide/>
      <PriceTable/>
    </div>
  )
}

export default page
