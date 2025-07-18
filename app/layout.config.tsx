import { HeaderPro } from "@/components/landing/header-pro";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Flame } from "lucide-react";

// 👇 Base options
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center">
        <Flame className="mr-2 h-5 w-5 text-green-600" />
        <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-white dark:text-xl">
          PORTUI
        </span>
      </div>
    ),
  },
  links: [
    {
      text: "pricing",
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
      <div className="flex items-center">
        <Flame className="mr-2 h-5 w-5 text-blue-600" />
        <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-white dark:text-xl">
          PORTUI
        </span>
      </div>
    ),
  },
};
