'use client'

import React, { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Backend Developer",
    subtitle: "DEVAN CELL",
    description:
      "DEVANcell is a store that sells phone credit, data packages, and other digital products...",
    images: ["dist/img/Picture1.jpg", "dist/img/Picture2.jpg"],
  },
  {
    title: "Mobile Developer",
    subtitle: "DEVAN CELL",
    description:
      "In this project, I contribute as a mobile developer, specifically in developing the customer interface...",
    images: [
      "dist/img/mobile1.jpg",
      "dist/img/mobile2.jpg",
      "dist/img/mobile3.jpg",
      "dist/img/mobile4.jpg",
    ],
  },
  {
    title: "Front-end Developer",
    subtitle: "Portofolio Afrian Fahrurrozi",
    description:
      "The Afrian Fahrurrozi portfolio website was created for personal use, built with Tailwind CSS...",
    images: ["dist/img/porto1.png"],
  },
];

const ProjectSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleOpen = (i: number) => {
    setActiveProject(i);
    setCurrentIndex(0);
  };

  const handleClose = () => {
    setActiveProject(null);
  };

  const nextImage = () => {
    if (activeProject === null) return;
    setCurrentIndex(
      (prev) => (prev + 1) % projects[activeProject].images.length
    );
  };

  const prevImage = () => {
    if (activeProject === null) return;
    setCurrentIndex(
      (prev) =>
        (prev - 1 + projects[activeProject].images.length) %
        projects[activeProject].images.length
    );
  };

  return (
    <section id="project" className="pt-20 relative">
      <div className="w-full">
       <div
          id="project-container"
          className="grid grid-cols-9 grid-rows-1 p-2 text-white"
        >
          {projects.map((proj, i) => (
            <div
              key={i}
              className="col-span-9 grid grid-cols-subgrid relative mb-10"
            >
              {/* Garis + Icon */}
              <div className="relative col-start-1 col-end-2 lg:col-start-5 lg:col-end-6 w-full flex justify-center">
                <div className="h-full bg-white w-1"></div>
                <button
                  onClick={() => handleOpen(i)}
                  className="bg-yellow-500 p-3 rounded-full absolute -translate-x-1/2 translate-y-1/2 top-16 border-4 border-white"
                >
                  <img src="dist/img/icons8-projects-50.png" alt="icon" />
                </button>
              </div>

              {/* Card Content */}
              <div
                className={`content bg-bgGradientpurple border border-b-8 border-x-4 border-y-4 border-white rounded-md px-5 py-5 mt-5
                ${
                  i % 2 === 0
                    ? "col-start-2 col-end-9 lg:col-start-6 lg:col-end-9"
                    : "col-start-2 col-end-9 lg:col-start-2 lg:col-end-5"
                }`}
              >
                <h1 className="text-2xl font-medium mb-5">{proj.title}</h1>
                <h2 className="text-sm font-medium mb-5">{proj.subtitle}</h2>
                <p>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Details */}
      {activeProject !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-50">
          <div className="relative border-4 rounded-md border-white w-[90%] h-[90%] bg-slate-300/90 p-10 flex items-center justify-center">
            <img
              src={projects[activeProject].images[currentIndex]}
              alt="preview"
              className="w-full h-full object-contain"
            />
            {/* Navigasi */}
            <button
              onClick={prevImage}
              className="p-2 z-40 bg-bgGradientDark w-16 h-16 text-center text-white text-2xl absolute left-10 rounded-full"
            >
              &#9664;
            </button>
            <button
              onClick={nextImage}
              className="p-2 z-40 bg-bgGradientDark w-16 h-16 text-center text-white text-2xl absolute right-10 rounded-full"
            >
              &#9654;
            </button>

            {/* Close */}
            <button
              onClick={handleClose}
              className="closed font-bold text-xl bg-red-600 rounded-full w-12 h-12 absolute -top-5 -right-5"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
