"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Copy, Check, Terminal, CheckCircle2 } from "lucide-react";
import Feature from "./feature";
import Profile01 from "../portui/profile/profile-01";
import Card08 from "../portui/card/card-08";
import Aiinput03 from "../portui/ai-input/ai-input-03";
import Btn02 from "../portui/button/btn-02";
import Btn08 from "../portui/button/btn-08";
import Input_04 from "../portui/input/input-04";
import { WaveRibbon } from "./wave-ribbon";

export default function ThemeEditor() {
  const [copiedCommand, setCopiedCommand] = useState(false);
  const commandText = "npx portui@latest add ai-input";

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(commandText);
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  return (
    <div className="bg-white text-zinc-900 dark:bg-[#0c0d12] dark:text-[#f2f2f2] w-full min-h-screen transition-colors duration-300 relative overflow-hidden">

      {/* ─── Hero Main Section with 3D Wave Ribbon Reference Layout ─── */}
      <section className="relative pt-12 sm:pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-between min-h-[85vh]">

        {/* 3D Glowing Wave Ribbon Background */}
        <WaveRibbon />

        {/* Hero Top Content: Centered Display Headline & Pill CTA */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center space-y-8 pt-6">

          {/* Uppercase Monospace Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-zinc-200 shadow-sm backdrop-blur-md dark:bg-[#161822]/80 dark:border-[#2d3142] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#00d992] animate-pulse shadow-[0_0_8px_#00d992]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-[2.5px] text-zinc-800 dark:text-[#00d992]">
              [ UI &amp; AGENT ENGINEERING PLATFORM ]
            </span>
          </motion.div>

          {/* Reference Image Centered Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.08] text-zinc-900 dark:text-white"
          >
            Creating the future of <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              UI &amp; Component engineering.
            </span>
          </motion.h1>

          {/* Reference Image Floating Pill CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="pt-2 z-20"
          >
            <Link
              href="/docs"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <span>Explore Components</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Body Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed pt-2"
          >
            Production-ready, customizable UI components and agentic blocks built with Tailwind CSS, Framer Motion, and Next.js.
          </motion.p>

          {/* Quick CLI Copy & Specs Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-mono"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 dark:bg-[#161822] dark:border-[#2d3142] text-zinc-700 dark:text-zinc-300">
              <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-[#00d992]" />
              <code>{commandText}</code>
              <button
                onClick={handleCopyCommand}
                className="ml-1 p-1 hover:text-emerald-600 dark:hover:text-[#00d992] transition-colors"
                title="Copy command"
              >
                {copiedCommand ? <Check className="w-3.5 h-3.5 text-[#00d992]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <span className="hidden sm:inline-block text-zinc-400 dark:text-zinc-600">•</span>

            <span className="px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 dark:bg-[#161822] dark:border-[#2d3142] text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#00d992]" />
              Tailwind v4 Ready
            </span>
          </motion.div>

        </div>

        {/* Reference Image Tech Partner Logo Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 w-full pt-16 sm:pt-24 text-center"
        >
          <div className="text-center mb-6">
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[2.52px] text-zinc-500 dark:text-[#bdbdbd]">
              POWERED BY MODERN WEB STANDARDS &amp; FRAMEWORKS
            </span>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-5xl mx-auto px-4"
          >
            {[
              { name: "REACT 19", color: "#38bdf8" },
              { name: "NEXT.JS 15", color: "#ffffff" },
              { name: "TAILWIND CSS v4", color: "#22d3ee" },
              { name: "FRAMER MOTION", color: "#c084fc" },
              { name: "TYPESCRIPT", color: "#3b82f6" },
              { name: "RADIX PRIMITIVES", color: "#00d992" },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, y: 12, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-100/90 border border-zinc-200 dark:bg-[#1a1a1a] dark:border-[#3d3a39] hover:border-[#00d992] dark:hover:border-[#00d992] hover:shadow-[0_0_15px_rgba(0,217,146,0.2)] dark:hover:shadow-[0_0_18px_rgba(0,217,146,0.25)] transition-all duration-300 cursor-default"
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse shadow-xs"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="text-xs font-mono font-semibold tracking-wide text-zinc-700 dark:text-[#bdbdbd] group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </section>

      {/* ─── Dashed Rhythm Cue Divider ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-dashed border-zinc-200 dark:border-[#2d3142] w-full" />
      </div>

      {/* ─── Feature Highlights Strip ─── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Feature />
      </section>

      {/* ─── Dashed Rhythm Cue Divider ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-dashed border-zinc-200 dark:border-[#2d3142] w-full" />
      </div>

      {/* ─── Interactive Component Showcase Section ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-[2.5px] text-emerald-600 dark:text-[#00d992]">
            [ EXPLORE THE REGISTRY ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white tracking-[-1px]">
            Crafted UI primitives &amp; interactive blocks
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base">
            Cleanly structured components with zero external bloat. Preview live interactive components below or explore full documentation.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1: Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-zinc-200 hover:border-[#00d992] dark:bg-[#12141d] dark:border-[#2d3142] dark:hover:border-[#00d992]/70 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00d992] transition-colors">
                  Card Components
                </h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 text-emerald-700 border border-zinc-200 dark:bg-[#1d202e] dark:text-[#00d992] dark:border-[#2d3142]">
                  7 VARIANTS
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                Structured layout containers and interactive content blocks.
              </p>
            </div>
            <div className="flex justify-center p-4 bg-zinc-50 border border-zinc-200 dark:bg-[#161822] dark:border-[#2d3142] rounded-lg overflow-hidden">
              <Card08 />
            </div>
          </motion.div>

          {/* Card 2: Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-zinc-200 hover:border-[#00d992] dark:bg-[#12141d] dark:border-[#2d3142] dark:hover:border-[#00d992]/70 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00d992] transition-colors">
                  Profile Cards
                </h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 text-emerald-700 border border-zinc-200 dark:bg-[#1d202e] dark:text-[#00d992] dark:border-[#2d3142]">
                  5 VARIANTS
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                User profile summaries, social badges, and avatar pickers.
              </p>
            </div>
            <div className="flex justify-center p-4 bg-zinc-50 border border-zinc-200 dark:bg-[#161822] dark:border-[#2d3142] rounded-lg overflow-hidden">
              <Profile01 />
            </div>
          </motion.div>

          {/* Card 3: AI Chat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border border-zinc-200 hover:border-[#00d992] dark:bg-[#12141d] dark:border-[#2d3142] dark:hover:border-[#00d992]/70 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00d992] transition-colors">
                  AI Chat Inputs
                </h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 text-emerald-700 border border-zinc-200 dark:bg-[#1d202e] dark:text-[#00d992] dark:border-[#2d3142]">
                  16 VARIANTS
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                Prompt boxes, file attachment bars, and LLM streaming inputs.
              </p>
            </div>
            <div className="flex justify-center p-4 bg-zinc-50 border border-zinc-200 dark:bg-[#161822] dark:border-[#2d3142] rounded-lg overflow-hidden">
              <Aiinput03 />
            </div>
          </motion.div>

          {/* Card 4: Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white border border-zinc-200 hover:border-[#00d992] dark:bg-[#12141d] dark:border-[#2d3142] dark:hover:border-[#00d992]/70 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00d992] transition-colors">
                  Interactive Buttons
                </h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 text-emerald-700 border border-zinc-200 dark:bg-[#1d202e] dark:text-[#00d992] dark:border-[#2d3142]">
                  10 VARIANTS
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                Particle buttons, magnetic hover actions, and loading states.
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center p-4 bg-zinc-50 border border-zinc-200 dark:bg-[#161822] dark:border-[#2d3142] rounded-lg overflow-hidden">
              <Btn02 />
              <Btn08 />
            </div>
          </motion.div>

          {/* Card 5: Form Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border border-zinc-200 hover:border-[#00d992] dark:bg-[#12141d] dark:border-[#2d3142] dark:hover:border-[#00d992]/70 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00d992] transition-colors">
                  Form Inputs
                </h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 text-emerald-700 border border-zinc-200 dark:bg-[#1d202e] dark:text-[#00d992] dark:border-[#2d3142]">
                  10 VARIANTS
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                Search bars, OTP inputs, currency converters, and selectors.
              </p>
            </div>
            <div className="flex justify-center p-4 bg-zinc-50 border border-zinc-200 dark:bg-[#161822] dark:border-[#2d3142] rounded-lg overflow-hidden">
              <Input_04 />
            </div>
          </motion.div>

          {/* Card 6: Explore Full Registry CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500/10 via-purple-500/5 to-pink-500/10 border border-emerald-500/40 dark:bg-[#12141d] dark:border-[#00d992]/40 rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden shadow-sm dark:shadow-none"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-[#00d992] border border-emerald-500/30">
                FULL REGISTRY
              </span>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Explore 50+ Components &amp; Blocks
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Browse complete interactive documentation with copy-paste CLI commands and full code snippets.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/docs"
                className="w-full py-3 px-4 rounded-lg bg-[#00d992] text-[#0c0d12] font-semibold text-sm hover:bg-[#2fd6a1] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Open Documentation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── Ready to Build CTA Section ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-zinc-50 border border-zinc-200 dark:bg-[#12141d] dark:border-[#2d3142] rounded-2xl p-8 sm:p-14 text-center relative overflow-hidden transition-colors shadow-sm">
          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-[2.5px] text-emerald-600 dark:text-[#00d992]">
              [ GET STARTED TODAY ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white tracking-[-1px]">
              Ready to engineer your next interface?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base">
              Copy components directly, install via CLI, and customize with your own design system token mappings.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs"
                className="px-8 py-3.5 rounded-full bg-[#00d992] text-[#0c0d12] hover:bg-[#2fd6a1] font-semibold text-sm sm:text-base transition-colors shadow-lg"
              >
                Read Documentation
              </Link>
              <Link
                href="https://github.com/Callme-VR/PORTUI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-zinc-900 border border-zinc-300 hover:border-emerald-500 dark:bg-[#1d202e] dark:text-white dark:border-[#2d3142] dark:hover:border-[#00d992] font-semibold text-sm sm:text-base transition-colors"
              >
                Star on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
