import React from "react";
import SectionTitle from "../section-title/section-title.component";
import { motion } from "framer-motion";
import ExperienceCard from "../experience-card/experience-card.component";

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
      className="relative flex flex-col  justify-evenly h-screen overflow-hidden text-left md:flex-row max-w-7xl px-10 mx-auto items-center"
    >
      <SectionTitle title="Experience" className="absolute top-24" />
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
