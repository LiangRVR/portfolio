import React from "react";
import Auth from "../../components/auth/auth.component";
import HeroEdit from "../../components/hero-edit/hero-edit.component";

const Edit = () => {
  return (
    <Auth>
      <div className="bg-white text-black h-screen scroll-smooth overflow-scroll z-0 scrollbar scrollbar-hide md:scrollbar-default scrollbar-track-transparent scrollbar-thumb-[#6daffd]/70 scrollbar-thumb-rounded-xl flex flex-col  max-w-7xl  px-10 justify-evenly mx-auto items-center">
        <HeroEdit />
      </div>
    </Auth>
  );
};

export default Edit;
