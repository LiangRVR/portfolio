import React from "react";
import SectionTitle from "../section-title/section-title.component";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex flex-col  justify-evenly h-screen overflow-hidden text-left md:flex-row max-w-full px-10 mx-auto items-center"
    >
      <SectionTitle title="Experience" className="absolute top-24" />

    </motion.div>
  );
};

export default WorkExperience;
