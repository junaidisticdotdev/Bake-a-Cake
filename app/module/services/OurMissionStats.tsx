"use client";

import React from "react";
import OurMissionStatsCard from "@/app/components/OurMissionStatsCard";

const OurMissionStats = () => {
  return (
    <section className="w-full bg-sky-100 py-16 px-4">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide italic text-slate-800 mb-20">
        Sweet Success in Numbers
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        {/* Card 1 */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold font-serif text-pink-400">
            <OurMissionStatsCard value={950} />+
          </h3>
          <p className="text-gray-800 mt-2 font-medium font-serif text-lg md:text-xl lg:text-2xl">
            Parcels Delivered
          </p>
        </div>

        {/* Card 2 */}
        <div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-pink-400">
            <OurMissionStatsCard value={60} />
          </h3>
          <p className="text-gray-800 mt-2 font-medium font-serif text-lg md:text-xl lg:text-2xl">
            Special Recipes
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-pink-400">
            <OurMissionStatsCard value={25} />
          </h3>
          <p className="text-gray-800 mt-2 font-medium font-serif text-lg md:text-xl lg:text-2xl">
            Expert Bakers
          </p>
        </div>

        {/* Card 4 */}
        <div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-pink-400">
            <OurMissionStatsCard value={100} />%
          </h3>
          <p className="text-gray-800 mt-2 font-medium font-serif text-lg md:text-xl lg:text-2xl">
            Organic Items
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurMissionStats;