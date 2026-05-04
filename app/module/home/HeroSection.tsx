// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';


// const MotionImage = motion(Image);

// const HeroSection: React.FC = () => {
//   return (
//     <section>
//       {/* Hero section main container */}
//       <div className='w-full h-[calc(100vh-96px)] overflow-hidden relative'>

//         {/* Background Video */}
//         <video
//           autoPlay
//           muted 
//           loop
//           playsInline 
//           src="/Media/hero-bg-video.webm" 
//           className='object-cover object-center z-0 absolute inset-0 w-full h-full'
//         />

//         {/* Overlay for image visibility */}
//         <div className=' absolute inset-0 z-10' />

//         {/* Hero image container and animation */}
//         <div className='absolute inset-0 z-20 flex items-center justify-center p-4'>
//           <MotionImage
//             src="/Media/section-1-img.webp"
//             alt='Hero section logo image'

//             width={850} 
//             height={600}
//             priority={true}

//             className='w-full max-w-[300px] sm:max-w-[450px] md:max-w-[650px] lg:max-w-[850px] h-auto object-contain drop-shadow-2xl'
            
            
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: false, amount: 0.3  }}

//             transition={{
//               duration: 1.2,
//               ease: "easeOut",
//               delay: 0.3
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="w-full overflow-hidden relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Media/hero-section-check1.jpeg" 
          alt="Bake a Cake Hero" 
          className="object-cover w-full h-screen" 
        />
        
      </div>

      {/* Content Side - Left side background styling */}
      <div className="relative z-10 w-full md:w-1/2 h-screen flex flex-col items-center lg:items-start justify-center px-6 md:px-16 lg:px-24">
        
        {/* Is div ko text ke niche background dene ke liye use kiya hai */}
        <motion.div
          
          className="relative p-8 md:p-12 rounded-3xl"
        >
          {/* Glassmorphism Layer: Ye text ko background se alag karega */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl -z-10 shadow-2xl" />

          {/* Main Title - Your Pink Color */}
          <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:false}}
          transition={{ duration: 1.4,
            delay: 0.3,
            ease: "easeInOut"
           }}

          className="text-[#d679a1] text-6xl md:text-8xl font-serif italic font-bold drop-shadow-xl leading-tighter text-center lg:text-left">
            Cute Cakes
          </motion.div>
          
          {/* for animation */}
          <motion.div
           initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:false}}
          transition={{ duration: 1.4,
            delay: 0.3,
            ease: "easeInOut"
           }}
          >
          {/* Sub Title with Line */}

          <div className="flex items-center gap-4 justify-center lg:justify-start mt-4">
            <div className="w-12 h-[2px] bg-white/60"></div>
            <p className="text-white text-lg md:text-xl font-light tracking-[0.3em] uppercase">
              Only For You
            </p>
          </div>

          {/* Description */}
          <p className="text-white/90 mt-6 max-w-sm text-lg font-light leading-relaxed text-center lg:text-left">
            Handcrafted with love, baked to perfection. Discover the sweetness that defines your celebrations.
          </p> 
          </motion.div>

          {/* Button */}
          <motion.div
           initial={{ opacity: 0, scale:0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{once:false}}
          transition={{ duration: 1.4,
            delay: 0.3,
            ease: "easeInOut"
           }}
          
          className="flex justify-center lg:justify-start">
            <button className="mt-4 px-6 py-3 bg-[#f79dc3] hover:bg-[#e08bb1] text-white rounded-full font-bold transition-all duration-300 shadow-xl active:scale-95 uppercase tracking-wide text-sm cursor-pointer rounded-xl font-serif">
              Order Now
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side - Bakery of the Year Badge */}
      <div className="absolute bottom-10 right-10 hidden md:block">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-2xl text-white shadow-2xl"
        >
          <p className="text-[12px] uppercase tracking-[0.2em] opacity-70">Bakery of the year</p>
          <p className="font-serif italic text-xl text-[#f79dc3]">Winner 2026</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;