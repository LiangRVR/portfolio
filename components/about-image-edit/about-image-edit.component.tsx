import React, { useState } from "react";
import ImageUrlEdit from "../image-url-edit/image-url-edit.component";

const AboutImageEdit = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://i.ibb.co/D8Pk7b0/perfil-low.jpg"
  );

  return (
    <ImageUrlEdit
      title= "About Image"
      setNewUrl={setImageUrl}
      imageUrl={imageUrl}
    />
  );
};

export default AboutImageEdit;
