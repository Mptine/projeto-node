import React from "react";

type MiniButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
};

export function MiniButton(props: MiniButtonProps) {
  return (
    <>
      <span onClick={props.onClick}>{props.icon}</span>
    </>
  );
}
