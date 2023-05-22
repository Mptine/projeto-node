import { Link } from "react-router-dom";
import { IoMdCopy } from "react-icons/io";
import React from "react";

export function AppHeader() {
  return (
    <div className="fixed top-0 flex shadow-sm shadow-transparent h-14 items-center justify-start w-screen bg-[#3e3e42]">
      <div className=" w-2/12"></div>
      <div className="flex bg-red-400">
        <Link className=" text-4xl font-bold text-[#3e3e42]" to="/">
          <IoMdCopy />
        </Link>
        <Link className=" text-2xl font-bold mr-2 text-[#3e3e42]" to="/">
          CopyBin
        </Link>
      </div>
      <Link className=" ml-20 mr-20  text-white" to="/notepads">
        Notes
      </Link>
      <Link className="mr-20  text-white" to="/about">
        About
      </Link>
    </div>
  );
}
