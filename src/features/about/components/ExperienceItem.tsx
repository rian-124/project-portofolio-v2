import Image from "next/image";
import Link from "next/link";
import { encode } from "qss";
import { MdWorkHistory } from "react-icons/md";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  position?: "left" | "right";
  date: string;
  sites: string;
  title: string;
  subTitle: string;
  description: string;
}

export default function ExperienceItem({
  position,
  date,
  sites,
  title,
  subTitle,
  description,
}: ExperienceItemProps) {
  const url = sites;
  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": true,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": 200 * 3,
    "viewport.height": 125 * 3,
  });

  const src = `https://api.microlink.io/?${params}`;

  return (
    <li className="relative mb-10 w-full h-[200vh] md:text-right">
      <div
        className={`w-full flex flex-col md:flex ${
          position === "right" ? "md:flex-row" : "md:flex-row-reverse"
        } md:justify-between md:items-center sticky top-1/3`}
      >
        <div className="absolute -left-7 top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:w-20 md:h-20 w-16 h-16 bg-yellow-500 rounded-full border-4 border-gray-900 p-3 flex justify-center items-center group">
          <MdWorkHistory size={40} className="text-black" />
          <div className="absolute -bottom-20 scale-0 bg-white group-hover:scale-100 border-b-8 border-black z-10 transition duration-300 border-2 rounded-xl w-[14rem] h-[8rem] overflow-hidden">
            <Link href={sites} target="_blank">
              <Image
                src={src}
                width={200}
                height={125}
                quality={50}
                layout="fixed"
                priority={true}
                alt="thumbnail"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
        <div
          className={`pl-10 md:gap-40 gap-4 md:px-0 w-full ${
            position === "right" ? "md:flex-row" : "md:flex-row-reverse"
          } md:justify-between md:items-center flex flex-col`}
        >
          <div className="p-2 self-center border-b-8 border-black bg-yellow-500 rounded-xl text-white w-full flex justify-center border-2">
            <time className="mb-1 text-sm uppercase font-normal leading-none opacity-100 text-black">
              {date}
            </time>
          </div>
          <div
            className={`w-full md:p-10 p-5 text-start rounded-xl border-3 border-b-8 border-black bg-yellow-500 space-y-2`}
          >
            <div className="space-y-2">
              <h3 className="text-2xl text-black font-bold uppercase font-mono">
                {title}
              </h3>
              <h3 className="text-lg text-black font-mono">{subTitle}</h3>
            </div>
            <motion.div>
              <p className="mb-4 md:text-sm text-xs font-normal text-justify text-black">
                {description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </li>
  );
}
