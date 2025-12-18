"use client";

import Image from "next/image";
import { use } from "react";
import useSWR from "swr";
import HeaderTitle from "~/components/shared/HeaderTitle";
import ButtonLink from "~/components/ui/ButtonLink";
import { getProjectBySlug } from "~/service/firebase/firebaseService";
import { Projects } from "~/types/collection";

interface DetailProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function DetailProjectPage({ params }: DetailProjectPageProps) {
  const { slug } = use(params);

  const { data: projectSlugData } = useSWR<Projects | null>(
    "projectSlugData",
    () => getProjectBySlug(slug)
  );

  if (!projectSlugData) return null;

  return (
    <main>
      <section className="md:px-10 px-5 mb-10">
        <div className="flex justify-between gap-3 items-center">
          <HeaderTitle className="md:w-[25rem]">
            {projectSlugData.title}
          </HeaderTitle>
          <ButtonLink
            href=""
            className="self-center text-center bg-yellow-500 uppercase text-black"
          >
            {projectSlugData.date}
          </ButtonLink>
        </div>
        <div>
          <div className="grid md:grid-cols-6 grid-cols-3 gap-3 px-5">
            {projectSlugData.tech.map((item, index) => (
              <ButtonLink
                key={index + 1}
                href=""
                className="w-full text-center bg-yellow-500 uppercase text-black"
              >
                {item}
              </ButtonLink>
            ))}
          </div>
          <div className="w-full border-black p-5 text-justify">
            <p>{projectSlugData.description}</p>
          </div>
        </div>
        <div className="px-5 space-y-5">
          {projectSlugData.image.map((item, index) => (
            <div
              key={index + 1}
              className="relative border-2 border-black rounded-xl overflow-hidden"
            >
              {/* IMAGE */}
              <div className="w-full h-[30rem] relative">
                <Image src={item} alt={"test"} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
