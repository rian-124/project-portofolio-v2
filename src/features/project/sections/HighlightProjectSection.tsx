"use client";

import Image from "next/image";
import HeaderTitle from "~/components/shared/HeaderTitle";
import LinkAnimation from "~/components/shared/LinkAnimation";
import { Projects } from "~/types/collection";
import { convertSpaceSlug } from "~/utils/convertSpaceSlug";


interface HighlightProjectSectionProps {
  highLightProject: Projects;
}

export default function HighlightProjectSection({
  highLightProject,
}: HighlightProjectSectionProps) {

  const convertSlug = convertSpaceSlug(highLightProject.title);
  const optionLinkProject = highLightProject.demo ? highLightProject.demo : highLightProject.github;

  return (
    <section className="md:h-[39rem]">
      <HeaderTitle className="md:w-[25rem]">Hightlight</HeaderTitle>
      <div className="flex flex-col md:flex-row md:flex md:justify-between gap-32">
        <div className="md:w-1/2 w-full h-[13rem] relative flex justify-center">
          <div className="text-center md:w-[350px] md:h-[175px] w-[250px] h-[150px] bg-gray-500 absolute border md:ml-42 ml-16 hover:scale-110 hover:z-20 transition-all duration-500">
            <Image
              src={highLightProject.image[0]}
              alt={highLightProject.title}
              sizes="(max-width: 768px) 300px, 500px"
              quality={100}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center  md:w-[500px] md:h-[250px] w-[300px] h-[200px] bg-gray-500 absolute border md:mt-20 mt-16 z-2 md:mr-10 mr-5 hover:scale-110 hover:z-20 transition-all duration-500">
            <Image
              src={highLightProject.image[3]}
              alt={highLightProject.title}
              sizes="(max-width: 768px) 300px, 500px"
              quality={100}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center  md:w-[420px] md:h-[210px] w-[300px] h-[150px] bg-gray-500 absolute border md:ml-36 ml-7 md:mt-52 mt-40 hover:scale-110 hover:z-20 transition-all duration-500">
            <Image
              src={highLightProject.image[1]}
              alt={highLightProject.title}
              sizes="(max-width: 768px) 300px, 500px"
              quality={100}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="space-y-5">
            <h1 className="text-4xl font-mono font-bold text-yellow-500">
              {highLightProject.title}
            </h1>
            <p className="text-gray-200 text-justify">
              {highLightProject.description}
            </p>
            <div className="flex gap-2">
              <LinkAnimation
                href={`/project/${convertSlug}`}
                label={highLightProject.title}
                className="bg-yellow-500 rounded-lg p-2 px-10 text-center border-2 border-b-8 border-black"
              >
                More 🙋‍♂️
              </LinkAnimation>
              <a href={optionLinkProject} target="_blank" className="bg-white rounded-lg p-2 px-10 text-center border-2 border-b-8 border-black text-black">
                Preview {""} 🚀
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
