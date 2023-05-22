import { api } from "../api/api";
import { InputField } from "./InputField";
import { InputArea } from "./InputArea";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import { NotePadStatic } from "../routes/NotePadStatic";
import { Breadcrumb } from "./Breadcrumb";
import React from "react";

const defaultNote = {
  title: "",
  subtitle: "",
  content: "",
};

export function EditNotepad() {
  const params = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(defaultNote);

  useEffect(() => {
    api.get(`/notepads/${params.id}`).then((res) =>
      setForm({
        title: res.data.title,
        subtitle: res.data.subtitle,
        content: res.data.content,
      })
    );
  }, []);

  useEffect(() => {
    setForm(defaultNote);
  }, [params.id]);

  const breadcrumbLinks = [
    { title: "Home > ", link: "/" },
    { title: " notepads", link: "/notepads" },
    { title: `>${params.id}`, link: `/${params.id}` },
  ];

  return (
    <div className=" w-10/12 h-screen text-white bg-[#272728] border-l border-[#3e3e42] p-4 flex">
      <div className="w-10/12">
        <Breadcrumb links={breadcrumbLinks} />
        <h1 className="text-center text-2xl font-bold my-4">Edit Note:</h1>
        <form
          className="flex flex-col gap-2 mx-2 md:mx-auto md:max-w-screen-md"
          noValidate
          onSubmit={async (event) => {
            event.preventDefault();
            const res = await api.put(`/notepads/${params.id}`, form);
            if (res.data.success) {
              toast("Note successfully edited note!");
              navigate("/");
            } else {
              toast("There was an error updating the information!");
            }
          }}>
          <div className="flex flex-row gap-6">
            <InputField
              placeholder="New Title"
              value={form.title}
              onChange={(title) => setForm({ ...form, title })}
            />
            <InputField
              placeholder="New Subtitle"
              value={form.subtitle}
              onChange={(subtitle) => setForm({ ...form, subtitle })}
            />
          </div>
          <InputArea
            placeholder="New Content"
            value={form.content}
            onChange={(content) => setForm({ ...form, content })}
          />
          <button
            type="submit"
            className="bg-red-400 hover:bg-red-500 text-white my-10 rounded-b-md uppercase font-bold text-sm">
            Confirm edition
          </button>
        </form>
      </div>
      <div className=" w-4/12 right-0 border-l border-[#3e3e42]">
        <NotePadStatic />
      </div>
    </div>
  );
}
