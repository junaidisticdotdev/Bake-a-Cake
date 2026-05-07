import React from 'react'

const GalleryHero = () => {
  return (
    <div className='mt-20 sm:mt-0'>
        <div className="w-full h-16 bg-[#e0f7ff] flex items-center justify-start gap-4 sm:gap-6 pl-6 sm:pl-10">
        <p className="text-sm sm:text-lg md:text-xl italic font-serif cursor-pointer hover:text-[#f79dc3] transition-colors">HOME</p>
        <p className="text-gray-400">-</p>
        <p className="text-sm sm:text-lg md:text-xl italic text-[#f79dc3] font-semibold font-serif uppercase tracking-wider">GALLERY</p>
      </div>
    </div>
  )
}

export default GalleryHero
