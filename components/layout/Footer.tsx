"use client";

import Link from "next/link";
import { Flame, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-50 text-zinc-700 border-t border-zinc-200 dark:bg-[#101010] dark:text-[#bdbdbd] dark:border-[#3d3a39] pt-16 pb-8 transition-colors">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* Left Section: Branding */}
        <div className="flex flex-col gap-3 min-w-[220px]">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-md bg-zinc-100 border border-zinc-300 dark:bg-[#1a1a1a] dark:border-[#3d3a39] flex items-center justify-center">
              <Flame className="w-4 h-4 text-emerald-600 dark:text-[#00d992]" />
            </div>
            <span className="text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">
              PORT<span className="text-emerald-600 dark:text-[#00d992]">UI</span>
            </span>
          </div>
          <span className="text-xs text-zinc-600 dark:text-[#bdbdbd]">
            Built by{" "}
            <a
              href="https://github.com/Callme-VR"
              className="underline text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-[#00d992] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              @VISHALRAJPUT
            </a>
          </span>
          <span className="text-xs text-zinc-500 dark:text-[#8b949e] mt-1">
            © {currentYear} PORTUI. All rights reserved.
          </span>
        </div>

        {/* Right Section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 flex-1">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[2.52px] text-emerald-600 dark:text-[#00d992] mb-2 font-semibold">
              [PAGES]
            </span>
            <Link href="/docs" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors">Documentation</Link>
            <Link href="/docs/components/background-paths" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors">Components</Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[2.52px] text-emerald-600 dark:text-[#00d992] mb-2 font-semibold">
              [SOCIALS]
            </span>
            <Link href="https://github.com/Callme-VR/PORTUI" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors">GitHub</Link>
            <Link href="https://x.com/CodeAi_Vishal" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors">X (Twitter)</Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[2.52px] text-emerald-600 dark:text-[#00d992] mb-2 font-semibold">
              [SYSTEM]
            </span>
            <Link href="/pricing" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors">Pricing</Link>
            <span className="text-xs text-zinc-500 dark:text-[#8b949e] font-mono mt-1">Status: Operational</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-3 bg-[#00d992] hover:bg-[#2fd6a1] text-[#101010] rounded-md shadow-lg transition-all duration-300 z-50 font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUpRight className="w-5 h-5 rotate-[-45deg]" />
      </motion.button>
    </footer>
  );
}
