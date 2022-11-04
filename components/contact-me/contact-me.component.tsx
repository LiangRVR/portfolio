import React from "react";
import SectionTitle from "../section-title/section-title.component";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import ContactMeForm from "../contact-me-form/contact-me-form.component";
const ContactMe = () => {


  return (
    <div className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl pt-32 px-10 md:pt-0 justify-evenly mx-auto items-center">
      <SectionTitle title="Contact" className="absolute top-24" />
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need. Lets talk.
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#6daffd] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+11234567890</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#6daffd] h-7 w-7 animate-pulse" />
            <p className="text-2xl">liangvillarrubia@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#6daffd] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 DeveloperLine</p>
          </div>
        </div>

        <ContactMeForm />
      </div>
    </div>
  );
};

export default ContactMe;
