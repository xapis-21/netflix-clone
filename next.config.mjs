/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.tmdb.org",
        port: "",
      },
    ],
  },
};

export default nextConfig;
