import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMeForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:liangvillarrubia95@gmail.com?
    &subject=${formData.subject}
    &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  const className =
    "outline-none bg-slate-300/10 w-full rounded-sm border-b px-6 py-2 md:py-4 border-[#242424] text-gray-600 placeholder-gray-500 transition-all focus:border-[#6daffd]/40 focus:text-[#6daffd] hover:border-[#6daffd]/40";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 w-full mx-auto"
    >
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <input
          {...register("name")}
          className={className}
          placeholder="Name"
          type="text"
        />

        <input
          {...register("email")}
          className={className}
          placeholder="Email"
          type="email"
        />
      </div>
      <input
        {...register("subject")}
        className={className}
        placeholder="Subject"
        type="text"
      />

      <textarea {...register("message")} className={className} />

      <button className="bg-[#6daffd] border-2 border-[#6daffd] py-4 md:py-5 px-10 rounded-md text-black font-bold md:text-lg hover:bg-[#3992ff] hover:border-[#3992ff] active:bg-slate-100">
        Submit
      </button>
    </form>
  );
};

export default ContactMeForm;
