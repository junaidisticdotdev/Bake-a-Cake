'use client';
import OurCategoryCard from "../../components/CategoryCard";
import React from "react";
import { motion } from 'framer-motion';

const OurCategories = () => {
  return (
    <div className="W-full py-16 md:py-20 overflow-hidden bg-white">
      {/* Our categories */}
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center justify-center">
        <p className="italic font-medium text-[50px] md:text-[60px] lg:text-[70px] px-4 md:px-0 mb-10 font-serif tracking-wide">
          Our Categories
        </p>

        {/* grids for cards in our categories  */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full justify-center items-center"

         
        >
          {/* at md two cards shown */}
          <OurCategoryCard
            image="/Media/cupcake-home.webp"
            title="CUPCAKES"
            count={12}
          />
          <OurCategoryCard
            image="/Media/brownie-home.webp"
            title="BROWNIES"
            count={8}
          />
          <OurCategoryCard
            image="/Media/cheesecake-home.webp"
            title="CHEESECAKES"
            count={14}
          />
          <OurCategoryCard
            image="/Media/cake-home.webp"
            title="CAKES"
            count={18}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default OurCategories;
