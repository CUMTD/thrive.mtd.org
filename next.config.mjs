/** @type {import('next').NextConfig} */

import redirects from './redirects.json' with { type: 'json' };

const nextConfig = {
	async redirects() {
		return redirects;
	}
};

export default nextConfig;
