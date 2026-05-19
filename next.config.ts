import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "www.figma.com",
  //       pathname: "/api/mcp/asset/**",
  //     },
  //   ],
  // },
  async redirects() {
    return [
      {
        source: "/RembukPeta",
        destination: "https://agroforestri.id/RembukPeta",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
