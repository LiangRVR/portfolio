import React from "react";
import Image from "next/image";
import getDevIconUrl from "../../utils/getDevIconsUrl";

const DevIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  const [name, svgTag] = iconName.split("-");
  return (
    <div
      className={`relative ${
        className ? className : " h-7 w-7 md:h-10 md:w-10"
      }`}
    >
      <Image
        src={getDevIconUrl(name, svgTag)}
        layout="fill"
        alt="Dev Icon"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default DevIcon;
