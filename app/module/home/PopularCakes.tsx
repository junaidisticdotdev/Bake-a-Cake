'use client';
import { motion } from 'framer-motion';
import React from 'react';

const PopularCakes = () => {
  const CakeVarieties = [
    {
      title: "Pink Cake with Vanilla Frosting",
      desc: "A chilhood favorite made larger than life, our celebration sheet cake features delicious homemade sprinkles.",
      price: "$ 5.45"
    },
    {
      title:" Flat Marshmallow Shapes",
      desc:"Layers os shaped marshmallow, bunnies, chicks and simple flowers make a memorable gift.",
      price: "$ 6.50"
    },
      {title: "Spicy Chocolate Cookies",
      desc: "Everything’s nice about Mexican hot chocolate, which is why we dreamed up a cookie that showcases its qualities.",
      price: "$4.35"
    },
    {
      title: "Pistachio Cannoli Cake",
      desc: "This dramatic four-layer cake is inspired by the flavors of Sicilian-style cannoli, which is stuffed with ricotta.",
      price: "$4.99"
    }
    
  ];

  return (
    // main 
<div className='h-auto w-full bg-[#e1f7ff] mt-10 py-10 relative overflow-hidden '>

  {/* heading  */}
  <div className='flex flex-col items-center justify-center leading-tight mt-6 text-center lg:text-left'>
    <p className='italic font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide text-center'>MOST POPULAR</p>

    <p className='italic font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide text-center'>CAKES WE HAVE</p>
  </div>

  {/* main content left and right section with animations */}
  <div className='relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-6 lg:py-12'>


{/* left side text section */}
<div className='w-full lg:w-3/5 flex flex-col'>

{/* varities detail  */}
<div className='flex flex-col space-y-8 w-full lg:max-w-2xl'>
  {CakeVarieties.map ((cake,index) => (
    <motion.div
    className='flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all group'

    key={index}
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    viewport={{once:false}}
    
    transition={{
      delay:index*0.1,
       duration: 1.4,
       ease: "easeInOut"
    }}>

      {/* varities details in box */}
      <div className='flex flex-col space-y-4 pr-4'>
        {/* title */}
        <p className='font-semibold italic text-xl md:text-2xl group-hover:text-[#f79dc3] transition-colors '>{cake.title}
        </p>
        {/* description */}
        <p className='text-gray-900 text-sm md:text-base italic '>
{cake.desc}
        </p>
      </div>

      {/* price tag */}
      <div className='mt-4 sm:mt-0 bg-[#f79dc3] text-white px-4 py-2 rounded-lg font-bold italic text-xl shadow-sm whitespace-nowrap'>
        {cake.price}
      </div>
       </motion.div>
  ))}
</div>
</div>

{/* right side image */}
<motion.div
initial={{y:100, opacity:0 }}
whileInView={{y:0 , opacity:1}}
viewport={{ once: false}}

transition={{
  duration:1.2,
  ease:"easeInOut",
  delay: 0.3

}}

className='w-full lg:w-2/5 flex justify-center lg:justify-end mt-12 lg:mt-0 overflow-hidden rounded-3xl'>

<img src="/Media/home-popular-cake.jpeg" alt="Popular Cake"
className='w-[300px] md:w-[400px] lg:w-full object-contain rounded-3xl hover:scale-110 duration-600 transition' />
</motion.div>
  </div>
   </div>
  );
};

export default PopularCakes