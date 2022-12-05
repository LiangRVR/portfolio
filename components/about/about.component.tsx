import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../section-title/section-title.component";

const About = () => {
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
      className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl pt-32 px-10 md:pt-0 justify-evenly mx-auto items-center"
    >
      <SectionTitle title="about" className="absolute top-24"/>

      <motion.picture
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        /* w-56 h-56 */
        className="relative md:mb-0 flex-shrink-0 w-[40vw] h-[40vw]  max-w-[14rem] max-h-56 md:w-64 md:h-96 md:max-w-[500px] md:max-h-[600px] xl:w-1/3 xl:h-2/4"
      >
        <Image
          src="https://i.ibb.co/D8Pk7b0/perfil-low.jpg"
          alt="Liang`s picture"
          objectFit="cover"
          objectPosition="top"
          layout="fill"
          className="rounded-full md:rounded-lg"
        />
      </motion.picture>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#6daffd]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          iusto iste voluptatum et possimus ipsa officia debitis! Voluptatum
          nemo, optio quasi temporibus unde, ratione vitae quis modi incidunt
          amet in.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
