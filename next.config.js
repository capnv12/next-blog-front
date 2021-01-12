const withPlugins = require('next-compose-plugins');
const withSourceMaps = require('@zeit/next-source-maps');

const nextConfig = {
	distDir: '_next',
	publicRuntimeConfig: {
		APP_NAME: 'NextJs Blog',
		API_DEVELOPMENT: 'http://localhost:1337',
		PRODUCTION: true,
		DOMAIN_DEVELOPMENT: 'http://localhost:3000',
		// FB_APP_ID: '2202276243402023',
		API_PRODUCTION: 'http://159.89.97.246:1337',
		DOMAIN_PRODUCTION: 'http:/159.89.97.246',
		GOOGLE_CLIENT_ID:
			'620288615602-imp9bnerbee5nf4ffsgo60pqkerk0ntg.apps.googleusercontent.com',
	},
	trailingSlash: true,
	poweredByHeader: false,
	images: {
		domains: ['res.cloudinary.com', 'localhost'],
	},
	webpack(config, options) {
		return config;
	},
};

module.exports = withPlugins([withSourceMaps], nextConfig);
