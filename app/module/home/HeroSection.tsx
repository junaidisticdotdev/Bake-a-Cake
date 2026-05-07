"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="w-full overflow-hidden relative h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Media/hero-section-check1.jpeg"
          alt="Bake a Cake Hero"
          className="object-cover w-full h-full"
        />
        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-black/20 lg:bg-transparent" />
      </div>

      {/* Main Container - PC par content ko left side par rakhega */}
      <div className="relative z-10 w-full h-full flex items-center justify-center lg:justify-start px-6 md:px-16 lg:px-24">
        
        {/* Content Card - Desktop pe w-1/2 aur mobile pe full width */}
        <motion.div 
          className="relative p-6 rounded-3xl w-full lg:w-1/2 flex flex-col items-center lg:items-start"
        >
          {/* Glassmorphism Background Layer */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-lg border border-white/20 rounded-3xl -z-10 shadow-2xl" />

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
            className="flex flex-col"
          >
            <p className="text-[#ff85bc] saturate-150 text-5xl md:text-7xl lg:text-8xl font-serif italic font-bold drop-shadow-xl leading-tight text-center lg:text-left whitespace-nowrap">
              The Rose
            </p>
            <p className="text-[#ff85bc] saturate-150 -mt-2 md:-mt-10 text-6xl md:text-8xl lg:text-9xl font-serif italic font-bold drop-shadow-xl leading-tight text-center lg:text-left">
              Bakers
            </p>
          </motion.div>

          {/* Subtitle & Description */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="w-10 h-[2px] bg-white/60"></div>
              <p className="text-white text-lg md:text-xl font-light tracking-[0.2em] whitespace-nowrap uppercase">
                Only For You
              </p>
            </div>

            <p className="text-white/90 mt-2 max-w-sm text-base md:text-lg font-light leading-relaxed text-center lg:text-left">
              Handcrafted with love, baked to perfection. Discover the sweetness that defines your celebrations.
            </p>

            {/* Button Wrapper */}
            <div className="mt-4 flex justify-center lg:justify-start w-full">
                <a
                href={`https://wa.me/923084978902?text=${encodeURIComponent("Assalam-o-Alaikum! I want to order a Cute Cake.")}`}
                target="_blank"
                rel="noopener noreferrer"
                >
                <button className="px-6 py-3 bg-[#ff85bc] hover:bg-[#e08bb1] text-white rounded-xl font-bold transition-all duration-300 shadow-md active:scale-95 uppercase tracking-widest text-sm font-serif cursor-pointer">
                    Order Now
                </button>
                </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Badge - Only visible on Large screens */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/20 backdrop-blur-lg border border-white/20 p-5 rounded-2xl text-white shadow-2xl"
        >
          <p className="text-[12px] uppercase tracking-[0.1em]">Bakery of the year</p>
          <p className="font-serif italic text-2xl text-[#ff85bc]">Winner 2026</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;