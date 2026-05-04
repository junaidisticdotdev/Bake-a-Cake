'use client';
import React from "react";
import { IconType } from "react-icons"; // Ye import lazmi hai
import { FaCakeCandles } from "react-icons/fa6"; // Default icon

interface FeatureCardProps {
  icon?: IconType; // 'Image' ko 'icon' kar diya aur type 'IconType' rakhi
  title: string;
  description: string;
}

// Destructuring mein 'icon: Icon' likha taake hum <Icon /> use kar saken
const ServiceProvideCard = ({ icon: Icon = FaCakeCandles, title, description }: FeatureCardProps) => {
  return (
    <div className="group flex flex-col items-start p-6 py-4 max-w-sm transition-all duration-300 bg-[#e0f7ff] rounded-xl shadow-md hover:shadow-lg ">
      
      <div className="flex items-center justify-start gap-4 w-full">
      {/* 1. Circular Icon Container */}
      <div className="w-14 h-14   rounded-full bg-[#f79dc3] flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-[#f79dc3]/20">
        <Icon className="text-white text-5xl px-2 py-2" />
      </div>

       {/* 2. Title Section */}
      <h3 className="text-xl md:text-2xl mb-4 font-serif font-bold text-slate-800 tracking-tight">
        {title}
      </h3>
</div>
     

      {/* 3. Description Section */}
      <p className="text-lg md:text-xl font-serif italic text-slate-600 leading-relaxed font-light">
        {description}
      </p>

    </div>
  );
};

export default ServiceProvideCard;