import { Flame, PartyPopper, ArrowUpRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import ThemeToggle from "../ui/theme-toggle";
import  {HeaderPro}  from "./header-pro";

export const Header = () => {
  return (
    <>
      {/* Mobile Announcement */}
      <div className="sm:hidden w-full p-2.5 bg-white dark:bg-black/5">
        <Link
          href="#"
          target="_blank"
          className="flex items-center justify-center gap-2"
        >
          <span className="flex items-center gap-2">
            <PartyPopper className="w-3.5 h-3.5" />
            <span className="text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text font-semibold">
              Explore new components
            </span>
          </span>

          <div className="group relative inline-flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 opacity-40 group-hover:opacity-80 blur-sm transition-opacity duration-500" />
            <div className="relative z-10 flex items-center gap-2">
              <span className="text-white dark:text-zinc-900">PORTUI Pro</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />
            </div>
          </div>
        </Link>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 left-0 right-0 z-50 w-full">
        <div className="bg-white dark:bg-black/5 w-full">
          <div className="flex items-center justify-center w-full flex-col">
            <div
              className={`
                flex items-center justify-between
                bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90
                dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
                shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
                backdrop-blur-md
                border-x border-b 
                border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]
                w-full
                rounded-b-[28px]
                px-4 py-2.5
                relative
                transition-all duration-300 ease-in-out
                max-w-full
              `}
            >
              <div className="relative z-10 flex items-center justify-between w-full gap-2">
                <div className="flex items-center gap-6">
                  {/* Logo */}
                  <Link
                    href="/"
                    className="flex items-center gap-2 group relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-yellow-400 after:mt-1"
                  >
                    <Flame className="h-6 w-6 text-green-500 dark:text-green-400" />
                    <span className="hidden sm:block font-semibold">
                      PORTUI
                    </span>
                  </Link>

                  <span className="text-zinc-300 dark:text-zinc-700">|</span>

                  {/* Desktop Navigation */}
                  <nav className="hidden sm:flex items-center gap-5">
                    <ViewTransitionsLink
                      href="/docs/components/background-paths"
                      className="text-sm text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-yellow-400 after:mt-1"
                    >
                      Components
                    </ViewTransitionsLink>

                    <ViewTransitionsLink
                      href="/pricing"
                      className="text-sm text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-yellow-400 after:mt-1"
                    >
                      Pricing
                    </ViewTransitionsLink>

                    <Link
                      href="#"
                      target="_blank"
                      className="text-sm text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-yellow-400 after:mt-1 flex items-center gap-2"
                      aria-label="Templates"
                    >
                      Templates
                      <span className="border border-green-500 text-green-600 dark:text-green-400 rounded px-1.5 py-0.5 text-xs font-semibold ml-1">
                        new
                      </span>
                    </Link>
                  </nav>
                </div>

                {/* Right-side icons */}
                <div className="hidden sm:flex items-center gap-6">
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                  <HeaderPro />
                  <ThemeToggle  />

                  <a
                    href="https://github.com/Callme-VR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 flex items-center group relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-yellow-400 after:mt-1"
                    aria-label="GitHub profile"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://x.com/CodeAi_Vishal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 flex items-center group relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-yellow-400 after:mt-1"
                    aria-label="X (Twitter) profile"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.53 2.25H21.07L14.32 10.14L22.25 21.75H15.68L10.89 15.23L5.44 21.75H1.89L9.08 13.3L1.5 2.25H8.26L12.62 8.22L17.53 2.25ZM16.36 19.78H18.18L7.7 4.11H5.74L16.36 19.78Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
