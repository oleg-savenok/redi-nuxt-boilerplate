<!-- [The] HeaderNav --- component -->

<template>
	<nav class="header__nav">
		<HeaderNavItem link="/" text="home"/>
		<HeaderNavItem link="/about" text="about"/>
		<HeaderNavItem link="/contact" text="contact"/>
	</nav>
</template>

<script>
	import HeaderNavItem from '~/components/the/Header/HeaderNavItem';
	
	export default {
		name: 'HeaderNav',
		components: {
			HeaderNavItem
		}
	}
</script>

<style src="./HeaderNav.scss" lang="scss" scoped></style>
