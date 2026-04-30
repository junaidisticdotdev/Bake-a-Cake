'use client';
import React from 'react';
import { motion } from 'framer-motion';

const OurIntro = () => {
  return (
    // main div
    <div className='w-full min-h-screen relative overflow-hidden bg-white flex items-center justify-center py-20 px-4'> 
      
      {/* wrapper div */}
      <div className='relative w-full max-w-6xl min-h-[500px] flex items-center justify-center'>
        
        {/* bg blue box  */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#e0f7ff] w-[260px] h-[320px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[500px] rounded-3xl'></div>

        {/* 1. Images Group Container (Paragraph se pehle ya bahar rakhen) */}
        <div className='absolute inset-0 z-20 pointer-events-none'>
          {/* top image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}

            className='absolute left-[-5%] sm:left-0 top-[-5%] sm:top-0'
          >
            <img 
              src="/Media/hero-section-slider.jpg.jpeg" 
              alt="Lollipops"
              className='w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px] rounded-2xl shadow-xl object-cover border-4 border-white' 
            />
          </motion.div>

          {/* bottom image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3  }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}

            className='absolute right-0 sm:right-[-1%] bottom-0 sm:bottom-[5%]'
          >
            <img 
              src="/Media/aboutUsHero.jpeg" 
              alt="Icecream" 
              className='w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px] rounded-2xl shadow-xl object-cover border-4 border-white'
            />
          </motion.div>
        </div>

        {/* 2. Paragraph Section  */}
        <motion.div
          className='relative z-50 w-full max-w-[650px] bg-white/40 rounded-3xl shadow-2xl p-6 sm:p-10 border border-white/50'
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <p className='text-[18px] sm:text-[22px] md:text-[26px] italic text-gray-900 text-center leading-relaxed font-medium'>
            Dolcetti’s ultimate goal is to satisfy our clients and their sweet taste buds. 
            Our cakery provides superior products, being both attractive and yummy! 
            Our regular clients state we are the best, but we never stop developing our recipes. 
            We continue exploring this fascinating sweet world!
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default OurIntro;