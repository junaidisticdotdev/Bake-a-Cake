import React from 'react'
import HeroSection from './module/home/HeroSection'
import OurIntro from './module/home/OurIntro'
import StartedBaking from './module/home/StartedBaking'
import OurCategories from './module/home/OurCategories'
import AboveGallery from './module/home/AboveGallery'
import Gallery from './module/home/Gallery'
import PopularCakes from './module/home/PopularCakes'
import PriceTableHome from './module/home/PriceTableHome'
import SweetSuccessStats from './module/home/SweetSuccessStats'

const page = () => {
  return (
    <div>
      <div className="h-20" />
      <HeroSection/>
      <OurIntro/>
      <StartedBaking/>
      <OurCategories/>
      <PriceTableHome/>
      <SweetSuccessStats/>
      <Gallery/>
      <PopularCakes/>
            <AboveGallery/>

    </div>
  )
}

export default page
