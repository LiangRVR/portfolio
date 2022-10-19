import Link from "next/link";
import React, {
  ReactElement,
  useState,
} from "react";
import { LinkProps } from "next/link";
import UpArrow from "../up-arrow/up-arrow.component";
import { AnimatePresence, motion } from "framer-motion";

type GotoArrowProps = Pick<LinkProps, "href"> & {
  className?: string;
  children: ReactElement;
};

const GotoArrow = ({ href, className = "", children }: GotoArrowProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollHandler = (event: Event) => {
    const win = event.currentTarget as HTMLElement;
    const containerHeight = win.clientHeight;
    const scrollTop = win.scrollTop;
    setIsVisible(scrollTop > containerHeight);
  };

  return (
    <>
      {React.cloneElement(children, { onScroll: scrollHandler })}
      {isVisible && (
        <Link href={href}>
          <div className="relative">
            <AnimatePresence>
              <motion.div
                key="upArrow"
                initial={{
                  opacity: 0,
                }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  y: -400,
                }}
                transition={{
                  type: "spring",
                  duration: 3,
                }}
                className={
                  className +
                  "absolute bottom-5 right-5  2xl:right-1/4 z-20 w-[7vw] max-w-[40px] min-w-[20px] animate-bounce active:animate-none hover:cursor-pointer"
                }
              >
                <UpArrow className="fill-gray-400 hover:fill-gray-300 active:fill-gray-500 hover:scale-105" />
              </motion.div>
            </AnimatePresence>
          </div>
        </Link>
      )}
    </>
  );
};

export default GotoArrow;
