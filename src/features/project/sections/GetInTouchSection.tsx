import { BiArrowFromLeft } from "react-icons/bi";
import MagneticEffect from "~/components/providers/MagneticEffect";

export default function GetInTouchSection() {
  return (
    <section className="py-10">
      <div className="flex flex-col justify-center items-center md:text-5xl text-3xl  font-mono gap-2">
        <h2 className="md:text-2xl text-xl text-gray-200">
          You Have Interest With Me?
        </h2>
        <h1 className="flex items-center justify-center gap-3 text-yellow-500 font-bold">
          Get In Touch{" "}
          <MagneticEffect>
            <div className="border rounded-full p-2 cursor-pointer md:w-16 md:h-16 w-10 h-10">
              <MagneticEffect>
                <BiArrowFromLeft />
              </MagneticEffect>
            </div>
          </MagneticEffect>
        </h1>
      </div>
    </section>
  );
}
