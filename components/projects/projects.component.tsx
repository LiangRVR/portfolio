import React, { useEffect, useRef } from "react";
import SectionTitle from "../section-title/section-title.component";
import { motion } from "framer-motion";
import ProjectCard from "../project-card/project-card.component";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ///To always load first card center
    if (horizontalScrollRef.current) {
      horizontalScrollRef.current.scrollLeft =
        horizontalScrollRef.current.scrollLeft +
        horizontalScrollRef.current.offsetWidth / 2;
    }
  }, [horizontalScrollRef]);

  const handleClick = (direction: "right" | "left"): undefined => {
    if (horizontalScrollRef.current) {
      const directionSign = direction === "right" ? 1 : -1;
      const scrollLeft = horizontalScrollRef.current.scrollLeft;
      const scrollWidth = horizontalScrollRef.current.scrollWidth;
      horizontalScrollRef.current.scrollTo({
        top: 0,
        left: scrollLeft + directionSign * (scrollWidth / projects.length),
        behavior: "smooth",
      });
    }
    return;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left w-full px-10 items-center justify-evenly mx-auto"
    >
      <SectionTitle title="Projects" className="absolute top-24" />
      <div className="z-20 flex flex-row w-full max-w-7xl items-center justify-center">
        <ChevronLeftIcon
          onClick={() => handleClick("left")}
          className="h-20 w-20 cursor-pointer hidden md:block  text-gray-500 hover:text-gray-800 hover:scale-105 active:text-gray-400 active:animate-ping"
        />
        <div
          ref={horizontalScrollRef}
          className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-transparent scrollbar-thumb-[#6daffd]/70 scrollbar-thumb-rounded-xl"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project} i={i} projects={projects} />
          ))}
        </div>
        <ChevronRightIcon
          onClick={() => handleClick("right")}
          className="h-20 w-20 cursor-pointer hidden md:block text-gray-500  hover:text-gray-800 hover:scale-105 active:text-gray-400 active:animate-ping"
        />
      </div>

      <div className="w-full absolute top-[30%] bg-[#6daffd]/10 left-0 h-[25vh] max-h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
