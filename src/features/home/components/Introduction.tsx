"use client";

import Image from "next/image";
import ScrambleText from "../../../components/shared/ScrambleText";
import TextType from "../../../components/shared/TextTypes";
import MagneticEffect from "~/components/providers/MagneticEffect";
import ButtonLink from "~/components/ui/ButtonLink";
import LinkAnimation from "~/components/shared/LinkAnimation";

interface IntroductionProps {
  name: string;
  tagline: string;
  role: [];
}

export default function Introdution({
  name,
  tagline,
  role,
}: IntroductionProps) {

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-2 w-full">
        {/* introdution start */}
        {name && <ScrambleText>{`${name}`}</ScrambleText>}
        <div className="lg:flex lg:justify-start lg:items-center flex items-center justify-center gap-5">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-yellow-500">
            Hi, Folks
          </h2>
          <Image
            src={"/image/emoteHello.gif"}
            alt="emoteHello"
            width={50}
            height={50}
            priority
          />
        </div>
        <h2 className="text-2xl md:text-3xl text-yellow-500 font-mono font-bold">
          I'm{" "}
          {role && (
            <TextType
              text={role}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          )}
        </h2>
        <div className="text-xs border text-amber-300 p-2 md:w-[90%]">
          <p>{tagline}</p>
        </div>
        {/* introdution end */}
      </div>
      {/* button start */}
      <div className="lg:flex lg:justify-start lg:items-center flex justify-center items-center gap-5 lg:text-xl text-sm">
        <MagneticEffect>
          <ButtonLink
            href="image/[CV]_AfrianFahrurrozi_FullstackDeveloper_2025.pdf"
            download
            className="bg-amber-300 cursor-pointer text-black"
          >
            🧾 My Resume
          </ButtonLink>
        </MagneticEffect>
        <MagneticEffect>
          <LinkAnimation
            href="/about"
            label="ABOUT"
            className="p-2 bg-white cursor-pointer text-black rounded-xl border-2 border-b-[10px] hover:scale-110 transition duration-200"
          >
            {" "}
            🥊 See More About Me
          </LinkAnimation>
        </MagneticEffect>
      </div>
      {/* button end */}
    </div>
  );
}
