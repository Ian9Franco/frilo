/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "acdn-us.mitiendanube.com", pathname: "/**" },
    ],
  },
  async redirects() {
    return [{ source: "/account/login", destination: "/cuenta", permanent: false }];
  },
};

export default nextConfig;
