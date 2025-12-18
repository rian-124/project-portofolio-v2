import ExperienceSection from "../sections/ExperienceSection";
import HeroSection from "../sections/HeroSection";
import MoreAboutMe from "../sections/MoreAboutMe";
import TechStackSection from "../sections/TechStackSection";

export default function AboutPage() {
  return (
      <main className="md:p-10 p-5 flex flex-col justify-center">
        <HeroSection />
        <MoreAboutMe />
        <ExperienceSection />
        <TechStackSection />
      </main>
  );
}
