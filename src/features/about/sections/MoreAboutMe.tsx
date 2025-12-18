"use client";

import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import useSWR from "swr";
import MagneticEffect from "~/components/providers/MagneticEffect";
import { TextReveal } from "~/components/shared/TextReveal";
import Title from "~/components/ui/Title";
import { getAbout } from "~/service/firebase/firebaseService";
import { About } from "~/types/collection";

export default function MoreAboutMe() {
  const {
    data: about,
    isLoading,
  } = useSWR<About | null>("about", () => getAbout());

  return (
    <section className="md:flex md:flex-row flex flex-col md:gap-20 justify-center items-center">
      <MagneticEffect>
        <div className="relative p-2 rounded-full border-white border-l-2 border-b-2 ">
          <div className="rounded-full lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] border-l-2 border-b-2 border-white overflow-hidden">
            {isLoading ? (
            <Skeleton
              circle
              height={"100%"}
              width={"100%"}
              className="object-cover"
            />
            ) : (
              about?.profilImage && (
                <Image
                  src={about?.profilImage}
                  alt="aboutMe"
                  width={400}
                  height={400}
                  className="object-cover mt-auto hover:scale-110 transition-all duration-300 grayscale hover:grayscale-0"
                />
              )
            )}
          </div>
        </div>
      </MagneticEffect>
      <div className="md:w-1/2 w-full flex gap-10 flex-col text-white md:p-5 py-5">
        <Title className="md:text-justify text-center">
          IT'S MORE ABOUT ME
        </Title>
        <div className="font-semibold flex flex-col gap-5 text-white/70">
         <TextReveal className="text-xs">{`${about?.description}`}</TextReveal>
        </div>
      </div>
    </section>
  );
}
