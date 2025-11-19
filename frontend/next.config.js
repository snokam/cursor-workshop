/** @type {import('next').NextConfig} */

const isPreview = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

const nextConfig = {
  output: "standalone",
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
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

module.exports = nextConfig;
