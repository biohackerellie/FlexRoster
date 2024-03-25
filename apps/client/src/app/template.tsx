"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0.5 },
  enter: { opactiy: 0, x: 0, y: 0 },
  active: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="active"
      transition={{ type: "spring" }}
    >
      {children}
    </motion.div>
  );
}
