import Link from "next/link";
import React from "react";

type HeroButtonProps = {
  text: string;
  href?: string;
};

const HeroButton = ({ text, href }: HeroButtonProps) => {
  return (
    <Link href={href || ""}>
      <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
        {text}
      </button>
    </Link>
  );
};

export default HeroButton;
