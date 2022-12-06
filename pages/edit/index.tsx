import React from "react";
import AboutEdit from "../../components/about-edit/about-edit.component";
import Auth from "../../components/auth/auth.component";
import HeroEdit from "../../components/hero-edit/hero-edit.component";

const Edit = () => {
  return (
    <Auth>
      <div className="h-screen w-full overflow-hidden scrollbar scrollbar-hide md:scrollbar-default scrollbar-track-transparent scrollbar-thumb-[#6daffd]/70 scrollbar-thumb-rounded-xl">
        <div className="bg-white text-black z-0  flex flex-col  max-w-7xl py-5 px-10 justify-evenly mx-auto items-center space-y-10">
          <HeroEdit />
          <AboutEdit/>
        </div>
      </div>
    </Auth>
  );
};

export default Edit;
