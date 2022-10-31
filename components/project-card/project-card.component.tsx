import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

type Props = {
    i:number,
    projects: number[]
};

const ProjectCard = ({i,projects}: Props) => {
  const cardContainerRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(cardContainerRef);

  const imageVariants = {
    visible: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: -300,
      opacity: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      ref={cardContainerRef}
      className="w-full h-[80vh] flex-shrink-0 snap-center flex flex-col space-y-5 2xl:space-y-[5vh] items-center justify-center md:p-5 lg:p-10 "
    >
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="relative w-52 h-24 sm:w-[40vh] sm:h-[18vh] 2xl:w-[55vh] 2xl:h-[25vh]"
      >
        <Image
          src="https://i.ibb.co/9t1MvM8/rsz-crwn-clothing.png"
          alt="mockup"
          layout="fill"
        />
      </motion.div>

      <div className="space-y-1 md:space-y-10 px-0 md:px-5 lg:p-10 max-w-6xl">
        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
          Case Study {i + 1} of {projects.length}: Crown clothing
        </h4>
        <p className="md:text-lg text-center md:text-left">
          This is a full stack app (MERN stack) working with Firebase, it`s a
          massive e-commerce application similar to Shopify using React, Redux,
          React Hooks, React Router, Firebase, Redux-Saga, and a little server
          using Express to handle Stripe`s payments.{" "}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
