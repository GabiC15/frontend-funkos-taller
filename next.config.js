/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "funko.com",
        port: "",
        pathname:
          "/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/**",
      },
    ],
  },
};

module.exports = nextConfig;
