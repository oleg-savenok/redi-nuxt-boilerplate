<!-- [components|the] HeaderNavItem --- component -->

<template>
	<nuxt-link :to="link" class="header__nav__item"> {{ text }} </nuxt-link>
</template>

<script>
export default {
	name: 'HeaderNavItem',
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

<style src="./HeaderNavItem.scss" lang="scss" scoped></style>
