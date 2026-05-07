"use client";
import React from "react";
import {easeInOut, motion} from 'framer-motion';
import ServiceProvideCard from "@/app/components/ServiceProvideCard";
import { FaCakeCandles } from "react-icons/fa6";
import { GiCupcake } from "react-icons/gi";
import { LuDessert } from "react-icons/lu";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";


const ServicesWeProvide = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-[#fbf6eb] w-full min-h-screen space-y-10 overflow-hidden" >

 <p className='italic font-medium text-3xl mt-5 sm:mt-0 sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-widest text-center text-slate-800'
        >
          SERVICES WE PROVIDE
        </p>
        <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 ">

<motion.div
initial={{x:-100, opacity:0}}
        whileInView={{x:0, opacity:1}}
viewport={{once:false}}
        transition={{
          duration: 0.8,
          delay:0.5,
          ease: "easeInOut"
        }}
>
      <ServiceProvideCard

        icon={FaCakeCandles}
        title="Cake Design"
        description="We craft custom cakes with premium ingredients and artistic designs for your special day."
      />
</motion.div>
      {/* card number 2 */}

      <motion.div
      initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
viewport={{once:false}}
        transition={{
          duration: 1,
          delay:0.3,
          ease: "easeInOut"
        }}
        >
      <ServiceProvideCard
        icon={GiCupcake}
        title="Best Cupcakes"
        description="Small bites of heaven, baked fresh daily with creamy frosting and delightful toppings."
      />
      </motion.div>
      {/* card number 3  */}

      <motion.div
      
      initial={{x:100, opacity:0}}
        whileInView={{x:0, opacity:1}}
viewport={{once:false}}
        transition={{
          duration: 0.8,
          delay:0.5,
          ease: "easeInOut"
        }}>
      <ServiceProvideCard
        icon={LuDessert}
        title="Desserts"
        description="A sweet collection of gourmet treats, from rich puddings to crispy french macarons."
      />
      </motion.div>
      {/* card number 4  */}

      <motion.div
      initial={{x:-100, opacity:0}}
        whileInView={{x:0, opacity:1}}
viewport={{once:false}}
        transition={{
          duration: 0.8,
          delay:0.5,
          ease: "easeInOut"
        }}>
      <ServiceProvideCard
        icon={MdOutlineRestaurantMenu}
        title="Menu Planner"
        description="Let us help you organize the perfect dessert menu for weddings, parties, or corporate events."
      />
</motion.div>
      {/* card number 5  */}

      <motion.div
      initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
viewport={{once:false}}
        transition={{
          duration: 1,
          delay:0.3,
          ease: "easeInOut"
        }}>
      <ServiceProvideCard
        icon={BiSolidDish}
        title="Awesome recipes"
        description="Inspired by world-famous bakers, our secret recipes ensure a perfect taste in every bite."
      />
</motion.div>
      {/* card number 6  */}

      <motion.div
      
      initial={{x:100, opacity:0}}
        whileInView={{x:0, opacity:1}}
viewport={{once:false}}
        transition={{
          duration: 0.8,
          delay:0.5,
          ease: "easeInOut"
        }}>
      <ServiceProvideCard
        icon={CiDeliveryTruck}
        title="Home Delivery"
        description="Get your favorite sweets delivered straight to your doorstep, fresh and on time, every time."
      />
      </motion.div>
      </div>
    </div>
  );
};

export default ServicesWeProvide;
