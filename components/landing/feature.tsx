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
    <div className="w-full flex flex-col items-center mt-8">
      <span className="mb-4 text-base font-semibold text-zinc-200">
        Powered by
      </span>
      <div className="flex flex-row justify-center gap-12">
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
            {f.icon}
            <span className="mt-2 text-sm text-zinc-400">{f.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
