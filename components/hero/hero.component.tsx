import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircle from "../background-circle/background-circle.component";
import HeroButton from "../hero-button/hero-button.component";
import Link from "next/link";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Liang Villarrubia",
      "Full Stack Developer",
      "I love MERN stack",
      "<AlwaysCoding props={amazingProjects} />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        src={
          "https://drive.google.com/uc?export=view&id=19XhMPQzcyChRgqsPsrpHh5Ki6y0Aia0b"
        }
        alt="Liang`s picture"
        height={"128px"}
        width={"128px"}
        objectFit="cover"
        className="relative rounded-full mx-auto"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Full Stack Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <HeroButton text={"About"} href="#about" />
          <HeroButton text={"Experience"} href="#experience" />
          <HeroButton text={"Skills"}  href="#skills"/>
          <HeroButton text={"Projects"} href="#projects" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
