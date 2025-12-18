"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MainContentAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
