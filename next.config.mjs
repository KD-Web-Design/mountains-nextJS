/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["upload.wikimedia.org", "avatar.vercel.sh"],
  },
};

export default nextConfig;
