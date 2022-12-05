import Link from "next/link";
import React from "react";
import { LinkProps } from "next/link";

type HeroButtonProps = Pick<LinkProps, "href"> & { text: string };

const HeroButton = ({ text, href }: HeroButtonProps) => {
  return (
    <Link href={href}>
      <button className="px-6 mx-3 my-3 md:my-0 py-2 w-28 text-center border border-[#286fb4] bg-[#286fb4] text-white rounded-full uppercase text-xs transition-all hover:bg-white hover:text-black">
        {text}
      </button>
    </Link>
  );
};

export default HeroButton;
