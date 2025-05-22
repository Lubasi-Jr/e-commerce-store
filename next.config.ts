import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    //domains: ["qgivcbcvnsyivdbwpdrl.supabase.co"], // Add your Supabase domain here
    remotePatterns: [
      {
        protocol: "https",
        hostname: '"qgivcbcvnsyivdbwpdrl.supabase.co"',
      },
    ],
  },
};

export default nextConfig;
