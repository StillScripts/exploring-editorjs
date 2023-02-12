// @ts-check

/** @type {import("next").NextConfig} */

const config = {
  reactStrictMode: true,
  transpilePackages: ["ui", "mui", "nui"],
  experimental: {
    appDir: true,
  },
}

export default config
