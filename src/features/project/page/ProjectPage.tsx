'use client'

import useSWR from "swr";
import GetInTouchSection from "../sections/GetInTouchSection";
import HighlightProjectSection from "../sections/HighlightProjectSection";
import NoteworthyProjectsSection from "../sections/NoteworthyProjectsSection";
import { Projects } from "~/types/collection";
import { getProjects } from "~/service/firebase/firebaseService";

export default function ProjectPage() {
  const { data: projects } = useSWR<Projects[]>('projects', () => getProjects());
  if (!projects) return null;
  const highlightProject = projects[0];

  return (
    <main className="md:px-20 px-5">
      <HighlightProjectSection highLightProject={highlightProject} />
      <NoteworthyProjectsSection projects={projects} />
      <GetInTouchSection />
    </main>
  );
}
