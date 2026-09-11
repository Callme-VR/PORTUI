"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Copy, Check, Terminal, Code2, Sparkles, Layers, CheckCircle2 } from "lucide-react";
import Feature from "./feature";
import Profile01 from "../portui/profile/profile-01";
import Card08 from "../portui/card/card-08";
import Aiinput03 from "../portui/ai-input/ai-input-03";
import Btn02 from "../portui/button/btn-02";
import Btn08 from "../portui/button/btn-08";
import Input_04 from "../portui/input/input-04";

export default function ThemeEditor() {
  const [copiedCommand, setCopiedCommand] = useState(false);
  const commandText = "npx portui@latest add ai-input";

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(commandText);
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  return (
    <div className="bg-white text-zinc-900 dark:bg-[#101010] dark:text-[#f2f2f2] w-full min-h-screen transition-colors duration-300">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">

            {/* Uppercase Tracked Monospace Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-200 dark:bg-[#1a1a1a] dark:border-[#3d3a39] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#00d992] animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[2.52px] text-emerald-600 dark:text-[#00d992]">
                [UI &amp; AGENT ENGINEERING PLATFORM]
              </span>
            </motion.div>

            {/* Display XL Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[-0.65px] text-zinc-900 dark:text-white"
            >
              Modern UI components <br className="hidden sm:inline" />
              engineered for <span className="text-emerald-600 dark:text-[#00d992]">developers</span>.
            </motion.h1>

            {/* Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-zinc-600 dark:text-[#bdbdbd] text-base sm:text-lg max-w-xl leading-relaxed"
            >
              A collection of production-ready, highly customizable UI components and interactive blocks built with Tailwind CSS, Framer Motion, and Next.js.
            </motion.p>

            {/* Key Highlights Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 text-xs font-mono text-zinc-700 dark:text-[#bdbdbd] pt-1"
            >
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 dark:bg-[#1a1a1a] dark:border-[#3d3a39]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#00d992]" />
                CLI Auto-Install
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 dark:bg-[#1a1a1a] dark:border-[#3d3a39]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#00d992]" />
                Tailwind v4 Ready
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 dark:bg-[#1a1a1a] dark:border-[#3d3a39]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#00d992]" />
                Copy &amp; Paste Code
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto"
            >
              <Link
                href="/docs"
                className="px-6 py-3 rounded-md bg-[#00d992] text-[#101010] hover:bg-[#2fd6a1] font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Browse Components</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs/components/background-paths"
                className="px-6 py-3 rounded-md bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-100 dark:bg-[#101010] dark:text-[#f2f2f2] dark:border-[#3d3a39] dark:hover:bg-[#1a1a1a] font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
              >
                <Code2 className="w-4 h-4 text-emerald-600 dark:text-[#00d992]" />
                <span>Explore Primitives</span>
              </Link>
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full pt-2"
            >
              <Feature />
            </motion.div>
          </div>

          {/* Hero Right Column: Code Editor Mockup */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-lg mx-auto"
            >
              {/* Code Mockup Card */}
              <div className="bg-[#101010] border border-zinc-300 dark:border-[#3d3a39] rounded-md overflow-hidden shadow-2xl">
                {/* Editor Header */}
                <div className="bg-[#1a1a1a] px-4 py-3 border-b border-[#3d3a39] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
                    <span className="ml-2 font-mono text-xs text-[#8b949e]">
                      portui.config.ts
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#00d992] bg-[#00d992]/10 px-2 py-0.5 rounded border border-[#00d992]/30">
                    CLI READY
                  </span>
                </div>

                {/* Editor Terminal Content */}
                <div className="p-5 font-mono text-xs sm:text-sm space-y-3 text-[#f5f6f7]">
                  <div className="text-[#8b949e]">
                    <span className="text-[#00d992]">$</span> # Install component via PORTUI registry
                  </div>
                  <div className="flex items-center justify-between bg-[#1a1a1a] p-3 rounded-md border border-[#3d3a39]">
                    <code className="text-[#00d992]">{commandText}</code>
                    <button
                      onClick={handleCopyCommand}
                      className="p-1.5 text-[#bdbdbd] hover:text-white hover:bg-[#3d3a39] rounded transition-colors"
                      title="Copy command"
                    >
                      {copiedCommand ? (
                        <Check className="w-4 h-4 text-[#00d992]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div className="pt-2 text-[#8b949e]">
                    <span className="text-[#00d992]">✓</span> Component downloaded into <span className="text-white">components/portui</span>
                  </div>

                  {/* Component Code Preview Snippet */}
                  <div className="bg-[#1a1a1a] p-3 rounded-md border border-[#3d3a39] text-[12px] space-y-1">
                    <div className="text-[#8b949e]">{"// Import anywhere in Next.js"}</div>
                    <div>
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-emerald-300">AiInput</span>{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-amber-300">&quot;@/components/portui/ai-input&quot;</span>;
                    </div>
                    <div className="pt-1 text-[#8b949e]">{"// Use directly"}</div>
                    <div>
                      <span className="text-blue-400">&lt;</span>
                      <span className="text-emerald-300">AiInput</span>{" "}
                      <span className="text-cyan-300">placeholder</span>
                      <span className="text-white">=</span>
                      <span className="text-amber-300">&quot;Ask AI...&quot;</span>{" "}
                      <span className="text-blue-400">/&gt;</span>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="bg-[#1a1a1a] px-4 py-2 border-t border-[#3d3a39] flex items-center justify-between text-[11px] font-mono text-[#8b949e]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00d992]" />
                    Status: Verified
                  </span>
                  <span>TypeScript 5.0+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Dashed Rhythm Cue Divider ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-dashed border-zinc-200 dark:border-[#3d3a39] w-full" />
      </div>

      {/* ─── Component Showcase Section ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-[2.52px] text-emerald-600 dark:text-[#00d992]">
            [EXPLORE THE COLLECTION]
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-zinc-900 dark:text-white tracking-[-0.9px]">
            Crafted UI primitives &amp; interactive blocks
          </h2>
          <p className="text-zinc-600 dark:text-[#bdbdbd] text-base">
            Cleanly structured components with zero external bloat. Preview live components below or explore the full interactive documentation.
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
            className="bg-white border border-zinc-200 hover:border-[#00d992] dark:bg-[#101010] dark:border-[#3d3a39] dark:hover:border-[#00d992]/60 rounded-md p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00d992] transition-colors">
                  Card Components
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 text-emerald-700 border border-zinc-200 dark:bg-[#1a1a1a] dark:text-[#00d992] dark:border-[#3d3a39]">
                  7 VARIANTS
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-[#8b949e] mb-6">
                Structured layout containers and interactive content blocks.
              </p>
            </div>
            <div className="flex justify-center p-4 bg-zinc-50 border border-zinc-200 dark:bg-[#1a1a1a] dark:border-[#3d3a39]/50 rounded overflow-hidden">
              <Card08 />
            </div>
          </motion.div>

          {/* Card 2: Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-zinc-200 hover:border-[#00d992] dark:bg-[#101010] dark:border-[#3d3a39] dark:hover:border-[#00d992]/60 rounded-md p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00d992] transition-colors">
                  Profile Cards
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 text-emerald-700 border border-zinc-200 dark:bg-[#1a1a1a] dark:text-[#00d992] dark:border-[#3d3a39]">
                  5 VARIANTS
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-[#8b949e] mb-6">
                User profile summaries, social badges, and avatar pickers.
              </p>
            </div>
            <div className="flex justify-center p-4 bg-zinc-50 border border-zinc-200 dark:bg-[#1a1a1a] dark:border-[#3d3a39]/50 rounded overflow-hidden">
              <Profile01 />
            </div>
          </motion.div>

          {/* Card 3: AI Chat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border border-zinc-200 hover:border-[#00d992] dark:bg-[#101010] dark:border-[#3d3a39] dark:hover:border-[#00d992]/60 rounded-md p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00d992] transition-colors">
                  AI Chat Inputs
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 text-emerald-700 border border-zinc-200 dark:bg-[#1a1a1a] dark:text-[#00d992] dark:border-[#3d3a39]">
                  16 VARIANTS
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-[#8b949e] mb-6">
                Prompt boxes, file attachment bars, and LLM streaming inputs.
              </p>
            </div>
            <div className="flex justify-center p-4 bg-zinc-50 border border-zinc-200 dark:bg-[#1a1a1a] dark:border-[#3d3a39]/50 rounded overflow-hidden">
              <Aiinput03 />
            </div>
          </motion.div>

          {/* Card 4: Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white border border-zinc-200 hover:border-[#00d992] dark:bg-[#101010] dark:border-[#3d3a39] dark:hover:border-[#00d992]/60 rounded-md p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00d992] transition-colors">
                  Interactive Buttons
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 text-emerald-700 border border-zinc-200 dark:bg-[#1a1a1a] dark:text-[#00d992] dark:border-[#3d3a39]">
                  10 VARIANTS
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-[#8b949e] mb-6">
                Particle buttons, magnetic hover actions, and loading states.
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center p-4 bg-zinc-50 border border-zinc-200 dark:bg-[#1a1a1a] dark:border-[#3d3a39]/50 rounded overflow-hidden">
              <Btn02 />
              <Btn08 />
            </div>
          </motion.div>

          {/* Card 5: Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border border-zinc-200 hover:border-[#00d992] dark:bg-[#101010] dark:border-[#3d3a39] dark:hover:border-[#00d992]/60 rounded-md p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00d992] transition-colors">
                  Form Inputs
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 text-emerald-700 border border-zinc-200 dark:bg-[#1a1a1a] dark:text-[#00d992] dark:border-[#3d3a39]">
                  10 VARIANTS
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-[#8b949e] mb-6">
                Search bars, OTP inputs, currency converters, and selectors.
              </p>
            </div>
            <div className="flex justify-center p-4 bg-zinc-50 border border-zinc-200 dark:bg-[#1a1a1a] dark:border-[#3d3a39]/50 rounded overflow-hidden">
              <Input_04 />
            </div>
          </motion.div>

          {/* Card 6: Explore Full Library CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-emerald-500/50 dark:bg-[#101010] dark:border-[#00d992]/40 rounded-md p-6 flex flex-col justify-between group relative overflow-hidden shadow-sm dark:shadow-none"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-[#00d992]/10 dark:text-[#00d992] dark:border-[#00d992]/30">
                FULL REGISTRY
              </span>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Explore 50+ Components &amp; Blocks
              </h3>
              <p className="text-xs text-zinc-600 dark:text-[#bdbdbd]">
                Browse the complete documentation with copy-paste code snippets and real-time previews.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/docs"
                className="w-full py-3 px-4 rounded bg-[#00d992] text-[#101010] font-semibold text-sm hover:bg-[#2fd6a1] transition-colors flex items-center justify-center gap-2"
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
        <div className="bg-zinc-50 border border-zinc-200 dark:bg-[#101010] dark:border-[#3d3a39] rounded-md p-8 sm:p-12 text-center relative overflow-hidden transition-colors">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-[2.52px] text-emerald-600 dark:text-[#00d992]">
              [GET STARTED TODAY]
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-zinc-900 dark:text-white">
              Ready to engineer your next interface?
            </h2>
            <p className="text-zinc-600 dark:text-[#bdbdbd] text-sm sm:text-base">
              Copy components directly, install via CLI, and customize with your own design system token mappings.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs"
                className="px-6 py-3 rounded-md bg-[#00d992] text-[#101010] hover:bg-[#2fd6a1] font-semibold text-sm transition-colors"
              >
                Read Documentation
              </Link>
              <Link
                href="https://github.com/Callme-VR/PORTUI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md bg-white text-zinc-900 border border-zinc-300 hover:border-emerald-500 dark:bg-[#1a1a1a] dark:text-white dark:border-[#3d3a39] dark:hover:border-[#00d992] font-semibold text-sm transition-colors"
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
