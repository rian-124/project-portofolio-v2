"use client";

import Image from "next/image";
import { useState } from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { FcNext } from "react-icons/fc";

const projects = {
  website: [
    {
      id: 1,
      title: "3D Portfolio Web",
      category: "frontend",
      tag: "Web",
      image: "/projects/portfolio-3d.png",
      description:
        "Portfolio interaktif dengan animasi 3D, Three.js, dan Framer Motion yang responsif dan elegan.",
    },
    {
      id: 2,
      title: "Restaurant Landing Page",
      category: "frontend",
      tag: "Web",
      image: "/projects/restaurant-landing.png",
      description:
        "Landing page restoran dengan parallax scrolling, animated menu showcase, dan dark/light mode.",
    },
    {
      id: 3,
      title: "Movie Finder App",
      category: "frontend",
      tag: "Web",
      image: "/projects/movie-finder.png",
      description:
        "Website pencarian film menggunakan Next.js dan API TMDB dengan fitur search, filter, dan rating.",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      category: "frontend",
      tag: "Web",
      image: "/projects/social-dashboard.png",
      description:
        "Dashboard analitik media sosial dengan Chart.js, dark mode, dan card dynamic components.",
    },
  ],
  api: [
    {
      id: 5,
      title: "E-Commerce API",
      category: "backend",
      tag: "API",
      image: "/projects/ecommerce-api.png",
      description:
        "RESTful API untuk e-commerce dengan autentikasi JWT, payment gateway, dan role-based access.",
    },
    {
      id: 6,
      title: "Face Recognition Attendance",
      category: "backend",
      tag: "AI",
      image: "/projects/face-attendance.png",
      description:
        "Sistem absensi siswa dengan QR dan Face Recognition berbasis NestJS dan TensorFlow.",
    },
    {
      id: 7,
      title: "Learning Management Backend",
      category: "backend",
      tag: "Platform",
      image: "/projects/lms-backend.png",
      description:
        "Backend LMS dengan fitur kelas, kuis, sertifikat, dan dashboard administrator.",
    },
    {
      id: 8,
      title: "AI Chat Assistant API",
      category: "backend",
      tag: "AI",
      image: "/projects/aichat-api.png",
      description:
        "Chatbot AI menggunakan OpenAI API dan NestJS, mampu menjawab pertanyaan dan generate dokumen.",
    },
  ],
  mobile: [
    {
      id: 9,
      title: "Smart Home Controller",
      category: "mobile",
      tag: "Mobile",
      image: "/projects/smarthome.png",
      description:
        "Aplikasi Flutter untuk mengontrol lampu, CCTV, sensor, dan sistem alarm rumah pintar.",
    },
    {
      id: 10,
      title: "Travel Booking Mobile App",
      category: "mobile",
      tag: "Mobile",
      image: "/projects/travel-app.png",
      description:
        "Aplikasi pemesanan tiket pesawat, hotel, dan itinerary lengkap dengan Firebase dan Maps.",
    },
    {
      id: 11,
      title: "Mobile Finance Tracker",
      category: "mobile",
      tag: "Mobile",
      image: "/projects/finance-tracker.png",
      description:
        "Aplikasi pelacak keuangan harian dengan grafik saldo, laporan PDF, dan reminder otomatis.",
    },
    {
      id: 12,
      title: "Online Course Mobile App",
      category: "mobile",
      tag: "Mobile",
      image: "/projects/learning-mobile.png",
      description:
        "Aplikasi kursus online dengan fitur video, forum diskusi, kuis, dan sertifikat digital.",
    },
  ],
};

type CategoryStack = "website" | "api" | "mobile";

const categoryStack = ["website", "api", "mobile"];

