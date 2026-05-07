'use client';
import React from 'react'
import { motion } from 'framer-motion';
import OurWorksCard from '@/app/components/OurWorksCard';

const ServicesHero = () => {
  return (
    <div className='w-full overflow-hidden'>
      {/* 1. Breadcrumb Section - Responsive Adjustments */}
      <div className="w-full h-16 bg-[#e0f7ff] flex items-center justify-start gap-4 sm:gap-6 pl-6 sm:pl-10">
        <p className="text-sm sm:text-lg md:text-xl italic font-serif cursor-pointer hover:text-[#f79dc3] transition-colors">HOME</p>
        <p className="text-gray-400">-</p>
        <p className="text-sm sm:text-lg md:text-xl italic text-[#f79dc3] font-semibold font-serif uppercase tracking-wider">SERVICES</p>
      </div>

      {/* 2. Our Works Section */}
      <div className='w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 py-12'>
        
        {/* Responsive Heading */}
        <p className='italic font-medium text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-10 sm:mb-16 font-serif tracking-widest text-center text-slate-800'
        >
          OUR WORKS
        </p>

        {/* Responsive Grid System */}
        <div className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-10'>

          {/* Our work card 1 - Slide from Left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1.3, delay: 0.2 }}
          >
            <OurWorksCard
              image="/Media/service-1.jpeg"
              name="Vanilla Bean Cake"
              experty="Three layers of fluffy white vanilla bean cake with a hint..."
            />
          </motion.div>

          {/* Our work card 2 - Scale Up */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1.2, delay: 0.3 }}
          >
            <OurWorksCard
              image="/Media/service-2.jpeg"
              name="French Choco Cake"
              experty="Three layers of French Valrhona chocolate cake…"
            />
          </motion.div>

          {/* Our work card 3 - Slide from Right (Desktop) / Bottom (Mobile) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1.2, delay: 0.3 }}
          >
            <OurWorksCard
              image="/Media/service-3.jpeg"
              name="Freshly Bake Cookies"
              experty="What better way to celebrate love than with a delicious..."
            />
          </motion.div>

          {/* Our work card 4 - Slide from Right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1.3, delay: 0.3 }}
          >
            <OurWorksCard
              image="/Media/service-4.jpeg"
              name="Delicious Cupcakes"
              experty="Classical recipe with a prop of love – the perfect dessert."
            />
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default ServicesHero