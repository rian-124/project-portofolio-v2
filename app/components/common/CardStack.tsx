"use client";

import { JSX } from "react";

interface CardStackProps {
  rotate?: string;
  color?: string;
}

export default function CardStack({
  rotate = "rotate-[20deg]",
  color = "bg-black",
}: CardStackProps): JSX.Element {

  return (
    <div
      className={`bg-white p-5 rounded-lg ${rotate} w-[200px] h-[300px] -z-10 absolute border-2 border-b-[10px] shadow-amber-300 shadow-2xl group-hover:scale-120  ${
        rotate === "rotate-[20deg]"
          ? "group-hover:rotate-[45deg]"
          : ""
      }
        ${
          rotate === "-rotate-[30deg]"
            ? "group-hover:-rotate-[45deg]"
            : ""
        } transition-all duration-1000`}
    >
      <div className={`${color} w-full h-1/2 rounded-xl`}></div>
    </div>
  );
}
