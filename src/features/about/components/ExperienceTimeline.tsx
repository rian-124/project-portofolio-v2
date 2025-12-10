'use client'

import React from "react";
import ExperienceItem from "./ExperienceItem";
import useSWR from "swr";
import { getExperience } from "~/service/firebase/firebaseService";
import { Experience } from "~/types/collection";


export default function ExperienceTimeline() {

  const { data: experiences } = useSWR<Experience[] | []>('experiences', () => getExperience())

  if (!experiences) return null;

  return (
    <ol className="relative border-gray-200 md:border-l-0 md:flex md:flex-col md:items-center text-white">
      {/* Garis vertikal */}
      <div className="absolute md:left-1/2 w-1 h-full  transform md:-translate-x-1/2 bg-gray-900 rounded-xl"></div>
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} position={index % 2 === 0 ? 'left' : 'right'} date={experience.date} title={experience.company} sites={experience.sites} description={experience.description} subTitle={experience.role} />
      ))}
    </ol>
  );
}
