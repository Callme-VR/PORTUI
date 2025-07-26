"use client";

import { ArrowUpRight, PartyPopper, Rocket } from "lucide-react";
import Link from "next/link";
import { ConfettiOutline } from "../icons/conffeti";
import { useState, useEffect } from "react";

interface HeaderContent {
  text: string;
  productName: string;
  link: string;
}

export function HeaderPro() {
  const [content, setContent] = useState<HeaderContent>({
    text: "",
    productName: "",
    link: "",
  });

  useEffect(() => {
    const random = Math.random();
    if (random < 0.75) {
      setContent({
        text: "Built app fast",
        productName: "PORTUI Boilerplate",
        link: "#",
      });
    } else {
      setContent({
        text: "Explore new components",
        productName: "PORTUI Pro",
        link: "#",
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center md:justify-end gap-1 flex-1">
      <div className="flex items-center justify-start md:justify-center gap-1 flex-1">
        <Link
          href={content.link}
          target="_blank"
          className="flex md:hidden items-center justify-end gap-2 pl-2 pr-0.5 py-1 text-sm font-medium text-zinc-800 dark:text-zinc-200 rounded-xl border-2 border-fuchsia-500/20 hover:border-fuchsia-500/60 transition-all duration-300 group hover:shadow-md"
        >
          <span className="flex items-center gap-2">
            {content.productName === "PORTUI UI Pro" ? (
              <ConfettiOutline className="w-4 h-4 text-fuchsia-500" />
            ) : (
              <Rocket className="w-4 h-4 text-fuchsia-500" />
            )}
            <span className="text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-600 bg-clip-text font-semibold tracking-tighter">
              {content.text}
            </span>
          </span>

          <span className="flex items-center gap-2">
            {content.productName === "PORTUI UI Pro" ? (
              <PartyPopper className="w-4 h-4 text-fuchsia-500" />
            ) : (
              <Rocket className="w-4 h-4 text-fuchsia-500" />
            )}
            <span className="text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-600 bg-clip-text font-semibold">
              {content.text.split(" ")[0]}
            </span>
          </span>

          <div className="relative inline-flex items-center gap-2 px-1.5 py-0.5 text-sm rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-zinc-100/90 dark:to-zinc-200/90">
            <div className="flex items-center gap-1">
              <span className="text-white dark:text-zinc-900 group-hover:text-white dark:group-hover:text-zinc-900 tracking-tighter">
                {content.productName}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90 group-hover:text-white dark:group-hover:text-zinc-900 transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}
