/** @type {import('next').NextConfig} */
const nextConfig = {
  // キャッシュがヒットしたかログで判断できる
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
