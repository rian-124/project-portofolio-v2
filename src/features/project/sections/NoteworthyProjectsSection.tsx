"use client";

import { useState } from "react";
import { Projects } from "~/types/collection";
import ProjectItem from "../components/ProjectItem";

type CategoryStack = "website" | "mobile" | "dekstop";

const categoryStack: CategoryStack[] = ["website", "mobile", "dekstop"];

interface NoteworthyProjectsSectionProps {
  projects: Projects[];
}

export default function NoteworthyProjectsSection({
  projects,
}: NoteworthyProjectsSectionProps) {
  const [category, setCategory] = useState<CategoryStack>("website");

  const handleTechStack = (item: CategoryStack) => {
    setCategory(item);
  };
  return (
    <section className="w-full">
      <div className="py-10 md:w-[29rem]">
        <div className="space-y-3 flex items-center flex-col">
          <div className="py-[2px] bg-yellow-500 w-42 h-1 rounded-full"></div>
          <div className="py-[3px] bg-white w-42 h-1 rounded-full self-start"></div>
        </div>
        <div className="p-3">
          <h1 className="text-4xl text-yellow-500 text-center font-mono font-bold">
            Other Note Worthy Projects
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {projects
          .filter((project) => project.category === category)
          .map((project: Projects, index: number) => (
            <ProjectItem key={index + 1} projects={project} />
          ))}
      </div>
    </section>
  );
}
