"use client";
import React from 'react'
import {motion} from 'framer-motion';

const EnjoyCakes = () => {
  return (
    <div className='w-full min-h-screen relative overflow-hidden px-4 py-10 sm:px-6 lg:px-10'>

        {/* colored div */}
      <div className='absolute w-full h-[70vh] bg-[#e0f7ff] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>

      {/* left and right sections */}
      <div className='relative w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 min-h-[80vh]'>

        {/* left section image */}
        <div className='w-full lg:w-1/2 flex items-center justify-center '>

<div className='overflow-hidden rounded-3xl border-3 border-[#f79dc3]'>
          <img src='/Media/softcake-about.jpg.jpeg' alt='Pink Soft Cake' className='w-full max-w-[520px] h-auto object-cover shadow-2xl hover:scale-105 transition-all duration-600 block' />
</div>
        </div>

        {/* right section text */}
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-6'>

          {/* heading */}
          <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className='max-w-xl space-y-2'>
            <p className='italic font-medium text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide'>People Sincerely</p>
            <p className='italic font-medium text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide'>Enjoy Our Cakes!</p>
          </motion.div>

          {/* what client says */}
          <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
          >
          <p className='text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 max-w-xl'>Owned by a famous Vermont baker, Denise Livine, our place is proud to be one of San Diego, California's fine cake and pastry shops. Our cake bakery uses only the freshest ingredients to make our baked goods taste fresh.</p>

          <div className='space-y-1'>
            <p className='font-semibold text-lg sm:text-xl'>John McCoist</p>
            <p className='text-sm sm:text-base text-gray-600'>Post by TripAdvisor</p>
          </div>
          </motion.div>
        </div>

      </div>

    </div>
  )
}

export default EnjoyCakes
