import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 p-1 md:p-5 flex flex-row items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: 500,
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
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer hover:scale-110"
          network="email"
          fgColor="#6daffd"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm hover:text-gray-800 text-gray-500">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
