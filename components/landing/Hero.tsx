"use client";

import { motion } from "framer-motion";
import BrowseComponentsButton from "../ui/browse-button";
import BrowseBlocksButton from "../ui/browse-block";
import Feature from "./feature";
import Profile01 from "../portui/profile/profile-01";
import Card08 from "../portui/card/card-08";
import Aiinput03 from "../portui/ai-input/ai-input-03";
import Btn02 from "../portui/button/btn-02";
import Btn08 from "../portui/button/btn-08";
import Input_04 from "../portui/input/input-04";

export default function ThemeEditor() {
  return (
    <>
      {/* First Page - Hero Section with Color Palette */}
      {/* First Page - Hero Section with Color Palette */}
      <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-8 flex flex-col items-center justify-start gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-24">
        {/* On desktop, center content horizontally with gap between hero and palette */}
        {/* Increased gap, removed lg:flex-row for better mobile stacking */}
        
        {/* Left Section - Content */}
        <div className="w-full max-w-2xl lg:max-w-xl xl:max-w-2xl mx-auto space-y-6 text-center lg:text-left mt-10 lg:mt-0 flex flex-col justify-center items-center lg:items-start">
          {/* Align all elements on same vertical axis for desktop */}
          {/* Centered hero block with left-aligned text on desktop */}
          {/* Removed lg:w-1/2 and lg:mt-0 for full width and proper mobile spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <button className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-700 text-sm lg:px-8 lg:py-4 lg:text-base mb-4 lg:mb-6">
              {/* Larger and more spaced on desktop */}
              ✨ Visual Theme Editor
            </button>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mt-6 mb-4 lg:mt-8 lg:mb-6 text-center lg:text-left text-white drop-shadow-xl">
              {/* Larger, bolder headline for desktop, improved contrast */}
              {/* Larger font and more margin on desktop, left-aligned */}
              {/* Reduced font size for mobile, added margin below */}
              Design Your <span className="italic text-zinc-400">Perfect</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 lg:text-7xl block mt-2 lg:mt-3">
                {/* Even larger gradient text for desktop */}
                {/* Larger gradient text on desktop, more spacing */}
                shadcn/ui Theme
              </span>
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 px-2 py-3 mb-4 lg:mb-6 font-medium lg:font-normal">
              {/* Improved contrast, font size, and spacing for desktop */}
              {/* Reduced max width and padding for mobile readability */}
              Customize colors, typography, and layouts with a real-time preview{" "}
              with{" "}
              <span className="text-pink-400 font-semibold">Framer Motion</span>,{" "}
              <span className="text-purple-400 font-semibold">Shadcn/ui</span>,{" "}
              <span className="text-blue-400 font-semibold">Tailwindcss</span>,
              and <span className="text-yellow-400 font-semibold">Next.js</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 lg:gap-6 pt-3 pb-2 text-zinc-50 w-full">
              {/* Horizontal row, left-aligned and spaced on desktop */}
              <span className="flex items-center gap-2 text-sm lg:text-base font-medium">
                ✅ Real-time Preview
              </span>
              <span className="flex items-center gap-2 text-sm lg:text-base font-medium">
                ✅ Export to Tailwind
              </span>
              <span className="flex items-center gap-2 text-sm lg:text-base font-medium">
                ✅ Beautiful Presets
              </span>
            </div>

            {/* Browse Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
              <BrowseComponentsButton />
              <BrowseBlocksButton />
            </div>
            
            {/* Powered by section */}
            <Feature />
          </motion.div>
        </div>

        {/* Right Section - Color Palette */}
         <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
           <motion.div
             initial={{ opacity: 0, y: -20, scale: 0.96 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             transition={{ duration: 1, delay: 0.6 }}
             className="w-full max-w-md sm:max-w-lg"
           >
             <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
               <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                 Color Palette
               </h3>
               
               <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6 mb-8">
                 <div className="flex flex-col items-center group">
                   <div className="relative">
                     <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-pink-500/25"></div>
                     <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                       <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                     </div>
                   </div>
                   <div className="text-center mt-3">
                     <p className="text-xs sm:text-sm font-semibold text-white">Primary</p>
                     <p className="text-xs text-zinc-400 mt-1">#ec4899</p>
                   </div>
                 </div>
                 
                 <div className="flex flex-col items-center group">
                   <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-600 shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-zinc-500/25"></div>
                   <div className="text-center mt-3">
                     <p className="text-xs sm:text-sm font-semibold text-white">Secondary</p>
                     <p className="text-xs text-zinc-400 mt-1">#374151</p>
                   </div>
                 </div>
                 
                 <div className="flex flex-col items-center group">
                   <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-zinc-600 to-zinc-500 shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-zinc-400/25"></div>
                   <div className="text-center mt-3">
                     <p className="text-xs sm:text-sm font-semibold text-white">Accent</p>
                     <p className="text-xs text-zinc-400 mt-1">#4b5563</p>
                   </div>
                 </div>
                 
                 <div className="flex flex-col items-center group">
                   <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-zinc-500 to-zinc-400 shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-zinc-300/25"></div>
                   <div className="text-center mt-3">
                     <p className="text-xs sm:text-sm font-semibold text-white">Muted</p>
                     <p className="text-xs text-zinc-400 mt-1">#6b7280</p>
                   </div>
                 </div>
                 
                 <div className="flex flex-col items-center group">
                   <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-black via-zinc-900 to-zinc-800 border-2 border-zinc-600 shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-zinc-600/25"></div>
                   <div className="text-center mt-3">
                     <p className="text-xs sm:text-sm font-semibold text-white">Background</p>
                     <p className="text-xs text-zinc-400 mt-1">#000000</p>
                   </div>
                 </div>
               </div>
               
               <div className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 rounded-xl p-4 mb-6 border border-zinc-600/50">
                 <div className="flex items-center justify-between mb-4">
                   <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-sm font-medium text-white transition-all duration-200 shadow-lg hover:shadow-purple-500/25">
                     Copy Code
                   </button>
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                       <span className="text-xs font-bold text-white">UI</span>
                     </div>
                     <div className="flex gap-1">
                       <div className="w-8 h-1 bg-zinc-600 rounded-full"></div>
                       <div className="w-8 h-1 bg-zinc-600 rounded-full"></div>
                     </div>
                   </div>
                 </div>
                 <input 
                   type="text" 
                   value="oklch, hsl, rgb, hex" 
                   readOnly
                   className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-600/50 rounded-lg text-sm text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                 />
               </div>
               
               <div className="h-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-lg"></div>
             </div>
           </motion.div>
         </div>
      </div>

      {/* Second Page - Component Showcase */}
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Explore Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Component Library
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto"
            >
              Discover a comprehensive collection of beautifully designed components, 
              ready to enhance your next project with modern UI patterns and interactions.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Card Components</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Beautiful content containers</p>
                </div>
                <div className="flex justify-center">
                  <Card08 />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Profile Components</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">User profile interfaces</p>
                </div>
                <div className="flex justify-center">
                  <Profile01 />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">AI Chat Interface</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Modern chat experiences</p>
                </div>
                <div className="flex justify-center">
                  <Aiinput03 />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Button Components</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Interactive button styles</p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <Btn02 />
                  <Btn08 />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Input Components</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Form input elements</p>
                </div>
                <div className="flex justify-center">
                  <Input_04 />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Explore More</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Discover our full component library</p>
                </div>
                <div className="flex flex-col gap-3">
                  <BrowseComponentsButton />
                  <BrowseBlocksButton />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-16 sm:mt-20"
          >
            <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-8 sm:p-12 border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                Start building your next project with our comprehensive component library. 
                Copy, customize, and create beautiful interfaces in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BrowseComponentsButton />
                <BrowseBlocksButton />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
