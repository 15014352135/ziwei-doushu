/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lunar-javascript'],
  // 静态导出：可部署到 Cloudflare Pages 等纯静态托管
  output: 'export',
  // 静态导出不支持 Next 默认图片优化，关闭以兼容
  images: { unoptimized: true },
};

module.exports = nextConfig;
