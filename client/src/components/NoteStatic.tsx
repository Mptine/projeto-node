import { MiniButton } from "./MiniButton";
import { Copy } from "./Copy";
import { IoIosCopy } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import React from "react";
import type { Notepad } from "../../../shared/types";

type NoteStaticProps = {
  notepads: Notepad[];
};

export function NoteStatic({ notepads }: NoteStaticProps) {
  //TODO separete this snippet into a isolated function, on a 'utils' folder
  /* const createdDate = new Date(notepad.created_at);
  const now = new Date();
  const elapsedMs = now.getTime() - createdDate.getTime();
  const elapsedSeconds = Math.floor(elapsedMs / 1000);

  let elapsed: string;
  if (elapsedSeconds < 60) {
    elapsed = `${elapsedSeconds} seconds ago`;
  } else if (elapsedSeconds < 3600) {
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    elapsed = `${elapsedMinutes} minutes ago`;
  } else if (elapsedSeconds < 86400) {
    const elapsedHours = Math.floor(elapsedSeconds / 3600);
    elapsed = `${elapsedHours} hours ago`;
  } else {
    const elapsedDays = Math.floor(elapsedSeconds / 86400);
    elapsed = `${elapsedDays} days ago`;
  } */

  return (
    <li className="w-10/12 p-1 h-20 my-4 border-b border-[#3e3e42] no-underline items-start">
      {notepads.map((notepad, index) => {
        return (
          <div className=" my-2 p-2">
            <div className="flex float-right items-center ">
              <MiniButton
                onClick={() => Copy(notepad.content)}
                icon={
                  <IoIosCopy className="text-white hover:text-[#CF6679] text-xl z-10" />
                }
              />
            </div>
            <Link
              to={`/publicacoes/${notepad.id}/`}
              key={notepad.id}
              className=" text-xs  text-white hover:text-red-400">
              <h1 className=" text-sm">{notepad.title}</h1>
              <p>Created: {notepad.created_at}</p>
            </Link>
          </div>
        );
      })}
    </li>
  );
}
