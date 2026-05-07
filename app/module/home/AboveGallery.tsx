'use client';
import React from 'react'
import { motion } from 'framer-motion';

const AboveGallery = () => {
  return (
    <div>

      {/* Abovr gallery section */}
      <div className='w-full h-[70vh] sm:h-[90vh] relative overflow-hidden'>

        <div className='absolute z-10 w-full h-full'> 
        <img src="/Media/hero-bg.jpg.jpeg" alt="Love BG image" className='w-full h-full object-cover object-center' /> </div>

{/* overlaping card  */}
<motion.div className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-3/4 backdrop-blur-sm h-auto min-h-[20vh] sm:min-h-[50vh] flex items-center justify-center text-center  bg-[#d4e4d7]/40 rounded-3xl'

initial={{ y:100 , opacity:0}}
whileInView={{ y:0, opacity:1 }}
viewport={{once:false, amount:0.3}}

transition={{
  duration: 1.4,
  ease: "easeOut",
  delay: 0.3

}}>

{/* div for para */}
<p className='italic px-2 text-[28px] sm:text-[45px] md:text-[60px]  lg:text-[70px] text-slate-800 h-1/2 '>The Rose Bakers is a family  owned bakery, with treasures the atmosphere.</p>


</motion.div>
      </div>

    </div>
  )
}

export default AboveGallery
