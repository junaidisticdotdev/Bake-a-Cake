'use client';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';

interface PriceCardProps {
  image: string;
  title: string;
  price: string;
  features: string[];
}

const PriceTableCard = ({ image, title, price, features }: PriceCardProps) => {
  return (
    <div className="relative w-full max-w-sm bg-[#fdfaf3] shadow-2xl rounded-sm overflow-visible mt-20 group">
      
      {/* 1. Floating Image Section */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 z-10">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      {/* 2. Top Pink Header Section */}
      <div className="bg-[#f79dc3] pt-28 pb-10 px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 tracking-tight">
          {title}
        </h3>
      </div>

      {/* 3. Wavy/Dripping Separator (SVG) */}
      <div className="relative -mt-1 leading-[0]">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-16">
          <path 
            d="M0.00,49.98 C149.99,150.00 349.89,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" 
            className="fill-[#f79dc3]"
          ></path>
        </svg>
      </div>

      {/* 4. Price & Features Section */}
      <div className="px-8 pb-10 text-center">
        {/* Price Section */}
        <div className="flex justify-center items-start mb-8">
          <span className="text-6xl md:text-7xl font-serif font-bold text-slate-800">{price}</span>
          <span className="text-3xl font-serif font-bold text-slate-800 mt-2 ml-1">$</span>
        </div>

        {/* Features List */}
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <FaCheck className="text-slate-800 text-sm" />
                <span className="text-lg md:text-xl font-serif italic text-slate-600">{feature}</span>
              </div>
              {/* Pink Dotted Divider */}
              {index !== features.length - 1 && (
                <div className="w-full border-t-2 border-dotted border-pink-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceTableCard;