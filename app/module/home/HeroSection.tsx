'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


const MotionImage = motion(Image);

const HeroSection: React.FC = () => {
  return (
    <section>
      {/* Hero section main container */}
      <div className='w-full h-[calc(100vh-96px)] overflow-hidden relative'>

        {/* Background Video */}
        <video
          autoPlay
          muted 
          loop
          playsInline 
          src="/Media/hero-bg-video.webm" 
          className='object-cover object-center z-0 absolute inset-0 w-full h-full'
        />

        {/* Overlay for image visibility */}
        <div className=' absolute inset-0 z-10' />

        {/* Hero image container and animation */}
        <div className='absolute inset-0 z-20 flex items-center justify-center p-4'>
          <MotionImage
            src="/Media/section-1-img.webp"
            alt='Hero section logo image'

            width={850} 
            height={600}
            priority={true}

            className='w-full max-w-[300px] sm:max-w-[450px] md:max-w-[650px] lg:max-w-[850px] h-auto object-contain drop-shadow-2xl'
            
            
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3  }}

            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.3
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;