import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { InputArea } from "../components/InputArea";
import { LinkButton } from "../components/LinkButton";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import { getNotepad } from "../api/getNotepad";
import { deleteNotepad } from "../api/deleteNotepad";
import { getNotepadComments } from "../api/getNotepadComments";
import { postComment } from "../api/postComment";
import type { Comment } from "../../../shared/types";
import React from "react";

const texts = {
  deleteSuccess: "The note has been successfully deleted!",
  deleteFailure: "Something went really wrong, but it's probably your fault.",
  editButtonLabel: "Edit",
  deleteButtonLabel: "Delete",
  commentsTitle: "Comments",
  commentFormMessagePlaceholder: "Enter comment message",
  commentFormSubmitButton: "Submit",
  commentFormCreateSuccess: "The comment has been successfully created!",
  commentFormCreateFailure:
    "Something went really wrong, but it's probably your fault.",
};

const emptyCommentForm = {
  message: "",
};

const emptyNotepad = {
  id: 0,
  title: "",
  subtitle: "",
  content: "",
  created_at: "",
};

export function SingleView() {
  const params = useParams();
  const navigate = useNavigate();

  const notepadId = Number(params.id);
  const [notepad, setNotepad] = useState(emptyNotepad);
  const [commentForm, setCommentForm] = useState(emptyCommentForm);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getNotepad(notepadId).then((notepadData) => setNotepad(notepadData));
    getNotepadComments({ notepad_id: notepadId }).then((comments) =>
      setComments(comments)
    );
  }, [notepadId]);

  async function onClickDelete() {
    const response = await deleteNotepad(notepad.id);
    if (response.success) {
      toast(texts.deleteSuccess);
      navigate("/");
    } else {
      toast(texts.deleteFailure);
    }
  }

  async function onSubmitComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await postComment({
      notepad_id: notepadId,
      message: commentForm.message,
    });
    if (response.success) {
      toast(texts.commentFormCreateSuccess);
      const comments = await getNotepadComments({ notepad_id: notepadId });
      setComments(comments);
    } else {
      toast(texts.commentFormCreateFailure);
    }
  }

  return (
    <div className="max-w-screen-md md:mx-auto my-4 p-2 md:my-8 flex flex-col">
      <div className="p-4 flex flex-col">
        <span className=" my-2">#{notepad.id}</span>
        <time className=" text-sm" dateTime={notepad.created_at}>
          {new Date(notepad.created_at).toLocaleDateString()}
        </time>
        <h1 className="text-2xl font-bold">{notepad.title}</h1>
        <p className="mb-4">{notepad.subtitle}</p>
        <p>{notepad.content}</p>
        <div className="mt-4 flex flex-row gap-2">
          <Button
            className="bg-red-400 hover:bg-red-900"
            onClick={onClickDelete}>
            {texts.deleteButtonLabel}
          </Button>
          <LinkButton to={`/publicacoes/editar/${params.id}`}>
            {texts.editButtonLabel}
          </LinkButton>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-2xl my-2">{texts.commentsTitle}</h2>
        <form
          onSubmit={onSubmitComment}
          noValidate
          className="flex flex-col gap-2 my-4">
          <InputArea
            value={commentForm.message}
            onChange={(message) => setCommentForm({ ...commentForm, message })}
            placeholder={texts.commentFormMessagePlaceholder}
          />
          <Button type="submit" onClick={() => {}} className="self-end">
            {texts.commentFormSubmitButton}
          </Button>
        </form>
        <div className="flex flex-col gap-4">
          {comments.map(({ id, message, created_at }) => (
            <div key={id} className="my-1 border-b border-[#3e3e42] ">
              <time
                className="text-red-400 text-sm"
                dateTime={notepad.created_at}>
                {new Date(created_at).toLocaleDateString()}
              </time>
              <p>{message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
