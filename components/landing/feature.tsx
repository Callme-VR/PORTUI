"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Nextjs from "../icons/nextjs";
import Motion from "../icons/motion";
import ReactIcon from "../icons/react";
import ShadcnIcon from "../icons/shadcn";
import TailwindCSS from "../icons/tailwindcss";

const features = [
  { name: "Next.js", icon: <Nextjs className="w-5 h-5" /> },
  { name: "Framer Motion", icon: <Motion className="w-5 h-5" /> },
  { name: "React", icon: <ReactIcon className="w-5 h-5 text-cyan-400" /> },
  { name: "shadcn/ui", icon: <ShadcnIcon className="w-5 h-5" /> },
  {
    name: "TailwindCSS",
    icon: <TailwindCSS className="w-5 h-5 text-sky-400" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export default function Feature() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col items-center justify-center text-center my-8 sm:my-12 px-2"
    >
      {/* Monospace Eyebrow Heading - Centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-[#00d992] animate-pulse shadow-[0_0_8px_#00d992]" />
        <span className="text-xs font-mono font-semibold uppercase tracking-[2.52px] text-emerald-600 dark:text-[#00d992]">
          [POWERED BY TECH STACK]
        </span>
      </motion.div>

      {/* Tech Badges Row - Centered with Framer Motion Stagger & Glow */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 w-full max-w-4xl mx-auto"
      >
        {features.map((f) => (
          <motion.div
            key={f.name}
            variants={itemVariants}
            whileHover={{
              y: -4,
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
            className="group relative flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-[#3d3a39] hover:border-[#00d992] dark:hover:border-[#00d992] hover:shadow-[0_0_20px_rgba(0,217,146,0.25)] dark:hover:shadow-[0_0_20px_rgba(0,217,146,0.3)] transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHovered(f.name)}
            onMouseLeave={() => setHovered(null)}
            style={{
              opacity: hovered && hovered !== f.name ? 0.45 : 1,
            }}
          >
            <div className="w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {f.icon}
            </div>
            <span className="text-xs font-mono font-medium text-zinc-700 dark:text-[#bdbdbd] group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
              {f.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
