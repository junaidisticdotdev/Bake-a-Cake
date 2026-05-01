"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AwardCardProps {
  image: string;
  title: string;
  years: string;
  description: string;
}

const PrideAwards = ({ image, title, years, description }: AwardCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-xs bg-white py-10 px-4 flex flex-col items-center text-center shadow-sm border border-gray-50 group hover:shadow-md transition-shadow duration-300"
    >
      {/* Logo Section */}
      <div className="relative w-32 h-20 mb-5 grayscale group-hover:grayscale-0 transition-all duration-500">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain hover:scale-105 duration-400 transition-all"
        />
      </div>

      {/* Title Section */}
      <h3 className="text-lg md:text-xl font-semibold whitespace-nowrap text-slate-800 tracking-tight mb-3 uppercase">
        {title}
      </h3>

      {/* Decorative Line (Pink) */}
      <div className="w-20 h-[1px] bg-[#f79dc3] mb-3"></div>

      {/* Years Section */}
      <p className="text-slate-500 font-serif text-sm mb-2 italic">
        {years}
      </p>

      {/* Description Section */}
      <p className="text-slate-600 font-serif text-sm italic leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
export default PrideAwards;