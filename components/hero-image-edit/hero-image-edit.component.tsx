import React, { useState } from "react";
import ImageUrlEdit from "../image-url-edit/image-url-edit.component";

const HeroImageEdit = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://i.ibb.co/9V4y5qH/perfil-removebg-preview-cartoon.png"
  );

  return (
    <ImageUrlEdit
      title="Hero Image"
      setNewUrl={setImageUrl}
      imageUrl={imageUrl}
    />
  );
};

export default HeroImageEdit;


