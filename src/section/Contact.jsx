import React from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="mb-10 min-h-[300px]">
      <h1 className="text-[50px] font-bold text-center">CONTACT</h1>
      <div className="bg-[#1a2231] rounded-lg p-4 flex flex-col items-center text-[30px] max-md:text-[18px]">
        <a
          href="mailto:panturasd@gmail.com"
          className="flex items-center text-[#eb4646] hover:underline  gap-2"
        >
          <MdEmail />
          panturasd@gmail.com
        </a>
        <a
          href="https://github.com/DanieruuDev"
          className="flex items-center hover:underline gap-2"
        >
          <FaGithub />
          DanieruuDev
        </a>
        <a
          href="https://www.facebook.com/daniel.panturas.14"
          className="flex items-center hover:underline gap-2"
        >
          <FaFacebook />
          Daniel Panturas
        </a>
      </div>
    </div>
  );
}

export default Contact;
