import type { NextConfig } from "next";

// Backend Go. Di produksi isi lewat env API_URL.
const apiBase = process.env.API_URL ?? "http://localhost:8080";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "geolocation=(), camera=(), microphone=()" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Cookie sesi jadi same-origin, jadi tidak perlu CORS dan tidak ada
  // NEXT_PUBLIC_API_URL yang bocor ke bundle.
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${apiBase}/api/:path*` }];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
