"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SplitText from "~/components/shared/SplitText";
import MagneticEffect from "~/components/providers/MagneticEffect";

export default function HeroSection() {
  return (
    <section className="text-center md:p-20 py-20">
      <MagneticEffect>
        <div className="inline-block relative font-mono uppercase">
          <MagneticEffect>
            <SplitText
              text="Afrian"
              className="md:text-9xl text-7xl font-bold text-center text-yellow-500"
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
          </MagneticEffect>

          {/* star kiri atas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute md:-top-6 md:-left-20 -top-3 -left-10 lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] w-[30px] h-[30px]"
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
            className="absolute md:-bottom-6 md:-right-20 -bottom-3 -right-10 lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] w-[30px] h-[30px]"
          >
            <Image
              src="/image/star-1.svg"
              alt="star-right"
              width={60}
              height={60}
            />
          </motion.div>
        </div>
      </MagneticEffect>
    </section>
  );
}
