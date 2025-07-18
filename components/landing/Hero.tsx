"use client";

import { motion } from "framer-motion";
// import TailwindCSS from "../icons/tailwindcss";
import BrowseComponentsButton from "../ui/browse-button";
import BrowseBlocksButton from "../ui/browse-block";
import Feature from "./feature";
import { Link } from "next-view-transitions";
import Profile01 from "../portui/profile/profile-01";
import Card08 from "../portui/card/card-08";
import Aiinput03 from "../portui/ai-input/ai-input-03";
import Btn02 from "../portui/button/btn-02";
import Btn08 from "../portui/button/btn-08";
// import Input09 from "../portui/input/input-09";
import Input_04 from "../portui/input/input-04";

export default function ThemeEditor() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Tailwind CSS 4.0 Update Banner
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute top-0 left-0 right-0 py-3 flex justify-center items-center gap-2 bg-zinc-900/80 backdrop-blur-sm z-50 border-b border-zinc-800"
      >
        <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-zinc-100">
          <TailwindCSS className="w-5 h-5 text-teal-400" />
          Now updated for Tailwind CSS 4.0!
          <span className="ml-2 px-3 py-1 bg-purple-700 rounded-full text-xs font-semibold flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.832 1.512l-7 11A1 1 0 019 19v-5H5a1 1 0 01-.832-1.512l7-11z"
                clipRule="evenodd"
              ></path>
            </svg>
            New
          </span>
        </div>
      </motion.div> */}

      {/* Left Section */}
      <div className="w-full lg:w-1/2 space-y-8 mt-20 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <button className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-700 text-sm">
            ✨ Visual Theme Editor
          </button>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] mt-4">
            Design Your <span className="italic text-zinc-400">Perfect</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500">
              shadcn/ui Theme
            </span>
          </h1>

          <p className="text-zinc-400 text-lg px-4 py-4">
            Customize colors, typography, and layouts with a real-time preview{" "}
            with{" "}
            <span className="text-pink-400 font-semibold">Framer Motion</span>,{" "}
            <span className="text-purple-400 font-semibold">Shadcn/ui</span>,{" "}
            <span className="text-blue-400 font-semibold">Tailwindcss</span>,
            and <span className="text-yellow-400 font-semibold">Next.js</span>
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 text-zinc-50">
            <span className="flex items-center gap-1 text-sm">
              ✅ Real-time Preview
            </span>
            <span className="flex items-center gap-1 text-sm">
              ✅ Export to Tailwind
            </span>
            <span className="flex items-center gap-1 text-sm">
              ✅ Beautiful Presets
            </span>
          </div>

          {/* Browse Buttons */}
          <div className="flex gap-4 pt-6">
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>
          {/* Powered by section */}
          <Feature />
        </motion.div>
      </div>

      <div className="w-full lg:w-[55%] flex justify-between  flex-col gap-6 lg:pl-8">
        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-center justify-center"
        >
          {/* card components */}
          <div className="w-full flex flex-col items-center justify-center">
            <span className="text-sm text-ziinc-400 dark:text-zinc-500 block mb-2 text-center">
              Card
            </span>
            <Card08 />
            {/* card components detailed */}
          </div>

          {/* action search bars*/}

          <div className="w-full max-w-[600px] bg-transparent">
            <span className="text-sm text-zinc-400 dark:text-zinc-500 block text-center mb-2">
              Components
            </span>
            <Profile01 />
            {/* action search add functionality of search bars */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full"
        >
          <span className="text-sm text-zinc-400 dark:text-zinc-500 block text-center mb-2">
            Ai Chat
          </span>
          <div className="w-full h-45 rounded-xl border border-zinc-200 dark:border-zinc-800 flex itmes-center justify-center">
            <Aiinput03 />
            {/* ai input works */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="w-full">
            <span className="text-sm text-zinc-400 dark:text-zinc-500 mb-2">
              Buttons
            </span>
            <div className="w-full h-45 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-3 itmes-center text-center justify-center">
              <Link href={"/docs/components/button"}>
                {}
                <Btn02 />
              </Link>
              <Link href={"/docs/components/button"}>
                {/* buttons */}
                <Btn08 />
              </Link>
            </div>
          </div>

          <div className="w-full">
            <span className="text-sm text-zinc text-zinc-400 block text-center mb-2">
              Input
            </span>
            <Link href={"/docs/components/input"}>
              {/* input */}
              <Input_04 />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
