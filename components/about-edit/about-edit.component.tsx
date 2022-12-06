import React from "react";
import AboutImageEdit from "../about-image-edit/about-image-edit.component";

const AboutEdit = () => {
  return (
    <div className="w-full flex flex-col space-y-5">
      <h1 className="text-4xl text-center mb-6">Edit About section</h1>
      <AboutImageEdit />
    </div>
  );
};

export default AboutEdit;
