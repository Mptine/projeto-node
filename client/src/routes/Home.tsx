import { AddNote } from "../components/AddNote";
import { NotePadStatic } from "./NotePadStatic";
import { Breadcrumb } from "../components/Breadcrumb";
import React from "react";

export function Home() {
  const breadcrumbLinks = [{ title: "Home", link: "/" }];
  return (
    <>
      <div className=" w-max h-screen text-white bg-[#272728] border-l border-[#3e3e42] p-4">
        <Breadcrumb links={breadcrumbLinks} />
        <div>
          <span className="font-bold align-top text-4xl my-4">
            <p className="inline-block">
              Welcome to CopyBin, this page is definitely not a cheap imitation
              of
              <a
                className="inline-block ml-2 mt-px text-red-400"
                href="https://pastebin.com">
                pastebin.com
              </a>
            </p>
          </span>
          <p className=" text-xl my-4">
            Feel free to leave your note below, or to browse recent public
            notes.
          </p>
        </div>
        <div className="flex flex-row h-max justify-between">
          <div className=" flex-1 p-4">
            <AddNote />
          </div>
          <div className=" w-4/12 right-0 border-l border-[#3e3e42]">
            <NotePadStatic />
          </div>
        </div>
      </div>
    </>
  );
}
