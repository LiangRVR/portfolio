import React from "react";
import Image from "next/image";
import getDevIconUrl from "../../utils/getDevIconsUrl";

const DevIcon = ({ iconName }: { iconName: string }) => {
  return (
    <div className="relative h-10 w-10">
      <Image
        src={getDevIconUrl(iconName, "original")}
        layout="fill"
        alt="Dev Icon"
        objectFit="cover"
        objectPosition="center"
        className="rounded-full"
      />
    </div>
  );
};

export default DevIcon;
