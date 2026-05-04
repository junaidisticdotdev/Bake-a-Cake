"use client";
import React from "react";
// React Icons se FaCakeBase ya koi bhi icon import karen
import { FaCakeCandles } from "react-icons/fa6"; 
import { IconType } from "react-icons";

interface FeatureCardProps {
  // react-icons ke liye IconType use hota hai
  icon?: IconType;
  title: string;
  description: string;
}

const ServiceProvideCard = ({ icon: Icon = FaCakeCandles, title, description }: FeatureCardProps) => {
  return (
    <div className="group flex flex-col items-start p-6 max-w-sm transition-all duration-300">
      
      {/* 1. Circular Icon Container */}
      <div className="w-24 h-24 rounded-full bg-[#f79dc3] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-[#f79dc3]/20">
        <Icon 
          className="text-white text-5xl" // Font size se icon size control hota hai
        />
      </div>

      {/* 2. Title Section */}
      <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4 tracking-tight">
        {title}
      </h3>

      {/* 3. Description Section */}
      <p className="text-xl md:text-2xl font-serif italic text-slate-600 leading-relaxed font-light">
        {description}
      </p>

    </div>
  );
};

// Usage Example
// const ServiceProvideCard = () => {
//   return (
//     <div className="w-full min-h-screen bg-[#fbf6eb] flex items-center justify-center p-6 sm:p-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl">
//         <FeatureCard 
//           title="Cake Design"
//           description="Owned by a famous Vermont baker, Denise Levine, our place is proud to be one of San Diegolifornia's finest"
//         />
//         {/* Aap mazeed icons yahan pass kar sakte hain */}
//         <FeatureCard 
//           title="Baked Daily"
//           description="We use only the freshest ingredients to ensure every bite is a moment of pure bliss for you."
//         />
//         <FeatureCard 
//           title="Custom Orders"
//           description="From weddings to birthdays, we craft the perfect center-piece for your special celebrations."
//         />
//       </div>
//     </div>
//   );
// };


export default ServiceProvideCard;