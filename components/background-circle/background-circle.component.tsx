import React from "react";
import { motion } from "framer-motion";

const BackgroundCircle = () => {
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
      className="relative flex justify-center items-center"
    >{/* h-[200px] w-[200px] */}
      <div className="absolute border border-blue-400 rounded-full h-[35vw] w-[35vw] md:max-h-[200px] md:max-w-[200px] mt-52 animate-ping"/>
      <div className="absolute border border-[#333333] rounded-full h-[55vw] w-[55vw] md:max-h-[300px] md:max-w-[300px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full h-[75vw] w-[75vw] md:max-h-[500px] md:max-w-[500px] mt-52" />
      <div className="absolute border border-[#F7Ab0A] opacity-20 rounded-full h-[85vw] w-[85vw] md:max-h-[650px] md:max-w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[95vw] w-[95vw] md:max-h-[800px] md:max-w-[800px] mt-52 " />
    </motion.div>
  );
};

export default BackgroundCircle;
