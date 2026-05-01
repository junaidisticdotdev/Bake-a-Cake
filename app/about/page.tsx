import React from 'react'
import AboutHero from '../module/about/AboutHero'
import AboutPopularCakes from '../module/about/AboutPopularCakes'
import OurMission from '../module/about/OurMission'
import OurTeam from '../module/about/OurTeam'
import EnjoyCakes from '../module/about/EnjoyCakes'

const page = () => {
  return (
    <div>
        <AboutHero/>
        <OurMission/>
        <OurTeam/>
        <EnjoyCakes/>
        <AboutPopularCakes/>

 </div>
  )
}

export default page
