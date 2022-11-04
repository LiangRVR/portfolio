import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { LinkProps } from "next/link";
import UpArrow from "../up-arrow/up-arrow.component";
import { motion } from "framer-motion";
import SocialIconsContainer from "../social-icons-container/social-icons-container.component";

type GotoArrowProps = Pick<LinkProps, "href"> & {
  className?: string;
  children: ReactElement;
};

const AddFixedFooter = ({ href, className = "", children }: GotoArrowProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollHandler = (event: Event) => {
    const div = event.currentTarget as HTMLDivElement;
    const divHeight = div.clientHeight;
    const scrollTop = div.scrollTop;

    setIsVisible(scrollTop > divHeight);
  };

  return (
    <>
      {React.cloneElement(children, { onScroll: scrollHandler })}

      <div className="fixed top-full -translate-y-full z-20 p-1 md:p-5 w-screen left-1/2 -translate-x-1/2 flex flex-row justify-between max-w-7xl">
        <SocialIconsContainer />
        {isVisible && (
          <Link href={href}>
            <motion.div
              key="upArrow"
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 3,
              }}
              className={
                className +
                "self-end mr-1 w-[7vw] max-w-[40px] min-w-[20px] animate-bounce active:animate-none hover:cursor-pointer"
              }
            >
              <UpArrow className="fill-gray-400 hover:fill-gray-300 active:fill-gray-500 hover:scale-105" />
            </motion.div>
          </Link>
        )}
      </div>
    </>
  );
};

export default AddFixedFooter;
