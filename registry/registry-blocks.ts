import type { Registry } from "./schema";

export const block: Registry = [
    {
        name: "ai-card-generation",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: ["button", "input", "select", "textarea"],
        files: [
            {
                path: "components/portui/blocks/ai-card-generation/ai-card-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/ai-card-generation/header-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/ai-card-generation/form-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/ai-card-generation/settings-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/ai-card-generation/preview-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/ai-card-generation/error-generation.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "dashboard",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: [
            "button",
            "input",
            "select",
            "textarea",
            "dropdown-menu",
        ],
        files: [
            {
                path: "components/portui/blocks/dashboard/dashboard.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/dashboard/layout.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/dashboard/top-nav.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/dashboard/sidebar.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/dashboard/content.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/dashboard/profile-01.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/dashboard/list-03.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/dashboard/list-01.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/dashboard/list-02.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "minimal-shop",
        type: "registry:block",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button", "input", "select", "textarea"],
        files: [
            {
                path: "components/portui/blocks/minimal-shop/minimal-shop.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/minimal-shop/top-bar.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/minimal-shop/product-grid.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/minimal-shop/product-modal.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/minimal-shop/cart-drawer.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/minimal-shop/data.ts",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/minimal-shop/header.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "auth-basic",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: ["button", "input", "separator"],
        files: [
            {
                path: "components/portui/blocks/auth-basic/auth-basic.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/auth-basic/auth-form.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/auth-basic/social-login.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "ai-chat",
        type: "registry:block",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button", "input", "textarea"],
        files: [
            {
                path: "components/portui/blocks/ai-chat/ai-chat.tsx",
                type: "registry:component",
            },
            {
                path: "components/portui/blocks/ai-chat/multimodal-input.tsx",
                type: "registry:component",
            },
        ],
    },
];