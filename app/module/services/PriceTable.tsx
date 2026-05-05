"use client";
import PriceTableCard from "@/app/components/PriceTableCard";
import React from "react";

const PriceTable = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full min-h-screen px-4 sm:px-6 lg:px-10 space-y-10 overflow-hidden">

      {/* Heading */}
      <p className="italic font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-widest text-center text-slate-800">
        SERVICES WE PROVIDE
      </p>

      {/* Grid Container */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-10 
        w-full 
        max-w-7xl
        place-items-center
      ">

        <PriceTableCard
          image="/Media/donut-1.png"
          title="Spring Cakes"
          price="20"
          delay={0}
          features={[
            "1 x Sweet Aniseed",
            "1 x Soft Fruits",
            "1 x Assorted",
            "1 x Flavour Mix",
          ]}
        />

        <PriceTableCard
          image="/Media/donut-2.png"
          title="Occasion Cakes"
          price="30"
          delay={0.75}
          features={[
            "1 x Sweet Aniseed",
            "1 x Soft Fruits",
            "1 x Assorted",
            "1 x Flavour Mix",
          ]}
        />

        <PriceTableCard
          image="/Media/donut-3.png"
          title="Wedding Cakes"
          price="50"
          delay={1.5}
          features={[
            "1 x Sweet Aniseed",
            "1 x Soft Fruits",
            "1 x Assorted",
            "1 x Flavour Mix",
          ]}
        />

        <PriceTableCard
          image="/Media/donut-4.png"
          title="Desserts"
          price="10"
          delay={2.25}
          features={[
            "1 x Sweet Aniseed",
            "1 x Soft Fruits",
            "1 x Assorted",
            "1 x Flavour Mix",
          ]}
        />

      </div>
    </div>
  );
};

export default PriceTable;