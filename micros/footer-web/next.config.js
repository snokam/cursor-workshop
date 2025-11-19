/** @type {import('next').NextConfig} */

const isPreview = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  headers() {
    if (isPreview) {
      return [
        {
          source: "/:path*",
          headers: [
            {
              key: "X-Robots-Tag",
              value: "noindex, nofollow, nosnippet, noarchive",
            },
          ],
        },
      ];
    }
    return [];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "store-images.s-microsoft.com",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
  i18n: {
    locales: ["en", "no"],
    defaultLocale: "no",
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
