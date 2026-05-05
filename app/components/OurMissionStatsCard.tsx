"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const OurMissionStatsCard = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  
  const ref = useRef(null);
  
  // once: false ka matlab hai ke har baar view mein aane par trigger hoga
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      // Jab view mein aaye to zero se start karein
      motionValue.set(0); 
      
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
        delay: 0.2 // Halka sa delay taake user ko start hota nazar aaye
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