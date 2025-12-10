"use client";

import React, { JSX, useState } from "react";
import {
  SiDart,
  SiExpress,
  SiFlutter,
  SiJavascript,
  SiLaravel,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "~/components/ui/Title";

type TechStack = {
  frontend: {
    name: string;
    icon: JSX.Element;
  }[];
  backend: {
    name: string;
    icon: JSX.Element;
  }[];
  mobile?: {
    name: string;
    icon: JSX.Element;
  }[];
};

export const techStack: TechStack = {
  frontend: [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Tailwinds", icon: <SiTailwindcss /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ],
  backend: [
    { name: "NestJS", icon: <SiNestjs /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Prisma ORM", icon: <SiPrisma /> },
  ],
  mobile: [
    { name: "Dart", icon: <SiDart /> },
    { name: "Flutter", icon: <SiFlutter /> },
  ],
};

type CategoryStack = "frontend" | "backend" | "mobile";

const categoryStack = ["Frontend", "Backend", "Mobile"];

export default function TechStackSection() {
  const [category, setCategory] = useState<CategoryStack>("frontend");

  const handleTechStack = (item: CategoryStack) => {
    setCategory(item);
  };

  return (
    <section>
      <Title className="md:p-10 p-5 text-center">
        Tech Stack That I Use
      </Title>
      <div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <ul className="flex gap-3 md:w-[42rem] w-full border justify-between items-center p-3 rounded-md px-10 text-center md:text-base text-xs">
            {categoryStack.map((item) => (
              <li
                key={item}
                onClick={() =>
                  handleTechStack(item.toLowerCase() as CategoryStack)
                }
                className={`w-full p-2 cursor-pointer border rounded-md transition-all duration-300 ${
                  category === item.toLowerCase()
                    ? "bg-yellow-500 border-black border-b-8 border"
                    : "hover:border-b-8 hover:border-black hover:border-2 hover:bg-yellow-500"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <div
            className={`
                w-full 
                md:w-[42rem] 
                grid 
                grid-cols-2 
                sm:grid-cols-3 
                lg:grid-cols-4 
                gap-5
            `}
          >
            {techStack[category] && techStack[category].length !== 0 ? (
              techStack[category]?.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center bg-yellow-500 text-white border border-black p-4 rounded-xl text-center hover:border-b-8 hover:border-2 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
                    {React.cloneElement(item.icon, {
                      className: "w-full h-full text-black",
                    })}
                  </div>
                  <h3 className="md:text-xl text-sm mt-2 font-semibold">
                    {item.name}
                  </h3>
                </div>
              ))
            ) : (
              <div className="w-full text-xl text-center border rounded-xl p-20">
                <p className="text-red-500">Data in category not available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
