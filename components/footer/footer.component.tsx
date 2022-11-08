import React, { useState, useEffect } from "react";
import Link from "next/link";
import SocialIconsContainer from "../social-icons-container/social-icons-container.component";
import { motion } from "framer-motion";
import UpArrow from "../up-arrow/up-arrow.component";

type footerProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};

const Footer = ({ containerRef }: footerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const upArrowVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  useEffect(() => {
    const currentDiv = containerRef.current;
    if (currentDiv) {
      const scrollHandler = (event: Event) => {
        const div = event.currentTarget as HTMLDivElement;
        const divHeight = div.clientHeight;
        const scrollTop = div.scrollTop;
        if (isVisible) {
          if (scrollTop < divHeight) {
            setIsVisible(false);
          }
        } else {
          if (scrollTop > divHeight) {
            setIsVisible(true);
          }
        }
      };

      currentDiv.addEventListener("scroll", scrollHandler, {
        passive: false,
      });
      return () => currentDiv.removeEventListener("scroll", scrollHandler);
    }
  }, [containerRef, isVisible]);

  return (
    <footer className="sticky bottom-0 z-20 p-1 md:p-5 w-full flex flex-row justify-between max-w-7xl mx-auto">
      <SocialIconsContainer />
      {isVisible && (
        <Link href="#hero">
          <motion.div
            variants={upArrowVariants}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              duration: 3,
            }}
            className="self-end mr-1 w-[7vw] max-w-[40px] min-w-[20px] animate-bounce active:animate-none hover:cursor-pointer"
          >
            <UpArrow className="fill-gray-400 hover:fill-gray-300 active:fill-gray-500 hover:scale-105" />
          </motion.div>
        </Link>
      )}
    </footer>
  );
};

export default Footer;
