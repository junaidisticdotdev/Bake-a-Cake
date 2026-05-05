"use client";
import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const OurStory = () => {
  return (

    <div>
    <section className="relative w-full bg-white py-0 md:py-10 min-h-screen flex items-start lg:items-center overflow-hidden">

      {/* Decorative Background Boxes (Light Blue/Pink shapes) */}
        <div className="hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 w-120 h-120 bg-[#e0f7ff]"></div>
   



      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Heading */}
        <p className="text-center text-[40px] md:text-[50px] font-serif tracking-wide mb-8">
          Our Story
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4,
            ease:"easeInOut",
  delay: 0.3
           }}
  
          className="w-full block sm:hidden mb-8"
        >
          <img
            src="/Media/our-story.jpeg"
            alt="Rose Cupcake"
            className="w-full max-h-[420px] h-auto rounded-lg shadow-xl object-cover"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative">
          
          {/* Left Side: Image  */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4,ease:"easeInOut",
  delay: 0.3 }}
            className="w-full lg:w-1/3 relative hidden sm:block overflow-hidden rounded-2xl mb-4"
          >
           
            
            <img
              src="/Media/our-story.jpeg" // Apni image ka path yahan den
              alt="Rose Cupcake"
              className="w-full max-h-[350px] h-auto rounded-lg object-cover hover:scale-105 transition-all duration-600"
            />
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2,ease:"easeInOut",
  delay: 0.3 }}
            className="w-full lg:w-1/2 text-center lg:text-left relative z-10"
          >
            <div className="space-y-6 text-gray-900 italic text-lg md:text-xl leading-relaxed font-serif md:ml-4">

              <p>
               Owned by a famous Vermont baker, Denise Levine, our place is proud to be one of San Diego, California’s finest cake, and pastry bakeries. </p>

<p> Our cake bakery adds only the freshest ingredients to make our baked goods taste a fresh-out-of-oven like experience. An experience, that simply melts in your mouth.</p>

<p> For instance, when we bake our famous whipped cream cakes, we use only pure cream and the best brown sugar on the market. Also, we always buy the freshest fruits to make our pie fillings or our pastry menu items…</p>

              
            </div>


            {/* Read More Button */}
            <button className=" ml-10 mt-8 px-6 py-3 bg-[#f79dc3] hover:bg-[#e08bb1] text-white rounded-full font-bold transition-all duration-300 shadow-xl active:scale-95 uppercase tracking-wide text-sm cursor-pointer rounded-xl font-serif">
              Read More
            </button>
          </motion.div>
        </div>

      </div>
    </section>

    </div>
  );
};

export default OurStory;