"use client";

import Link from "next/link";
import { Flame, Github, Mail, Heart, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import XIcon from "../icons/x-icon";

interface FooterLink {
  name: string;
  href: string;
  isNew?: boolean;
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, FooterLink[]> = {
    product: [
      { name: "Components", href: "/docs/components/background-paths" },
      { name: "Blocks", href: "/docs/blocks/ai-card-generation" },
      { name: "Templates", href: "#", isNew: true },
      { name: "Pricing", href: "/pricing" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "GitHub", href: "https://github.com/Callme-VR" },
      { name: "Discord", href: "#" },
      { name: "Blog", href: "#" },
    ],
 
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Callme-VR",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/CodeAi_Vishal",
      icon: <XIcon className="w-5 h-5" />,
    },
    {
      name: "Email",
      href: "vr347147@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-zinc-800 border-t border-zinc-200 dark:border-zinc-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-16 pb-8"
        >
          {/* Top Section - Brand & Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="relative">
                  <Flame className="h-8 w-8 text-black dark:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 bg-black dark:bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                <span className="font-bold text-2xl text-black dark:text-white">
                  PORTUI
                </span>
              </Link>
              
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
                Build beautiful, modern interfaces with our comprehensive component library. 
                Designed for developers who love clean code and stunning visuals.
              </p>

              {/* Social Links */}
                             <div className="flex items-center gap-4">
                 {socialLinks.map((link) => (
                   <motion.a
                     key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="group p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-zinc-600 dark:text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {link.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  Stay Updated
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Get the latest updates on new components and features.
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                  />
                  <button className="absolute right-2 top-2 p-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>Join 2,000+ developers building amazing things and  ui Componenents</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-semibold text-black dark:text-white capitalize">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                      >
                        <span>{link.name}</span>
                        {link.isNew && (
                          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            NEW
                          </span>
                        )}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-zinc-200 dark:border-zinc-700"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <span>&copy; {currentYear} PORTUI. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>by the vishal Rajput</span>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="#"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
