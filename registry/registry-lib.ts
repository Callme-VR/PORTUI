import type { Registry } from "@/registry/schema";

export const lib: Registry = [
    {
        name: "utils",
        type: "registry:lib",
        dependencies: ["clcx", "tailwind-merge"],
        files: [
            {
                path: "lib/utils.ts",
                type: "registry:lib",
            }
        ]
    }
];