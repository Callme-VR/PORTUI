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
    <div className="w-full flex flex-col items-center mt-8 mb-4 px-2 lg:items-start">
      {/* Added px-2 for mobile padding, mb-4 for separation */}
      <span className="mb-4 text-base font-semibold text-zinc-200 w-full lg:w-auto lg:text-left">
        Powered by
      </span>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 w-full">
        {/* Horizontal row, left-aligned and spaced on desktop */}
        {features.map((f) => (
          <div
            key={f.name}
            className="flex flex-col items-center transition-all duration-200 cursor-pointer"
            onMouseEnter={() => setHovered(f.name)}
            onMouseLeave={() => setHovered(null)}
            style={{
              filter:
                hovered && hovered !== f.name
                  ? "blur(2px) grayscale(60%)"
                  : "none",
              opacity: hovered && hovered !== f.name ? 0.6 : 1,
            }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              {/* Responsive icon sizing */}
              {f.icon}
            </div>
            <span className="mt-2 text-sm text-zinc-400">{f.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
