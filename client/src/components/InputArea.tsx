import React from "react";

type InputAreaProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function InputArea({ value, placeholder, onChange }: InputAreaProps) {
  return (
    <div className=" rounded border-double focus:border-red resize-none h-96 w-full mb-4">
      <textarea
        className=" rounded border-double focus:border-red h-full w-full resize-none bg-[#3e3e42]"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        rows={3}
      />
    </div>
  );
}
