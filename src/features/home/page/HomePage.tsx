'use client'

import Curve from "~/components/shared/Curve";
import HeroSection from "../sections/HeroSection";
import { usePathname } from "next/navigation";

export default function HomePage() {
  return (

      <main className="flex items-center h-[450px] lg:px-28 md:px-28 sm:px-28 px-5 overflow-hidden lg:text-start text-center">
        <HeroSection />
      </main>
  );
}
