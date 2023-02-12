// @ts-check

/** @type {import("next").NextConfig} */

const config = {
  reactStrictMode: true,
  transpilePackages: ["ui", "nui"],
  experimental: {
    appDir: true,
  },
}

export default config
