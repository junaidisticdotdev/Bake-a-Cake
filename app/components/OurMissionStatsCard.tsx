"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const OurMissionStatsCard = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  
  // 1. Ref create karein taake element ko track kiya ja sake
  const ref = useRef(null);
  
  // 2. useInView hook check karega ke component screen par hai ya nahi
  // once: true ka matlab hai ke animation sirf pehli baar scroll karne pe chale
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    // 3. Sirf tab animate karein jab isInView true ho
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
        delay:0.3
      });
      return controls.stop;
    }
  }, [value, isInView, motionValue]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
};

export default OurMissionStatsCard;