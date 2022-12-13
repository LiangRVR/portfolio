import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import EditProjectSkills from "../edit-project-skills/edit-project-skills.component";

type Inputs = {
  imageUrl: string;
  githubUrl: string;
  webUrl: string;
  overview: string;
};

const ProjectFormEdit = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [skills, setSkills] = useState([
    "firebase-plain",
    "react-original",
    "redux-original",
    "express-original",
    "nodejs-original",
  ]);
  const [projectImageUrl, setProjectImageUrl] = useState(
    "https://i.ibb.co/9t1MvM8/rsz-crwn-clothing.png"
  );
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log({ ...formData, skills });
    setProjectImageUrl(formData.imageUrl);
  };

  return (
    <div className="w-11/12 h-fit space-y-5 p-5 flex flex-col  items-center justify-center border-2 shadow-md rounded-xl mx-auto">
      <h2 className="text-2xl  text-center">Little Background</h2>
      <picture className="relative w-[40vh] aspect-[45/19]">
        <Image src={projectImageUrl} alt="mockup" layout="fill" />
      </picture>

      <EditProjectSkills skills={skills} setSkills={setSkills} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-full mx-auto"
      >
        <div className="flex flex-row space-x-1">
          <label className="w-32 flex items-center justify-center">
            Title:
          </label>
          <input
            {...register("imageUrl")}
            className="outline-none bg-slate-300/10 w-full rounded-sm border-b px-3 py-1 border-[#242424] text-gray-600 placeholder-gray-500 transition-all focus:border-[#6daffd]/40 focus:text-[#6daffd] hover:border-[#6daffd]/40"
            placeholder="Title"
            type="text"
          />
        </div>
        <div className="flex flex-row space-x-1">
          <label className="w-32 flex items-center justify-center">
            Image Url:
          </label>
          <input
            {...register("imageUrl")}
            className="outline-none bg-slate-300/10 w-full rounded-sm border-b px-3 py-1 border-[#242424] text-gray-600 placeholder-gray-500 transition-all focus:border-[#6daffd]/40 focus:text-[#6daffd] hover:border-[#6daffd]/40"
            placeholder="Image Url"
            type="url"
          />
        </div>
        <div className="flex flex-row space-x-1">
          <label className="w-32 flex items-center justify-center">
            Github Url:
          </label>
          <input
            {...register("githubUrl")}
            className="outline-none bg-slate-300/10 w-full rounded-sm border-b px-3 py-1 border-[#242424] text-gray-600 placeholder-gray-500 transition-all focus:border-[#6daffd]/40 focus:text-[#6daffd] hover:border-[#6daffd]/40"
            placeholder="Github Url"
            type="url"
          />
        </div>
        <div className="flex flex-row space-x-1">
          <label className="w-32 flex items-center justify-center">
            Web Url:
          </label>
          <input
            {...register("webUrl")}
            className="outline-none bg-slate-300/10 w-full rounded-sm border-b px-3 py-1 border-[#242424] text-gray-600 placeholder-gray-500 transition-all focus:border-[#6daffd]/40 focus:text-[#6daffd] hover:border-[#6daffd]/40"
            placeholder="Web Url"
            type="url"
          />
        </div>

        <div className="flex flex-row space-x-1">
          <label className="w-32 flex items-start justify-center">
            Overview:
          </label>
          <textarea
            {...register("overview")}
            className="outline-none bg-slate-300/10 h-32 w-full rounded-sm border-b px-6 py-2 md:py-4 border-[#242424] text-gray-600 placeholder-gray-500 transition-all focus:border-[#6daffd]/40 focus:text-[#6daffd] hover:border-[#6daffd]/40 overflow-hidden scrollbar scrollbar-hide md:scrollbar-default scrollbar-track-transparent scrollbar-thumb-[#6daffd]/70 scrollbar-thumb-rounded-xl"
          />
        </div>

        <button className="bg-[#6daffd] w-fit mx-auto border-2 border-[#6daffd] py-4 md:py-5 px-10 rounded-md text-black font-bold md:text-lg hover:bg-[#3992ff] hover:border-[#3992ff] active:bg-slate-100">
          Update
        </button>
      </form>
    </div>
  );
};

export default ProjectFormEdit;
