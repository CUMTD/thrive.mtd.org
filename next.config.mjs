/** @type {import('next').NextConfig} */

import redirects from './redirects.json' assert { type: 'json' };

const nextConfig = {
	async redirects() {
		return redirects;
	}
};

export default nextConfig;
