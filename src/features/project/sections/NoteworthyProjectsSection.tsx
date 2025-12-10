"use client";

import { Project } from "next/dist/build/swc/types";
import Image from "next/image";
import { useState } from "react";
import { BiLink } from "react-icons/bi";
import { CgDetailsLess } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import useSWR from "swr";
import { getProjects } from "~/service/firebase/firebaseService";
import { Projects } from "~/types/collection";


type CategoryStack = "website" | "mobile" | "dekstop";

const categoryStack: CategoryStack[] = ["website", "mobile", "dekstop"];

interface NoteworthyProjectsSectionProps {
  projects: Projects[];
}

export default function NoteworthyProjectsSection({projects} : NoteworthyProjectsSectionProps) {
  // const { data: projects } = useSWR<Projects[]>('projects', () => getProjects());
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
        {projects.filter((project) => project.category === category).map((project : Projects, index: number) => (
          <div
            key={index}
            className="relative border-2 border-black rounded-xl group overflow-hidden"
          >
            {/* IMAGE */}
            <div className="w-full h-[350px] sm:h-[180px] md:h-[200px] lg:h-[230px] relative">
              <Image
                src={project.image[0]}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* button */}
            <div className="absolute -top-32 group-hover:top-0 w-full  opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex items-center justify-end gap-1 p-2">
                <div className="rounded-full w-8 h-8 bg-black flex justify-center items-center">
                  <button>
                    <CgDetailsLess />
                  </button>
                </div>
                <div className="rounded-full w-8 h-8 bg-black flex justify-center items-center">
                  <button>
                    <BiLink />
                  </button>
                </div>
                <div className="rounded-full w-8 h-8 bg-black flex justify-center items-center">
                  <button>
                    <FiGithub />
                  </button>
                </div>
              </div>
            </div>
            {/* CAPTION */}
            <div className="bg-yellow-500 rounded-b-xl p-3 absolute z-10 w-full bottom-0">
              <div className="flex gap-2 items-center">
                <h1 className="text-black text-lg md:text-xl">
                  {project.title}
                </h1>
                <span className="px-3 md:px-5 py-[1px] bg-black text-white rounded-full text-xs md:text-sm">
                  {project.category}
                </span>
              </div>
              {/* DESCRIPTION */}
              <p className="max-h-0 opacity-0 group-hover:max-h-28 group-hover:opacity-100 text-xs md:text-sm transition-all duration-500 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
