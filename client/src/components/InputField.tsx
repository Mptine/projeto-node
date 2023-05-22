import React from "react";

type InputFieldProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function InputField({ value, placeholder, onChange }: InputFieldProps) {
  return (
    <div className=" w-60">
      <p className=" text-xl font-semibold">{placeholder}:</p>
      <input
        className=" rounded border-double focus:border-red h-10 bg-[#3e3e42]"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="text"
      />
    </div>
  );
}
