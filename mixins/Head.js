/* [mixins] Head attributes */

export default {
	head() {
		return {
			title: 'Nuxt.js boilerplate | Redi agency',
			htmlAttrs: {
				lang: 'en',
			},
			bodyAttrs: {
				class: '__body',
			},
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
				{ rel: 'canonical', href: '' },
				{ rel: 'publisher', href: '' },
			],
			meta: [
				// Common setting
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1, minimal-ui',
				},
				
				// Theme color
				{ hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#ffffff' },
				{ hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '' },
				{ hid: 'theme-color', name: 'theme-color', content: '#ffffff' },

				// Common information for search robots
				{ hid: 'description', name: 'description', content: '' },
				{ hid: 'keywords', name: 'keywords', content: '' },
				{ hid: 'robots', name: 'robots', content: '' },
				{ hid: 'author', name: 'author', content: '' },
				{ hid: 'designer', name: 'designer', content: '' },
				
				// Facebook
				{ hid: 'facebook:locale', property: 'og:locale', content: '' },
				{ hid: 'facebook:title', property: 'og:title', content: '' },
				{ hid: 'facebook:type', property: 'og:type', content: 'website' },
				{ hid: 'facebook:url', property: 'og:url', content: '' },
				{ hid: 'facebook:site_name', property: 'og:site_name', content: '' },
				{ hid: 'facebook:description', property: 'og:description', content: '' },
				{ hid: 'facebook:image', property: 'og:image', content: '' },
				{ hid: 'facebook:image:secure_url', property: 'og:image:secure_url', content: '' },
				{
					hid: 'facebook:publisher',
					property: 'article:publisher',
					content: `https://www.facebook.com/..`,
				},

				// Twitter
				{ hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
				{ hid: 'twitter:site', name: 'twitter:site', content: '' },
				{ hid: 'twitter:creator', name: 'twitter:creator', content: '' },
				{ hid: 'twitter:title', name: 'twitter:title', content: '' },
				{ hid: 'twitter:description', name: 'twitter:description', content: '' },
				{ hid: 'twitter:image', name: 'twitter:image', content: '' },
				
				// Google Plus
				{ hid: 'google-plus:name', itemprop: 'name', content: '' },
				{ hid: 'google-plus:description', itemprop: 'description', content: '' },
				{ hid: 'google-plus:image', itemprop: 'image', content: '' },
			],
		};
	},
};
