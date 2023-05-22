import { Link } from "react-router-dom";
import { Home } from "../routes/Home";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import React from "react";

export function AppFooter() {
  return (
    <div className=" fixed bottom-0 flex shadow-sm shadow-transparent h-16 items-center justify-center w-screen bg-black">
      <a href="https://github.com/Mptine?tab=repositories">
        <IoLogoGithub className=" text-xl mx-2 text-white text-opacity-50 hover:text-opacity-100" />
      </a>
      <a href="https://www.linkedin.com/in/mptine/">
        <IoLogoLinkedin className=" text-xl mx-2 text-[#0077B5] text-opacity-50 hover:text-opacity-100" />
      </a>
    </div>
  );
}
