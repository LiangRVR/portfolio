import React from "react";

type Title = {
  title: string;
  className?: string;
};

const SectionTitle = ({ title, className }: Title) => {
  return (
    <h3
      className={
        className + " text-gray-500 tracking-[20px] uppercase text-2xl"
      }
    >
      {title}
    </h3>
  );
};

export default SectionTitle;
