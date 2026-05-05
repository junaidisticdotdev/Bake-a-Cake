import React from 'react'
import Gallery from '../module/home/Gallery'
import GalleryHero from '../module/gallery/GalleryHero'
import GallerySecond from '../module/gallery/GallerySecond'
import GalleryFirst from '../module/gallery/GalleryFirst'

const page = () => {
  return (
    <div>
        <GalleryHero/>
        <GalleryFirst/>
      <GallerySecond/>
    </div>
  )
}

export default page
