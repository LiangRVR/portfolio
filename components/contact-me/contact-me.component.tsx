import React from "react";
import SectionTitle from "../section-title/section-title.component";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import ContactMeForm from "../contact-me-form/contact-me-form.component";
const ContactMe = () => {
  return (
    <div className="flex flex-column content-center h-screen relative text-center md:text-left md:flex-row max-w-7xl pt-32 2xl:pt-0 px-5 md:px-10 justify-evenly mx-auto 2xl:items-center">
      <SectionTitle title="Contact" className="absolute top-24" />
      <div className="mt-10 2xl:mt-0 flex flex-col justify-center items-center h-[60vh] space-y-1 2xl:space-y-10">
        <h4 className="text-xl lg:text-2xl 2xl:text-4xl font-semibold text-center">
          I have got just what you need. <br className="md:hidden"/> Lets talk.
        </h4>

        <div className="w-full flex flex-col justify-between items-center 2xl:justify-around">
          <div className="flex items-center justify-between xl:justify-center">
            <PhoneIcon className="text-[#6daffd] mr-2 h-5 w-5 md:h-6 md:w-6 xl:h-7 xl:w-7 animate-pulse" />
            <p className="text-lg lg:text-xl xl:text-2xl">+11234567890</p>
          </div>
          <div className="flex items-center justify-between xl:justify-center">
            <EnvelopeIcon className="text-[#6daffd] mr-2 h-5 w-5 md:h-6 md:w-6 xl:h-7 xl:w-7 animate-pulse" />
            <p className="text-lg lg:text-xl xl:text-2xl">liangvillarrubia@gmail.com</p>
          </div>
          <div className="flex items-center justify-between xl:justify-center">
            <MapPinIcon className="text-[#6daffd] mr-2 h-5 w-5 md:h-6 md:w-6 xl:h-7 xl:w-7 animate-pulse" />
            <p className="text-lg lg:text-xl xl:text-2xl">123 DeveloperLine</p>
          </div>
        </div>

        <ContactMeForm />
      </div>
    </div>
  );
};

export default ContactMe;
