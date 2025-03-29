/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enables static export
  distDir: "out",    // Output directory (default for Next.js export)
  images: { unoptimized: true }, // Required if using Next.js Image component
  basePath: "/Portfolio", // Replace with your GitHub repo name
  assetPrefix: "/Portfolio/", // Replace with your GitHub repo name
};

module.exports = nextConfig;
