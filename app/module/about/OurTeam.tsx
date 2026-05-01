'use client';
import { motion } from 'framer-motion';
import OurTeamCard from '@/app/components/OurTeamCard'
import { image } from 'framer-motion/client'
import React from 'react'
import { TbBrandFramerMotion } from 'react-icons/tb';

const OurTeam = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
      
      <p className='italic font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 mb-8 sm:mb-10 md:mb-12 font-serif tracking-wide text-center'>Meet our team</p>

      <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>

        {/* chef number 1 */}
        <motion.div
        initial ={{ x: -100, opacity:0}}
        whileInView={{ x:0, opacity:1}}
        viewport={{once:false}}
        transition={{
          ease:"easeInOut",
          duration: 1.4,
          delay: 0.3
        }}
        >
      <OurTeamCard
      image ="/Media/chef-1.jpg.jpeg"
      name ="Jessica Priston"
      experty ="Owned by a famous Vermont baker, Denise Levine, our place is proud to be one of San Diego"
      /> </motion.div>

      {/* chef number 2 */}
      <motion.div 
      initial ={{ scale: 0.8, opacity:0}}
        whileInView={{ scale:1, opacity:1}}
        viewport={{once:false}}
        transition={{
          ease:"easeInOut",
          duration: 1.4,
          delay: 0.2
        }}
      >
      <OurTeamCard
      image ="/Media/chef-2.jpg.jpeg"
      name ="Patrick Pool"
      experty ="Owned by a famous Vermont baker, Denise Levine, our place is proud to be one of San Diego"
      />
</motion.div>
      {/* chef number 3 */}
      <motion.div
      initial ={{ x: 100, opacity:0}}
        whileInView={{ x:0, opacity:1}}
        viewport={{once:false}}
        transition={{
          ease:"easeInOut",
          duration: 1.4,
          delay: 0.3
        }}
      >
      <OurTeamCard
      image ="/Media/chef-3.jpg.jpeg"
      name ="Gloria Mann"
      experty ="Owned by a famous Vermont baker, Denise Levine, our place is proud to be one of San Diego"
      />
      </motion.div>

      </div>

    </div>
  )
}

export default OurTeam
