'use client';
import React from 'react'
import { easeOut, motion } from 'framer-motion';

type OurCategoryCardprops = {
  image: string;
  title: string;
  count: number;
};
const OurCategoryCard = ({ image, title, count} : OurCategoryCardprops) => {
  return (
    <motion.div className='w-[280px] group relative p-2 mx-auto flex flex-col items-center text-center rounded-sm transition duration-400 overflow-hidden'
    
     initial={{ scale:1, opacity: 0 }}
              whileInView={{ scale:1, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 1.3,
                ease: "easeInOut",
                delay: 0.2,
              }}>
      
      {/* image */}
      <div className='w-full h-[320px] border-4 border-[#cdeeff] rounded-xl flex items-center justify-center overflow-hidden mb-2'>
        <img src={image} alt={title} 
        className='w-full h-full object-cover group-hover:scale-105 transition-all  duration-300' />
      </div>
      {/* title */}
      <div className='text-2xl absolute bottom-20 cursor-pointer transition-all duration-300 group-hover:text-[#f79dc3] font-semibold italic tracking-wide text-gray-800 font-serif'>
        {title}
      </div>
      {/* pink line divider */}
      <div className='w-20 h-[2px] bg-pink-400 my-3'></div>
      {/* number of products */}
      <p className='text-gray-800 italic text-lg'> {count} Flavours</p>
    </motion.div>
  )
}

export default OurCategoryCard
