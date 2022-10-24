import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type BackgroundCircleProps = {
  children?: ReactNode;
  onAnimationCompleteCallBack?: () => void;
};

const BackgroundCircle = ({
  children,
  onAnimationCompleteCallBack,
}: BackgroundCircleProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      viewport={{
        once: true,
      }}
      onAnimationComplete={onAnimationCompleteCallBack}
      className="relative flex justify-center items-center content-center h-[95vw] w-[95vw] md:max-h-[800px] md:max-w-[800px]"
    >
      {/* h-[200px] w-[200px] */}
      {children}
      <div className="absolute border border-[#6daffd] rounded-full h-[35vw] w-[35vw] md:max-h-[200px] md:max-w-[200px] animate-ping" />
      <div className="absolute  rounded-full h-[45vw] bg-gradient-radial border border-[#286FB4] w-[45vw] md:max-h-[300px] md:max-w-[300px] animate-pulse" />
      <div className="absolute border border-[#286FB4] rounded-full h-[65vw] w-[65vw] md:max-h-[500px] md:max-w-[500px]" />
      <div className="absolute border border-[#6daffd] opacity-20 rounded-full h-[85vw] w-[85vw] md:max-h-[650px] md:max-w-[650px] animate-pulse" />
      <div className="absolute border border-[#286FB4] rounded-full h-[95vw] w-[95vw] md:max-h-[800px] md:max-w-[800px] " />
    </motion.div>
  );
};

export default BackgroundCircle;
