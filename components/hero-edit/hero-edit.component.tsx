import React from "react";
import HeroImageEdit from "../hero-image-edit/hero-image-edit.component";

import WordsEdit from "../words-edit/words-edit.component";

const HeroEdit = () => {
  return (
    <div className="w-full flex flex-col space-y-5">
      <h1 className="text-4xl text-center mb-6">Edit Hero section</h1>
      <WordsEdit />
      
      <HeroImageEdit />
    </div>
  );
};

export default HeroEdit;
