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
      {/* Mobile Announcement */}
      <div className="sm:hidden w-full p-3 bg-black text-white border-b border-zinc-800">
        <Link
          href="#"
          target="_blank"
          className="flex items-center justify-center gap-2"
        >
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">
              Explore new components
            </span>
          </span>

          <div className="group relative inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white text-black transition-all duration-300 hover:bg-zinc-100">
            <span className="font-semibold">PORTUI Pro</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 left-0 right-0 z-50 w-full bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <Flame className="h-6 w-6 text-black dark:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-black dark:bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
              <span className="font-bold text-xl text-black dark:text-white">
                PORTUI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/docs/components/background-paths"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 relative group"
              >
                Components
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-300" />
              </Link>

              <Link
                href="/pricing"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 relative group"
              >
                Pricing
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-300" />
              </Link>

              <Link
                href="#"
                target="_blank"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 relative group flex items-center gap-2"
                aria-label="Templates"
              >
                Templates
                <span className="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-2 py-0.5 rounded-full">
                  NEW
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-300" />
              </Link>
            </nav>

            {/* Right-side actions */}
            <div className="flex items-center gap-4">
              {/* Desktop actions */}
              <div className="hidden md:flex items-center gap-4">
                <HeaderPro />
                <ThemeToggle />
                
                <a
                  href="https://github.com/Callme-VR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300"
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

                <a
                  href="https://x.com/CodeAi_Vishal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                  aria-label="X (Twitter) profile"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.53 2.25H21.07L14.32 10.14L22.25 21.75H15.68L10.89 15.23L5.44 21.75H1.89L9.08 13.3L1.5 2.25H8.26L12.62 8.22L17.53 2.25ZM16.36 19.78H18.18L7.7 4.11H5.74L16.36 19.78Z" />
                  </svg>
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Navigation Links */}
              <nav className="space-y-4">
                <Link
                  href="/docs/components/background-paths"
                  className="block text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Components
                </Link>

                <Link
                  href="/pricing"
                  className="block text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>

                <Link
                  href="#"
                  target="_blank"
                  className="block text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 py-2 flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Templates
                  <span className="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                </Link>
              </nav>

              {/* Mobile Actions */}
              <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Theme</span>
                  <ThemeToggle />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Pro</span>
                  <HeaderPro />
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href="https://github.com/Callme-VR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300"
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

                  <a
                    href="https://x.com/CodeAi_Vishal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                    aria-label="X (Twitter) profile"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.53 2.25H21.07L14.32 10.14L22.25 21.75H15.68L10.89 15.23L5.44 21.75H1.89L9.08 13.3L1.5 2.25H8.26L12.62 8.22L17.53 2.25ZM16.36 19.78H18.18L7.7 4.11H5.74L16.36 19.78Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
