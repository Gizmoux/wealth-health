/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// Autres configurations...
	experimental: {
		// Ignorer les différences de classe pour 'vsc-initialized'
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
