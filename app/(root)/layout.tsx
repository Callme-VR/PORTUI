import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | PORT UI - Open Source Components Library",
    default: "PORT UI - Open Source Components Library",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="relative w-full pt-0 md:pt-0 bg-white text-zinc-900 dark:bg-[#101010] dark:text-[#f2f2f2] transition-colors duration-300">
        {children}
      </main>
      <Footer />
    </>
  );
}
