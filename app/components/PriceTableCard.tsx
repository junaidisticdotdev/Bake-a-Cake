"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { style } from "framer-motion/client";

interface PriceCardProps {
  image: string;
  title: string;
  price: string;
  features: string[];
  delay?: number;
}

const PriceTableCard = ({
  image,
  title,
  price,
  features,
  delay,
}: PriceCardProps) => {
  return (
    <div className="relative w-full max-w-[300px] bg-[#fdfaf3] group shadow-lg rounded-lg overflow-visible mt-20 mb-10 group">
      {/* 1. Floating Image Section */}
      <motion.div
        initial={{ y: 0, rotate: 0 }}
        animate={{
          y: [-10, 10, -10],
        }}
        viewport={{ once: false }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: delay ?? 0,
          },
        }}
        className="absolute -top-18 left-1/2 -translate-x-1/2 w-40 h-40 z-10"
      >
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </motion.div>

      {/* 2. Top Pink Header Section */}
      <div className="bg-[#f79dc3] group-hover:bg-[#9bc8b4] transition-all duration-300 pt-24 pb-6 px-6 text-center rounded-lg">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 tracking-tight">
          {title}
        </h3>
      </div>

      {/* 3. Wavy/Dripping Separator (SVG) */}
      <div className="relative -mt-1 leading-[0]">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.89,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            className="fill-[#f79dc3] group-hover:fill-[#9bc8b4] transition-all duration-300"
          ></path>
        </svg>
      </div>

      {/* 4. Price & Features Section */}
      <div className="px-8 pb-8 text-center">
        {/* Price Section */}
        <div className="flex justify-center items-start mb-4">
          <span className="text-4xl md:text-5xl font-serif font-bold text-slate-800">
            {price}
          </span>
          <span className="text-3xl font-serif font-bold text-slate-800 mt-2 ml-1">
            $
          </span>
        </div>

        {/* Features List */}
        <div className="flex flex-col gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <FaCheck className="text-slate-800 text-sm" />
                <span className="text-lg md:text-xl font-serif italic text-slate-600">
                  {feature}
                </span>
              </div>
              {/* Pink Dotted Divider */}
              {index !== features.length - 1 && (
                <div className="w-full border-t-2 border-dotted border-pink-300"></div>
              )}
            </div>
          ))}
        </div>
        <button className="mt-4 px-6 py-3 bg-[#f79dc3] hover:bg-[#9bc8b4] transition-all duration-300  rounded-full font-bold transition-all duration-300 shadow-xl active:scale-95 uppercase tracking-wide text-sm cursor-pointer rounded-xl font-serif">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default PriceTableCard;
