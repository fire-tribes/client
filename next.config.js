/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  eslint: {
    /** checking only includes folder names inside the dirs array
    TODO: consider merging into the src folder.
    */
    dirs: ['pages', 'core', 'components'],
  },
};

module.exports = nextConfig;
