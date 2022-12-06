import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import isValidUrl from "../../utils/isValidURL";
import ListEdit, { ElementToShowProps } from "../list-edit/list-edit.component";

const SocialIconsEdit = () => {
  const [socialUrlArray, setSocialUrlArray] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (socialUrlArray.length !== 0) {
      const lastUrl = socialUrlArray[socialUrlArray.length - 1];
      if (!isValidUrl(lastUrl)) {
        setShow(true);
        const newSocialUrlArray = socialUrlArray.slice(0, -1);
        setSocialUrlArray(newSocialUrlArray);
        return;
      }
      setShow(false);
    }
  }, [socialUrlArray]);

  return (
    <>
      <ListEdit
        inputStrings={socialUrlArray}
        setNewString={setSocialUrlArray}
        placeholder={"Url"}
        title={"Social url added"}
        errorMessage={"url already added!!"}
        elementToShow={({ key, propValue }: ElementToShowProps) => (
          <SocialIcon
            key={key}
            url={propValue}
            fgColor="#6DAFFD"
            bgColor="transparent"
            className="hover:scale-110"
          />
        )}
      />
      {show && (
        <p className="text-center text-red-600 mx-auto">Invalid Url!!</p>
      )}
    </>
  );
};

export default SocialIconsEdit;
