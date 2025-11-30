"use client";

import Introdution from "./components/Introduction";
import ProfilImage from "./components/ProfilImage";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex items-center h-[450px] px-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [ 0, 0.71, 0.2, 1.01] }}
        className="w-full"
      >
        <Introdution />
      </motion.div>
      <ProfilImage />
    </main>
  );
}
