/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dtpjdj7m4/**', // Your Cloud Name
      },
    ],
  },
};

export default nextConfig;