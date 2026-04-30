"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBirthdayCake } from "react-icons/fa";
import { RiCakeLine } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";
import { BsCookie } from "react-icons/bs";

const OurMission = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-[#fbf6eb] mt-10 py-10 flex flex-col md:flex-row">
      {/* left side text content  */}

      <div className="w-full md:w-1/2 h-auto md:h-screen">
        {/* heading  */}
        <div>
          <p
            className="italic font-medium text-2xl sm:text-4xl lg:text-5xl mt-4 px-4 font-serif tracking-wide"
          >
            OUR MISSION
          </p>
        </div>

        {/* paragraph  1 */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
          className="flex gap-4 md:gap-8 items-start md:items-center justify-center w-full py-4 px-4 sm:px-6 md:px-10"
        >
          {/* icon */}
          <div className="border-none rounded-full p-2 sm:p-3 md:p-4 bg-[#f796d3] flex-shrink-0">
            <FaBirthdayCake className="text-lg sm:text-2xl md:text-4xl text-white" />
          </div>
          {/* details */}
          <div>
            <p className="font-semibold text-xs sm:text-base md:text-lg italic">
              Confetti Cake with Vanilla Frosting
            </p>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">
              A childhood favorite made larger than life, our celebration sheet
              cake features delicious homemade sprinkles.
            </p>
          </div>
        </motion.div>
        {/* paragraph 2  */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
          className="flex gap-4 md:gap-8 items-start md:items-center justify-center w-full py-4 px-4 sm:px-6 md:px-10"
        >
          {/* icon */}
          <div className="border-none rounded-full p-2 sm:p-3 md:p-4 bg-[#f796d3] flex-shrink-0">
            <RiCakeLine className="text-lg sm:text-2xl md:text-4xl text-white" />
          </div>
          {/* details */}
          <div>
            <p className="font-semibold text-xs sm:text-base md:text-lg italic">
              Flat Marshmallow Shapes{" "}
            </p>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">
              Layers of shaped marshmallow candies — bunnies, chicks, and simple
              flowers — make a memorable gift in a beribboned box.
            </p>
          </div>
        </motion.div>
        {/* paragraph 3 */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
          className="flex gap-4 md:gap-8 items-start md:items-center justify-center w-full py-4 px-4 sm:px-6 md:px-10"
        >
          {/* icon */}
          <div className="border-none rounded-full p-2 sm:p-3 md:p-4 bg-[#f796d3] flex-shrink-0">
            <LuCakeSlice className="text-lg sm:text-2xl md:text-4xl text-white" />
          </div>
          {/* details */}
          <div>
            <p className="font-semibold text-xs sm:text-base md:text-lg italic">
              Pistachio Cannoli Cake{" "}
            </p>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">
              This dramatic four-layer cake is inspired by the flavors of
              Sicilian-style cannoli, which is stuffed with ricotta.
            </p>
          </div>
        </motion.div>
        {/* paragraph 4  */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
          className="flex gap-4 md:gap-8 items-start md:items-center justify-center w-full py-4 px-4 sm:px-6 md:px-10"
        >
          {/* icon */}
          <div className="border-none rounded-full p-2 sm:p-3 md:p-4 bg-[#f796d3] flex-shrink-0">
            <BsCookie className="text-lg sm:text-2xl md:text-4xl text-white" />
          </div>
          {/* details */}
          <div>
            <p className="font-semibold text-xs sm:text-base md:text-lg italic">
              Spicy Chocolate Cookies{" "}
            </p>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">
              Everything’s nice about Mexican hot chocolate, which is why we
              dreamed up a cookie that showcases its signature qualities.
            </p>
          </div>
        </motion.div>
      </div>

      {/* right side image  */}
      <motion.div
        initial={{x: 100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        viewport={{once:false}}
        transition={{
          duration: 1.4,
          delay: 0.3,
          ease:"easeInOut"
        }}
        className="w-full h-auto md:w-1/2 md:h-screen flex items-center justify-center md:justify-start px-2 sm:px-4"
      >
        <Image 
          src="/Media/OurMission.jpeg" 
          alt="Our Mission" 
          width={400}
          height={400}
          className="w-48 sm:w-72 md:w-96 h-auto object-contain border-white border-2 sm:border-4 hover:scale-105 transition-all duration-600 rounded-lg sm:rounded-3xl"
          priority
        />
      </motion.div>
    </div>
  );
};

export default OurMission;
