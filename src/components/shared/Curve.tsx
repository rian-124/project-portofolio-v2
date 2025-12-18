"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";

const anim = (variants: Variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};
export default function Curve({ children }: { children: React.ReactNode }) {
  const [dimensions, setDimension] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const resize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="page">
      {/* <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="w-[100vw] h-[calc(100vh+600px)] top-[-300px] left-0 fixed pointer-events-none z-[9999] bg-black transition-opacity duration-0 ease-linear delay-100"
      /> */}
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ width, height }: { width: number; height: number }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300
    `;
  const targetPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 300
    `;

  const curve: Variants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
         d: initialPath,
    }
  };

  const slide: Variants = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      bottom: "-300px",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.svg
      {...anim(slide)}
      className="w-[100vw] border h-[calc(100vh+600px)] top-[-300px] left-0 fixed pointer-events-none z-[9999] scale-50"
    >
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  );
};
