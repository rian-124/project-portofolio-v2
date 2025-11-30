"use client";

import Image from "next/image";
import SplitText from "../components/common/SplitText";
import { motion } from "framer-motion";
import {
  SiDart,
  SiExpress,
  SiFlutter,
  SiJavascript,
  SiLaravel,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { JSX, useState } from "react";

type TechStack = {
  frontend: {
    name: string;
    icon: JSX.Element;
  }[];
  backend: {
    name: string;
    icon: JSX.Element;
  }[];
  mobile?: {
    name: string;
    icon: JSX.Element;
  }[];
};

export const techStack: TechStack = {
  frontend: [
    { name: "Next.js", icon: <SiNextdotjs size={80} /> },
    { name: "React.js", icon: <SiReact size={80} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={80} /> },
    { name: "TypeScript", icon: <SiTypescript size={80} /> },
    { name: "JavaScript", icon: <SiJavascript size={80} /> },
  ],
  backend: [
    { name: "NestJS", icon: <SiNestjs size={80} /> },
    { name: "Node.js", icon: <SiNodedotjs size={80} /> },
    { name: "Laravel", icon: <SiLaravel size={80} /> },
    { name: "Express.js", icon: <SiExpress size={80} /> },
    { name: "Prisma ORM", icon: <SiPrisma size={80} /> },
  ],
   mobile: [
    { name: "Dart", icon: <SiDart size={80} /> },
    { name: "Flutter", icon: <SiFlutter size={80} /> },
  ],
};

type CategoryStack = "frontend" | "backend" | "mobile";

const categoryStack = ["Frontend", "Backend", "Mobile"];

export default function About() {
  const [category, setCategory] = useState<CategoryStack>(
    "frontend"
  );

  const handleTechStack = (item : CategoryStack) => {
    setCategory(item);
  };

  return (
    <main className="p-10 flex flex-col justify-center">
      <section className="text-white text-center font-bold text-8xl p-20">
        <div className="inline-block relative">
          <SplitText
            text="Afrian."
            className="text-9xl font-bold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          {/* star kiri atas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute -top-6 -left-20"
          >
            <Image
              src="/image/star-1.svg"
              alt="star-left"
              width={60}
              height={60}
            />
          </motion.div>

          {/* star kanan bawah */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute -bottom-6 -right-20"
          >
            <Image
              src="/image/star-1.svg"
              alt="star-right"
              width={60}
              height={60}
            />
          </motion.div>
        </div>
      </section>
      <section className="flex gap-20 justify-center items-center">
        <div className="relative p-2 w-[400px] h-[400px] rounded-full border-white border-l-2 border-b-2 ">
          {/* Image utama tetap clip */}
          <div className="rounded-full border-l-2 border-b-2 border-white overflow-hidden">
            <Image
              src={"/image/aboutMe.png"}
              alt="aboutMe"
              width={400}
              height={400}
              className="object-cover mt-auto"
            />
          </div>
        </div>

        <div className="w-1/2 flex gap-10 flex-col text-white p-5">
          <h1 className="text-white text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          </h1>
          <div className="font-semibold flex flex-col gap-5 text-white/70">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              provident explicabo fugiat labore, corrupti sit voluptatum nam, in
              quaerat dolore nostrum reiciendis earum eius incidunt aspernatur
              obcaecati officiis voluptas! Officiis dolore placeat excepturi
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              provident explicabo fugiat labore, corrupti sit voluptatum nam, in
              quaerat dolore nostrum reiciendis earum eius incidunt aspernatur
              obcaecati officiis voluptas! Officiis dolore placeat excepturi sit
              omnis
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="p-10 text-center text-white text-4xl">
          <h1>My experience</h1>
        </div>
        <ol className="relative border-gray-200 md:border-l-0 md:flex md:flex-col md:items-center text-white">
          {/* Garis vertikal */}
          <div className="absolute left-1/2 w-1 h-full border transform -translate-x-1/2"></div>

          {/* Item 1 - Kiri */}
          <li className="relative mb-10 w-full h-screen md:text-right">
            <div className="w-full flex justify-between items-center sticky top-1/3">
              <div className="absolute left-1/2 -translate-x-1/2  w-16 h-16 bg-orange-400 rounded-full border-4 p-3 flex justify-center">
                <Image
                  src={"/image/working.png"}
                  alt="working"
                  width={200}
                  height={200}
                  className=""
                />
              </div>
              <div className="p-2 rounded-md text-white w-[40%] flex justify-center border">
                <time className="mb-1 text-sm font-normal leading-none opacity-100 ">
                  February 2022
                </time>
              </div>
              <div className="w-[40rem] p-10 text-start pl-20 borde">
                <h3 className="text-lg font-semibold text-amber-100">
                  Application UI code in Tailwind CSS
                </h3>
                <p className="mb-4 text-base font-normal">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </p>
              </div>
            </div>
          </li>

          {/* Item 2 - Kanan */}
          <li className="relative mb-10 w-full h-screen md:text-right">
            <div className="flex flex-row-reverse justify-between items-center sticky top-1/3">
              <div className="absolute left-1/2 -translate-x-1/2  w-16 h-16 bg-orange-400 rounded-full border-4 p-3 flex justify-center">
                <Image
                  src={"/image/working.png"}
                  alt="working"
                  width={200}
                  height={200}
                  className=""
                />
              </div>
              <div className="p-2 rounded-md text-white w-[40%] flex justify-center border">
                <time className="mb-1 text-sm font-normal leading-none opacity-100 ">
                  February 2022
                </time>
              </div>
              <div className="w-[40rem] p-10 text-start">
                <h3 className="text-lg font-semibold text-amber-100">
                  Application UI code in Tailwind CSS
                </h3>
                <p className="mb-4 text-base font-normal">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </p>
              </div>
            </div>
          </li>
          {/* Item 3 - Kiri */}
          <li className="relative mb-10 w-full h-screen md:text-right">
            <div className="flex justify-between items-center sticky top-1/3">
              <div className="absolute left-1/2 -translate-x-1/2  w-16 h-16 bg-orange-400 rounded-full border-4 p-3 flex justify-center">
                <Image
                  src={"/image/working.png"}
                  alt="working"
                  width={200}
                  height={200}
                  className=""
                />
              </div>
              <div className="p-2 rounded-md text-white w-[40%] flex justify-center border">
                <time className="mb-1 text-sm font-normal leading-none opacity-100 ">
                  February 2022
                </time>
              </div>
              <div className="w-[40rem] p-10 text-start pl-20">
                <h3 className="text-lg font-semibold text-amber-100">
                  Application UI code in Tailwind CSS
                </h3>
                <p className="mb-4 text-base font-normal">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>
      <section>
        <div className="p-10 text-center text-white text-4xl">
          <h1>Tech Stack That I Use</h1>
        </div>
        <div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <li className="flex gap-3 w-[42rem] border justify-between items-center p-3 rounded-md px-10 text-center">
              {categoryStack.map((item) => (
                <ul
                  key={item}
                  onClick={() => handleTechStack(item.toLowerCase() as CategoryStack)}
                  className={`w-full p-2 cursor-pointer border rounded-md transition-all duration-300 ${
                    category === item.toLowerCase()
                      ? "bg-yellow-500 border-black border-b-8 border"
                      : "hover:border-b-8 hover:border-black hover:border-2 hover:bg-yellow-500"
                  }`}
                >
                  {item}
                </ul>
              ))}
            </li>
            <div className={`w-[42rem] ${techStack[category] && techStack[category].length !== 0 ? 'grid grid-cols-3' : 'grid grid-cols-1'}  min-w-xl gap-3`}>
              {techStack[category] && techStack[category].length !== 0 ? (
                techStack[category]?.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center bg-yellow-500 text-white border border-black  p-2 rounded-xl text-center hover:border-b-8 hover:border-2 transition-all duration-300"
                  >
                    {item.icon}
                    <h3 className="text-2xl">{item.name}</h3>
                  </div>
                ))
              ) : (
                <div className="w-full text-xl text-center border rounded-xl p-20">
                  <p className="text-red-500">Data in category not available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
