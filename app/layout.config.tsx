import { HeaderPro } from "@/components/landing/header-pro";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Flame } from "lucide-react";

// 👇 Base options
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <Flame className="h-5 w-5 text-emerald-600 dark:text-[#00d992]" />
        <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
          PORT<span className="text-emerald-600 dark:text-[#00d992]">UI</span>
        </span>
      </div>
    ),
  },
  links: [
    {
      text: "Pricing",
      url: "/pricing",
    },
    {
      type: "custom",
      children: <HeaderPro />,
    },
  ],
};

// 👇 Docs-specific options
export const docsBaseOptions: BaseLayoutProps = {
  ...baseOptions,
  nav: {
    ...baseOptions.nav,
    title: (
      <div className="flex items-center gap-2">
        <Flame className="h-5 w-5 text-emerald-600 dark:text-[#00d992]" />
        <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
          PORT<span className="text-emerald-600 dark:text-[#00d992]">UI</span>
        </span>
      </div>
    ),
  },
};
