/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

// const withPlugins = require('next-compose-plugins');
// const withPWA = require('next-pwa');

const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
};

module.exports = withPWA({
  nextConfig,
});
// module.exports = withPlugins(
//   [
//     [
//       withPWA,
//       {
//         pwa: {
//           dest: 'public',
//         },
//       },
//     ],
//     // 추가 플러그인 작성
//   ],
//   nextConfig,
// );
