import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircle from "../background-circle/background-circle.component";
import { motion } from "framer-motion";
import { handleClientScriptLoad } from "next/script";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Welcome", "Hi, I'm Liang Villarrubia", "I love MERN stack"],
    loop: true,
    delaySpeed: 4000,
  });
  const [textShow, setTextShow] = useState(false);

  const handleCircleAnimationDone = (): void => {
    setTextShow(true);
  };
  return (
    <div className="h-screen flex flex-col space-y-8 justify-evenly items-center text-center overflow-hidden">
      {textShow && (
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
          className="flex flex-col justify-evenly mt-[10vh]"
        >
          <h1 className="md:h-auto text-2xl md:text-4xl lg:text-5xl font-semibold px-10">
            <span>{text}</span>
            <Cursor cursorColor="#286fb4" />
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl uppercase pt-2 md:pt-4 tracking-[7px] md:tracking-[10px]">
            Full Stack Developer
          </h2>
        </motion.div>
      )}
      <BackgroundCircle onAnimationCompleteCallBack={handleCircleAnimationDone}>
        <motion.picture
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
          className="relative mx-auto h-[20vw] w-[20vw] md:h-32 md:w-32 rounded-full  shadow-[rgba(199,_199,_199,_0.9)_0px_30px_90px]"
        >
          <Image
            src="https://i.ibb.co/DwFTQ7R/portrait2-new.png"
            alt="Liang`s picture"
            objectFit="cover"
            layout="fill"
            className="rounded-full"
            priority={true}
          />
        </motion.picture>
      </BackgroundCircle>
    </div>
  );
};

export default Hero;
