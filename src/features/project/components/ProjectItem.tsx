'use client'

import Image from "next/image";
import { useState } from "react";
import { BiLink } from "react-icons/bi";
import { CgDetailsLess } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import LinkAnimation from "~/components/shared/LinkAnimation";
import { Projects } from "~/types/collection";
import { convertSpaceSlug } from "~/utils/convertSpaceSlug";

interface ProjectItemProps {
  projects: Projects;
}

export default function ProjectItem({ projects }: ProjectItemProps) {

  const [hoverProject, setHoverProject] = useState(false);

  const hoverProjectHandler = () => {

    setHoverProject(prev => !prev); 

  }

  const convertSlug = convertSpaceSlug(projects.title);
  return (
    <div onClick={hoverProjectHandler} className="relative border-2 border-black rounded-xl group overflow-hidden">
      {/* IMAGE */}
      <div className="w-full h-[350px] sm:h-[180px] md:h-[200px] lg:h-[230px] relative">
        <Image
          src={projects.image[0]}
          alt={projects.title}
          fill
          className="object-cover"
        />
      </div>

      {/* button */}
      <div className={`absolute w-full ${hoverProject ? 'top-0 opacity-100' : '-top-32 opacity-0' } group-hover:top-0 group-hover:opacity-100 transition-all duration-300`}>
        <div className="flex items-center justify-end gap-1 p-2">
          <div className="rounded-full w-8 h-8 bg-black flex justify-center items-center">
            <LinkAnimation href={`/project/${convertSlug}`} label={projects.title} className={`${projects.demo ? "cursor-not-allowed" : "cursor-pointer"}`}>
              <CgDetailsLess />
            </LinkAnimation>
          </div>
          <div className="rounded-full w-8 h-8 bg-black flex justify-center items-center">
            <a href={projects.demo} className={`${projects.demo ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
              <BiLink />
            </a>
          </div>
          <div className="rounded-full w-8 h-8 bg-black flex justify-center items-center">
            <a href={projects.demo} className={`${projects.github ? 'cursor-pointer' : 'cursor-not-allowed'}`} >
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
      {/* CAPTION */}
      <div className="bg-yellow-500 rounded-b-xl p-3 absolute z-4 w-full bottom-0">
        <div className="flex gap-2 items-center">
          <h1 className="text-black text-lg md:text-xl">{projects.title}</h1>
          <span className="px-3 md:px-5 py-[1px] bg-black text-white rounded-full text-xs md:text-sm">
            {projects.category}
          </span>
        </div>
        {/* DESCRIPTION */}
        <p className={`${hoverProject ? 'max-h-28 opacity-100' : 'opacity-0 max-h-0'} group-hover:max-h-28 group-hover:opacity-100 text-xs md:text-sm transition-all duration-500 line-clamp-2`}>
          {projects.description}
        </p>
      </div>
    </div>
  );
}
