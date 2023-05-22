import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
  Fade,
  FadeOut,
  Move,
  MoveIn,
} from "react-scroll-motion";
import { Notepad } from "../../../shared/types";
import { Link } from "react-router-dom";

type NoteScrollProps = {
  notepads: Notepad[];
};

export function NoteScroll({ notepads }: NoteScrollProps) {
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
    <ScrollContainer>
      {notepads.map((notepad, index) => {
        return (
          <ScrollPage key={notepad.id}>
            <Link to={`/publicacoes/${notepad.id}/`} key={notepad.id}>
              <div className=" w-10/12">
                <Animator
                  className=" w-10/12 h-2/4"
                  animation={batch(Sticky(), MoveIn(0, 1500), FadeOut(1, 0))}>
                  <div className=" text-white p-4 rounded-xl h-48 text-center">
                    <div>id:{notepad.id}</div>
                    <h1 className=" text-4xl">{notepad.title}</h1>
                    <h2 className=" text-2xl">{notepad.subtitle}</h2>
                    <p className=" text-2xl mt-10 text-red-400">
                      {notepad.content}
                    </p>
                    <p className=" text-lg text-red-400">
                      {notepad.created_at}
                    </p>
                  </div>
                </Animator>
              </div>
            </Link>
          </ScrollPage>
        );
      })}
    </ScrollContainer>
  );
}
