"use client";

import Link from "next/link";
import { Flame, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-zinc-800 pt-16 pb-8">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* Left Section: Branding */}
        <div className="flex flex-col gap-3 min-w-[220px]">
          <div className="flex items-center gap-2 mb-1">
            <Flame className="w-5 h-5 text-zinc-300" />
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 to-zinc-700 tracking-tight">
              PORTUI
            </span>
          </div>
          <span className="text-xs text-zinc-400">
            Build by{" "}
            <a
              href="https://github.com/vr406"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              @VISHALRAJPUT
            </a>
          </span>
          <span className="text-xs text-zinc-400">
            Share Your Thoughts On{" "}
            <a href="#" className="underline hover:text-white">
              X
            </a>
          </span>
          <span className="text-xs text-zinc-500 mt-2">
            © {currentYear} PORTUI. All rights reserved.
          </span>
        </div>

        {/* Right Section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 flex-1">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-white mb-2">Pages</span>
            <Link href="/docs" className="text-sm text-zinc-400 hover:text-white transition">Docs</Link>
            <Link href="/blocks" className="text-sm text-zinc-400 hover:text-white transition">Blocks</Link>
            <Link href="/colors" className="text-sm text-zinc-400 hover:text-white transition">Colors</Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold text-white mb-2">Socials</span>
            <Link href="https://github.com/Callme-VR" className="text-sm text-zinc-400 hover:text-white transition">GitHub</Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition">LinkedIn</Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition">X</Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold text-white mb-2">Legal</span>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUpRight className="w-5 h-5 rotate-[-45deg]" />
      </motion.button>
    </footer>
  );
}
