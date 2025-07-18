import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ferf1mheo22r9ira.public.blob.vercel-storage.com"],
  },
};

export default withMDX(nextConfig);
