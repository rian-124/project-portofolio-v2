import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface ScrollHeightAnimationProps {
  children: React.ReactNode;
  heightStart: string;
  heightEnd: string;
}

export default function ScrollHeightAnimation({
  children,
  heightStart,
  heightEnd,
}: ScrollHeightAnimationProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 30%", "end 70%"],
  });

  const height = useTransform(
    scrollYProgress,
    [0, 0.4],
    [heightStart, heightEnd]
  );

  return (
    <motion.div
      ref={targetRef}
      style={{ height }}
      className="md:w-[200px] w-[250px] grayscale hover:grayscale-0 rounded-md hover:w-full transition-all duration-500 overflow-hidden relative"
    >
      {children}
    </motion.div>
  );
}
