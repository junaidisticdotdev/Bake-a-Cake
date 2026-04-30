import React from 'react'
import HeroSection from './module/home/HeroSection'
import Header from './component/Header'
import OurIntro from './module/home/OurIntro'
import StartedBaking from './module/home/StartedBaking'
import OurCategories from './module/home/OurCategories'
import AboveGallery from './module/home/AboveGallery'
import Gallery from './module/home/Gallery'
import PopularCakes from './module/home/PopularCakes'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <OurIntro/>
      <StartedBaking/>
      <OurCategories/>
      <AboveGallery/>
      <Gallery/>
      <PopularCakes/>
    </div>
  )
}

export default page
