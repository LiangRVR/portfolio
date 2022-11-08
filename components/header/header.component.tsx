import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 p-1 md:p-5 flex flex-row items-center justify-between max-w-7xl mx-auto z-20">
      <Link href="#contact-me">
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
          className="flex flex-row items-center cursor-pointer [&:hover>a]:scale-110 [&:hover>p]:text-gray-800"
        >
          <SocialIcon network="email" fgColor="#6daffd" bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
            Get In Touch
          </p>
        </motion.div>
      </Link>
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
        className="flex flex-row items-center space-x-6 pr-2 md:pr-5"
      >
        <Link href="#about">
          <p className="uppercase cursor-pointer text-sm text-gray-500 hover:text-gray-800">
            About
          </p>
        </Link>
        <Link href="#projects">
          <p className="uppercase cursor-pointer text-sm text-gray-500  hover:text-gray-800">
            Projects
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
