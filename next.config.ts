import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Increase body size limit for API routes (10MB in this example)
    serverComponentsExternalPackages: ['cloudinary','tinify'],
  },
  api: {
    bodyParser: {
      sizeLimit: '20mb', // Set desired value here
    },
  },
  // For App Router (if you're using app directory)
  serverActions: {
    bodySizeLimit: '20mb',
  },
};



export default nextConfig;
