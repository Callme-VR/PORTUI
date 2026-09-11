"use client";
import { useState } from "react";
import Nextjs from "../icons/nextjs";
import Motion from "../icons/motion";
import ReactIcon from "../icons/react";
import ShadcnIcon from "../icons/shadcn";
import TailwindCSS from "../icons/tailwindcss";

const features = [
  { name: "Next.js", icon: <Nextjs className="w-10 h-10" /> },
  { name: "Framer Motion", icon: <Motion className="w-10 h-10" /> },
  { name: "React", icon: <ReactIcon className="w-10 h-10 text-cyan-400" /> },
  { name: "shadcn/ui", icon: <ShadcnIcon className="w-10 h-10" /> },
  {
    name: "TailwindCSS",
    icon: <TailwindCSS className="w-10 h-10 text-sky-400" />,
  },
];

export default function Feature() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col items-center lg:items-start mt-10 mb-4 px-2">
      <span className="mb-4 text-xs font-mono font-semibold uppercase tracking-[2.52px] text-emerald-600 dark:text-[#00d992]">
        [POWERED BY TECH STACK]
      </span>
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
        {features.map((f) => (
          <div
            key={f.name}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-md bg-zinc-100 border border-zinc-200 dark:bg-[#1a1a1a] dark:border-[#3d3a39] hover:border-[#00d992] dark:hover:border-[#00d992] transition-all duration-200 cursor-pointer"
            onMouseEnter={() => setHovered(f.name)}
            onMouseLeave={() => setHovered(null)}
            style={{
              opacity: hovered && hovered !== f.name ? 0.5 : 1,
            }}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              {f.icon}
            </div>
            <span className="text-xs font-mono font-medium text-zinc-700 dark:text-[#bdbdbd]">
              {f.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
