import React, { useState } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import isValidUrl from "../../utils/isValidURL";

type InputURLImage = {
  url: string;
};

type ImageUrlProps = {
  imageUrl: string;
  setNewUrl: React.Dispatch<React.SetStateAction<string>>;
  title: string;
};

const ImageUrlEdit = ({ imageUrl, setNewUrl, title }: ImageUrlProps) => {
  const [show, setShow] = useState(false);

  const { register, handleSubmit, reset } = useForm<InputURLImage>({
    defaultValues: {
      url: "",
    },
  });

  const onSubmitWord: SubmitHandler<InputURLImage> = (formData) => {
    const { url } = formData;
    if (isValidUrl(url)) {
      setNewUrl(url);
      setShow(false);
      reset();
      return;
    }
    setShow(true);
  };

  return (
    <div className="w-11/12 md:w-fit h-fit p-5  border-2 shadow-md rounded-xl mx-auto">
      <h2 className="text-2xl  text-center">{title}</h2>
      <div className="space-y-5 md:space-x-8 flex flex-col md:flex-row justify-center md:justify-around content-center flex-wrap">
        <form
          onSubmit={handleSubmit(onSubmitWord)}
          className="flex flex-col space-y-3 h-fit my-auto"
        >
          <div className="border rounded-lg shadow-sm w-[60vw] overflow-hidden scrollbar scrollbar-hide md:w-fit h-12 px-3 flex flex-col justify-center ">
            <p className="text-center md:text-lg">Url: {imageUrl}</p>
          </div>
          <div className="flex space-x-5 h-10 my-auto">
            <input
              {...register("url")}
              className="outline-none bg-slate-300/10 w-full rounded-sm border-b px-3 py-1 border-[#242424] text-gray-600 placeholder-gray-500 transition-all focus:border-[#6daffd]/40 focus:text-[#6daffd] hover:border-[#6daffd]/40"
              placeholder="URL"
              type="url"
            />
            <button className="bg-[#6daffd] border-2 border-[#6daffd] px-3 py-1 rounded-md text-black font-bold md:text-lg hover:bg-[#3992ff] hover:border-[#3992ff] active:bg-slate-100">
              Add
            </button>
          </div>

          {show && <p className="text-center text-red-600">Invalid URL!!</p>}
        </form>

        <picture className="relative mx-auto h-[20vw] w-[20vw] md:h-32 md:w-32 rounded-full">
          <Image
            src={imageUrl}
            alt="Liang`s picture"
            objectFit="cover"
            layout="fill"
            className="rounded-full"
          />
        </picture>
      </div>
    </div>
  );
};

export default ImageUrlEdit;
