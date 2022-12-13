import { XMarkIcon } from "@heroicons/react/24/solid";
import { defaultCollections } from "@next-auth/mongodb-adapter";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import DevIcon from "../dev-icon/dev-icon.component";

type InputSkill = {
  skill: string;
};

type EditProjectSkillsProps = {
  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>;
};

const EditProjectSkills = ({ skills, setSkills }: EditProjectSkillsProps) => {
  const {
    register: skillRegister,
    handleSubmit: skillHandleSubmit,
    reset,
  } = useForm<InputSkill>();
  const [show, setShow] = useState(false);
  const placeHolderDefault = "New Skill";
  const [placeHolder, setPlaceHolder] = useState(placeHolderDefault);

  const onSkillSubmit: SubmitHandler<InputSkill> = (formData) => {
    const isSkillIncluded = skills.includes(formData.skill);
    if (!isSkillIncluded) {
      setSkills(skills.concat(formData.skill));
      setShow(false);
    }
    reset({ skill: "" });
    setPlaceHolder(isSkillIncluded ? "Already added" : placeHolderDefault);
  };

  const handleSkills = (skillToDelete: string) => {
    return () => {
      const newSkillsArray = skills.filter((skill) => skill !== skillToDelete);
      setSkills(newSkillsArray);
    };
  };

  return (
    <div className="flex space-x-5 justify-center">
      {skills.map((skill) => (
        <div
          key={skill}
          className="h-14 w-14 flex justify-center items-center relative bg-slate-100 rounded-full "
          onClick={handleSkills(skill)}
        >
          <DevIcon iconName={skill} />
          <span className="absolute -top-1 left-10 p-[0.5px] border bg-red-500 shadow-md rounded-full hover:animate-spin active:p-[1px]">
            <XMarkIcon className="h-4 cursor-pointer text-white " />
          </span>
        </div>
      ))}
      {show && (
        <form
          onSubmit={skillHandleSubmit(onSkillSubmit)}
          className="flex max-w-sm space-x-5 mx-auto"
        >
          <input
            {...skillRegister("skill")}
            className="outline-none bg-slate-300/10 w-full rounded-sm border-b px-3 py-1 border-[#242424] text-gray-600 placeholder-gray-500 transition-all focus:border-[#6daffd]/40 focus:text-[#6daffd] hover:border-[#6daffd]/40"
            placeholder={placeHolder}
            type="text"
          />
          <button className="bg-[#6daffd] border-2 border-[#6daffd] px-3 py-1 rounded-md text-black font-bold md:text-lg hover:bg-[#3992ff] hover:border-[#3992ff] active:bg-slate-100">
            Add
          </button>
        </form>
      )}
      {!show && (
        <div
          onClick={() => setShow(true)}
          className="h-14 w-14 flex justify-center items-center bg-slate-100 rounded-full p-2 "
        >
          <XMarkIcon className="h-10 cursor-pointer active:h-12 active:w-12 text-sky-500 hover:text-sky-600 rotate-45" />
        </div>
      )}
    </div>
  );
};

export default EditProjectSkills;
