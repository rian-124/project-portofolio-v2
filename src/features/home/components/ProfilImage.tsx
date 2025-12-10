import Image from "next/image";
import CardStack from "../../../components/shared/CardStack";
import PixelTransition from "../../../components/shared/PixelTransition";
import Ping from "~/components/ui/ping";

interface ProfilImage {
  avatar: string;
}

export default function ProfilImage({ avatar }: ProfilImage) {
  return (
    <section className="group w-[350px] lg:flex lg:justify-end lg:items-center lg:visible md:hidden sm:hidden hidden">
      <CardStack color="bg-sky-500" />
      <CardStack color="bg-green-500" rotate="-rotate-[30deg]" />
      <div className="self-end pb-5 p-5 rounded-xl bg-white border-2 border-b-[10px] shadow-amber-300 shadow-2xl group-hover:scale-125 transition-all duration-1000">
        <PixelTransition
          firstContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
              }}
            >
              <p style={{ fontSize: "1.3rem", color: "#ffffff" }}>
                Come closer!
              </p>
            </div>
          }
          secondContent={
            <Image
              src={avatar}
              alt="foto_profil"
              fill
              className="object-cover"
            />
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
        <div className="flex items-center gap-5 bg-amber-300 text-white p-2 rounded-xl mt-2 text-xs border-2 border-black">
          <div className="bg-white rounded-full w-10 h-10 overflow-hidden">
            <Image
              src={avatar}
              alt="fotoProfil"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <div className="text-black">
            <p>@Afrian</p>
            <div className="flex items-center gap-1">
              <Ping />
              <p>online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
