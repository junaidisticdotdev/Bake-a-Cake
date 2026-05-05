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
    className={`relative group overflow-hidden rounded-xl cursor-pointer ${className}`}
  
    initial={{ scale:0.8, opacity:0}}
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
    <div className="absolute inset-0 bg-[#f79dc3]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
     <p className="text-4xl text-slate-800 transform scale-80 group-hover:scale-100 transition-transform duration-400 italic [text-shadow:_0_0_10px_#fff,_0_0_20px_#e1f7ff]">
  Taste That Lasts
</p>
    </div>
  </motion.div>
);



const GalleryFirst = () => {
  return (
    <div>

      {/* main for bg */}
      <div className="py-10 px-4 md:px-10 lg:px-20 bg-white min-h-screen">

        {/* sub for aligning items */}
        <div className="max-w-7xl h-auto mx-auto flex flex-col items-center justify-center ">

{/* heading */}
<div className="text-center mb-12">
<p className='italic font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide text-center'>OUR GALLERY</p>
        {/* categories / responsive on mobile  */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-4 overflow-x-auto pb-2">

                <p className="italic transition duration-300 cursor-pointer text-[#f79dc3] text-[18px] md:text-[20px]">All</p>

                {["Occasion" , "Bakery item", "Cream type"].map((item) =>(
                        <p key={item} className="italic transition duration-300 hover:text-[#f79dc3] cursor-pointer text-[18px] md:text-[20px]">
                                {item}
                        </p>
                ))}
               
        </div>

</div>

{/* gallery section in grids  */}
<motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-auto mx-auto"

>
        {/* column 1 */}
        <div className="flex flex-col gap-4">
                <GalleryImage src="/Media/gallery-6.jpg.jpeg" className="h-[300px] w-full" />

                <GalleryImage src="/Media/gallery-7.jpg.jpeg" className="h-[300px] w-full" />
        </div>

        {/* column 2 */}
        <div className="flex flex-col">
                <GalleryImage src="/Media/gallery-10.jpg.jpeg" className="h-full gap-4 h-[300px] w-full lg:h-[616px]" />
        </div>

        {/* column 3 */}
        <div className="flex flex-col gap-4">
                <GalleryImage src="/Media/gallery-9.jpg.jpeg" className="h-[300px] w-full" />
                <GalleryImage src="/Media/gallery-8.jpg.jpeg" className="h-[300px] w-full" />
        </div>
</motion.div>

        </div>

      </div>

    </div>
  );
};

export default GalleryFirst;
