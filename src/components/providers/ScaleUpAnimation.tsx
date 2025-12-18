'use client'

import React from "react";
import { motion } from "framer-motion";

export default function ScaleUpAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
