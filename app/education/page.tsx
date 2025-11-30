import Image from "next/image";
import { BiCopy, BiDownArrowAlt, BiLink } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import BlurText from "../components/common/BlurText";

const myName = ["AFRIAN", "FAHRURROZI"];

export default function Education() {
  return (
    <main>
      <section className="px-10">
        <div className="text-center p-10">
          <h1 className="text-4xl">POLITEKNIK NEGERI INDRAMAYU</h1>
          <p>2022 - present | D4 Software Engineer</p>
        </div>
        <div className="flex gap-5">
          <div className="space-y-5 w-[45%] pr-10">
            <div className="flex justify-between gap-5">
              <div className="border w-[200px] h-[25rem] grayscale hover:grayscale-0 rounded-md hover:w-full transition-all duration-500 overflow-hidden relative">
                <Image
                  src={"/image/education/education-2.jpg"}
                  alt="education-1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-col space-y-9">
                {myName[0].split("").map((name, index) => (
                  <p
                    key={index}
                    className="text-3xl font-bold shadow-2xl font-mono"
                  >
                    {name}
                  </p>
                ))}
              </div>
              <div className="border w-[200px] h-[29rem] grayscale hover:grayscale-0 rounded-md hover:w-full transition-all duration-500 relative">
                <Image
                  src={"/image/education/education-1.jpg"}
                  alt="education-1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-col space-y-3">
                {myName[1].split("").map((name, index) => (
                  <p key={index} className="text-3xl font-bold font-mono">
                    {name}
                  </p>
                ))}
              </div>
              <div className="border w-[200px] h-[32rem] grayscale hover:grayscale-0 rounded-md hover:w-full transition-all duration-500 relative">
                <Image
                  src={"/image/education/education-3.jpg"}
                  alt="education-1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="space-y-5">
              <div className="flex justify-between gap-3 items-center p-3 bg-white rounded-xl border border-b-8 border-black">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-500 p-4 rounded-full inline-block text-black border">
                    <GrCertificate size={32} />
                  </div>
                  <div className="text-black">
                    <h1>Junior Web Developer</h1>
                    <h2>2010 - 2025</h2>
                  </div>
                </div>
                <div className="text-black w-1/3  flex justify-end items-center gap-3">
                  <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
                    <button>
                      <BsEye size={20} />
                    </button>
                  </div>
                  <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
                    <button>
                      <BiCopy size={20} />
                    </button>
                  </div>
                  <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
                    <button>
                      <BiLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-3 items-center p-3 bg-white rounded-xl border border-b-8 border-black">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-500 p-4 rounded-full inline-block text-black border">
                    <GrCertificate size={32} />
                  </div>
                  <div className="text-black">
                    <h1>Junior Web Developer</h1>
                    <h2>2010 - 2025</h2>
                  </div>
                </div>
                <div className="text-black w-1/3  flex justify-end items-center gap-3">
                  <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
                    <button>
                      <BsEye size={20} />
                    </button>
                  </div>
                  <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
                    <button>
                      <BiCopy size={20} />
                    </button>
                  </div>
                  <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
                    <button>
                      <BiLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-3 items-center p-3 bg-white rounded-xl border border-b-8 border-black">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-500 p-4 rounded-full inline-block text-black border">
                    <GrCertificate size={32} />
                  </div>
                  <div className="text-black">
                    <h1>Junior Web Developer</h1>
                    <h2>2010 - 2025</h2>
                  </div>
                </div>
                <div className="text-black w-1/3  flex justify-end items-center gap-3">
                  <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
                    <button>
                      <BsEye size={20} />
                    </button>
                  </div>
                  <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
                    <button>
                      <BiCopy size={20} />
                    </button>
                  </div>
                  <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
                    <button>
                      <BiLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-3 items-center p-3 bg-white rounded-xl border border-b-8 border-black">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-500 p-4 rounded-full inline-block text-black border">
                    <GrCertificate size={32} />
                  </div>
                  <div className="text-black">
                    <h1>Junior Web Developer</h1>
                    <h2>2010 - 2025</h2>
                  </div>
                </div>
                <div className="text-black w-1/3  flex justify-end items-center gap-3">
                  <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
                    <button>
                      <BsEye size={20} />
                    </button>
                  </div>
                  <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
                    <button>
                      <BiCopy size={20} />
                    </button>
                  </div>
                  <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
                    <button>
                      <BiLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-500 text-black border border-b-8 rounded-md text-3xl text-center py-2 px-5">
                <button>
                  Show More{" "}
                  <BiDownArrowAlt className="inline-flex items-center" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-10 h-screen flex items-center justify-center">
        <BlurText
          text='“Success is not for those who never fail, but for those who never quit.“'
          delay={150}
          animateBy="words"
          direction="top"
          className="text-8xl mb-8"
        />
      </section>
    </main>
  );
}
