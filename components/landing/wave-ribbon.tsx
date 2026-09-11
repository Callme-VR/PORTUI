"use client";

import { motion } from "framer-motion";

export function WaveRibbon() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-emerald-500/20 blur-[120px] rounded-full dark:opacity-60 opacity-30 pointer-events-none" />

      {/* SVG 3D Flowing Gradient Ribbon */}
      <svg
        className="w-full h-full min-h-[500px] max-h-[750px] object-cover"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Main Neon Ribbon Linear Gradient */}
          <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="35%" stopColor="#d946ef" />
            <stop offset="65%" stopColor="#8b5cf6" />
            <stop offset="85%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#00d992" />
          </linearGradient>

          {/* Secondary Highlight Gradient */}
          <linearGradient id="ribbonHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f472b6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>

          {/* Glow Drop Shadow Filter */}
          <filter id="ribbonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="24" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Soft Shadow Filter for 3D Volume */}
          <filter id="ribbonShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="20" stdDeviation="15" floodColor="#0d0e15" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Ambient Blurred Glow Tube (Behind Main Ribbon) */}
        <motion.path
          d="M -100,420 C 250,420 350,140 720,140 C 1090,140 1190,400 1540,400"
          stroke="url(#ribbonGradient)"
          strokeWidth="60"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
          filter="url(#ribbonGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />

        {/* Core Thick 3D Ribbon Tube Body */}
        <motion.path
          d="M -100,420 C 250,420 350,140 720,140 C 1090,140 1190,400 1540,400"
          stroke="url(#ribbonGradient)"
          strokeWidth="38"
          strokeLinecap="round"
          fill="none"
          filter="url(#ribbonShadow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Top Rim Light Reflection Strip for 3D Volume */}
        <motion.path
          d="M -100,412 C 250,412 350,132 720,132 C 1090,132 1190,392 1540,392"
          stroke="url(#ribbonHighlight)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
