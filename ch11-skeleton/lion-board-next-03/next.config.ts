import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // port: '',
        // pathname: '/market/files/**',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // 서버 액션에 전달하는 바디 크기(기본은 1MB)
    },
  },
};

export default nextConfig;
