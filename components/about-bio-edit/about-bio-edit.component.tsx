import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  bio: string;
};

const AboutBioEdit = () => {
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      bio: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut odit iste
  commodi! Mollitia dolorem praesentium ex molestiae, iusto neque natus
  exercitationem laborum unde explicabo delectus inventore illo fuga, vel
  rem.`,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData.bio);
  };

  return (
    <div className="w-11/12  h-fit p-5 space-y-5 border-2 shadow-md rounded-xl mx-auto">
      <h2 className="text-2xl  text-center">Little Background</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-full mx-auto"
      >
        <textarea
          {...register("bio")}

          className="outline-none bg-slate-300/10 h-32 w-full rounded-sm border-b px-6 py-2 md:py-4 border-[#242424] text-gray-600 placeholder-gray-500 transition-all focus:border-[#6daffd]/40 focus:text-[#6daffd] hover:border-[#6daffd]/40 overflow-hidden scrollbar scrollbar-hide md:scrollbar-default scrollbar-track-transparent scrollbar-thumb-[#6daffd]/70 scrollbar-thumb-rounded-xl"
        />

        <button className="bg-[#6daffd] w-fit mx-auto border-2 border-[#6daffd] py-4 md:py-5 px-10 rounded-md text-black font-bold md:text-lg hover:bg-[#3992ff] hover:border-[#3992ff] active:bg-slate-100">
          Update
        </button>
      </form>
    </div>
  );
};

export default AboutBioEdit;
