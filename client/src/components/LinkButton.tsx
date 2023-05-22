import React from "react";
import { Link } from "react-router-dom";

export type LinkButtonProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export function LinkButton({ to, children, className }: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={`bg-[#3e3e42] hover:bg-[#79798b] text-white hover:text-white mt-4 p-2 rounded-md uppercase font-bold text-sm ${className}`}>
      {children}
    </Link>
  );
}
