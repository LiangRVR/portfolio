import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircle from "../background-circle/background-circle.component";
import HeroButton from "../hero-button/hero-button.component";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Liang Villarrubia",
      "Full Stack Developer",
      "I love MERN stack",
      "<AlwaysCoding props={amazingProjects} />",
    ],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
      <BackgroundCircle />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.0,
        }}
        className="relative mx-auto h-[20vw] w-[20vw] md:h-32 md:w-32"
      >
        <Image
          src="https://drive.google.com/uc?export=view&id=19XhMPQzcyChRgqsPsrpHh5Ki6y0Aia0b"
          alt="Liang`s picture"
          objectFit="cover"
          layout="fill"
          className="rounded-full"
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.0,
        }}
        className="z-20"
      >
        <h2 className="text-xs md:text-sm lg:text-lg uppercase text-gray-500 pb-2 tracking-[10px]">
          Full Stack Developer
        </h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <HeroButton text={"About"} href="#about" />
          <HeroButton text={"Experience"} href="#experience" />
          <HeroButton text={"Skills"}  href="#skills" />
          <HeroButton text={"Projects"} href="#projects" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
