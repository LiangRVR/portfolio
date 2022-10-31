import React, { useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const SocialIconsContainer = () => {
  return (
    <motion.div
      initial={{
        x: -500,
        opacity: 0.5,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-row content-start items-center"
    >
      <SocialIcon
        url="https://www.linkedin.com/in/liang-villarrubia/"
        fgColor="#6DAFFD"
        bgColor="transparent"
        className="hover:scale-110"
      />
      <SocialIcon
        url="https://www.linkedin.com/in/liang-villarrubia/"
        fgColor="#6daffd"
        bgColor="transparent"
        className="hover:scale-110"
      />
      <SocialIcon
        url="https://www.linkedin.com/in/liang-villarrubia/"
        fgColor="#6daffd"
        bgColor="transparent"
        className="hover:scale-110"
      />
    </motion.div>
  );
};
export default SocialIconsContainer;
