"use client";

import Image from "next/image";
import { use, useState } from "react";
import { BsEye } from "react-icons/bs";
import useSWR from "swr";
import Lightbox from "yet-another-react-lightbox";
import MagneticEffect from "~/components/providers/MagneticEffect";
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
  const [open, setOpen] = useState(false);

  const { data: projectSlugData } = useSWR<Projects | null>(
    "projectSlugData",
    () => getProjectBySlug(slug)
  );

  if (!projectSlugData) return null;

  return (
    <main>
      <section className="md:px-10 px-5 mb-10">
        <div className="flex md:justify-between md:flex-row flex-col-reverse gap-3 items-center">
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
                className="w-full text-xs text-center bg-yellow-500 uppercase text-black"
              >
                {item}
              </ButtonLink>
            ))}
          </div>
          <div className="w-full border-black p-5 text-justify">
            <p>{projectSlugData.description}</p>
          </div>
        </div>
        <div className="px-5 space-y-5 font-mono">
          <div className="flex items-center justify-center gap-3 text-yellow-500 font-bold md:text-4xl text-2xl">
            <h1>Want to see more image?</h1>
            <MagneticEffect>
              <button onClick={() => setOpen(true)} className="border flex items-center justify-center rounded-full p-2 cursor-pointer w-16 h-16 text-4xl">
                <MagneticEffect>
                  <BsEye />
                </MagneticEffect>
              </button>
            </MagneticEffect>
          </div>
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={projectSlugData.image.map((image) => ({
            src: image,
          }))}
        />
      </section>
    </main>
  );
}
