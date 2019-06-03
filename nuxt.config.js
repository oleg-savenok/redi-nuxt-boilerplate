module.exports = {
	mode: 'universal',

	// Headers of the page --------------------------------------------------------------------------------------------/
	head: {
		title: 'Nuxt.js boilerplate | Redi agency',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1, minimal-ui',
			},
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
	},

	// Customize the progress-bar color -------------------------------------------------------------------------------/
	loading: { color: '#fff' },

	// Global CSS -----------------------------------------------------------------------------------------------------/
	css: [],

	// Plugins to load before mounting the App ------------------------------------------------------------------------/
	plugins: [],

	// Nuxt.js modules ------------------------------------------------------------------------------------------------/
	modules: [],

	// Build configuration --------------------------------------------------------------------------------------------/
	build: {
		// You can extend webpack config here
		extend(config, ctx) {},
	},
};
