/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enables static export
  distDir: "out",    // Output directory (default for Next.js export)
  images: { unoptimized: true }, // Required if using Next.js Image component
  basePath: "/my-nextjs-app", // Replace with your GitHub repo name
  assetPrefix: "/my-nextjs-app/", // Replace with your GitHub repo name
};

module.exports = nextConfig;
