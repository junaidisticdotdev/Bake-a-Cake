'use client';
import React from 'react'

interface OurTeamCardType {
    image: string,
    name: string,
    experty: string
};

const OurTeamCard = ({image, name, experty}: OurTeamCardType ) => {
  return (
    <div className='w-full group relative p-4 sm:p-6 flex flex-col items-center text-center rounded-sm transition duration-400 overflow-hidden'>

         {/* image */}
      <div className='w-full h-[250px] sm:h-[320px] md:h-[370px] border-4 border-[#cdeeff] rounded-xl flex items-center justify-center overflow-hidden mb-4'>
        <img src={image} alt={name} 
        className='w-full h-full object-cover hover:scale-110 transition-all  duration-400' />
      </div>

 {/* name */}
      <div className='text-xl sm:text-2xl md:text-3xl absolute bottom-32 sm:bottom-36 md:bottom-40 transition-all duration-300 font-semibold italic tracking-wide text-gray-800 font-serif'>
        {name}
      </div>
      {/* pink line divider */}
      <div className='w-16 sm:w-20 h-[2px] bg-pink-400 my-2'></div>

      {/* experty */}
      <p className='text-sm sm:text-base md:text-lg text-gray-800 italic'>
        {experty}
      </p>

    </div>
  )
}

export default OurTeamCard
