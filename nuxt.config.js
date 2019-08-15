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
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' } // Material icons
		],
	},

	// Customize the progress-bar color -------------------------------------------------------------------------------/
	loading: { color: '#fff' },

	// Global Styles --------------------------------------------------------------------------------------------------/
	css: [
		'~/assets/global/global.scss',
		'~/assets/theme/theme.scss',
	],
	
	// Styles resources for share variables, mixins, functions across all style files (no @import needed) -------------/
	styleResources: {
		scss: [
			'~/assets/variables/variables.scss',
			'~/assets/abstract/abstract.scss',
		],
	},

	// Plugins to load before mounting the App ------------------------------------------------------------------------/
	plugins: [],

	// Nuxt.js modules ------------------------------------------------------------------------------------------------/
	modules: [
		'@nuxtjs/style-resources',
	],

	// Build configuration --------------------------------------------------------------------------------------------/
	build: {
		// You can extend webpack config here
		extend(config, ctx) {},
	},
};
