import Image from "next/image";
const TextType = dynamic(() => import('./common/TextTypes'), {
   loading: () => <p className="text-white">Loading component ...</p>,
  ssr: false,
})
import ButtonSectionIntrodution from "./common/ButtonSectionIntrodution";
import ParagraphSectionIntroduction from "./common/ParagraphSectionIntroduction";
import dynamic from "next/dynamic";
const ScrambleText = dynamic(() => import('./common/ScrambleText'), {
   loading: () => <p className="text-white">Loading component ...</p>,
  ssr: false,
})

export default function Introdution() {
  return (
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          {/* introdution start */}
          <ScrambleText>Afrian Fahrurrozi</ScrambleText>
          <div className="flex gap-5 items-center">
            <h2 className="text-3xl text-black md:text-5xl">Hi, Folks</h2>
            <Image
              src={"/emoteHello.gif"}
              alt="emoteHello"
              width={50}
              height={50}
              priority
            />
          </div>
          <h2 className="text-3xl md:text-3xl text-black">
            I'm
            <TextType
              text={["Junior web developer", "fullstack developer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h2>
          <ParagraphSectionIntroduction />
          {/* introdution end */}
        </div>
        {/* button start */}
        <ButtonSectionIntrodution />
        {/* button end */}
      </div>
  );
}
