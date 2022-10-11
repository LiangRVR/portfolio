import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "../background-cirlce/background-circle.component";



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
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
