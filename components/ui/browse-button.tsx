"use client";
import { ArrowDownRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";

export default function BrowseComponentsButton() {
  return (
    <Link href="/docs/components/action-search-bar" passHref>
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ x: 5, transition: { duration: 0.3 } }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          relative flex items-center justify-center gap-3 rounded-xl font-medium
          h-12 px-6
          bg-black text-white
          dark:bg-white dark:text-black
          border border-orange-500/30 dark:border-orange-500/30
          shadow-lg shadow-orange-500/20
          dark:shadow-md dark:shadow-purple-500/15
          hover:border-orange-400 dark:hover:border-orange-400
          hover:bg-orange-500/5 dark:hover:bg-orange-500/5
          hover:scale-105 transition-all duration-300 ease-in-out
          min-w-[180px] sm:min-w-[220px] lg:min-w-[240px]
        "
        type="button"
        aria-label="Browse Components"
      >
        <span className="font-medium text-lg">Browse Components</span>
        <ArrowDownRight className="w-5 h-5 transition-transform duration-300 ease-in-out" />
      </motion.button>
    </Link>
  );
}
