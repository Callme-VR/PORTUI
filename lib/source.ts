import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import * as icons from "lucide-react";
import { createElement } from "react";
import type { LucideProps } from "lucide-react";

function isLucideIcon(
  component: unknown
): component is React.ForwardRefExoticComponent<LucideProps & React.RefAttributes<SVGSVGElement>> {
  return (
    typeof component === "function" &&
    // Lucide icons have a 'name' property that is a string and start with uppercase
    typeof (component as { name?: string }).name === "string" &&
    /^[A-Z]/.test((component as { name: string }).name)
  );
}

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) {
      return createElement(icons.Library);
    }
    const IconComponent = icons[icon as keyof typeof icons];
    if (isLucideIcon(IconComponent)) {
      return createElement(IconComponent);
    }
    return createElement(icons.Library);
  },
});
