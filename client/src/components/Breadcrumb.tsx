import React from "react";
import { Link } from "react-router-dom";

export type BreadcrumbProps = {
  links: { title: string; link: string }[];
};

export function Breadcrumb({ links }: BreadcrumbProps) {
  return (
    <nav className="flex flex-row items-center text-white">
      {links.map(({ title, link }, index) => (
        <span className="flex flex-row items-center">
          <Link
            key={index}
            to={link}
            className="uppercase text-sm text-gray-600 hover:text-gray-400">
            {title}
          </Link>
        </span>
      ))}
    </nav>
  );
}
