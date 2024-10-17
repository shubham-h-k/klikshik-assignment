/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.SUPABASE_HOSTNAME}`,
        port: "",
        pathname: "/storage/v1/object/public/images/all/**",
      },
    ],
  },
};

export default nextConfig;