export default function Project() {
  const [category, setCategory] = useState<CategoryStack>("website");

  const handleTechStack = (item: CategoryStack) => {
    setCategory(item);
  };

  return (
    <main className="px-20 space-y-16 lg">
      <section className="h-screen">
        <div className="py-10 w-[16rem]">
          <div className="space-y-3 flex items-center flex-col">
            <div className="py-[2px] bg-yellow-500 w-42 h-1 rounded-full"></div>
            <div className="py-[3px] bg-yellow-500 w-42 h-1 rounded-full self-start"></div>
          </div>
          <div className="p-3">
            <h1 className="text-4xl text-center">Highlight</h1>
          </div>
        </div>
        <div className="flex justify-between gap-32">
          <div className="w-1/2 relative">
            <div className="text-center  w-[350px] h-[175px] bg-gray-500 absolute border ml-42 hover:scale-110 hover:z-20 transition-all duration-500">
              ini foto
            </div>
            <div className="text-center  w-[500px] h-[250px] bg-gray-500 absolute border mt-20 z-10 mr-10 hover:scale-110 hover:z-20 transition-all duration-500">
              ini foto
            </div>
            <div className="text-center  w-[420px] h-[210px] bg-gray-500 absolute border ml-36 mt-52 hover:scale-110 hover:z-20 transition-all duration-500">
              ini foto
            </div>
          </div>
          <div className="w-1/2">
            <div className="space-y-5">
              <h1 className="text-3xl">Title Project</h1>
              <p className="text-gray-200 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam repudiandae obcaecati iste, voluptatum inventore
                alias tempora iusto! Minus pariatur at porro suscipit fugit id
                dolorem expedita, saepe vero ipsa, dolorum incidunt quos natus
                dolore eius alias tempora dolores unde officiis, accusantium
                perspiciatis labore sint error. Mollitia eius minus commodi fuga
                excepturi ipsum harum corrupti molestias voluptatem debitis
                nostrum quis, aut autem eaque ipsa. Sint praesentium blanditiis
                architecto quam maxime molestiae ad? Quod excepturi rem
                doloremque hic nisi ratione nihil saepe unde inventore vel
                voluptatem fugit, laborum dignissimos corporis impedit ea
                nostrum, vero magnam amet aut necessitatibus? Fugiat suscipit
                quos sequi.
              </p>
              <div className="flex gap-2">
                <button className="bg-yellow-500 rounded-lg p-2 px-10 text-center border-2 border-b-8 border-black">
                  More 🙋‍♂️
                </button>
                <button className="bg-white rounded-lg p-2 px-10 text-center border-2 border-b-8 border-black text-black">
                  Preview {""} 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pb-10">
        <div className="py-10 w-[29rem]">
          <div className="space-y-3 flex items-center flex-col">
            <div className="py-[2px] bg-yellow-500 w-42 h-1 rounded-full"></div>
            <div className="py-[3px] bg-yellow-500 w-42 h-1 rounded-full self-start"></div>
          </div>
          <div className="p-3">
            <h1 className="text-4xl text-center">Other Note Worthy Projects</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <li className="flex gap-3 w-[42rem] border justify-between items-center p-3 rounded-md px-10 text-center">
              {categoryStack.map((item) => (
                <ul
                  key={item}
                  onClick={() =>
                    handleTechStack(item.toLowerCase() as CategoryStack)
                  }
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
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-10 overflow-hidden h-full">
          {projects[category].map((project) => (
            <div
              key={project.id}
              className="relative border-2 border-black rounded-xl group overflow-hidden"
            >
              <div className="w-full h-[200px] relative">
               <Image src={`/image/education/education-1.jpg`} alt={`${project.title}`} fill className="object-cover" />
              </div>
              <div className="bg-yellow-500 rounded-b-xl p-3 absolute z-10 w-full bottom-0">
                <div className="flex gap-2 items-center">
                  <h1 className="text-black text-xl">{project.title}</h1>
                  <span className="px-5 py-[1px] bg-black rounded-full">
                   {project.tag}
                  </span>
                </div>
                <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 text-xs transition-all duration-500">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-10">
        <div className="flex flex-col justify-center items-center text-5xl font-mono gap-2">
            <h2 className="text-2xl text-gray-200">You Have Interest With Me?</h2>
            <h1 className="flex items-center gap-3 text-yellow-500 font-bold">Get In Touch <BiArrowFromLeft className="border rounded-full p-2 cursor-pointer" /></h1>
        </div>
      </section>
    </main>
  );
}
