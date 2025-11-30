import Image from "next/image";
import CardStack from "./common/CardStack";
import PixelTransition from "./common/PixelTransition";

export default function ProfilImage() {
  return (
    <section className="group w-[450px] flex justify-end items-center">
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
              src={"/fotoProfil.jpg"}
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
              src={"/fotoProfil.jpg"}
              alt="fotoProfil"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <div className="text-black">
            <p>@Afrian</p>
            <p>🟢online</p>
          </div>
        </div>
      </div>
    </section>
  );
}
