import { api } from "../api/api";
import { InputField } from "./InputField";
import { InputArea } from "./InputArea";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import { NotePadStatic } from "../routes/NotePadStatic";
import React from "react";

const defaultNote = {
  title: "",
  subtitle: "",
  content: "",
};

export function AddNote() {
  const params = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(defaultNote);

  return (
    <div className="w-full">
      <h1 className="text-left text-2xl font-bold my-4">Create Note:</h1>
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
            placeholder="Title"
            value={form.title}
            onChange={(title) => setForm({ ...form, title })}
          />
          <InputField
            placeholder="Subtitle"
            value={form.subtitle}
            onChange={(subtitle) => setForm({ ...form, subtitle })}
          />
        </div>
        <InputArea
          placeholder="Content"
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
  );
}
