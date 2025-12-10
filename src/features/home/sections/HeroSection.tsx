'use client'

import ScaleUpAnimation from "~/components/providers/ScaleUpAnimation";
import MagneticEffect from "~/components/providers/MagneticEffect";
import Introdution from "../components/Introduction";
import ProfilImage from "../components/ProfilImage";
import useSWR from "swr";
import { Hero } from "~/types/collection";
import { getHero } from "~/service/firebase/firebaseService";

export default function HeroSection() {
  const { data: hero } = useSWR<Hero | null>("hero", () =>
    getHero()
  );

  if (!hero) {
    return null;
  }

  return (
    <section className="flex items-center">
      {/* Introdution start */}
      <ScaleUpAnimation>
        <Introdution
          name={hero.name}
          tagline={hero.tagline}
          role={hero.role}
        />
      </ScaleUpAnimation>
      {/* Introdution end */}
      {/* Profil Image start */}
      <MagneticEffect>
        <ProfilImage avatar={hero.avatar}  />
      </MagneticEffect>
      {/* Profil Image end */}
    </section>
  );
}
