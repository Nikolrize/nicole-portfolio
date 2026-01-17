"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface MotionSlideLeftProps {
  children: ReactNode;
}

export default function MotionSlideLeft({
  children,
}: MotionSlideLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.35,
      }}
    >
      {children}
    </motion.div>
  );
}
