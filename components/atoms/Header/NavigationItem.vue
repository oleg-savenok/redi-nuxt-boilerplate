<!-- [components|the] HeaderNavItem --- component -->

<template>
	<nuxt-link :to="link" class="A-navigation__item"> {{ text }} </nuxt-link>
</template>

<script>
	export default {
		name: 'NavigationItem',
		props: {
			link: {
				type: String,
				default: '/',
			},
			text: {
				type: String,
				default: 'Please, set text for this link',
			},
		},
	};
</script>

<style src="./NavigationItem.scss" lang="scss" scoped></style>
