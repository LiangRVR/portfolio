import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import DevIcon from "../dev-icon/dev-icon.component";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w[500px] md:[600px] xl:[900] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="relative w-32 h-32 xl:w-[200px] xl:h-[200px]"
      >
        <Image
          src="https://www.gartner.com/imagesrv/peer-insights/vendors/logos/microsoft.jpg"
          layout="fill"
          alt="Company Logo"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Senior Frontend Developer</h4>
        <p className="font-bold text-2xl mt-1">Microsoft</p>
        <div className="flex space-x-2 my-2">
          <DevIcon iconName="react"/>
          <DevIcon iconName="nodejs"/>
        </div>
        <p className="uppercase py-5 text-gray-300">Started work ... - Ended ...</p>
      </div>
      <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
      </ul>
    </article>
  );
};

export default ExperienceCard;
