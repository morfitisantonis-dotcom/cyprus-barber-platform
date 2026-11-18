import type { NextConfig } from 'next';

// Static export is compatible with Hostinger public_html (Apache) hosting.
// Server-side features (auth, billing, database writes) require a future Node.js deployment.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
