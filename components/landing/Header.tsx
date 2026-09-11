"use client";

import { Flame, Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "next-view-transitions";
import ThemeToggle from "../ui/theme-toggle";
import { HeaderPro } from "./header-pro";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="w-full py-2.5 px-4 bg-zinc-100 text-zinc-700 border-b border-zinc-200 dark:bg-[#101010] dark:text-[#bdbdbd] dark:border-[#3d3a39] transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm font-mono">
          <Link
            href="/docs"
            className="flex items-center gap-2.5 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00d992] rounded-full animate-pulse" />
              <span className="text-emerald-600 dark:text-[#00d992] font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
                [RELEASE v0.1.0]
              </span>
            </span>
            <span className="hidden sm:inline text-zinc-600 dark:text-[#bdbdbd]">
              Explore modern developer-first UI components
            </span>
          </Link>

          <Link
            href="/docs"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md bg-white text-emerald-600 border border-zinc-300 hover:border-emerald-500 dark:bg-[#1a1a1a] dark:text-[#00d992] dark:border-[#3d3a39] dark:hover:border-[#00d992] transition-colors"
          >
            <span>Documentation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 left-0 right-0 z-50 w-full bg-white/90 dark:bg-[#101010]/90 backdrop-blur-md border-b border-zinc-200 dark:border-[#3d3a39] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-zinc-100 border border-zinc-300 dark:bg-[#1a1a1a] dark:border-[#3d3a39] group-hover:border-[#00d992] transition-colors">
                <Flame className="h-5 w-5 text-emerald-600 dark:text-[#00d992] transition-colors duration-300" />
              </div>
              <span className="font-semibold text-lg text-zinc-900 dark:text-white tracking-tight">
                PORT<span className="text-emerald-600 dark:text-[#00d992]">UI</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/docs/components/background-paths"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors duration-300 relative group"
              >
                Components
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00d992] group-hover:w-full transition-all duration-300" />
              </Link>

              <Link
                href="/docs"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors duration-300 relative group"
              >
                Docs
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00d992] group-hover:w-full transition-all duration-300" />
              </Link>

              <Link
                href="/pricing"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors duration-300 relative group"
              >
                Pricing
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00d992] group-hover:w-full transition-all duration-300" />
              </Link>
            </nav>

            {/* Right-side actions */}
            <div className="flex items-center gap-4">
              {/* Desktop actions */}
              <div className="hidden md:flex items-center gap-3">
                <ThemeToggle />

                <a
                  href="https://github.com/Callme-VR/PORTUI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors duration-300"
                  aria-label="GitHub profile"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2Z" />
                  </svg>
                </a>

                <Link
                  href="/docs"
                  className="px-4 py-2 rounded-md text-sm font-semibold bg-[#00d992] text-[#101010] hover:bg-[#2fd6a1] transition-colors shadow-sm"
                >
                  Browse Library
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-emerald-600 dark:text-[#00d992]" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-200 dark:bg-[#101010] dark:border-[#3d3a39]">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Navigation Links */}
              <nav className="space-y-4">
                <Link
                  href="/docs/components/background-paths"
                  className="block text-base font-medium text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Components
                </Link>

                <Link
                  href="/docs"
                  className="block text-base font-medium text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Documentation
                </Link>

                <Link
                  href="/pricing"
                  className="block text-base font-medium text-zinc-600 hover:text-zinc-900 dark:text-[#bdbdbd] dark:hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              </nav>

              {/* Mobile Actions */}
              <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-[#3d3a39]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-600 dark:text-[#bdbdbd]">Theme</span>
                  <ThemeToggle />
                </div>

                <Link
                  href="/docs"
                  className="block w-full text-center px-4 py-2.5 rounded-md text-sm font-semibold bg-[#00d992] text-[#101010] hover:bg-[#2fd6a1] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Browse Component Library
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
