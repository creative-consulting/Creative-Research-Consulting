import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "http", // localhost usually uses http
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unpkg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.weserv.nl",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "creative-con-backend.onrender.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["yourdomain.com"],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Webpack customizations
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "three/examples/jsm": "three/examples/jsm",
    };

    return config;
  },

  // Compression and performance
  compress: true,
  poweredByHeader: false,

  // Experimental optimizations
  experimental: {
    // globalNotFound: true,
    optimizeCss: true, // keep true but make sure critters is installed
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Redirects
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en/home",
        permanent: true,
      },
    ];
  },

  // Headers (security + CORS)
  async headers() {
    return [
      {
        source: "/(.*)", // applies to all routes
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ];
  },
};

export default nextConfig;
