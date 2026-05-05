import React from 'react'
import Gallery from '../module/home/Gallery'
import GalleryHero from '../module/gallery/GalleryHero'
import GallerySecond from '../module/gallery/GallerySecond'

const page = () => {
  return (
    <div>
        <GalleryHero/>
      <Gallery/>
      <GallerySecond/>
    </div>
  )
}

export default page
