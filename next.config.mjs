/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "http://localhost:8100/v1/api/:path*",
			},
		];
	},
};

export default nextConfig;
