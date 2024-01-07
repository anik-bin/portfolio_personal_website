/** @type {import('next').NextConfig} */
module.exports = {
    async rewrites() {
        return [
          {
            source: "/blog",
            destination: "https://starter-kit-seven.vercel.app/blog",
          },
          {
            source: "/blog/:path*",
            destination: "https://starter-kit-seven.vercel.app/blog/:path*",
          },
        ];
      },
}