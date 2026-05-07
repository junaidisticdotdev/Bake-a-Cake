'use client';
import React from "react";
import { motion } from 'framer-motion';
import { TbFlagSearch } from "react-icons/tb";

interface GalleryImageProps {
  src: string;
  className?: string;
}
// image card ki settings as component bana ke or props ma use kren gay

const GalleryImage = ({ src, className = "" } : GalleryImageProps) => (
  <motion.div
    className={`relative group overflow-hidden rounded-xl transition-all duration-400 hover:scale-105 ${className}`}
  
    initial={{ scale:1, opacity:0}}
whileInView={{ scale:1, opacity:1}}
viewport={{ once:false, amount:0.2}}

transition={{
  duration:1.3,
  ease: "easeOut",
  delay: 0.3
}}
  > 
    <img
      src={src}
      alt="Gallery Item"
      className="w-full h-full object-cover transition-transform duration-500"
    />
    {/* // overlay */}
    {/* <div className="absolute inset-0 bg-[#f79dc3]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
     <p className="text-4xl text-slate-800 transform scale-80 group-hover:scale-100 transition-transform duration-400 italic [text-shadow:_0_0_10px_#fff,_0_0_20px_#e1f7ff]">
  Taste That Lasts
</p>
    </div> */}
  </motion.div>
);



const GallerySecond = () => {
  return (
    <div>

      {/* main for bg */}
      <div className="px-4 md:px-10 lg:px-20 bg-white min-h-screen">

        {/* sub for aligning items */}
        <div className="max-w-7xl h-auto mx-auto flex flex-col items-center justify-center ">


{/* gallery section in grids  */}
<motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-auto mx-auto"

>
        {/* column 1 */}
        <div className="flex flex-col">
                <GalleryImage src="/Media/gallery-3.jpg.jpeg" className="h-full gap-4 h-[300px] w-full lg:h-[616px]" />
        </div>

        

        {/* column 2 */}
        <div className="flex flex-col gap-4">
                <GalleryImage src="/Media/gallery-1.jpg.jpeg" className="h-[300px] w-full" />

                <GalleryImage src="/Media/gallery-2.jpg.jpeg" className="h-[300px] w-full" />
        </div>

        {/* column 3 */}
        <div className="flex flex-col gap-4">
                <GalleryImage src="/Media/gallery-4.jpg.jpeg" className="h-[300px] w-full" />
                <GalleryImage src="/Media/gallery-5.jpg.jpeg" className="h-[300px] w-full" />
        </div>
</motion.div>

        </div>

      </div>

    </div>
  );
};

export default GallerySecond;
