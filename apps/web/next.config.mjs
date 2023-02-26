// @ts-check

/** @type {import("next").NextConfig} */

const config = {
  reactStrictMode: true,
  transpilePackages: ["ui", "editor-plugin"],
  experimental: {
    appDir: true,
  },
}

export default config
