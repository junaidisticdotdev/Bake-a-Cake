import React from 'react'
import AboutHero from '../module/about/AboutHero'
import AboutPopularCakes from '../module/about/AboutPopularCakes'
import OurMission from '../module/about/OurMission'
import OurTeam from '../module/about/OurTeam'
import EnjoyCakes from '../module/about/EnjoyCakes'
import OurPride from '../module/about/OurPride'

const page = () => {
  return (
    <div>
        <AboutHero/>
        <OurMission/>
        <OurTeam/>
        <EnjoyCakes/>
        <OurPride/>
        <AboutPopularCakes/>

 </div>
  )
}

export default page
