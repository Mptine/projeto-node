import React from "react";

export type ButtonProps = {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      className={` ${props.className}`}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}
